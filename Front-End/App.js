import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductListScreen from './Screens/products'; // Assuming ProductListScreen is in the Screens folder
import HomePage from './Screens/storehome'; // Assuming HomePage is in the Screens folder

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
          name="products"
          component={ProductListScreen}
          options={{ title: 'Product List' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
