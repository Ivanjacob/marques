import { View, Text } from 'react-native'
import { Box, HStack, Icon, Flex, Center, Pressable } from "native-base";
import { MaterialCommunityIcons, Ionicons, Entypo } from "@expo/vector-icons";
import React, { useState } from 'react'
import Colors from "../../color";
import Delivery from "./Components/Delivery";
import Completed from "./Components/Completed";
import Accepted from "./Components/Accepted";

const HomeScreen = () => {
    const [selectedOption, setSelectedOption] = useState("Available");

  return (
    <Box bg="ECEFF1" pb={20}>
      <HStack 
        roundedTop={10} 
        bg={Colors.white} 
        mt={2} 
        space={4} 
        justifyContent="space-between" 
        px={4} 
        ml={2}
        mr={2}
        h={12}
        direction="row"
        justifyItems="center" 
        alignItems="center"    // Center-align the items vertically
        >
            <Icon as={MaterialCommunityIcons} name="menu" size={6} color="white" _dark={{ color: "warmGray.50" }}  />
            <Text style={{ fontSize: 20, fontWeight: "bold" }} color="coolGray.50" _dark={{ color: "warmGray.50" }}>Today's Jobs</Text>
            <HStack position="relative">
                <Icon as={Ionicons} name="notifications" size={6} color="white" _dark={{ color: "warmGray.50" }} />
                <Entypo top={-1} start={1} position="absolute" name="dot-single" size={24} color="red" />
            </HStack>
        </HStack>
        <Box bg={Colors.newgray} ml={2} mr={2} roundedTop={10}>
            <Flex direction="row" mb="2.5" mt="4"  ml={6} mr={6} h={10}>
                <Pressable
                    flex={1}
                    onPress={() => {
                        setSelectedOption("Available");
                    }}
                >
                    <Center flex={1} bg={selectedOption === 'Available' ? Colors.press : Colors.newestgray} _text={{color: "coolGray.700"}}>Available</Center>
                </Pressable>
                <Pressable
                    flex={1}
                    onPress={() => {
                        setSelectedOption("Accepted");
                    }}
                >
                    <Center flex={1} bg={selectedOption === 'Accepted' ? Colors.press : Colors.newestgray} _text={{color: "coolGray.700"}}>Accepted</Center>
                </Pressable>
                <Pressable
                    flex={1}
                    onPress={() => {
                        setSelectedOption("Delivered");
                    }}
                >
                    <Center flex={1} bg={selectedOption === 'Delivered' ? Colors.press : Colors.newestgray} _text={{color: "coolGray.700"}}>Delivered</Center>
                </Pressable>
            </Flex>
            {/* Delivery Component */}
            {selectedOption === "Available" && <Delivery />}
            {/* Accepted Component */}
            {selectedOption === "Accepted" && <Accepted />}
            {/* Completed Component */}
            {selectedOption === "Delivered" && <Completed />}
        </Box>
    </Box>
  )
}

export default HomeScreen;