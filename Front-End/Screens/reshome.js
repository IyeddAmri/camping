import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import cam from '../assets/explore.jpg';
import water from '../assets/water.webp';
import fire from "../assets/fire.jpg";

const HomePage = () => {
  const navigation = useNavigation();

  const handleCategoryPress = (category) => {
    if (category === 'Survival Tips') {
      navigation.navigate('resources');
    } else if (category === 'Checklist') {
      navigation.navigate('checklist');
    }
    else if (category === 'Ai Tools') {
      navigation.navigate('ai');
    }
  };

  return (
    <View style={styles.container}>
      {/* Go back button */}
      <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* Top picture */}
      <Image source={cam} style={styles.topImage} />

      {/* Navbar */}
      <View style={styles.navbarContainer}>
        <View style={styles.navbar}>
          <TouchableOpacity style={styles.navItem} onPress={() => handleCategoryPress('Survival Tips')}>
            <Text style={styles.navItemText}>Survival Tips</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => handleCategoryPress('Ai Tools')}>
            <Text style={styles.navItemText}>Ai Tools</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => handleCategoryPress('Checklist')}>
            <Text style={styles.navItemText}>Checklist</Text>
          </TouchableOpacity>
        </View>
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
          Welcome to the Resources section! Here, you'll find a curated collection of essential tools and information to enhance your camping experience.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  goBackButton: {
    position: 'absolute',
    top: 30,
    left: 20,
    zIndex: 1,
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
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  navItem: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#ffffff',
  },
  navItemText: {
    fontWeight: 'bold',
    color: '#333',
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
    fontSize: 14,
    lineHeight: 24,
  },
});

export default HomePage;
