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
      navigation.navigate('Chatroom');
    } else if (category === 'photogallery') {
      navigation.navigate('photogallery');
    }
  };

  return (
    <View style={styles.container}>
      {}
      <Image source={campingg} style={styles.topImage} />

      {}
      <View style={styles.navbarContainer}>
      <Navbar
  categories={['EventList', 'Chatroom', 'photogallery']}
  selectedCategory={null}
  onSelectCategory={handleCategoryPress}
/>
      </View>

      {}
      <View style={styles.boxContainer}>
        {/* First box
        <View style={styles.box}>
          <Image source={test} style={styles.boxImage} />
        </View> */}

        {}
        <View style={styles.box}>
          {/* You can add another image for the second box here */}
        </View>
        {/* third box */}
        <View style={styles.bo}>
          <Image source={feu} style={styles.boxImage} />
        </View>
      </View>

      {}
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsText}>
          Many camping destinations are located in remote or secluded areas that are not easily accessible by foot
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
    height: 300,
    resizeMode: 'cover',
    height: 250,
  },
  navbarContainer: {
    marginVertical: 5,
    marginHorizontal: 10,
    position: 'relative',
    left: 30,
  },
  boxContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
    marginTop: 20,
  },
  box: {
    width: '40%',
    borderRadius: 15,
    overflow: 'hidden',
  },
  boxImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 15,
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
});

export default HomeCommunity;
