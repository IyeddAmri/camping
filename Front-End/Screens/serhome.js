import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Navbar from './Navbar'; // Assuming you have a Navbar component
import cam from '../assets/camp.jpg'
import water from '../assets/Guide.jpg'
import fire from "../assets/transport.jpg";

const HomePage = () => {
  const navigation = useNavigation();

  const handleCategorySelect = (category) => {
    if (category === 'Transport') {
      navigation.navigate('Transport');
    } else if (category === 'Guide') {
      navigation.navigate('Guide');
    }
  };

  return (
    <View style={styles.container}>
      {/* Top picture */}
      <Image source={cam} style={styles.topImage} />

      {/* Navbar */}
      <View style={styles.navbarContainer}>
        <Navbar
          categories={['Transport', 'Guide']}
          selectedCategory={null}
          onSelectCategory={handleCategorySelect}
        />
      </View>

      {/* Boxes */}
      <View style={styles.boxContainer}>
        {/* First box */}
        <View style={styles.box}>
          <Image source={fire} style={styles.boxImage} />
        </View>

        {/* Second box */}
        <View style={styles.box}>
        <Image source={water} style={styles.boxImage} />
        </View>
      </View>

      {/* Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsText}>
        Welcome to the Services Home section ! Here, you'll discover a range of essential services tailored to enhance your camping experience. Whether you're seeking reliable transport options to reach your destination hassle-free or professional guides to lead you through the wilderness with expertise, our Services Home provides all the necessary resources to make your camping trip memorable and stress-free.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topImage: {
    width: '100%',
    height: 300, // Adjust the height as needed
    resizeMode: 'cover',
    height: 250,
  },
  navbarContainer: {
    marginVertical: 10,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  box: {
    width: '40%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  boxImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  detailsContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  detailsText: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
  },
});

export default HomePage;
