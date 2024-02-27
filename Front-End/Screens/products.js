import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Navbar from './Navbar';

const ProductListScreen = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categories = [
    "Shelter, Rest, & Dining",
    "Apparel & Accessories",
    "Safety & Health",
    "Outdoor Activities",
    "Navigation & Utilities",
    "Leisure & Entertainment"
  ];

  useEffect(() => {
    axios.get('http://localhost:5000/api')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const filteredProducts = selectedCategory ? 
    products.filter(product => product.Category === selectedCategory) :
    products;

  const handleBuy = (productId) => {
    // Handle the buy action here
    console.log(`Buying product with ID: ${productId}`);
  };

  const renderItem = ({ item }) => (
    <View style={styles.productItem}>
      <Image source={{ uri: item.ImageURL }} style={styles.image} />
      <Text style={styles.name}>{item.Name}</Text>
      <Text style={styles.price}>Price: {item.Price}</Text>
      <TouchableOpacity
        style={styles.buyButton}
        onPress={() => handleBuy(item.id)}
      >
        <Text style={styles.buyButtonText}>Buy</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Navbar 
        categories={categories} 
        selectedCategory={selectedCategory} 
        onSelectCategory={setSelectedCategory} 
      /> 
      <Text style={styles.heading}>Product List</Text>
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.Name}
        renderItem={renderItem}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 10,
  },
  productItem: {
    width: '48%', 
    aspectRatio: 1, // Maintain aspect ratio (1:1)
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 5,
    padding: 10,
    marginBottom: 50, // Adjusted marginBottom for more vertical space
  },
  image: {
    width: '100%',
    height: '70%', // Adjusted height
    marginBottom: 10, // Increased margin for better spacing
  },
  name: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  buyButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buyButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ProductListScreen;
