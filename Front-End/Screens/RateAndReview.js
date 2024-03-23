import React from 'react';
import { Alert, TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const RateAndReview = () => {
  const handleRateAndReviewPress = () => {
    Alert.alert(
      'Rate & Review',
      'How much did you like our app?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Excellent', onPress: () => handleRating(5) },
        { text: 'Good', onPress: () => handleRating(4) },
        { text: 'Average', onPress: () => handleRating(3) },
        { text: 'Poor', onPress: () => handleRating(2) },
        { text: 'Terrible', onPress: () => handleRating(1) },
      ],
      { cancelable: true }
    );
  };

  const handleRating = (rating) => {
    
    console.log(`User rated the app ${rating} stars`);
    
    Alert.alert(
      'Thank You!',
      'Your rating has been submitted. We appreciate your feedback!'
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleRateAndReviewPress}>
        <Icon name="star" size={20} color="#FFD700" />
        <Text style={styles.buttonText}> Rate & Review</Text>
      </TouchableOpacity>
      <Text style={styles.description}>Your feedback helps us improve. Thank you for taking the time to rate our app!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#800080', // Purple color
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 18,
    color: '#fff', // White color
  },
  description: {
    marginTop: 20,
    fontSize: 16,
    color: '#333', // Dark gray color
    textAlign: 'center',
  },
});

export default RateAndReview;
