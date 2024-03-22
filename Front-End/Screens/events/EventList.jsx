import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EventDetails from './EventDetails';
import axios from 'axios';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    axios.get("http://192.168.176.188:5000/event/get")
      .then(function (response) {
        setEvents(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, []);

  const onViewDetails = (event) => {
    navigation.navigate('EventDetails', { event });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Explore Tunisia⛺</Text>
      <View style={styles.eventRow}>
        {events.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => onViewDetails(item)}
            style={styles.eventContainer}
          >
            <View>
              <Image source={{ uri: item.ImageURL }} style={styles.eventImage} />
              <Text style={styles.eventName}>{item.Name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f4f4f4',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  eventRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  eventContainer: {
    width: '48%', // Adjust width to fit two boxes in one line with a small gap
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    padding: 12,
    alignItems: 'center',
  },
  eventImage: {
    width: '100%',
    aspectRatio: 1, // Maintain aspect ratio for the image
    borderRadius: 4,
    marginBottom: 8,
  },
  eventName: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default EventList;
