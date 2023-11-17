// Date: 2023/10/25
import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useContext, useState } from 'react';
import { NativeBaseProvider, StatusBar } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {AuthProvider} from "./src/Context/AuthContext";
import BottonNav from "./src/Navigations/BottonNav";


import LoginScreen from "./src/Screens/LoginScreen";
import RegisterScreen from "./src/Screens/RegisterScreen";

import BottonNav from "./src/Navigations/BottonNav";


import { AuthContext } from "./src/Context/AuthContext";

const Stack = createNativeStackNavigator(); 

const Navigation = () => {
    const {userInfor} = useContext(AuthContext);
    
    return (
        
        <NavigationContainer>
            <Stack.Navigator>
                {userInfor.access ? (
                    <Stack.Screen name="Bottom" component={BottonNav} />
                ) : (
                    <>
                        <Stack.Screen name="Login" component={LoginScreen} />
                        <Stack.Screen name="Register" component={RegisterScreen} />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
