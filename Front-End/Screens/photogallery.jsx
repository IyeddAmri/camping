// import React, { useState, useEffect } from 'react';
// import { View, Text, Image, Button, StyleSheet } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import axios from 'axios';
// const proverbs = [
//   "A picture is worth a thousand words.",
//   "Capture the moment and relive the memories.",
//   "In every photograph, there is a story to be told.",
//   "Sharing photos is sharing moments of joy.",
//   "A photo is the pause button of life's precious moments.",
// ];
// function getRandomProverb() {
//   const randomIndex = Math.floor(Math.random() * proverbs.length);
//   return proverbs[randomIndex];
// }


// function photogallery() {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [images, setImages] = useState([]);

//   const serverBaseUrl = 'http://localhost:5000';

//   useEffect(() => {
//     fetchImages();
//   }, []);

//   const fetchImages = async () => {
//     try {
//       const response = await axios.get(`${serverBaseUrl}/photo/get`);
//       setImages(response.data);
//       console.log("Fetched images:", response.data);
//     } catch (error) {
//       console.error("Error fetching images:", error);
//     }
//   };

//   const pickImage = async () => {
//     try {
//       const result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.All,
//         allowsEditing: true,
//         aspect: [4, 3],
//         quality: 1,
//       });
  
//       if (!result.cancelled) {
//         setSelectedImage(result.assets[0].uri); // Use result.assets[0].uri instead of result.uri
//       }
//     } catch (error) {
//       console.error("Error picking image:", error);
//     }
//   };

//   const uploadImage = async () => {
//     if (!selectedImage) {
//       console.log("No image selected");
//       return;
//     }
  
//     try {
//       const response = await axios.post(`${serverBaseUrl}/photo/add`, { image_url: selectedImage });
//       console.log("Upload response:", response.data);
//       fetchImages(); // Fetch updated list of images after uploading
//     } catch (error) {
//       console.error("Error uploading image:", error);
//       console.error("Error details:", error.response); // Log the full error response
//     }
//   };
//   return (
//     <View style={styles.container}>
//       <Button title="Pick an image from gallery" onPress={pickImage} style={styles.button} />
//       {selectedImage && <Image source={{ uri: selectedImage }} style={styles.selectedImage} />}
//       <Button title="Upload" onPress={uploadImage} />


//       <Text style={styles.proverbText}>{getRandomProverb()}</Text>

//       <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
//         {images.map((imageItem, index) => (
//           <Image key={index} source={{ uri: imageItem.image_url }} style={styles.uploadedImage} />
//         ))}
//       </View>
//     </View>
//   );
// }
//   // return (
//   //   <View>
//   //     <Button title="Pick an image from gallery" onPress={pickImage} />
//   //     {selectedImage && <Image source={{ uri: selectedImage }} style={{ width: 200, height: 200 }} />}

//   //     <View>
//   //       {images.map((imageItem, index) => (
//   //         <Image key={index} source={{ uri: imageItem.image_url }} style={{ width: 100, height: 100 }} />
//   //       ))}
//   //     </View>
//   //   </View>
//   // );
import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

function photogallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);

  const serverBaseUrl = 'http://localhost:5000';

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get(`${serverBaseUrl}/photo/get`);
      setImages(response.data);
      console.log("Fetched images:", response.data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      if (!result.cancelled) {
        setSelectedImage(result.assets[0].uri); // Use result.assets[0].uri instead of result.uri
      }
    } catch (error) {
      console.error("Error picking image:", error);
    }
  };

  const uploadImage = async () => {
    if (!selectedImage) {
      console.log("No image selected");
      return;
    }
  
    try {
      const response = await axios.post(`${serverBaseUrl}/photo/add`, { image_url: selectedImage });
      console.log("Upload response:", response.data);
      fetchImages(); // Fetch updated list of images after uploading
    } catch (error) {
      console.error("Error uploading image:", error);
      console.error("Error details:", error.response); // Log the full error response
    }
  };

  return (
    <View>
      <Button title="Pick an image from gallery" onPress={pickImage} />
      {selectedImage && <Image source={{ uri: selectedImage }} style={{ width: 200, height: 200 }} />}
      {/* <Button title="Upload" onPress={uploadImage} /> */}

      <View>
        {images.map((imageItem, index) => (
          <Image key={index} source={{ uri: imageItem.image_url }} style={{ width: 100, height: 100 }} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 15,
    margin: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  selectedImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginTop: 20,
  },
  uploadedImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
    margin: 5,
  },
  proverbText: {
    fontSize: 18,
    fontStyle: 'italic',
    marginVertical: 10,
    textAlign: 'center',
    color: '#777',
  },
});

export default photogallery;