// ShoppingCartScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ShoppingCartScreen = ({ route }) => {
  // Access the shopping cart items passed as route parameters
  const { shoppingCart } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Shopping Cart</Text>
      {/* Render the shopping cart items */}
      {shoppingCart.map(item => (
        <View key={item.ProductID} style={styles.itemContainer}>
          <Text style={styles.name}>{item.Name}</Text>
          <Text style={styles.description}>{item.Description}</Text>
          <Text style={styles.price}>Price: ${item.Price}</Text>
          {/* Render other details of the item as needed */}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemContainer: {
    marginBottom: 20,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  },
});

export default ShoppingCartScreen;
