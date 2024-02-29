// Import necessary modules
import React from 'react';
import { View, StyleSheet, ScrollView, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import Navbar from './Navbar';
import { useNavigation } from '@react-navigation/native'; 
import hamm from "../assets/hm.jpg"; 
import chat from '../assets/bhar.webp'
// Define the HomePage component
const HomePage = () => {
  // Initialize navigation hook
  const navigation = useNavigation(); 
  
  // Function to handle category press
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

  // Function to handle tab press
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

  // Render the component
  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
        />
        <TouchableOpacity style={styles.bookingLogoContainer}>
          {/* Booking Logo */}
          <Text>Booking Logo</Text>
        </TouchableOpacity>
      </View>
      
      {/* Navbar */}
      <View style={styles.navbarContainer}>
        <Navbar
          categories={['Map', 'Weather', 'Campsites', 'Community', 'Store', 'Activities', 'Resources', 'Language']}
          selectedCategory={null}
          onSelectCategory={handleCategoryPress}
        />
      </View>
      
      {/* Middle Container */}
      <ScrollView contentContainerStyle={styles.middleContainer}>
        <View style={styles.boxRow}>
          {/* Scrollable images */}
          <ScrollView horizontal={true}>
            <Image source={hamm} style={styles.image} />
            {/* Add more images here if needed */}
          </ScrollView>
        </View>
        <View style={styles.boxRow}>
          <View style={styles.bigBox}></View>
          <View style={styles.bigBox}></View>
        </View>
      </ScrollView>
      
      {/* Tabbar */}
      <View style={styles.tabbar}>
        <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('Home')}><Text>Home</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('Whishlist')}><Text>Whishlist</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('Services')}><Text>Services</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('Inbox')}><Text>Inbox</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('Emergency')}><Text>Emergency</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('Settings')}><Text>Settings</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('Profile')}><Text>Profile</Text></TouchableOpacity>
      </View>
    </View>
  );
};

// Define styles for the component
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
});

// Export the component as default
export default HomePage;
