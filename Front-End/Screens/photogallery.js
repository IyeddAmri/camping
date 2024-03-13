import React, { useState } from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import ProgressBar from "../components/ProgressBar";
import { Uploading } from "../components/Uploading";
import { ref,uploadBytesResumable,getDownloadURL} from "firebase/storage"
import { addDoc,collection,onSnapshot} from "firebase/firestore"

export default function PhotoGallery() {
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);

  async function pickImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.assets[0].uri);
      // To upload the image, you can use your upload logic here
      // For now, I'm simulating an upload with a delay
      simulateUpload();
    }
  }

  // Simulate image upload with progress
  const simulateUpload = () => {
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress((prevProgress) => {
        const newProgress = prevProgress + 10;
        if (newProgress === 100) {
          clearInterval(interval);
        }
        return newProgress;
      });
    }, 500);
  };
  async function uploadImage(uri, fileType) {
    const response = await fetch(uri);
    const blob = await response.blob();
    const storageRef = ref(storage, "Stuff/" + new Date().getTime());
   
    const uploadTask = uploadBytesResumable(storageRef, blob);
   
    // listen for events
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        setProgress(progress.toFixed());
      },
      (error) => {
        // handle error
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          console.log("File available at", downloadURL);
          // save record
          await saveRecord(fileType, downloadURL, new Date().toISOString());
          setImage("");
          setVideo("");
        });
      },
    );
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    {image &&<Uploading/>}
    <ProgressBar progress={60} />
    <TouchableOpacity
    onPress={pickImage}
    style={{
    position: "absolute",
    bottom: 90,
    right: 30,
    width: 44,
    height: 44,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25.
    }}
    </View>
  );
}
