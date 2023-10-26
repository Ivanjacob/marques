import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialCommunityIcons, AntDesign, MaterialIcons, Entypo, Ionicons  } from '@expo/vector-icons';

import HomeScreen from "../Screens/HomeScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import CartScreen from "../Screens/CartScreen";
import WelcomeScreen from "../Screens/WelcomeScreen";
import AboutScreen from "../Screens/AboutScreen";
import AccountScreen from "../Screens/AccountScreen";

import { Center, Pressable } from "native-base";
import Colors from "../color";
import StackNav from './StackNav';

const Tab = createBottomTabNavigator();

const WelcomeNav = () => {
  return (
    <Tab.Navigator backBehavior='welcome' initialRouteName='Welcome' screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {...styles.tab},
        headerShown: false,
        tabBarHideOnKeyboard: true,
    }}>
        <Tab.Screen name="Welcome" component={WelcomeScreen } options={{
            tabBarIcon: ({focused}) => (
                <Center>
                    {focused ? ( 
                        <MaterialCommunityIcons name="home-circle" size={24} color={Colors.main} />
                    ) : (
                        <AntDesign name="home" size={24} color={Colors.black} />
                    )}
                </Center>
            ) 
        }}/>
        {/* Accounts */}
        <Tab.Screen name="Account" component={AccountScreen} options={{
            tabBarIcon: ({focused}) => (
                <Center>
                    {focused ? ( 
                        <MaterialIcons name="account-circle" size={24} color={Colors.main} />
                    ) : (
                        <MaterialIcons name="account-circle" size={24} color={Colors.black} />
                    )}
                </Center>
            ) 
        }}/>
        {/* About */}
        <Tab.Screen name="About" component={AboutScreen} options={{
            tabBarIcon: ({focused}) => (
                <Center>
                    {focused ? ( 
                        <Entypo name="info-with-circle" size={24} color={Colors.main} />
                    ) : (
                        <Entypo name="info-with-circle" size={24} color={Colors.black} />
                    )}
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


export default WelcomeNav;