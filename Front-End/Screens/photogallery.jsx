import React, { useState, useEffect } from "react";
import { ActivityIndicator, TouchableOpacity, Image, View, StyleSheet, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";

const cloudName = "dhy6nhgot"; // Replace with your Cloudinary cloud name
const uploadPreset = "camping";

const Photogallery = ({ changeImage }) => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (selectedImg) {
      setUploading(false);
    }
  }, [selectedImg]);

  const openImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [9, 16],
      quality: 1,
    });

    if (!result.cancelled) {
      setUploading(true);
      uploadToCloudinary(result.uri);
    }
  };

  const handleCameraLaunch = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setUploading(true);
      uploadToCloudinary(result.uri);
    }
  };

  const uploadToCloudinary = async (uri) => {
    try {
      const data = new FormData();
      data.append("file", { uri, type: "image/jpeg", name: "image.jpg" });
      data.append("upload_preset", uploadPreset);

      const response = await axios.post(
        `http://localhost:5000/photo/add`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        const cloudinaryUrl = response.data.secure_url;
        changeImage(cloudinaryUrl);
        setSelectedImg(cloudinaryUrl);
        console.log("Selected image (upload)", cloudinaryUrl);
        Alert.alert('Image Uploaded', 'Your image has been uploaded successfully.');
      } else {
        console.error("Error uploading image to Cloudinary. Response:", response);
      }
    } catch (error) {
      console.error("Error uploading image to Cloudinary:", error);
      console.error("Error details:", error.response.data);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingVertical: 30 }}>
      {uploading && <ActivityIndicator size="large" color="#4CAF50" />}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.customButtonFolder} onPress={openImagePicker}>
          <Image source={require('../assets/feu.jpg')} style={styles.buttonImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.customButtonCamera} onPress={handleCameraLaunch}>
          <Image source={require('../assets/feu.jpg')} style={styles.buttonImage} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 5,
    alignItems: "center"
  },
  customButtonCamera: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0000', // Button background color
    borderRadius: 10,
    width: 40, // Adjust button width as needed
    height: 40,
    paddingHorizontal: 10,
    marginLeft: 20
  },
  customButtonFolder: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0000', // Button background color
    borderRadius: 10,
    width: 40, // Adjust button width as needed
    height: 40,
    paddingHorizontal: 10
  },
  buttonImage: {
    width: 25, // Adjust image width as needed
    height: 25, // Adjust image height as needed
    resizeMode: 'contain',
  },
});

export default Photogallery;
