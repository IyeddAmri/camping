import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-map-clustering';

// Generate random places in Tunisia for testing
const generateRandomPlaces = () => {
  const places = [
    { latitude: 36.8065, longitude: 10.1815 },
    { latitude: 36.8995, longitude: 10.1894 },
  ];
  return places.map((place, index) => (
    <Marker key={index} coordinate={place} title={`Place ${index + 1}`} />
  ));
};

const MapScreen = () => (
  <View style={styles.container}>
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 36.8065, 
        longitude: 10.1815, 
        latitudeDelta: 5, 
        longitudeDelta: 5, 
      }}
    >
      {generateRandomPlaces()}
    </MapView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapScreen;
