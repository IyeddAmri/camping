import { View, Text, StyleSheet, TouchableOpacity, Alert, Image, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { firebase } from '../config';
import * as FileSystem from 'expo-file-system';
import { Ionicons } from '@expo/vector-icons';

const PhotoGallery = () => {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.assets[0].uri);
    }
  };

  const uploadMedia = async () => {
    setUploading(true);
    try {
      if (!image) {
        Alert.alert('Error', 'Please select an image before uploading.');
        setUploading(false);
        return;
      }

      const fileInfo = await FileSystem.getInfoAsync(image);
      if (!fileInfo.exists) {
        Alert.alert('Error', 'Selected image file does not exist.');
        setUploading(false);
        return;
      }

      const filename = image.substring(image.lastIndexOf('/') + 1);
      const response = await fetch(image);
      const blob = await response.blob();

      const ref = firebase.storage().ref().child(filename);
      await ref.put(blob);

      setUploading(false);
      Alert.alert('Success', 'Upload Successful');
      setImage(null);
    } catch (error) {
      console.error(error);
      setUploading(false);
      Alert.alert('Error', 'Failed to upload image. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.imageContainer}>
        {image && (
          <Image source={{ uri: image }} style={styles.image} />
        )}
      </SafeAreaView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={pickImage}>
          <Ionicons name="image" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={uploadMedia}>
          <Ionicons name="cloud-upload" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PhotoGallery;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 20,
    position: 'absolute',
    bottom: 0,
  },
  button: {
    borderRadius: 10,
    width: 60,
    height: 60,
    backgroundColor: '#2e8b57',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
});
