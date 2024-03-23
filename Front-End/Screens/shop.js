import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ShoppingCartScreen = ({ route, navigation }) => {
  
  const { shoppingCart } = route.params;

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.goBackButton} onPress={handleGoBack}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      
      {/* Render the shopping cart items */}
      {shoppingCart.map(item => (
        <View key={item.ProductID} style={styles.itemContainer}>
          <View style={styles.productBox}>
            <Text style={styles.name}>{item.Name}</Text>
            <Text style={styles.description}>{item.Description}</Text>
            <Text style={styles.price}>Price: ${item.Price}</Text>
            {/* Render other details of the item as needed */}
          </View>
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
    paddingTop: 50,
  },
  goBackButton: {
    position: 'absolute',
    top: 30,
    left: 10,
    zIndex: 1,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  itemContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  productBox: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    width: '90%',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
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
