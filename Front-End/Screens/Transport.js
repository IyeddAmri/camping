import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Linking } from 'react-native';
import axios from 'axios';

const Transport = () => {
  const [transportData, setTransportData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.110.188:5000/trans/getAll');
        setTransportData(response.data);
      } catch (error) {
        console.error('Error fetching transport data:', error);
      }
    };

    fetchData();
  }, []);

  const sendEmail = () => {
    const emailAddress = 'your.email@example.com'; // Replace with your email address
    const subject = 'Transport Reservation';
    const body = 'I would like to reserve a transport. Please provide me with more information.';
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    Linking.openURL(mailtoLink);
  };

  return (
    <View style={styles.backgroundContainer}>
      <Image
       
        style={styles.backgroundImage}
        blurRadius={2}
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          {transportData.map((transport) => (
            <View key={transport.id} style={styles.transportContainer}>
              <Image source={{ uri: transport.imageUrl }} style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={styles.name}>Name: {transport.driver_name}</Text>
                <Text style={styles.option}>Car Option: {transport.car_option}</Text>
                <Text style={styles.places}>Available Places: {transport.available_places}</Text>
                <Text style={styles.price}>Price: {transport.price}</Text>
              </View>
            </View>
          ))}
          <View style={styles.emailContainer}>
            <Text style={styles.emailLabel}>Contact us to reserve a transport 😉:</Text>
            <TouchableOpacity
              style={styles.emailButton}
              onPress={() => {
                // Handle contact logic here, such as opening an email application with your email pre-filled
                const emailAddress = 'your.email@example.com'; // Replace with your email address
                const subject = 'Transport Reservation';
                const body = 'I would like to reserve a transport. Please provide me with more information.';
                const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                Linking.openURL(mailtoLink);
              }}
            >
              <Text style={styles.emailButtonText}>Reserve Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  
  backgroundContainer: {
    flex: 1,
    backgroundColor: '#d9d4c3', // Earthy tone, reminiscent of soil or sand
},
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    position: 'absolute',
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
  transportContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    marginBottom: 20,
    paddingRight :0,
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
    color: '#333', 
  },
  option: {
    fontSize: 16,
    marginBottom: 5,
  },
  places: {
    fontSize: 16,
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007bff',
  },
  emailContainer: {
    marginTop: 9,
    alignSelf: 'center',
   
  },
  emailLabel: {
    fontSize: 20, // Increase font size
    marginBottom: 10, // Increase bottom margin for spacing
    fontWeight: 'bold', // Make the text bold
    textAlign: 'center', 
    color: '#007bff', 
    textDecorationLine: 'underline', 
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

export default Transport;
