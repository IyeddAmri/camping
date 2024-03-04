import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Navbar from './Navbar'; // Assuming you have a Navbar component
import cam from '../assets/explore.jpg'
import water from '../assets/water.webp'
import fire from "../assets/fire.jpg";

const HomePage = () => {
  const navigation = useNavigation();

  const handleCategorySelect = (category) => {
    if (category === 'Survival Tips') {
      navigation.navigate('resources');
    }
    // You can handle navigation for other categories here
  };

  return (
    <View style={styles.container}>
      {/* Top picture */}
      <Image source={cam} style={styles.topImage} />

      {/* Navbar */}
      <View style={styles.navbarContainer}>
        <Navbar
          categories={['Survival Tips', 'Ai Tools', 'Checklist']}
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
        Welcome to the Resources section ! Here, you'll find a curated collection of essential tools and information to enhance your camping experience. From survival tips to handy AI tools and comprehensive checklists, this section is designed to equip you with everything you need for a safe, enjoyable, and hassle-free adventure in the great outdoors. Explore, learn, and make the most out of your camping trip with our carefully selected resources.
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
