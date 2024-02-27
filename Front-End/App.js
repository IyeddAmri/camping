import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductListScreen from './Screens/products'; 
import EventList from './Screens/events/EventList';
import EventDetails from './Screens/events/EventDetails';
  

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
        <Stack.Screen
          name="EventDetails"
          component={EventDetails}
          options={{ title: 'EventDetails'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
