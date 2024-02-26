import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductListScreen from './Screens/HomeScreen'; // Assuming ProductListScreen is in the Screens folder

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
