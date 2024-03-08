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
  console.log('Wishlist Data:', wishlist);

  const keyExtractor = (item) => {
    // Check if 'item' and 'item.Name' are defined before accessing the 'Name' property
    return item && item.Name ? item.Name.toString() : '';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wishlist</Text>
      <FlatList
        data={wishlist}
        keyExtractor={keyExtractor}
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
  price: {
    fontSize: 16,
    marginBottom: 5,
  },
  rating: {
    fontSize: 16,
  },
});

export default Wishlist;
