import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the FontAwesome icon

const Settings = () => {
  const navigation = useNavigation();

  const handleMenuItemPress = (menuItem) => {
    // Handle the navigation based on the selected menu item
    switch (menuItem) {
      case 'Profile':
        navigation.navigate('Profile');
        break;
      case 'Password':
        navigation.navigate('Password');
        break;
      case 'Notification':
        navigation.navigate('Notification');
        break;
      case 'Language':
        navigation.navigate('Language');
        break;
      case 'RateAndReview':
        navigation.navigate('RateAndReview');
        break;
      case 'Help':
        navigation.navigate('Help');
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      {/* Menu items */}
      <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuItemPress('Profile')}>
        <Icon name="user" size={20} color="#000" /> {/* Icon */}
        <Text> Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuItemPress('Password')}>
        <Icon name="lock" size={20} color="#000" /> {/* Icon */}
        <Text> Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuItemPress('Notification')}>
        <Icon name="bell" size={20} color="#000" /> {/* Icon */}
        <Text> Notification</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuItemPress('Language')}>
        <Icon name="language" size={20} color="#000" /> {/* Icon */}
        <Text> Language</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuItemPress('RateAndReview')}>
        <Icon name="star" size={20} color="#000" /> {/* Icon */}
        <Text> Rate & Review</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuItemPress('Help')}>
        <Icon name="question-circle" size={20} color="#000" /> {/* Icon */}
        <Text> Help</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  menuItem: {
    flexDirection: 'row', // Add flexDirection to align icon and text horizontally
    alignItems: 'center', // Align items in the center vertically
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default Settings;
