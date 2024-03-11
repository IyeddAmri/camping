import React from 'react';
import { View, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image, Text } from 'react-native';
import Navbar from './Navbar';
import { useNavigation } from '@react-navigation/native'; 
import { FontAwesome } from '@expo/vector-icons';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';  
import maps from "../assets/map.png"; 
import ta9ss from "../assets/ta9s.png";
import camp from "../assets/camppp.jpg"
import club from "../assets/community.webp"
import hanout from "../assets/7wint.jpg"
import po from "../assets/la3b.jpg"
import ss from "../assets/res.jpg"
import lo from "../assets/lou8a.png"
import dar from "../assets/home.jpg"
import glayb from "../assets/glb.webp" // Import the glayb image for the tab bar
import khdm from '../assets/srv.png'
import tlf from "../assets/klm.png"
import ur from "../assets/ml.jpg"
import pr from "../assets/prm.png"
import prffff from "../assets/prff.jpg"
import prffImage from '../assets/prff.jpg';
import Profile from "../Screens/profile"
 
import campsiteImage from "../assets/cmp.jpg"; 
import storeImage from '../assets/sell.webp';
import survivalImage from "../assets/survival.jpg"; 
import aiImage from "../assets/ai.jpg"; 

const HomePage = () => {
  const navigation = useNavigation(); 
  
  const handleCategoryPress = (category) => {
    if (category === 'Store') {
      navigation.navigate('storehome');
    } else if (category === 'Activities') {   
      navigation.navigate('activities')
    } else if (category === 'Community') {
      navigation.navigate('HomeCommunity')
    } else if (category === 'Campsites') {
      navigation.navigate('campsites'); 
    } else if (category === 'Activities') {
      navigation.navigate('activities');
    } else if (category === 'Resources') {
      navigation.navigate('reshome');
    }
    else if (category === 'Weather') {
      navigation.navigate('weather');
    }
  };

  const handleTabPress = (tabName) => {
    if (tabName === 'Home') {
      // Handle navigation to the home screen
    } else if (tabName === 'Whishlist') {
      navigation.navigate('wishlist'); 
      // Handle navigation to the wishlist screen
    } else if (tabName === 'Services') {
      navigation.navigate('serhome'); // Navigate to the Services screen
    } else if (tabName === 'Inbox') {
      // Handle navigation to the inbox screen
    } else if (tabName === 'Emergency') {
      navigation.navigate('Emergency'); // Navigate to the Emergency screen
    } else if (tabName === 'Settings') {
      navigation.navigate('Settings');
    } else if (tabName === 'Profile') {
      navigation.navigate('profile'); // Navigate to the Profile screen
    } else if (category === "Community") {
      navigation.navigate("HomeCommunity")
    }
  };

 
  const icons = [maps, ta9ss, camp, club, hanout, po, ss, lo];

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
        />
        <TouchableOpacity style={styles.bookingLogoContainer}>
          <FontAwesome name="hotel" size={24} color="black" /> 
        </TouchableOpacity>
      </View>
      
      <View style={styles.navbarContainer}>
        <Navbar
          categories={['Map', 'Weather', 'Campsites', 'Community', 'Store', 'Activities', 'Resources', 'Language']}
          selectedCategory={null}
          onSelectCategory={handleCategoryPress}
          icons={icons} 
        />
      </View>
      
      <ScrollView contentContainerStyle={styles.middleContainer}>
        <TouchableOpacity style={styles.bigBox} onPress={() => handleCategoryPress('Campsites')}>
          <Image source={campsiteImage} style={styles.boxImage} />
          <Text style={styles.boxTitle}>Best Campsites in Tunisia</Text>
          <Text style={styles.boxDescription}>Discover the best campsites in Tunisia and enjoy your outdoor adventures.</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.bigBox} onPress={() => handleCategoryPress('Store')}>
          <Image source={storeImage} style={styles.boxImage} />
          <Text style={styles.boxTitle}>Camping Store</Text>
          <Text style={styles.boxDescription}>Explore our camping store for the best camping products and gear.</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.bigBox} onPress={() => handleCategoryPress('Resources')}>
          <Image source={survivalImage} style={styles.boxImage} />
          <Text style={styles.boxTitle}>Survival Tips</Text>
          <Text style={styles.boxDescription}>Learn essential survival tips and techniques for your camping trips.</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.bigBox} onPress={() => handleCategoryPress('Activities')}>
          <Image source={aiImage} style={styles.boxImage} />
          <Text style={styles.boxTitle}>AI Tool for Camping</Text>
          <Text style={styles.boxDescription}>Use our AI tool to identify plants and animals during your camping adventures.</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.tabbar}>
        <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('Home')}>
          <Feather name="home" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('Whishlist')}>
          <MaterialIcons name="favorite" size={24} color="black" /> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('Services')}>
          <MaterialIcons name="room-service" size={24} color="black" /> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('Inbox')}>
          <MaterialIcons name="inbox" size={24} color="black" /> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('Emergency')}>
          <MaterialIcons name="warning" size={24} color="black" /> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('Settings')}>
          <MaterialIcons name="settings" size={24} color="black" /> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('Profile')}>
          <MaterialIcons name="person" size={24} color="black" /> 
        </TouchableOpacity>
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
    borderRadius: 20, // 1.25 rem border radius
    paddingHorizontal: 10,
    marginRight: 10,
  },
  bookingLogoContainer: {
    // Add booking logo container styles
  },
  navbarContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  middleContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  bigBox: {
    width: '100%',
    height: 300,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  boxImage: {
    width: '100%',
    height: '70%',
    borderRadius: 10,
    marginBottom: 10,
  },
  boxTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  boxDescription: {
    fontSize: 16,
    color: '#666',
  },
  tabbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 20, 
  },
  tabItem: {
    // Add tab item styles
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  tabIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  homeIcon: {
    // Home icon styles
  },
  whishlistIcon: {
    // Whishlist icon styles
  },
  servicesIcon: {
    // Services icon styles
  },
  inboxIcon: {
    // Inbox icon styles
  },
  emergencyIcon: {
    // Emergency icon styles
  },
  settingsIcon: {
    // Settings icon styles
  },
  profileIcon: {
    width:20
  },
});

export default HomePage;
