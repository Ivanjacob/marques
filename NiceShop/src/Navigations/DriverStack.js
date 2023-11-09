import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "../Screens/DriverScreens/HomeScreen";
import NotificationScreen from "../Screens/DriverScreens/NotificationScreen";
import AccountScreen from "../Screens/DriverScreens/AccountScreen";
import DestinationScreen from "../Screens/DriverScreens/DestinationScreen";
import OpenCamera from '../Screens/DriverScreens/OpenCamera';

const Stack = createNativeStackNavigator();

const DriverStack = () => {
  return (
    <Stack.Navigator
        initialRouteName="Driver"
        screenOptions={{
            headerShown: false,
        }}
    >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Notifications" component={NotificationScreen} /> 
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="Destination" component={DestinationScreen} />
        <Stack.Screen name="OpenCamera" component={OpenCamera} />
    </Stack.Navigator>
  );
};

export default DriverStack;