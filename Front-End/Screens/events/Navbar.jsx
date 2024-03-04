
import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Navbar = ({ category, selectedCategory, onSelectCategory }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.navbar}>
      <TouchableOpacity 
  onPress={() => onSelectCategory(null)} 
  style={[
    styles.navItem,
    selectedCategory === null && styles.selectedNavItem 
  ]}
>
  <Text style={styles.navText}>All events</Text>
</TouchableOpacity>
{category.map((category, index) => (
  <TouchableOpacity 
    key={index} 
    onPress={() => onSelectCategory(category)}
    style={[
      styles.navItem,
      selectedCategory === category && styles.selectedNavItem 
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
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  navItem: {
    paddingHorizontal: 10,
  },
  navText: {
    fontSize: 16,
    color: '#333',
  },
  selectedNavItem: {
    borderBottomWidth: 2, 
    borderBottomColor: 'blue',
  },
});

export default Navbar;
