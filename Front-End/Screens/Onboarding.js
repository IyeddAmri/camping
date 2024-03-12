import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

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

  // Define shared values for animations
  const titleOpacity = useSharedValue(0);
  const descriptionOpacity = useSharedValue(0);
  const paginationOpacity = useSharedValue(0);

  // Define animated styles for elements
  const titleStyle = useAnimatedStyle(() => ({
    opacity: withTiming(titleOpacity.value),
    transform: [{ translateY: withTiming(titleOpacity.value * 10) }],
  }));

  const descriptionStyle = useAnimatedStyle(() => ({
    opacity: withTiming(descriptionOpacity.value),
    transform: [{ translateY: withTiming(descriptionOpacity.value * 10) }],
  }));

  const paginationStyle = useAnimatedStyle(() => ({
    opacity: withTiming(paginationOpacity.value),
    transform: [{ translateY: withTiming(paginationOpacity.value * 10) }],
  }));

  // Start animations when the component mounts
  React.useEffect(() => {
    titleOpacity.value = 1;
    descriptionOpacity.value = 1;
    paginationOpacity.value = 1;
  }, []);

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
              <Animated.Text style={[styles.title, titleStyle]}>{slide.title}</Animated.Text>
              <Animated.Text style={[styles.description, descriptionStyle]}>{slide.description}</Animated.Text>
            </View>
          ))}
        </ScrollView>
        <View style={styles.pagination}>
          {slides.map((_, index) => (
            <Animated.View
              key={index}
              style={[styles.paginationDot, paginationStyle, { opacity: index === currentPage ? 1 : 0.5 }]}
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
    
    justifyContent: 'center',
  },
  slide: {
    flex: 1, // Make the slide container take up the entire height of the screen
    alignItems: 'center', // Center items horizontally
    justifyContent: 'center', // Center items vertically
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff', // Change text color to white
    marginLeft: -10, // Adjust the marginLeft to move the text a little bit to the left
  },
  description: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff', // Change text color to white
    marginLeft: 0, // Adjust the marginLeft to move the text a little bit to the left
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
