import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Navbar = ({ categories, selectedCategory, onSelectCategory, icons }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.navbar}>
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
                <Image source={icons[index]} style={styles.icon} />
              )}
              <Text style={styles.navText}>{category}</Text>
            </View>
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
  categoryContainer: {
    backgroundColor: '#F8F8FF',
    borderRadius: 20, // 1.25 rem border radius
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Navbar;
