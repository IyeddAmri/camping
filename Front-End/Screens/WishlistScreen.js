import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const WishlistScreen = ({ route }) => {
  const wishlist = route.params?.wishlist || [];

  const renderItem = ({ item }) => (
    <View style={styles.wishlistItem}>
      <Text style={styles.itemText}>{item.LocationName}</Text>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <Text style={styles.itemText}>{item.Description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wishlist</Text>
      <FlatList
        data={wishlist}
        keyExtractor={(item) => item.Name}
        renderItem={renderItem}
        contentContainerStyle={styles.flatListContent}
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
  flatListContent: {
    paddingBottom: 20,
  },
  wishlistItem: {
    marginBottom: 20,
  },
  itemText: {
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200, // Adjust the height as needed
    borderRadius: 10,
  },
});

export default WishlistScreen;
