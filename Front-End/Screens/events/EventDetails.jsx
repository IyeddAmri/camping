import React from 'react';
import { View, Text, Image , StyleSheet} from 'react-native';

const EventDetails = ({ route }) => {
  const { event } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Let's discover ✨</Text>
      <Image source={{ uri: event.ImageURL }} style={styles.image} />
      <Text style={styles.eventName}>{event.Name}</Text>
      <Text style={styles.dateTime}>{event.DateTime}</Text>
      <Text style={styles.description}>{event.Description}</Text>
      {/* <Text style={styles.category}>Category: {event.Category}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#444', // Change color to a darker shade
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  eventName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#1a73e8', // Change color to a primary color
  },
  dateTime: {
    fontSize: 16,
    marginBottom: 10,
    color: '#555',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 24, // Improve text readability with increased line height
    color: '#666',
  },
  // category: {
  //   fontSize: 16,
  //   color: '#888',
  // },
});

export default EventDetails;
