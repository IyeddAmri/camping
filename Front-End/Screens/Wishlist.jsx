// Wishlist.js
import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const Wishlist = ({ wishlist }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wishlist</Text>
      <FlatList
        data={wishlist}
        keyExtractor={(item) => item.Name}
        renderItem={({ item }) => (
          <View style={styles.campsiteContainer}>
            <Image source={{ uri: item.ImageURL }} style={styles.image} />
            <Text style={styles.location}>{item.LocationName}</Text>
            {/* Add other campsite details as needed */}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  campsiteContainer: {
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  location: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default Wishlist;
