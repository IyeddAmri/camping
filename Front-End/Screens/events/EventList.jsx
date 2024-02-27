import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image } from 'react-native';

import axios from 'axios';

const EventList = ({ onViewDetails }) => {
  const [events, setEvents] = useState([]);

useEffect(()=>{
  axios.get(`http://localhost:5000/event/get`)
  .then(function (response) {
    setEvents(response.data);
  })
  .catch(function (error) {
    console.log(error);
  })
},[])


  return (
    <View>
    <Text>event list</Text>
    <FlatList
      data={events}
      keyExtractor={(item) => item.id} 
      renderItem={({ item }) => (
        <View>
          <Image source={{ uri: item.ImageURL }} style={{ width: 100, height: 100 }} />
          <Text>{item.Name}</Text>
          <Text>{item.DateTime}</Text>
          <Text>{ item.Description}</Text>
          <Text>{item.Category}</Text>
        </View>
      )}
    />
  </View>
);
};

export default EventList;
