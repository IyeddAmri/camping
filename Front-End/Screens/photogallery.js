import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Image, FlatList, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import { storage, firestore } from '../config/firebase';
import ProgressBar from '../components/ProgressBar';
import { Uploading } from '../components/Uploading';
import { Video } from 'expo-av';

const PhotoGallery = () => {
  const [media, setMedia] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(firestore, 'files'), (snapshot) => {
      const updatedFiles = snapshot.docs && snapshot.docs.map((doc) => doc.data());
      if (updatedFiles) {
        setFiles(updatedFiles);
      }
    });
  
    return () => unsubscribe();
  }, []);

  const pickMedia = async (mediaType) => {
    let result;
  
    if (mediaType === 'image') {
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (permissionResult.granted === false) {
        Alert.alert(
          'Permission Denied',
          'Please enable camera roll permissions in your device settings.'
        );
        return;
      }
  
      result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [3, 4],
        quality: 1,
      });
    } else if (mediaType === 'video') {
      // Add video picking logic here
    }
  
    // Check if result is defined and not cancelled
    if (result && !result.cancelled) {
      setMedia({
        type: mediaType,
        uri: mediaType === 'image' ? result.uri : result.uri,
      });
      simulateUpload();
    }
  };

  const simulateUpload = async () => {
    setUploadProgress(0);

    // Simulate the upload only if there is media
    if (media) {
      const interval = setInterval(() => {
        setUploadProgress((prevProgress) => {
          const newProgress = prevProgress + 10;
          if (newProgress === 100) {
            clearInterval(interval);
            uploadMedia();
          }
          return newProgress;
        });
      }, 500);
    }
  };

  const uploadMedia = async () => {
    if (media) {
      const { uri, type } = media;
      const response = await fetch(uri);
      const blob = await response.blob();
      const storageRef = ref(storage, `Stuff/${new Date().getTime()}.${type.split('/')[1]}`);

      const uploadTask = uploadBytesResumable(storageRef, blob);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          setUploadProgress(progress.toFixed());
        },
        (error) => {
          console.error('Upload error:', error);
        },
        async () => {
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            console.log('File available at', downloadURL);
            await saveRecord(type, downloadURL, new Date().toISOString());
            setMedia(null);
            // Refresh the list after successful upload
            const updatedFiles = await onSnapshot(collection(firestore, 'files'));
            setFiles(updatedFiles.docs.map((doc) => doc.data()));
          } catch (error) {
            console.error('Error getting download URL:', error);
          }
        }
      );
    }
  };

  const saveRecord = async (fileType, url, createdAt) => {
    try {
      await addDoc(collection(firestore, 'files'), {
        fileType,
        url,
        createdAt,
      });
      console.log('Document saved correctly');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {media && <Uploading image={media.uri} progress={uploadProgress} />}
      <FlatList
        data={files}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => {
          if (item.fileType === 'image') {
            return <Image source={{ uri: item.url }} style={{ width: '34%', height: 100 }} />;
          } else {
            return (
              <Video
                source={{ uri: item.url }}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay
                style={{ width: '34%', height: 100 }}
                useNativeControls
              />
            );
          }
        }}
        numColumns={3}
        contentContainerStyle={{ gap: 2 }}
        columnWrapperStyle={{ gap: 2 }}
      />
      <TouchableOpacity
        onPress={() => pickMedia('image')}
        style={{
          position: 'absolute',
          bottom: 90,
          left: 30,
          width: 44,
          height: 44,
          backgroundColor: 'black',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 25,
        }}
      >
        <Image
          source={require('../assets/image.png')}
          style={{ width: 24, height: 24, tintColor: 'white' }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => pickMedia('video')}
        style={{
          position: 'absolute',
          bottom: 90,
          right: 30,
          width: 44,
          height: 44,
          backgroundColor: 'black',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 25,
        }}
      >
        <Image
          source={require('../assets/video.png')}
          style={{ width: 24, height: 24, tintColor: 'white' }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={uploadMedia}
        style={{
          position: 'absolute',
          bottom: 30,
          right: 30,
          backgroundColor: 'blue',
          padding: 10,
          borderRadius: 10,
        }}
      ></TouchableOpacity>
    </View>
  );
};

export default PhotoGallery;
