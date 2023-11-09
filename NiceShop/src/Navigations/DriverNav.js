import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialCommunityIcons, AntDesign, MaterialIcons, Entypo, Ionicons, Foundation   } from '@expo/vector-icons';
import { Center, Pressable } from "native-base";

import HomeScreen from "../Screens/DriverScreens/HomeScreen";
import NotificationScreen from "../Screens/DriverScreens/NotificationScreen";
import AccountScreen from "../Screens/DriverScreens/AccountScreen";
import DestinationScreen from "../Screens/DriverScreens/DestinationScreen";

import Colors from "../color";
import DriverStack from './DriverStack';


const Tab = createBottomTabNavigator();


const DriverNav = () => {
  return (
    <Tab.Navigator  backBehavior='inventory' initialRouteName='Inventory' screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {...styles.tab},
        headerShown: false,
        tabBarHideOnKeyboard: true,
    }}>       
        {/* Inventory Home */}  
        <Tab.Screen name="Main" component={DriverStack} options={{
            tabBarIcon: ({focused}) => (
                <Center>
                    <MaterialCommunityIcons name="home" size={24} color={focused ? Colors.black : Colors.white} />
                </Center>
            )
        }}/> 
        {/* Account */}
        <Tab.Screen name="Account" component={AccountScreen} options={{
            tabBarIcon: ({ focused }) => (
                <Center>
                    <MaterialCommunityIcons name="account" size={24} color={focused ? Colors.black : Colors.white} />
                </Center>
            )
        }} />
        {/* Destination */}
        <Tab.Screen name="Destination" component={DestinationScreen} options={{
            tabBarIcon: ({focused}) => (
                <Center>
                    <Ionicons name="ios-location" size={24} color={focused ? Colors.black : Colors.white} />
                </Center>
            )
        }}/> 
    </Tab.Navigator>
  )
}


const styles = StyleSheet.create({
    tab: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        elevation: 0,
        backgroundColor: Colors.white,
        borderTopWidth: 0,
        height: 60,
        
    },
});

export default DriverNav;