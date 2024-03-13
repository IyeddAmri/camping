import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const WishlistScreen = ({ route }) => {
  const wishlist = route.params?.wishlist || [];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wishlist</Text>
      <FlatList
  data={wishlist}
  keyExtractor={(item) => item.Name}
  renderItem={({ item }) => (
    <View style={styles.wishlistItem}>
      <Text>{item.LocationName}</Text>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <Text>{item.Description}</Text>
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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  wishlistItem: {
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200, // Adjust the height as needed
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default WishlistScreen;
