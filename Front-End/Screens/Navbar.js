import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Navbar = ({ categories, selectedCategory, onSelectCategory, icons }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.navbar}>
        <TouchableOpacity 
          onPress={() => onSelectCategory(null)} 
          style={[
            styles.navItem,
            selectedCategory === null && styles.selectedNavItem 
          ]}
          activeOpacity={0.8} 
        >
          <Text style={styles.navText}>All</Text>
        </TouchableOpacity>
        {categories.map((category, index) => (
          <TouchableOpacity 
            key={index} 
            onPress={() => onSelectCategory(category)} 
            style={[
              styles.navItem,
              selectedCategory === category && styles.selectedNavItem 
            ]}
            activeOpacity={0.8}
          >
            {icons && icons[index] && (
              <Image source={icons[index]} style={[styles.icon, getCategoryStyle(category)]} />
            )}
            <Text style={styles.navText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const getCategoryStyle = (category) => {
  switch (category) {
    case 'Map':
      return styles.mapIcon;
    case 'Weather':
      return styles.weatherIcon;
    case 'Campsites':
      return styles.campIcon;
    case 'Community':
      return styles.communityIcon;
    case 'Store':
      return styles.storeIcon;
    case 'Activities':
      return styles.activitiesIcon;
    case 'Resources':
      return styles.resourcesIcon;
    case 'Language':
      return styles.languageIcon;
    default:
      return null;
  }
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
  icon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  mapIcon: {
    width:25,
    position:"relative",
    left:3 // Example style for map icon
  },
  weatherIcon: {
    width:25,
    position:"relative",
    left:13,
  },
  campIcon: {
    width:45,
    position:"relative",
    left:13, // Example style for campsite icon
  },
  communityIcon: {
    width:35,// Example style for community icon
    left:19
  },
  storeIcon: {
    width:35,
    left:2,
  },
  activitiesIcon: {
    width:65,
    left:0,// Example style for activities icon
  },
  resourcesIcon: {
    width:60,
    left:5, // Example style for resources icon
  },
  languageIcon: {
    left:20 // Example style for language icon
  },
});

export default Navbar;
