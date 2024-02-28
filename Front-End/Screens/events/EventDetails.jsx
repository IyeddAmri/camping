
import React from 'react';
import { View, Text, Image , StyleSheet} from 'react-native';

const EventDetails = ({ route }) => {
  const { event } = route.params;

  return (
    <View style={styles.container}>
      <Text>Event Details</Text>
      <Image source={{ uri: event.ImageURL }} style={{ width: 200, height: 200 }} />
      <Text>{event.Name}</Text>
      <Text>{event.DateTime}</Text>
      <Text>{event.Description}</Text>
      {/* <Text>Category: {event.Category}</Text> */}
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
  },
  // category: {
  //   fontSize: 16,
  //   color: '#888',
  // },
});

export default EventDetails;
