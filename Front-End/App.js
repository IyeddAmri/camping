import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductListScreen from './Screens/products'; 
import eventList from './Screens/events/EventList';
import EventDetails from './Screens/events/EventDetails';
import HomePage from './Screens/home'; 
import StoreHome from './Screens/storehome'; 
import product from "./Screens/products";
import activity from "./Screens/activities"
// import HomeCommunity from "./Screens/HomeCommunity"; 

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="storehome"
          component={StoreHome}
          options={{ title: 'Store' }}
        />
        <Stack.Screen
          name="products"
          component={product}
          options={{ title: 'Store' }}
        />
        <Stack.Screen
          name="activities"
          component={activity}
          options={{ title: 'Activities' }}
        />
        {/* <Stack.Screen
          name="HomeCommunity"
          component={HomeCommunity}
          options={{ title: 'HomeCommunity' }}
        /> */}
        <Stack.Screen
          name="EventList"
          component={eventList}
          options={{ title: 'Community' }}
        />
        <Stack.Screen
          name="EventDetails"
          component={EventDetails}
          options={{ title: 'Event Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
