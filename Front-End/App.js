import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import eventList from './Screens/events/EventList';
import EventDetails from './Screens/events/EventDetails';
import HomePage from './Screens/home'; 
import StoreHome from './Screens/storehome'; 
import product from "./Screens/products";
import GamesScreen from './Screens/Games'; 
import outdoor from "./Screens/outdoor"
import HomeCommunity from "./Screens/HomeCommunity"; 
import activity from "./Screens/activities";
import Reshome from './Screens/reshome';
import Resourcess from "./Screens/resources"
import Guide from "./Screens/guide";
import Transport from './Screens/Transport';
import Serhome from './Screens/serhome'
import Emergency from './Screens/Emergency'


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
        <Stack.Screen
          name="reshome"
          component={Reshome}
          options={{ title: 'Resources' }}
        />
        <Stack.Screen
          name="resources"
          component={Resourcess}
          options={{ title: 'Resourcesss' }}
        />
          <Stack.Screen
          name="serhome"
          component={Serhome}
          options={{ title: 'Serhome' }}
        />
         <Stack.Screen name="Transport" 
         component={Transport} 
         options={{ title: 'Transport' }} />
         <Stack.Screen name="Guide" 
         component={Guide} 
         options={{ title: 'Guide' }} />
          <Stack.Screen
          name="Emergency"
          component={Emergency}  
          options={{ title: 'Emergency' }}
        />
     
      </Stack.Navigator>
      
    </NavigationContainer>
  );
};

export default App;