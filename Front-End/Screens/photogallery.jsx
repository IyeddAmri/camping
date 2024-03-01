import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

function PhotoGallery() {
  const [image, setImage] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const serverBaseUrl = 'http://localhost:5000';

  const fetchImages = async () => {
    try {
      const response = await axios.get(`${serverBaseUrl}/photo/get`);
      setImages(response.data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      console.log("first")
    }
  };

  const uploadImage = async () => {
    if (!image) {
      console.log("No image selected");
      return;
    }

    try {
      // Save the image URL to the database
      await axios.post(`${serverBaseUrl}/photo/add`, { image_url: image });
      fetchImages(); // Fetch updated list of images after uploading
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <View>
      {/* Your existing content goes here */}
      <Button title="Pick an image from gallery" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      <Button title="Upload" onPress={uploadImage} />

      <View>
        {images.map((image, index) => (
          <Image key={index} source={{ uri: image.image_url }} style={{ width: 100, height: 100 }} />
        ))}
      </View>
    </View>
  );
}

export default PhotoGallery;
