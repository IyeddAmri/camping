import React from 'react';
import { View, Text, FlatList } from 'react-native';
import mockData from '../Screens/mockData';

const YourComponent = () => {
  return (
    <View>
      {/* Displaying search parameters */}
      <Text>Search Engine: {mockData.search_parameters.engine}</Text>
      <Text>Query: {mockData.search_parameters.q}</Text>
      <Text>Location: {mockData.search_parameters.ll}</Text>

      {/* Displaying ads */}
      <Text>Ads:</Text>
      <FlatList
        data={mockData.ads}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>Position: {item.position}</Text>
            <Text>Title: {item.title}</Text>
            {/* Add more fields as needed */}
          </View>
        )}
      />

      {/* Displaying local results */}
      <Text>Local Results:</Text>
      <FlatList
        data={mockData.local_results}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>Position: {item.position}</Text>
            <Text>Title: {item.title}</Text>
            {/* Add more fields as needed */}
          </View>
        )}
      />
    </View>
  );
};

export default YourComponent;
