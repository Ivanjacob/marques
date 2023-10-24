import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider } from "native-base";
import HomeScreen from "./src/Screens/HomeScreen";
import OrderScreen from "./src/Screens/OrderScreen";

export default function App() {
  return (
    <NativeBaseProvider>
      <OrderScreen />
    </NativeBaseProvider> 
  ); 
}
