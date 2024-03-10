import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const ProductListScreen = () => {
  const navigation = useNavigation();
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
    axios.get('http://192.168.1.16:5000/api')
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
    console.log(`Buying product with ID: ${productId}`);
  };

  const renderNavbar = () => (
    <ScrollView horizontal contentContainerStyle={styles.navbar}>
      {categories.map(category => (
        <TouchableOpacity
          key={category}
          style={[
            styles.navItem,
            selectedCategory === category && styles.selectedNavItem
          ]}
          onPress={() => setSelectedCategory(category)}
        >
          <Text style={styles.navItemText}>{category}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.productItem}
      onPress={() => handleBuy(item.id)}
    >
      <View>
        <Image source={{ uri: item.ImageURL }} style={styles.image} />
        <Text style={styles.name}>{item.Name}</Text>
        <Text style={styles.price}>Price: {item.Price}</Text>
        <TouchableOpacity style={styles.buyButton} onPress={() => handleBuy(item.id)}>
          <Text style={styles.buyButtonText}>Buy</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {renderNavbar()}
      <Text style={styles.heading}>Product List</Text>
      <View style={styles.shoppingCartContainer}>
        <TouchableOpacity onPress={() => console.log("Shopping Cart Pressed")}>
          <Text style={styles.shoppingCartIcon}>🛒</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.Name}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    height:60
  },
  navItem: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
    
  },
  selectedNavItem: {
    backgroundColor: '#ccc',
  },
  navItemText: {
    fontWeight: 'bold',
    color: '#333',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 10,
  },
  productList: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  productItem: {
    flex: 1,
    aspectRatio: 0.9, 
    margin: 5,
    borderRadius: 20,
    backgroundColor: '#f9f9f9',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
  },
  name: {
    fontWeight: 'bold',
    marginVertical: 5,
    marginHorizontal: 10,
  },
  price: {
    marginHorizontal: 10,
    marginBottom: 10,
    color: '#888',
  },
  shoppingCartContainer: {
    position: 'absolute',
    top: 50,
    right: 10,
    zIndex: 1,
  },
  shoppingCartIcon: {
    fontSize: 24,
  },
  buyButton: {
    backgroundColor: 'blue',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  buyButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ProductListScreen;
