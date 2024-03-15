import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Expo

const CampingBookingScreen = ({ navigation }) => {
  const [bookingInfo, setBookingInfo] = useState({
    locationType: '',
    locationName: '',
    date: '',
    numberOfPeople: '',
    contactInfo: '',
    specialRequests: '',
  });

  const handleInputChange = (key, value) => {
    setBookingInfo({ ...bookingInfo, [key]: value });
  };

  const handleSubmit = () => {
    // Validation
    if (!bookingInfo.locationType || !bookingInfo.locationName || !bookingInfo.date || !bookingInfo.numberOfPeople || !bookingInfo.contactInfo) {
      Alert.alert('Please fill in all required fields.');
      return;
    }
    
    // Submit logic
    console.log('Booking Info:', bookingInfo);
    // You can add logic here to send the bookingInfo to your backend

    // Reset form after submission
    setBookingInfo({
      locationType: '',
      locationName: '',
      date: '',
      numberOfPeople: '',
      contactInfo: '',
      specialRequests: '',
    });
    Alert.alert('Booking successful!');
  };

  // Navigate to price screen
  const handlePriceMethodPress = () => {
    navigation.navigate('Price');
  };

  // Handle going back
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={goBack}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.heading}>Book a Camping Location</Text>
      <TextInput
        style={styles.input}
        placeholder="Type of Location (e.g., Campground, Guesthouse)"
        value={bookingInfo.locationType}
        onChangeText={(text) => handleInputChange('locationType', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Location Name"
        value={bookingInfo.locationName}
        onChangeText={(text) => handleInputChange('locationName', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Date (DD/MM/YYYY)"
        value={bookingInfo.date}
        onChangeText={(text) => handleInputChange('date', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Number of People"
        value={bookingInfo.numberOfPeople}
        onChangeText={(text) => handleInputChange('numberOfPeople', text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Your Contact Information"
        value={bookingInfo.contactInfo}
        onChangeText={(text) => handleInputChange('contactInfo', text)}
      />
      <TextInput
        style={[styles.input, styles.multilineInput]} // Apply additional styles for multiline input
        placeholder="Any Special Requests?"
        value={bookingInfo.specialRequests}
        onChangeText={(text) => handleInputChange('specialRequests', text)}
        multiline // Allow multiline input
        numberOfLines={4} // Set number of lines visible by default
      />
      <TouchableOpacity style={styles.priceButton} onPress={handlePriceMethodPress}>
        <Text style={styles.priceButtonText}>Select Price Method</Text>
      </TouchableOpacity>
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333', // Text color related to camping
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 10, // 1.25 rem border radius
    backgroundColor: '#fff', // Background color
  },
  multilineInput: {
    height: 100, // Increase height for multiline input
  },
  priceButton: {
    backgroundColor: '#18C0C1',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  priceButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1, // Ensure the button stays on top
  },
});

export default CampingBookingScreen;
