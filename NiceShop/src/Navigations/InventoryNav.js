import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialCommunityIcons, AntDesign, MaterialIcons, Entypo, Ionicons, Foundation   } from '@expo/vector-icons';
import { Center, Pressable } from "native-base";

import AlertScreen from "../Screens/InventoryScreens/AlertScreen";
import HomeScreen from "../Screens/InventoryScreens/HomeScreen";
import NotificationScreen from '../Screens/InventoryScreens/NotificationScreen';

import Colors from "../color";


const Tab = createBottomTabNavigator();

const InventoryNav = () => {
  return (
    <Tab.Navigator  backBehavior='inventory' initialRouteName='Inventory' screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {...styles.tab},
        headerShown: false,
        tabBarHideOnKeyboard: true,
    }}>

    {/* Alerts */}
        <Tab.Screen name="Alert" component={AlertScreen} options={{
            tabBarIcon: ({focused}) => (
                <Center>
                    <Foundation name="alert" size={24} color={focused ? Colors.black : Colors.white} />
                </Center>
            )
        }}/> 
        {/* Inventory Home */}
        <Tab.Screen name="Inventory" component={HomeScreen} options={{
            tabBarIcon: ({focused}) => (
                <Center>
                    <MaterialCommunityIcons name="home" size={24} color={focused ? Colors.black : Colors.white} />
                </Center>
            )
        }}/> 
        {/* Notifications */}
        <Tab.Screen name="Notification" component={NotificationScreen} options={{
            tabBarIcon: ({focused}) => (
                <Center>
                    <Ionicons name="notifications" size={24} color={focused ? Colors.black : Colors.white} />
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

export default InventoryNav