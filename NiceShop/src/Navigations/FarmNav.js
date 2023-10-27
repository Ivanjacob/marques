import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialCommunityIcons, AntDesign, MaterialIcons, Entypo, Ionicons  } from '@expo/vector-icons';

import FarmerScreen from "../Screens/FarmerScreens/FarmerScreen";
import StockScreen from "../Screens/FarmerScreens/StockScreen";
import QueueScreen from '../Screens/FarmerScreens/QueueScreen';
import AccountScreen from '../Screens/FarmerScreens/AccountScreen';



import { Center, Pressable } from "native-base";
import Colors from "../color";
import StackNav from './StackNav';

const Tab = createBottomTabNavigator();

const FarmNav = () => {
  return (
    <Tab.Navigator backBehavior='farm-home' initialRouteName='Farm-Home' screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {...styles.tab},
        headerShown: false,
        tabBarHideOnKeyboard: true,
    }}>
        <Tab.Screen name="Farm-Home" component={FarmerScreen } options={{
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
        {/* Stock */}
        <Tab.Screen name="Stock" component={StockScreen} options={{
            tabBarIcon: ({focused}) => (
                <Center>
                    {focused ? ( 
                        <MaterialCommunityIcons name="store-check" size={24} color={Colors.main} />
                    ) : (
                        <MaterialCommunityIcons name="store-check-outline" size={24} color={Colors.black} />
                    )}
                </Center>
            ) 
        }}/>
        {/* Queue */}
        <Tab.Screen name="Queue" component={QueueScreen} options={{
            tabBarIcon: ({focused}) => (
                <Center>
                    {focused ? ( 
                        <MaterialCommunityIcons name="human-queue" size={24} color={Colors.main} />
                    ) : (
                        <MaterialCommunityIcons name="human-queue" size={24} color={Colors.black} />
                    )}
                </Center>
            ) 
        }}/>
        {/* Account */}
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


export default FarmNav;