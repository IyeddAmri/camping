import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 

const CampsitesScreen = () => {
  const navigation = useNavigation(); 
  const [campsites, setCampsites] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.137.43:5000/campsites');
      
        const initialCampsites = response.data.map(campsite => ({ ...campsite, liked: false }));
        setCampsites(initialCampsites);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const toggleLike = (index) => {
    setCampsites(prevCampsites => {
      const updatedCampsites = [...prevCampsites];
      updatedCampsites[index].liked = !updatedCampsites[index].liked;
      return updatedCampsites;
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={campsites}
        keyExtractor={(item) => item.Name}
        renderItem={({ item, index }) => (
          <View style={styles.campsiteContainer}>
            <Image source={{ uri: item.ImageURL }} style={styles.image} />
            <View style={styles.loveIconContainer}>
              <TouchableOpacity onPress={() => toggleLike(index)}>
                <Ionicons name={item.liked ? 'heart' : 'heart-outline'} size={24} color={item.liked ? 'red' : 'black'} />
              </TouchableOpacity>
            </View>
            <Text style={styles.location}>{item.LocationName}</Text>
            <Text style={styles.price}>Price: ${item.Price}</Text>
            <Text style={styles.rating}>Rating: {item.Rating}</Text>
          </View>
        )}
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
  campsiteContainer: {
    marginBottom: 20,
    position: 'relative', 
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  loveIconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  location: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    marginBottom: 5,
  },
  rating: {
    fontSize: 16,
  },
});

export default CampsitesScreen;
