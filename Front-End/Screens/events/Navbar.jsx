// Navbar.js
import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Navbar = ({ category, selectedCategory, onSelectCategory }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.navbar}>
      <TouchableOpacity 
  onPress={() => onSelectCategory(null)} // Set selected category to null to render all events
  style={[
    styles.navItem,
    selectedCategory === null && styles.selectedNavItem // Apply selected style
  ]}
>
  <Text style={styles.navText}>All events</Text>
</TouchableOpacity>
{category.map((category, index) => (
  <TouchableOpacity 
    key={index} 
    onPress={() => onSelectCategory(category)} // Update selected category onPress
    style={[
      styles.navItem,
      selectedCategory === category && styles.selectedNavItem // Apply selected style
    ]}
  >
    <Text style={styles.navText}>{category}</Text>
  </TouchableOpacity>
))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  navItem: {
    paddingHorizontal: 10,
  },
  navText: {
    fontSize: 50,
    color: '#333',
  },
  selectedNavItem: {
    borderBottomWidth: 2, // Add bottom border for selected category
    borderBottomColor: 'blue', // Change color for selected category
  },
});

export default Navbar;
