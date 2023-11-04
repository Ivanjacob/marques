// Date: 2023/10/25
import { StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider, StatusBar } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottonNav from "./src/Navigations/BottonNav";

import HomeScreen from "./src/Screens/HomeScreen";
import LoginScreen from "./src/Screens/LoginScreen";
import RegisterScreen from "./src/Screens/RegisterScreen";
import OrderScren from "./src/Screens/OrderScreen";
import WelcomeScreen from "./src/Screens/WelcomeScreen";
import AboutScreen from "./src/Screens/AboutScreen";
import AddStock from "./src/Screens/InventoryScreens/Components/AddStock";
import InventoryScreen from "./src/Screens/InventoryScreens/InventoryScreen";
import NotificationScreen from "./src/Screens/InventoryScreens/NotificationScreen";

import WelcomeNav from "./src/Navigations/WelcomeNav";
import FarmNav from "./src/Navigations/FarmNav";
import InventoryNav from "./src/Navigations/InventoryNav";

import Farmer from "./src/Screens/LoginScreens/Farmer";
import ManagerLogin from "./src/Screens/LoginScreens/ManagerLogin";

const Stack = createNativeStackNavigator();


export default function App() {
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
          
          <Stack.Screen name="Nav" component={WelcomeNav} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Farmer-Login" component={Farmer} />
          <Stack.Screen name="Farm" component={FarmNav} />
          <Stack.Screen name="Manager-Login" component={ManagerLogin} />
          <Stack.Screen name="Inventories" component={InventoryNav} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Order" component={OrderScren} />
          <Stack.Screen name="Bottom" component={BottonNav} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider> 
  ); 
}
