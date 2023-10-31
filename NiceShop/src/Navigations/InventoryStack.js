import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AlertScreen from "../Screens/InventoryScreens/AlertScreen";
import HomeScreen from "../Screens/InventoryScreens/HomeScreen";
import NotificationScreen from '../Screens/InventoryScreens/NotificationScreen';
import AddStockScreen from "../Screens/InventoryScreens/AddStockScreen";
import AddStock from "../Screens/InventoryScreens/Components/AddStock";

const Stack = createNativeStackNavigator();

const InventoryStack = () => {
  return (
    <Stack.Navigator
        initialRouteName="Inventory"
        screenOptions={{
            headerShown: false,
        }}
    >
        <Stack.Screen name="Inventory" component={HomeScreen} />
        <Stack.Screen name="Alert" component={AlertScreen} />
        <Stack.Screen name="Notifications" component={NotificationScreen} /> 
        <Stack.Screen name="AddStock" component={AddStockScreen} />
        <Stack.Screen name="Add" component={HomeScreen} /> 
    </Stack.Navigator>
  );
};

export default InventoryStack;