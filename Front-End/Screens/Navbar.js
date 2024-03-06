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
            <View style={styles.categoryContainer}>
              {icons && icons[index] && (
                <Image source={icons[index]} style={[styles.icon, getCategoryStyle(category)]} />
              )}
              <Text style={styles.navText}>{category}</Text>
            </View>
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
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  navText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 5,
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
    width: 25,
  },
  weatherIcon: {
    width: 25,
  },
  campIcon: {
    width: 25,
  },
  communityIcon: {
    width: 25,
  },
  storeIcon: {
    width: 25,
  },
  activitiesIcon: {
    width: 25,
  },
  resourcesIcon: {
    width: 25,
  },
  languageIcon: {
    width: 25,
  },
  categoryContainer: {
    backgroundColor: 'aliceblue',
    borderRadius: 20, // 1.25 rem border radius
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Navbar;
