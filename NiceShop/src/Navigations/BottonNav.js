import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Entypo, AntDesign } from '@expo/vector-icons';

import HomeScreen from "../Screens/HomeScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import CartScreen from "../Screens/CartScreen";

import { Center, Pressable } from "native-base";
import Colors from "../color";
import StackNav from './StackNav';


const Tab = createBottomTabNavigator();
const CustomTab = ({children,onPress}) => (
    <Pressable
        onPress={onPress}
        h={70}
        w={70}
        rounded="full"
        bg={Colors.main}
        top={-30}
        shadow={2}
    >
    {children}
    </Pressable>
);

const BottonNav = () => {
  return (
    <Tab.Navigator backBehavior="main" initialRouteName="Main" screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {...styles.tab},
        headerShown: false,
        tabBarHideOnKeyboard: true,
    }}>
        <Tab.Screen name="Main" component={StackNav } options={{ 
            tabBarIcon: ({focused}) => (
                <Center>
                    {focused ? ( 
                        <Entypo name="home" size={24} color={Colors.main} />
                    ) : (
                        <AntDesign name="home" size={24} color={Colors.black} />
                    )}
                </Center>
            ) 
        }}/>
        {/* CART */}
        <Tab.Screen 
            name="Cart"
            component={CartScreen} 
            options={{
                tabBarButton: (props) => <CustomTab {...props} />,
                tabBarIcon: ({focused}) => (
                    <Center>
                        {focused ? ( 
                            <Entypo name="shopping-cart" size={24} color={Colors.main} />
                        ) : (
                            <AntDesign name="shoppingcart" size={24} color={Colors.black} />
                        )}
                    </Center>
                )
            }}/>
        {/* ORDER */}
        {/* PROFILE */}
        <Tab.Screen name="Profile" component={ProfileScreen} options={{
            tabBarIcon: ({focused}) => (
                <Center>
                    {focused ? ( 
                        <Entypo name="user" size={24} color={Colors.main} />
                    ) : (
                        <AntDesign name="user" size={24} color={Colors.black} />
                    )}
                </Center>
            )
        }}/>
    </Tab.Navigator>
  );
};


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

export default BottonNav;

