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
import hh from "../assets/jaw.jpg" // Import the hh image
import abc from "../assets/stores.avif"
import prffImage from '../assets/prff.jpg';
import src from "../assets/abcd.jpg"
import dhke from "../assets/ai.png"
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
    } else if (category === 'Activities') {
      navigation.navigate('activities');
    } else if (category === 'Resources') {
      navigation.navigate('reshome');
    }
  };

  const handleTabPress = (tabName) => {
    if (tabName === 'Home') {
      // Handle navigation to the home screen
    } else if (tabName === 'Whishlist') {
      // Handle navigation to the wishlist screen
    } else if (tabName === 'Services') {
      navigation.navigate('serhome'); // Navigate to the Services screen
    } else if (tabName === 'Inbox') {
      // Handle navigation to the inbox screen
    } else if (tabName === 'Emergency') {
      navigation.navigate('Emergency'); // Navigate to the Emergency screen
    } else if (tabName === 'Settings') {
      // Handle navigation to the settings screen
    } else if (tabName === 'Profile') {
      // Handle navigation to the profile screen
    }
    else if (category === "Community") {
      navigation.navigate("HomeCommunity")
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
          <Text>Booking Logo</Text>
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
    <View style={styles.bigBox}>
      <Image source={hh} style={{ width: '100%', height: '100%', borderRadius: 10 }} />
    </View>
    <View style={styles.bigBox}>
      <Image source={abc} style={{ width: '100%', height: '100%', borderRadius: 10 }} />
    </View>
  </View>
  <View style={styles.boxRow}>
  <Image source={src} style={{ width: '48%', height: '100%', borderRadius: 10 }} />
  <View style={styles.bigBox}>
    <Image source={dhke} style={{ width: '100%', height: '100%', borderRadius: 10 }} />
  </View>
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
