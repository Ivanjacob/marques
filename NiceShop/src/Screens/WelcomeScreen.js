import { 
    Box, 
    Image, 
    Text, 
    View, 
    Heading,
    Flex, 
    VStack,
    HStack, 
    Input, 
    Button,
    Pressable,
  } from 'native-base'
  import React from 'react'
  import Colors  from "../color";
  import Buttone from "../Components/Buttone"
  
  import { MaterialCommunityIcons, MaterialIcons, Entypo, Ionicons  } from '@expo/vector-icons';

  
  import { NativeBaseProvider } from "native-base";
  
  function WelcomeScreen({navigation}) {
    return (
      <Box flex={1} bg={Colors.black}>
        <Box w="full" h="full" position="absolute" top="0">
          <Image
            source={require("../../assets/logo.jpg")}
            alt="login"
            resizeMode="cover"
            height="100%"
            flex={1}
            width="100%"
          />
          
        </Box>
        <Flex
            flex={1} 
            direction='row' 
            flexWrap="wrap" 
            justifyContent="space-around" 
            alignItems="center"
            pt={16}
        >
            <Heading alignContent='center' >NICE RICE MILLERS LTD</Heading>
        </Flex>
        <Box
          w="full"
          h="full"
          position="absolute"
          top="0"
          px="6"
          justifyContent="center"
        >

            <VStack space={5} pt="6" alignItems="center">      
                {/* CUSTOMER */}
                <Buttone
                    bg={Colors.main}
                    onPress={() => navigation.navigate("Login")}
                >
                    CUSTOMER
                </Buttone>
        
                {/* FARMER */}
                <Buttone
                    bg={Colors.main}
                    onPress={() => navigation.navigate("Farmer-Login")}
                >
                    FARMER
                </Buttone>
                {/* INVENTORY MANAGER */}
                <Buttone
                    bg={Colors.main}
                    alignItems="stretch"
                    onPress={() => navigation.navigate("Manager-Login")}
                >
                    
                    INVENTORY MANAGER
                </Buttone>
                {/* FINANCE MANAGER */}
                 <Buttone
                    bg={Colors.main}
                    onPress={() => navigation.navigate("Manager-Login")}
                >
                    FINANCE MANAGER
                </Buttone>
                {/* MILL MANAGER */}
                <Buttone
                    bg={Colors.main}
                    onPress={() => navigation.navigate("Manager-Login")}
                >
                    MILL MANAGER
                </Buttone>
            </VStack>
        </Box>
      </Box> 
    );
  }
  export default WelcomeScreen;
  
  
//   <HStack justifyContent="space-between" mt={6}>
//                 <Pressable mt={4} onPress={() => navigation.navigate("About")} >
//                     <Entypo name="info-with-circle" size={24} color="black" />
//                 </Pressable>
//                 <Pressable mt={4} onPress={() => navigation.navigate("About")} >
//                     <MaterialCommunityIcons name="account-question" size={28} color="black" />
//                 </Pressable>
//                 <Pressable mt={4} onPress={() => navigation.navigate("Welcome")} >
//                 <MaterialCommunityIcons name="home-circle" size={28} color="black" />
//                 </Pressable>
//             </HStack>