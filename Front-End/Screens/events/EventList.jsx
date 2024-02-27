

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EventDetails from './EventDetails';
import axios from 'axios';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    axios.get("http://localhost:5000/event/get")
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
      <Text style={styles.header}>Event List</Text>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id} 
        numColumns={2} // Set the number of columns to 2
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onViewDetails(item)} style={styles.eventContainer}>
            <View>
              <Image source={{ uri: item.ImageURL }} style={styles.eventImage} />
              <Text style={styles.eventName}>{item.Name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
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
  eventContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    marginLeft: 8, // Add margin to space out the cards
    marginRight: 8, // Add margin to space out the cards
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  eventImage: {
    width: 80,
    height: 80,
    borderRadius: 4,
    marginRight: 12,
  },
  eventName: {
    fontSize: 18,
  },
});

export default EventList;
