import React from 'react';
import { View, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image, Text } from 'react-native';
import Navbar from './Navbar';
import { useNavigation } from '@react-navigation/native'; 
import hamm from "../assets/hm.jpg"; 
import chat from '../assets/bhar.webp';
import maps from "../assets/map.png"; 
import ta9ss from "../assets/ta9s.png"; // Import the new image
import camp from "../assets/camppp.jpg"
import club from "../assets/community.webp"
import hanout from "../assets/7wint.jpg"
import po from "../assets/la3b.jpg"
import ss from "../assets/res.jpg"
import lo from "../assets/lou8a.png"
import dar from "../assets/home.jpg"
import glayb from "../assets/glb.webp" // Import the glayb image for the tab bar
import khdm from '../assets/srv.png'
import tlf from "../assets/klm.png"
import ur from "../assets/ml.jpg"
import pr from "../assets/prm.png"
import prffff from "../assets/prff.jpg"
import prffImage from '../assets/prff.jpg';

const HomePage = () => {
  const navigation = useNavigation(); 
  
  const handleCategoryPress = (category) => {
    if (category === 'Store') {
      navigation.navigate('storehome');
    } else if (category === 'Activities') {   
      navigation.navigate('activities')
    } else if (category === 'Community') {
      navigation.navigate('HomeCommunity')
    } else if (category === 'Campsites') {
      navigation.navigate('campsites'); 
    }
  };

  const handleTabPress = (tab) => {
    if (tab === 'Home') {
      // Handle Home tab press
    } else if (tab === 'Whishlist') {
      // Handle Whishlist tab press
    } else if (tab === 'Services') {
      // Handle Services tab press
    } else if (tab === 'Inbox') {
      // Handle Inbox tab press
    } else if (tab === 'Emergency') {
      // Handle Emergency tab press
    } else if (tab === 'Settings') {
      // Handle Settings tab press
    } else if (tab === 'Profile') {
      // Handle Profile tab press
    }
  };

  const icons = [maps, ta9ss, camp, club, hanout, po, ss, lo]; // Add 'ta9ss' icon at index 1 for above "Weather"

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
        />
        <TouchableOpacity style={styles.bookingLogoContainer}>
          <Text>el gafsi mahboul</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.navbarContainer}>
        <Navbar
          categories={['Map', 'Weather', 'Campsites', 'Community', 'Store', 'Activities', 'Resources', 'Language']}
          selectedCategory={null}
          onSelectCategory={handleCategoryPress}
          icons={icons} // Pass icons array to Navbar
        />
      </View>
      
      <ScrollView contentContainerStyle={styles.middleContainer}>
        <View style={styles.boxRow}>
          <ScrollView horizontal={true}>
            <Image source={hamm} style={styles.image} />
          </ScrollView>
        </View>
        <View style={styles.boxRow}>
          <View style={styles.bigBox}></View>
          <View style={styles.bigBox}></View>
        </View>
      </ScrollView>
      
      <View style={styles.tabbar}>
        <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('Home')}>
          <Image source={dar} style={[styles.tabIcon, styles.homeIcon]} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('Whishlist')}>
          <Image source={glayb} style={[styles.tabIcon, styles.whishlistIcon]} /> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('Services')}>
          <Image source={khdm} style={[styles.tabIcon, styles.servicesIcon]} /> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('Inbox')}>
          <Image source={tlf} style={[styles.tabIcon, styles.inboxIcon]} /> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('Emergency')}>
          <Image source={ur} style={[styles.tabIcon, styles.emergencyIcon]} /> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('Settings')}>
        <Image source={pr} style={[styles.tabIcon, styles.settingsIcon]} /> 
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('Profile')}>
      <Image source={prffff} style={[styles.tabIcon, styles.profileIcon]} /> 
    </TouchableOpacity>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  bookingLogoContainer: {
    // Add booking logo container styles
  },
  navbarContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  middleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  boxRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    width: '100%',
    paddingHorizontal: 10,
  },
  bigBox: {
    width: '48%',
    height: 200,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  tabbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 20, 
  },
  tabItem: {
    // Add tab item styles
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  tabIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  homeIcon: {
    // Home icon styles
  },
  whishlistIcon: {
    // Whishlist icon styles
  },
  servicesIcon: {
    // Services icon styles
  },
  inboxIcon: {
    // Inbox icon styles
  },
  emergencyIcon: {
    // Emergency icon styles
  },
  settingsIcon: {
    // Settings icon styles
  },
  profileIcon: {
    width:20
  },
});

export default HomePage;
