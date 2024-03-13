import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from './Screens/Onboarding.js'
import eventList from './Screens/events/EventList';
import EventDetails from './Screens/events/EventDetails';
import HomePage from './Screens/home'; 
import StoreHome from './Screens/storehome'; 
import ta9s from "./Screens/weather.js"
import outdoor from "./Screens/outdoor"
import activity from "./Screens/activities";
import Reshome from './Screens/reshome';
import Resourcess from "./Screens/resources"
import Guide from "./Screens/guide";
import Transport from './Screens/Transport';
import Serhome from './Screens/serhome'
import Emergency from './Screens/Emergency'
import Product from "./Screens/products";
import GamesScreen from './Screens/Games'; 
import campsite from "./Screens/campsites"
import Signin from  './Screens/Signin.js' ;
import HomeCommunity from "./Screens/HomeCommunity"; 
import SignUp from "./Screens/SingUp.js";
import settings from './Screens/settings'
import messenger from "./Screens/chat.js"
import Checklist from './Screens/Checklist.js'
import wishlist from './Screens/Wishlist.jsx'
import radioun from "./Screens/radio.js"
import ShoppingCartScreen from './Screens/shop.js';




const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ headerShown: false }} 
        />

<Stack.Screen 
        name="Signin" 
        component={Signin}
         />
      <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ title: 'Sign Up' }} 
        />
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="products"
          component={Product}
          options={{ title: 'Store' }}
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
          options={{ headerShown: false }} 
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
          name="Settings"
          component={settings}
          options={{ title: 'Settings' }}
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
        <Stack.Screen
  name='wishlist'
  component={wishlist} 
  options={{ title: 'wishlist' }}
/>
        <Stack.Screen
        name="campsites"
        component={campsite}  
        options={{ headerShown: false }} 
        />

        <Stack.Screen
        name="chat"
        component={messenger}  
        options={{ title: 'messenger' }}
        />
         <Stack.Screen
  name="Checklist"
  component={Checklist}
  options={{ title: 'Checklist' }}
/>
<Stack.Screen
        name="weather"
        component={ta9s}
        options={{ headerShown: false }} 
        />
        <Stack.Screen
        name="radio"
        component={radioun}
        options={{ title: 'Radio' }}
        />
        <Stack.Screen
        name="shop"
        component={ShoppingCartScreen}
        options={{ title: 'Radio' }}
        />
       
      </Stack.Navigator>
      
    </NavigationContainer>
  );
};

export default App;