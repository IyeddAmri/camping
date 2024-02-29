import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import axios from 'axios';

const Transport = () => {
  const [transportData, setTransportData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.1.59:5000/trans/getAll');
        setTransportData(response.data);
      } catch (error) {
        console.error('Error fetching transport data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {transportData.map((transport) => (
        <View key={transport.id} style={styles.transportContainer}>
          <Image source={{ uri: transport.imageUrl }} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.name}>Name: {transport.driver_name}</Text>
            <Text style={styles.option}>Car Option: {transport.car_option}</Text>
            <Text style={styles.places}>Available Places: {transport.available_places}</Text>
            <Text style={styles.price}>Price: {transport.price}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f8f8f8',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  transportContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    width: 150,
    height: 150,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  textContainer: {
    flex: 1,
    padding: 10,
    flexDirection: 'column',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  option: {
    fontSize: 16,
    marginBottom: 5,
  },
  places: {
    fontSize: 16,
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007bff',
  },
});

export default Transport;
