import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialCommunityIcons, AntDesign, MaterialIcons, Entypo, Ionicons, Foundation   } from '@expo/vector-icons';
import { Center, Pressable } from "native-base";

import HomeScreen from '../Screens/MillScreens/HomeScreen';
import Bookings from '../Screens/MillScreens/Bookings';
import QueueScreen from '../Screens/MillScreens/QueueScreen';


import Colors from "../color";
import MillStack from './MillStack';


const Tab = createBottomTabNavigator();


const MillNav = () => {
  return (
    <Tab.Navigator  backBehavior='mill' initialRouteName='Mill' screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {...styles.tab},
        headerShown: false,
        tabBarHideOnKeyboard: true,
    }}>       
        {/* Inventory Home */}  
        <Tab.Screen name="Main" component={MillStack} options={{
            tabBarIcon: ({focused}) => (
                <Center>
                    <MaterialIcons  name="home" size={24} color={focused ? Colors.black : Colors.white} />
                </Center>
            )
        }}/> 
        {/* Bookings */}
        <Tab.Screen name="Book" component={Bookings} options={{
            tabBarIcon: ({ focused }) => (
                <Center>
                    <MaterialIcons name="queue" size={24} color={focused ? Colors.black : Colors.white} />
                </Center>
            )
        }} />
        {/* Queue */}
        <Tab.Screen name="Queues" component={QueueScreen} options={{
            tabBarIcon: ({focused}) => (
                <Center>
                    <MaterialCommunityIcons  name="human-queue" size={24} color={focused ? Colors.black : Colors.white} />
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

export default MillNav;