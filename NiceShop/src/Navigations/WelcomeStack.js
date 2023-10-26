import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../Screens/WelcomeScreen';
import AboutScreen from '../Screens/AboutScreen';
import AccountScreen from '../Screens/AccountScreen';

const Stack = createNativeStackNavigator();

const WelcomeStack = () => {
  return (
    <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
            headerShown: false,
        }}
    >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Account" component={AccountScreen} />
    </Stack.Navigator>
  );
};

export default WelcomeStack; 
