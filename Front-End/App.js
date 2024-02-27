import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductListScreen from './Screens/products'; // Assuming ProductListScreen is in the Screens folder
import EventList from './Screens/events/EventList';
  
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="EventList"
        component={EventList}
        options={{ title: 'event List' }}
      />
        <Stack.Screen
          name="ProductList"
          component={ProductListScreen}
          options={{ title: 'Product List' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
