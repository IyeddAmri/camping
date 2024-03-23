import React, { useRef, useState } from "react";
import { View, Text, Image, Button } from "react-native";
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
    const predictions = awai
