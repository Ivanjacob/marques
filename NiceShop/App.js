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

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
      <StatusBar hidden={true} />
        <Stack.Navigator
          initialRouteName="Bottom"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Order" component={OrderScren} />
          <Stack.Screen name="Bottom" component={BottonNav} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider> 
  ); 
}
