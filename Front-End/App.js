import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './Screens/home'; 
import StoreHome from './Screens/storehome'; 
import product from "./Screens/products";
import activity from "./Screens/activities"

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
