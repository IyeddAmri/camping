import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Linking, ImageBackground } from 'react-native';
import axios from 'axios';

const Guide = () => {
  const [guides, setGuides] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.1.16:5000/guide/getAll');
        setGuides(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.backgroundContainer}>
      <ImageBackground
      
        style={styles.backgroundImage}
        blurRadius={2} // Adjust the blur radius as needed
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.container}>
            {guides.map((guide) => (
              <View key={guide.id} style={styles.guideContainer}>
                <Image source={{ uri: guide.imageUrl }} style={styles.image} />
                <View style={styles.textContainer}>
                  <Text style={styles.name}>{guide.name}</Text>
                  <Text style={styles.experience}>{guide.experience}</Text>
                  <Text style={styles.location}>{guide.location}</Text>
                  <Text style={styles.price}>Price: ${guide.price}</Text>
                </View>
              </View>
            ))}
            <View style={styles.emailContainer}>
              <Text style={styles.emailLabel}>Contact us to reserve a guide 😉:</Text>
              <TouchableOpacity
                style={styles.emailButton}
                onPress={() => {
                  const emailAddress = 'your.email@example.com'; // Replace with your email address
                  const subject = 'Guide Reservation';
                  const body = 'I would like to reserve a guide. Please provide me with more information.';
                  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                  Linking.openURL(mailtoLink);
                }}
              >
                <Text style={styles.emailButtonText}>Reserve Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: '#d9d4c3', // Set a background color as fallback
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  guideContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Transparent white background for better contrast
    borderRadius: 10,
    marginBottom: 20,
    paddingRight: 0,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    width: 150,
    height: 150,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  textContainer: {
    flex: 1,
    padding: 10,
    flexDirection: 'column',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333', // Darken text color
  },
  experience: {
    fontSize: 16,
    marginBottom: 5,
  },
  location: {
    fontSize: 16,
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007bff', // Blue color for price
  },
  emailContainer: {
    marginTop: 9,
    alignSelf: 'center',
  },
  emailLabel: {
    fontSize: 20, // Increase font size
    marginBottom: 10, // Increase bottom margin for spacing
    fontWeight: 'bold', // Make the text bold
    textAlign: 'center', // Align text to the center
    color: '#007bff', // Change text color to blue
    textDecorationLine: 'underline', // Add underline decoration
  },
  emailButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  emailButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Guide;
