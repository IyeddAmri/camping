import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);

  const serverBaseUrl = 'http://192.168.1.40:5000';

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
        setSelectedImage(result.assets[0].uri);
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
      fetchImages();
    } catch (error) {
      console.error("Error uploading image:", error);
      console.error("Error details:", error.response);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Camping Photo Gallery</Text>
      <Button title="Pick an image from gallery" onPress={pickImage} />
      {selectedImage && <Image source={{ uri: selectedImage }} style={styles.selectedImage} />}
      <Button title="Upload" onPress={uploadImage} />

      <View style={styles.galleryContainer}>
        {images.map((imageItem, index) => (
          <Image key={index} source={{ uri: imageItem.image_url }} style={styles.uploadedImage} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  selectedImage: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginVertical: 20,
  },
  uploadedImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    margin: 5,
  },
  galleryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
export default PhotoGallery;
