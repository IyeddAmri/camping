import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const resHome = () => {
  const navigation = useNavigation();

  const handleExploreMore = () => {
    navigation.navigate('resources'); 
  };

  return (
    <View style={styles.container}>
      {/* Boxes */}
      <View style={styles.boxContainer}>
        {/* First box */}
        <TouchableOpacity style={styles.box} onPress={handleExploreMore}>
          <Text style={styles.boxText}>Camping Gear</Text>
        </TouchableOpacity>

        {/* Second box */}
        <TouchableOpacity style={styles.box} onPress={handleExploreMore}>
          <Text style={styles.boxText}>Tools</Text>
        </TouchableOpacity>
      </View>

      {/* Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsText}>
          Welcome to our camping resources! We offer a wide range of resources to help you prepare for your camping adventures. Whether you're looking for survival tips, gear recommendations, or camping hacks, we've got you covered.
        </Text>
      </View>

      {/* Explore button */}
      <TouchableOpacity style={styles.exploreButton} onPress={handleExploreMore}>
        <Text style={styles.exploreButtonText}>Explore More</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  detailsContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  detailsText: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
  },
  exploreButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  exploreButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default resHome;
