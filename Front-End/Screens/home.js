import React from 'react';
import { View, StyleSheet, ScrollView, TextInput, TouchableOpacity, Text } from 'react-native';
import Navbar from './Navbar';
import { useNavigation } from '@react-navigation/native'; // Import the useNavigation hook

const HomePage = () => {
  const navigation = useNavigation(); // Initialize the navigation object
  
  const handleCategoryPress = (category) => {
    if (category === 'Store') {
      navigation.navigate('storehome');
    } else if (category=== "Activities"){   
        navigation.navigate('activities')
    }
    else if (category === "Community") {
      navigation.navigate("HomeCommunity")
    }
  };

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
        />
        <TouchableOpacity style={styles.bookingLogoContainer}>
          {/* Insert your booking logo here */}
          <Text>Booking Logo</Text>
        </TouchableOpacity>
      </View>
      
      {/* Navbar */}
      <View style={styles.navbarContainer}>
        <Navbar
          categories={['Map', 'Weather', 'Campsites', 'Community', 'Store', 'Activities', 'Resources', 'Language']}
          selectedCategory={null}
          onSelectCategory={handleCategoryPress} // Pass the handleCategoryPress function
        />
      </View>
      
      {/* Multiple Boxes */}
      <ScrollView contentContainerStyle={styles.middleContainer}>
        <View style={styles.boxRow}>
          <View style={styles.bigBox}></View>
          <View style={styles.bigBox}></View>
        </View>
        <View style={styles.boxRow}>
          <View style={styles.bigBox}></View>
          <View style={styles.bigBox}></View>
        </View>
        {/* Add more box rows as needed */}
      </ScrollView>
      
      {/* Tabbar */}
      <View style={styles.tabbar}>
        {/* Insert your tab items here */}
        <TouchableOpacity style={styles.tabItem}><Text>Home</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}><Text>Whishlist</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}><Text>Services</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}><Text>Inbox</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}><Text>Emergency</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}><Text>Settings</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}><Text>Profile</Text></TouchableOpacity>
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
    // Style your booking logo container as needed
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
    paddingVertical: 20, // Increased padding
  },
  tabItem: {
    // Style your tab items as needed
  },
});

export default HomePage;
