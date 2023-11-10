import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../Screens/MillScreens/HomeScreen';
import Bookings from '../Screens/MillScreens/Bookings';
import QueueScreen from '../Screens/MillScreens/QueueScreen';

const Stack = createNativeStackNavigator();

const MillStack = () => {
  return (
    <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
            headerShown: false,
        }}
    >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Bookings" component={Bookings} />
        <Stack.Screen name="Queues" component={QueueScreen} />
    </Stack.Navigator>
  );
};

export default MillStack; 