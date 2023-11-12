import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../Screens/HomeScreen';
import SingleProductScreen from '../Screens/SingleProductScreen';
import ShippingScreen from '../Screens/ShippingScreen';
import PaymentScreen from '../Screens/PaymentScreen';
import PlaceOrderScreen from '../Screens/PlaceOrderScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import DeliveryScreen from "../Screens/DeliveryScreen";

import { AuthContext } from '../Context/AuthContext';

const Stack = createNativeStackNavigator();

const StackNav = () => {
  

  return (
    <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
            headerShown: false,
        }}
    >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Single" component={SingleProductScreen} />
        <Stack.Screen name="Shipping" component={ShippingScreen} />
        <Stack.Screen name="Delivery" component={DeliveryScreen} />
        <Stack.Screen name="Checkout" component={PaymentScreen} />
        <Stack.Screen name="Placeorder" component={PlaceOrderScreen} /> 
        <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default StackNav; 