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
    }
  };

  return (
    <View>
      <Button title="Pick an image from gallery" onPress={pickImage} />
      {selectedImage && <Image source={{ uri: selectedImage }} style={{ width: 200, height: 200 }} />}
      <Button title="Upload" onPress={uploadImage} />

      <View>
        {images.map((imageItem, index) => (
          <Image key={index} source={{ uri: imageItem.image_url }} style={{ width: 100, height: 100 }} />
        ))}
      </View>
    </View>
  );
}

export default photogallery;