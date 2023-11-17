// Date: 2023/10/25
import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useContext, useState } from 'react';
import { NativeBaseProvider, StatusBar } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {AuthProvider} from "./src/Context/AuthContext";

import BottonNav from "./src/Navigations/BottonNav";

import HomeScreen from "./src/Screens/HomeScreen";
import LoginScreen from "./src/Screens/LoginScreen";
import RegisterScreen from "./src/Screens/RegisterScreen";
import OrderScren from "./src/Screens/OrderScreen";


import WelcomeNav from "./src/Navigations/WelcomeNav";
import FarmNav from "./src/Navigations/FarmNav";
import InventoryNav from "./src/Navigations/InventoryNav";

import DriverNav from "./src/Navigations/DriverNav";
import DriverLogin from "./src/Screens/LoginScreens/DriverLogin";

import Farmer from "./src/Screens/LoginScreens/Farmer";
import ManagerLogin from "./src/Screens/LoginScreens/ManagerLogin";

import MillNav from "./src/Navigations/MillNav";
import MillLogin from "./src/Screens/LoginScreens/MillLogin";

import useGlobal from "./src/core/global";

const Stack = createNativeStackNavigator(); 


export default function App() {

  const [initialized] = useState(true)
  const authenticated = useGlobal(state => state.authenticated)
  
  //const initialized = useGlobal(state => state.initialized)
  // const init = useGlobal(state => state.init)

  // useEffect(() => {
  //   init()
  // }, [])


  return (
    <NativeBaseProvider>
          <NavigationContainer>
            <StatusBar hidden={false}  /> 
              <Stack.Navigator 
                initialRouteName="Welcome"
                screenOptions={{
                  headerShown: false, // this will hide the header
                }}
              >
              {!initialized ? (
                <>
                  <Stack.Screen name="Nav" component={WelcomeNav} />
                </>
              ) : !authenticated ? (
                <>
                  <Stack.Screen name="Login" component={LoginScreen} />
                  <Stack.Screen name="Register" component={RegisterScreen} />
                </>
              ) : (
                <>
                  <Stack.Screen name="Bottom" component={BottonNav} /> 
                  <Stack.Screen name="Farmer-Login" component={Farmer} />
                  <Stack.Screen name="Farm" component={FarmNav} />
                  <Stack.Screen name="Manager-Login" component={ManagerLogin} />
                  <Stack.Screen name="Inventories" component={InventoryNav} />
                  <Stack.Screen name="Driver" component={DriverNav} />
                  <Stack.Screen name="Driver-Login" component={DriverLogin} />
                  <Stack.Screen name="Mill" component={MillNav} />
                  <Stack.Screen name="Mill-Login" component={MillLogin} />
                  
                  <Stack.Screen name="Order" component={OrderScren} />
                </>
              )}          
              </Stack.Navigator>
            </NavigationContainer>
      </NativeBaseProvider> 
  ); 
}
 