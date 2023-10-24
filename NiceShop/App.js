import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider } from "native-base";
import HomeScreen from "./src/Screens/HomeScreen";
import ProfileScreen from "./src/Screens/ProfileScreen";

export default function App() {
  return (
    <NativeBaseProvider>
      <ProfileScreen />
    </NativeBaseProvider> 
  ); 
}
