import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-map-clustering';

const CampingMap = () => {
  // Generate random places in Tunisia for testing
  const generateRandomPlaces = () => {
    // This is just a sample of random coordinates in Tunisia
    const places = [
      { latitude: 36.8065, longitude: 10.1815 },
      { latitude: 36.8995, longitude: 10.1894 },
      { latitude: 36.8188, longitude: 10.1653 },
    
    ];
    return places.map((place, index) => (
      <Marker key={index} coordinate={place} title={`Place ${index + 1}`} />
    ));
  };

  return (
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default CampingMap;
