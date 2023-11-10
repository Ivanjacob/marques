import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialCommunityIcons, AntDesign, MaterialIcons, Entypo, Ionicons  } from '@expo/vector-icons';


import AboutScreen from "../Screens/AboutScreen";
import AccountScreen from "../Screens/AccountScreen";

import { Center, Pressable } from "native-base";

import Colors from "../color";
import WelcomeStack from './WelcomeStack';

const Tab = createBottomTabNavigator();

const WelcomeNav = () => {
  return (
    <Tab.Navigator backBehavior='welcome' initialRouteName='Welcome' screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {...styles.tab},
        headerShown: false,
        tabBarHideOnKeyboard: true,
    }}>
        <Tab.Screen name="Welcome" component={WelcomeStack } options={{
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