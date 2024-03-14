import React from 'react';
import { Image, Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';
import ProgressBar from './ProgressBar';

export function Uploading({ image, video, progress }) {
  return (
    <View style={styles.container}>
      <View style={styles.blurBox}>
        {image && (
          <Image
            source={{ uri: image }}
            style={{
              width: 100,
              height: 100,
              resizeMode: 'contain',
              borderRadius: 6,
            }}
          />
        )}
        {video && (
          <Video
            source={{
              uri: video,
            }}
            videoStyle={{}}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="contain"
            style={{ width: 200, height: 200 }}
          />
        )}
        <Text style={{ fontSize: 12 }}>Uploading...</Text>
        <ProgressBar progress={progress} />
        <View
          style={{
            height: 1,
            borderWidth: StyleSheet.hairlineWidth,
            width: '100%',
            borderColor: '#00000020',
          }}
        />
        <TouchableOpacity>
          <Text style={{ fontWeight: '500', color: '#3478F6', fontSize: 17 }}>
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  blurBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Adjust the alpha value for opacity
    borderRadius: 10, // Adjust the border radius for a rounded box
    padding: 20,
    alignItems: 'center',
  },
});
