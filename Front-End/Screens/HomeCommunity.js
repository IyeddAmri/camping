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
      {}
      <Image source={campingg} style={styles.topImage} />

      {}
      <View style={styles.navbarContainer}>
        <Navbar
          categories={['EventList', 'Chatroom', 'Radio']}
          selectedCategory={null}
          onSelectCategory={handleCategoryPress}
        />
      </View>

      {}
      <View style={styles.boxContainer}>
        {}
        <View style={styles.box}>
          <Image source={test} style={styles.boxImage} />
        </View>

        {}
        <View style={styles.box}>
          {}
        </View>
        {}
        <View style={styles.bo}>
          <Image source={feu} style={styles.boxImage} />
        </View>
      </View>

      {}
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
    height: 300,
    resizeMode: 'cover',
    height: 250,
  },
  navbarContainer: {
    marginVertical: 5,
    
    marginHorizontal: 10,
    position: 'relative',
    left: 27,

  },
  boxContainer: {
    flexDirection: 'row',
    
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