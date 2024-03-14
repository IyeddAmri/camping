import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomePage = () => {
  const navigation = useNavigation();

  const handleCategorySelect = (category) => {
    if (category === 'Transport') {
      navigation.navigate('Transport');
    } else if (category === 'Guide') {
      navigation.navigate('Guide');
    }
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
     
      <TouchableOpacity style={styles.goBackButton} onPress={handleGoBack}>
        <Icon name="arrow-left" size={24} color="black" /> 
      </TouchableOpacity>

    
      <Image source={require('../assets/camp.jpg')} style={styles.topImage} />

   
      <View style={styles.navbarContainer}>
        <View style={styles.navItem}>
          <Text
            style={styles.navItemText}
            onPress={() => handleCategorySelect('Transport')}
          >
            Transport
          </Text>
        </View>
        <View style={styles.navItem}>
          <Text
            style={styles.navItemText}
            onPress={() => handleCategorySelect('Guide')}
          >
            Guide
          </Text>
        </View>
      </View>

     
      <View style={styles.boxContainer}>
      
        <View style={styles.box}>
          <Image source={require('../assets/transport.jpg')} style={styles.boxImage} />
        </View>

        
        <View style={styles.box}>
          <Image source={require('../assets/Guide.jpg')} style={styles.boxImage} />
        </View>
      </View>

     
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsText}>
          Welcome to the Services Home section! Here, you'll discover a range of essential services tailored to enhance your camping experience. 
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
    top: 35,
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
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  navItem: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    marginHorizontal: 10,
  },
  navItemText: {
    fontWeight: 'bold',
    color: '#333',
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  box: {
    width: '40%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  boxImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  detailsContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  detailsText: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
  },
});

export default HomePage;
