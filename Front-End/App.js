import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import eventList from './Screens/events/EventList';
import EventDetails from './Screens/events/EventDetails';
import HomePage from './Screens/home'; 
import StoreHome from './Screens/storehome'; 
import Product from "./Screens/products";
import activity from "./Screens/activities";
import GamesScreen from './Screens/Games'; 
import outdoor from "./Screens/outdoor";
import Signin from  './Screens/Signin.js' ;
import HomeCommunity from "./Screens/HomeCommunity"; 
import SignUp from "./Screens/SingUp.js";


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Signin'
          component={Signin}
          options={{ title: 'login'}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          //options={{ title: 'Sign Up' }} 
        />
        <Stack.Screen
          name="products"
          component={Product}
          options={{ title: 'Store' }}
        />
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
          name="activities"
          component={activity}
          options={{ title: 'Activities' }}
        />
        <Stack.Screen
          name="Games"
          component={GamesScreen}
          options={{ title: 'Games' }} 
        />
        <Stack.Screen
          name="outdoor"
          component={outdoor}
          options={{ title: 'OutDoor' }} 
        />
        <Stack.Screen
          name="HomeCommunity"
          component={HomeCommunity}
          options={{ title: 'HomeCommunity' }}
        />
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
