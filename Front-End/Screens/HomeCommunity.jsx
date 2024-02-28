import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Navbar from './Navbar';

import campingg from "../assets/community.jpg";
import test from "../assets/events.jpg";
import feu from "../assets/feu.jpg";

const HomeCommunity = () => {
  const navigation = useNavigation();

  const handleCategoryPress = (category) => {
    if (category === 'EventList') {
      navigation.navigate('EventList');
    } else if (category === 'Chatroom') {
        navigation.navigate("Chatroom")
    }  
  };

  

  return (
    <View style={styles.container}>
      {/* Top picture */}
      <Image source={campingg} style={styles.topImage} />

      {/* Navbar */}
      <View style={styles.navbarContainer}>
        <Navbar
          categories={['EventList', 'Chatroom', 'Radio']}
          selectedCategory={null}
          onSelectCategory={handleCategoryPress}
        />
      </View>

      {/* Boxes */}
      <View style={styles.boxContainer}>
        {/* First box */}
        <View style={styles.box}>
          <Image source={test} style={styles.boxImage} />
        </View>

        {/* Second box */}
        <View style={styles.box}>
          {/* You can add another image for the second box here */}
        </View>
        {/* third box */}
        <View style={styles.bo}>
          <Image source={feu} style={styles.boxImage} />
        </View>
      </View>

      {/* Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsText}>
        Many camping destinations are located in remote or secluded areas that are not easily accessible by foot</Text>
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
    marginVertical: 5,
    height: 50,
    marginHorizontal: 10,
  },
  boxContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
    marginTop: 20,
  },
  box: {
    width: '40%',
    borderRadius: 80,
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
  bo:{
    width: '40%',
    borderRadius: 50,
    overflow: 'hidden',
    marginLeft: -100,
    marginTop: -5,
  },
});

export default HomeCommunity;