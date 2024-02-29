import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import axios from 'axios';

const Guide = () => {
  const [guides, setGuides] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/guide/getAll');
        setGuides(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {guides.map((guide) => (
        <View key={guide.id} style={styles.guideContainer}>
          <Image source={{ uri: guide.imageUrl }} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.name}>{guide.name}</Text>
            <Text style={styles.experience}>{guide.experience}</Text>
            <Text style={styles.location}>{guide.location}</Text>
            <Text style={styles.price}>Price: ${guide.price}</Text>
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
  guideContainer: {
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
    flexDirection: 'column', // Changed to column layout
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007bff', // Blue color for price
  },
});

export default Guide;
