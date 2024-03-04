
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Settings = () => {
  const navigation = useNavigation();

  const handleMenuItemPress = (menuItem) => {
    // Handle the navigation based on the selected menu item
    switch (menuItem) {
      case 'Profile':
        // Navigate to the Profile page
        navigation.navigate('Profile');
        break;
      case 'Password':
        // Navigate to the Password page
        navigation.navigate('Password');
        break;
      case 'Notification':
        // Navigate to the Notification page
        navigation.navigate('Notification');
        break;
      case 'Language':
        // Navigate to the Language page
        navigation.navigate('Language');
        break;
      case 'RateAndReview':
        // Navigate to the Rate & Review page
        navigation.navigate('RateAndReview');
        break;
      case 'Help':
        // Navigate to the Help page
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
        <Text>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuItemPress('Password')}>
        <Text>Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuItemPress('Notification')}>
        <Text>Notification</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuItemPress('Language')}>
        <Text>Language</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuItemPress('RateAndReview')}>
        <Text>Rate & Review</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuItemPress('Help')}>
        <Text>Help</Text>
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
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default Settings;
