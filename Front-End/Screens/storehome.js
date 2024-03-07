import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import hometent from "../assets/hometents.webp";
import materialcamp from "../assets/materialcamp.webp";
import tool from "../assets/tools.webp";

const HomePage = () => {
  const navigation = useNavigation();

  const handleExploreMore = () => {
    navigation.navigate('products'); 
  };

  return (
    <View style={styles.container}>
      {}
      <Image source={hometent} style={styles.topImage} />

      {}
      <View style={styles.boxContainer}>
        {}
        <View style={styles.box}>
          <Image source={materialcamp} style={styles.boxImage} />
        </View>

        {}
        <View style={styles.box}>
          <Image source={tool} style={styles.boxImage} />
        </View>
      </View>

      {}
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsText}>
          Welcome to our store! We offer a wide range of products to cater to your needs. Whether you're looking for camping gear, tools, or anything in between, we've got you covered.
        </Text>
      </View>

      {}
      <TouchableOpacity style={styles.exploreButton} onPress={handleExploreMore}>
        <Text style={styles.exploreButtonText}>Explore More</Text>
      </TouchableOpacity>
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
    height:250
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
  exploreButton: {
    backgroundColor: '#18C0C1',
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 20,
    alignItems: 'center',
    marginTop: 20,
    width:159,
    height:55,
    borderRadius:15,
    position:"relative",
    left:100,
  
  },
  exploreButtonText: {
    color: 'white',
    fontWeight: 'bold',
    width:115,
    height:30,
    position:"relative",
    top:10,
  },
});

export default HomePage;
