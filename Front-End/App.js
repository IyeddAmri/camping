import EventList from './Screens/events/EventList';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="EventList"
        component={EventList}
        options={{ title: 'event List' }}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
