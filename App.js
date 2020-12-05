import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Screens/Home'
import DatePicker from './Screens/DatePicker';
import AddItem from './Screens/AddItem';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home' }}
        />
        <Stack.Screen name="DatePicker" component={DatePicker} options={{ title: 'Date Picker' }}
        
        />
        <Stack.Screen name="AddItem" component={AddItem} options={{ title: 'ADD Items' }}
        
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App