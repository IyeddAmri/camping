import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import campingg from "../assets/community.jpg";
import test from "../assets/events.jpg";
import feu from "../assets/feu.jpg";
import chat from "../assets/chats.jpg"

const HomeCommunity = () => {
  const navigation = useNavigation();

  const handleCategoryPress = (category) => {
    if (category === 'EventList') {
      navigation.navigate('EventList');
    } else if (category === 'Chatroom') {
      navigation.navigate('chat');
    } else if (category === 'photogallery') {
      navigation.navigate('photogallery');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Image source={campingg} style={styles.topImage} />

      <View style={styles.navbarContainer}>
        <View style={styles.navbar}>
          <TouchableOpacity style={styles.navItem} onPress={() => handleCategoryPress('EventList')}>
            <Text style={styles.navItemText}>Event List</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => handleCategoryPress('Chatroom')}>
            <Text style={styles.navItemText}>Chatroom</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => handleCategoryPress('photogallery')}>
            <Text style={styles.navItemText}>Photogallery</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.boxContainer}>
        <View style={styles.box}>
          {  <Image source={feu} style={styles.boxImage} />}
        </View>
        <View style={styles.box}>
          <Image source={chat} style={styles.chatImage} />
        </View>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.detailsText}>
        Many camping destinations are tucked away in remote or secluded areas, their beauty shielded by rugged terrain and winding trails.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  goBackButton: {
    position: 'absolute',
    top: 30,
    left: 20,
    zIndex: 1,
  },
  topImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    height: 250,
  },
  navbarContainer: {
    marginVertical: 5,
    marginHorizontal: 10,
    position: 'relative',
    left: 25,
    top:20
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    position:"relative",
    right:25
  },
  navItem: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#ffffff',
  },
  navItemText: {
    fontWeight: 'bold',
    color: '#333',
  },
  boxContainer: {
    flexDirection: 'row',
    marginTop: 50,
    position:"relative",
    left:18
  },
  box: {
    width: '40%',
    borderRadius: 15,
    overflow: 'hidden',
    marginHorizontal: 10,
  },
  boxImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 15,
  },
  chatImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 15,
  },
  detailsContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  detailsText: {
    textAlign: 'center',
    fontSize: 22,
    lineHeight: 24,
    position:"relative",
    top:15
  },
});

export default HomeCommunity;
