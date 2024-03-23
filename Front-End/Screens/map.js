import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';


const Map = () => {
  // Define an array of places with their coordinates
  const places = [
    { latitude: 36.8065, longitude: 10.1815 },
    { latitude: 35.167488, longitude: 8.833450 },
    { latitude: 37.02996811994423, longitude: 8.941621175763933},
    { latitude: 37.06935225524098, longitude: 9.062927089801219 },
  { latitude: 36.7693055127173, longitude: 8.626680793051735 },
  { latitude: 36.67962817927956, longitude: 8.770052619665769 },
  { latitude: 36.57651978942043, longitude: 9.451555036967319 },
  { latitude: 36.35414514242433, longitude: 8.753294350956834 },
  { latitude: 36.6101572350866, longitude: 9.454348102526856 },
  { latitude: 36.21416954588586, longitude: 8.741979546001373 },
  { latitude: 35.87470020170477, longitude: 8.781779146885867 },
  { latitude: 35.866652428016735, longitude: 8.821504482030948 },
  { latitude: 36.223020367382176, longitude: 8.927421402696021 },
  { latitude: 37.44322138482136, longitude: 9.86297845431347 },
  { latitude: 36.09411218257856, longitude: 10.385979207515817 },
  { latitude: 36.94186021381232, longitude: 10.651911793889889 },
  { latitude: 34.422177410656715, longitude: 8.001450349694954 },
  { latitude: 34.72143994207795, longitude: 9.783198678401249 },
  { latitude: 34.53178863443166, longitude: 8.790383689271373 }
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
