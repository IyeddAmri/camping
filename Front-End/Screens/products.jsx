import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import axios from 'axios';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the backend using Axios
    axios.get('http://localhost:5000/api/get')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <View>
      <Text>Product List</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.Name}
        renderItem={({ item }) => (
          <View>
            <Image source={{ uri: item.ImageURL }} style={{ width: 100, height: 100 }} />
            <Text>{item.Name}</Text>
            <Text>{item.Description}</Text>
            <Text>Price: {typeof item.Price === 'number' ? `$${item.Price.toFixed(2)}` : 'N/A'}</Text>
            <Text>Availability: {item.Availability ? 'Available' : 'Not Available'}</Text>
            <Text>Category: {item.Category}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default App;
