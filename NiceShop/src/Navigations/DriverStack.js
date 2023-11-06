import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "../Screens/DriverScreens/HomeScreen";
import NotificationScreen from "../Screens/DriverScreens/NotificationScreen";
import AccrountScreen from "../Screens/DriverScreens/AccountScreen";

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
        <Stack.Screen name="Account" component={AccrountScreen} />
    </Stack.Navigator>
  );
};

export default DriverStack;