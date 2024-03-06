import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const WishlistItem = ({ item }) => (
  <View style={styles.campsiteContainer}>
    <Image source={{ uri: item.ImageURL }} style={styles.image} />
    <Text style={styles.price}>Price: ${item.Price}</Text>
    <Text style={styles.rating}>Rating: {item.Rating}</Text>
  </View>
);

const Wishlist = ({ wishlist }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wishlist</Text>
      <FlatList
        data={wishlist}
        keyExtractor={(item) => item.Name}
        renderItem={({ item }) => <WishlistItem item={item} />}
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
  price: {
    fontSize: 16,
    marginBottom: 5,
  },
  rating: {
    fontSize: 16,
  },
});

export default Wishlist;
