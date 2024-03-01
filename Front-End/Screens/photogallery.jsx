// import React, { useState, useEffect } from 'react';
// import { View, Text, Image, Button } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import axios from 'axios';

// function PhotoGallery() {
//   const [image, setImage] = useState(null);
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     fetchImages();
//   }, []);

//   const fetchImages = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/photo/get');
//       setImages(response.data);
//     } catch (error) {
//       console.error("Error fetching images:", error);
//     }
//   };

//   const pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.cancelled) {
//       setImage(result.uri);
//     }
//   };

//   const uploadImage = async () => {
//     if (!image) {
//       console.log("No image selected");
//       return;
//     }

//     // Use 'image' directly or upload it to a server/cloudinary as needed

//     try {
//       // Save the image URL to the database
//       await axios.post('http://localhost:5000/photo/add', { image_url: image });
//       fetchImages(); // Fetch updated list of images after uploading
//     } catch (error) {
//       console.error("Error uploading image:", error);
//     }
//   };

//   return (
//     <View>
//       {/* Your existing content goes here */}
//       <Button title="Pick an image from gallery" onPress={pickImage} />
//       {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
//       <Button title="Upload" onPress={uploadImage} />

//       <View>
//         {images.map((image, index) => (
//           <Image key={index} source={{ uri: image.image_url }} style={{ width: 100, height: 100 }} />
//         ))}
//       </View>
//     </View>
//   );
// }

// export default PhotoGallery;
import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button, FlatList } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import { Constants } from 'react-native-unimodules';
import { Cloudinary } from 'cloudinary-react-native';

function PhotoGallery() {
  const [image, setImage] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const initCloudinary = async () => {
      try {
        await Cloudinary.init({
          CLOUDINARY_NAME: Constants.manifest.extra.CLOUDINARY_NAME,
          CLOUDINARY_API_KEY: Constants.manifest.extra.CLOUDINARY_API_KEY,
          CLOUDINARY_API_SECRET: Constants.manifest.extra.CLOUDINARY_API_SECRET,
        });

        fetchImages();
      } catch (error) {
        console.error("Error initializing Cloudinary:", error);
      }
    };

    initCloudinary();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get('http://localhost:5000/photo/get');
      setImages(response.data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        setImage(result.uri);
      }
    } catch (error) {
      console.error("Error picking image:", error);
    }
  };

  const uploadImage = async () => {
    if (!image) {
      console.log("No image selected");
      return;
    }

    try {
      const formData = new FormData();
      formData.append('file', {
        uri: image,
        type: 'image/jpeg',
        name: 'upload.jpg',
      });

      // Make sure to replace 'your_unsigned_preset' with your Cloudinary unsigned preset
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${Constants.manifest.extra.CLOUDINARY_NAME}/image/upload?upload_preset=camping`,
        {
          method: 'POST',
          body: formData,
        }
      );

      const data = await response.json();
      
      // Save the image URL to the database
      await axios.post('http://localhost:5000/photo/add', { image_url: data.secure_url });
      setImage(null); // Clear the selected image after upload
      fetchImages(); // Fetch updated list of images after uploading
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from gallery" onPress={pickImage} />
      
      {image && (
        <View style={{ marginVertical: 10 }}>
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        </View>
      )}

      <Button title="Upload" onPress={uploadImage} />

      <FlatList
        data={images}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 10 }}>
            <Image source={{ uri: item.image_url }} style={{ width: 100, height: 100 }} />
          </View>
        )}
      />
    </View>
  );
}

export default PhotoGallery;
