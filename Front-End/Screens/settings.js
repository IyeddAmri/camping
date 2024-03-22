// Settings.js

import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Settings = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };
  const handleMenuItemPress = (menuItem) => {
    switch (menuItem) {
      case 'Profile':
        navigation.navigate('profile');
        break;
      case 'Password':
        // Handle Password menu item press
        break;
      case 'Notification':
        // Handle Notification menu item press
        break;
      case 'Language':
        // Handle Language menu item press
        break;
        case 'RateAndReview':
          navigation.navigate('RateAndReview');
        break;
      case 'Help':
        navigation.navigate('Help');
        break;
        case 'LogOut':
          navigation.navigate('Signin');
        break;
      default:
        // Handle default case if necessary
        break;
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

     {/* Go Back Button */}
     <TouchableOpacity style={styles.goBackButton} onPress={handleGoBack}>
     <Icon name="arrow-left" size={20} color="#000" />
   </TouchableOpacity>

      <View style={styles.premiumBox}>
        <Text style={styles.premiumTitle}>Premium Membership</Text>
        <Text style={styles.premiumSubtitle}>Upgrade for more features</Text>
      </View>
      <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuItemPress('Profile')}>
        <Icon name="user" size={20} color="#000" />
        <Text> Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuItemPress('Password')}>
        <Icon name="lock" size={20} color="#000" />
        <Text> Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuItemPress('Notification')}>
        <Icon name="bell" size={20} color="#000" />
        <Text> Notification</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuItemPress('Language')}>
        <Icon name="language" size={20} color="#000" />
        <Text> Language</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuItemPress('RateAndReview')}>
        <Icon name="star" size={20} color="#000" />
        <Text> Rate & Review</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuItemPress('Help')}>
        <Icon name="question-circle" size={20} color="#000" />
        <Text> Help</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuItemPress('LogOut')}>
        <Icon name="sign-out" size={20} color="#000" />
        <Text> LogOut</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  goBackButton: {
    position: 'relative',
    top: 10,
  },
  premiumBox: {
    backgroundColor: '#800080', // Purple color
    padding: 20,
    marginBottom: 30,
    position:"relative",
    top:20,
    borderRadius: 10,
  },
  premiumTitle: {
    color: '#fff', // White color
    fontSize: 18,
    fontWeight: 'bold',
  },
  premiumSubtitle: {
    color: '#fff', // White color
    fontSize: 14,
    marginTop: 5,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default Settings;
