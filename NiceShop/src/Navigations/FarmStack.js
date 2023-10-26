import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import AccountScreen from "../Screens/FarmerScreens/AccountScreen";
import FarmerScreen from "../Screens/FarmerScreens/FarmerScreen";
import StockScreen from "../Screens/FarmerScreens/StockScreen";

const Stack = createNativeStackNavigator();

const FarmStack = () => {
  return (
    <Stack.Navigator
        initialRouteName="Farm"
        screenOptions={{
            headerShown: false,
        }}
    >
        <Stack.Screen name="Farm" component={FarmerScreen} />
        <Stack.Screen name="Stock" component={StockScreen} />
        <Stack.Screen name="Account" component={AccountScreen} />
    </Stack.Navigator>
  );
};

export default FarmStack; 
