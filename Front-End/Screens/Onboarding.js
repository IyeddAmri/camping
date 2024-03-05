import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';

const { width } = Dimensions.get('window');

const Onboarding = ({ navigation }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const slides = [
    {
        title: 'Welcome to Our App',
        description: 'Discover amazing camping spots and events.',
      },
      {
        title: 'Explore Exciting Features',
        description: 'Find new adventures and activities near you.',
      },
    {
      title: 'Connect with Others',
      description: 'Connect with fellow campers and share experiences.',
    },
  ];

  const handleNext = () => {
    if (currentPage < slides.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      navigation.navigate('HomePage');
    }
  };

  return (
    <ImageBackground source={{ uri: 'https://i.pinimg.com/564x/15/16/7b/15167b9734394498f27c209a3d93f694.jpg' }} style={styles.backgroundImage}>
      <View style={styles.overlay}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={(event) => {
            const slideIndex = Math.ceil(event.nativeEvent.contentOffset.x / width);
            setCurrentPage(slideIndex);
          }}
        >
          {slides.map((slide, index) => (
            <View key={index} style={[styles.slide, { width }]}>
              <Text style={styles.title}>{slide.title}</Text>
              <Text style={styles.description}>{slide.description}</Text>
            </View>
          ))}
        </ScrollView>
        <View style={styles.pagination}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[styles.paginationDot, { opacity: index === currentPage ? 1 : 0.5 }]}
            />
          ))}
        </View>
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>{currentPage === slides.length - 1 ? 'Get Started' : 'Next'}</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent overlay
    padding: 20, // Add padding for content
    justifyContent: 'center',
  },
  slide: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff', // Change text color to white
  },
  description: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff', // Change text color to white
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20, // Add margin for separation
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 1, // Add border
    borderColor: '#fff', // Border color
    backgroundColor: 'transparent', // Transparent background
    marginHorizontal: 5,
  },
  button: {
    marginTop: 20,
    paddingVertical: 12, // Adjust padding
    paddingHorizontal: 20,
    backgroundColor: '#007BFF',
    borderRadius: 25, // Make it more rounded
    alignItems: 'center', // Center text horizontally
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Onboarding;
