import React, { useRef, useState } from "react";
import { View, Text, Image, Button ,picker} from "react-native";
import * as tf from "@tensorflow/tfjs";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import * as FileSystem from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';

export function ObjectDetector() {
  const [imageUri, setImageUri] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const detectObjectsOnImage = async (imageUri) => {
    const imageTensor = await loadImageTensor(imageUri);
    const model = await cocoSsd.load();
    const predictions = await model.detect(imageTensor);
    setPredictions(predictions);
    console.log("Predictions: ", predictions);
    setLoading(false);
  };

  const loadImageTensor = async (imageUri) => {
    const imgB64 = await FileSystem.readAsStringAsync(imageUri, {
      encoding: FileSystem.EncodingType.Base64,
    });
    const imgBuffer = tf.util.encodeString(imgB64, 'base64').buffer;
    const raw = new Uint8Array(imgBuffer);
    const imageTensor = tf.node.decodeImage(new Uint8Array(raw), 3);
    return imageTensor;
  };

  const onSelectImage = async () => {
    setLoading(true);
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImageUri(result.uri);
      detectObjectsOnImage(result.uri);
    } else {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {imageUri && (
        <Image source={{ uri: imageUri }} style={{ width: 300, height: 300 }} />
      )}
      {isLoading ? (
        <Text>Recognizing...</Text>
      ) : (
        <Button title="Select Image" onPress={onSelectImage} />
      )}
      {predictions.map((prediction, idx) => (
        <View key={idx}>
          <Text>{`${prediction.class} ${Math.round(prediction.score * 100)}%`}</Text>
          <View
            style={{
              borderWidth: 2,
              borderColor: 'green',
              position: 'absolute',
              left: prediction.bbox[0],
              top: prediction.bbox[1],
              width: prediction.bbox[2] - prediction.bbox[0],
              height: prediction.bbox[3] - prediction.bbox[1],
            }}
          />
        </View>
      ))}
    </View>
  );
}
