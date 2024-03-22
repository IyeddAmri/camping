import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import cam from "../assets/camping.jpg";
import wol from "../assets/wolf.webp";
import pp from "../assets/pp.jpg";

const HomePage = () => {
  const navigation = useNavigation();

  const handleCategoryPress = (category) => {
    if (category === 'Games') {
      navigation.navigate('Games');
    } else if (category === 'Outdoor Adventures') {
      navigation.navigate('outdoor');
    }  
    else if (category === 'Radio') {
      navigation.navigate('radio');
    }  
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      <Image source={cam} style={styles.topImage} />

      <View style={styles.navbarContainer}>
        <View style={styles.navbar}>
          <TouchableOpacity style={styles.navItem} onPress={() => handleCategoryPress('Games')}>
            <Text style={styles.navItemText}>Games</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => handleCategoryPress('Outdoor Adventures')}>
            <Text style={styles.navItemText}>Outdoor Adventures</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => handleCategoryPress('Radio')}>
            <Text style={styles.navItemText}>Radio</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.boxContainer}>
        <View style={styles.box}>
          <Image source={wol} style={styles.boxImage} />
        </View>
        <View style={styles.box}>
          <Image source={pp} style={styles.boxImage} />
        </View>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.detailsText}>
        Welcome to the Activity Section, where we delve into the heart of camping adventure! Here, amidst the rustling of leaves and the crackling of campfires, we explore the myriad ways to immerse yourself in the great outdoors.
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
    top: 35,
    left: 20,
    zIndex: 1,
  },
  topImage: {
    width: '100%',
    height: 300, 
    resizeMode: 'cover',
    height: 250,
  },
  navbarContainer: {
    marginVertical: 10,
    position: "relative",
    right: 10,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    borderRadius: 10,
   
    borderColor: '#ccc',
    position:"relative",
    left:10,
  
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
    marginTop: 5,
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
    fontSize: 20,
    lineHeight: 24,
  },
  exploreButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  exploreButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default HomePage;
