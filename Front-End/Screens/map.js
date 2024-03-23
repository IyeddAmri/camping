import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';


const Map = () => {
  // Define an array of places with their coordinates
  const places = [
    { latitude: 36.8065, longitude: 10.1815 },
    
    { latitude: 36.169750, longitude: 8.704470},
  ];

  // Function to generate markers from provided places
  const generateMarkers = () => {
    if (!places || places.length === 0) return null;
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
        {generateMarkers()}
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

export default Map;
