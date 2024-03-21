import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const CampsitesScreen = () => {
  const navigation = useNavigation();
  const [campsites, setCampsites] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.110.188:5000/campsites/get');

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
      return updatedCampsites;
    });
  };

  // Function to render star icons based on the rating value
  const renderStars = (rating) => {
    const filledStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - filledStars - (halfStar ? 1 : 0);

    const stars = [];

    for (let i = 0; i < filledStars; i++) {
      stars.push(<Ionicons key={i} name="star" size={16} color="gold" />);
    }

    if (halfStar) {
      stars.push(<Ionicons key="half-star" name="star-half" size={16} color="gold" />);
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Ionicons key={`empty-${i}`} name="star-outline" size={16} color="gold" />);
    }

    return stars;
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
            <View style={styles.rating}>{renderStars(item.Rating)}</View>
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
    marginTop: 55,
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
    top: 20,
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
    flexDirection: 'row',
  },
});

export default CampsitesScreen;
