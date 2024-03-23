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
        showsVerticalScrollIndicator={false} // Hide vertical scroll indicator
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