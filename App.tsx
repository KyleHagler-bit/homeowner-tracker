import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabsStack from './src/screens/tabs/TabsStack/TabsStack';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="App Name" component={TabsStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
