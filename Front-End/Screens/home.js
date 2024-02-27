import React from 'react';
import { View, StyleSheet, ScrollView, TextInput, TouchableOpacity, Text } from 'react-native';
import Navbar from './Navbar';

const HomePage = () => {
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
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.navbarContainer}>
        <Navbar
          categories={['Map', 'Weather', 'Campsites', 'Community', 'Store', 'Activities', 'Resources', 'Language']}
          selectedCategory={null} // Assuming no category selected initially
          onSelectCategory={(category) => console.log(category)} // Placeholder function
        />
      </ScrollView>
      
      {/* Multiple Boxes */}
      <View style={styles.boxesContainer}>
        {/* Insert your boxes here */}
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        {/* Add more boxes as needed */}
      </View>
      
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
    marginTop: 10,
  },
  boxesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  box: {
    width: '30%',
    height: 100,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginBottom: 10,
    // Add styling for the boxes as needed
  },
  tabbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 10,
  },
  tabItem: {
    // Style your tab items as needed
  },
});

export default HomePage;
