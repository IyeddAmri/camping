// campsites.js

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
// import Wishlist from './Wishlist.jsx';

const CampsitesScreen = () => {
  const navigation = useNavigation();
  const [campsites, setCampsites] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/campsites/get');

        const initialCampsites = response.data.map((campsite) => ({ ...campsite, liked: campsite.Liked }));
        setCampsites(initialCampsites);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const toggleLike = async (index, campsiteId) => {
    try {
      await axios.put(`http://localhost:5000/campsites/like/${campsiteId}`);
    } catch (error) {
      console.error('Error liking/unliking campsite on the server:', error);
    }

    setCampsites((prevCampsites) => {
      const updatedCampsites = [...prevCampsites];
      updatedCampsites[index].liked = !updatedCampsites[index].liked;

      if (updatedCampsites[index].liked) {
        setWishlist((prevWishlist) => [...prevWishlist, updatedCampsites[index]]);
        navigation.navigate('Wishlist', { wishlist: [...wishlist, updatedCampsites[index]] });
      } else {
        setWishlist((prevWishlist) =>
          prevWishlist.filter((item) => item.Name !== updatedCampsites[index].Name)
        );
      }

      return updatedCampsites;
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <FlatList
        data={campsites}
        keyExtractor={(item) => item.Name}
        renderItem={({ item, index }) => (
          <View style={styles.campsiteContainer}>
            <Image source={{ uri: item.ImageURL }} style={styles.image} />
            <View style={styles.loveIconContainer}>
              <TouchableOpacity onPress={() => toggleLike(index, item.CampsiteID)}>
                <Ionicons
                  name={item.liked ? 'heart' : 'heart-outline'}
                  size={24}
                  color={item.liked ? 'red' : 'black'}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.location}>{item.LocationName}</Text>
            <Text style={styles.price}>Price: ${item.Price}</Text>
            <Text style={styles.rating}>Rating: {item.Rating}</Text>
          </View>
        )}
      />
      {/* <Wishlist wishlist={wishlist} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    marginTop:55,
  },
  goBackButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
  campsiteContainer: {
    marginBottom: 20,
    position: 'relative',
    top:20
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
