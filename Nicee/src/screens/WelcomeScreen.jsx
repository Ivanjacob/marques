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
  
  
  
  import { NativeBaseProvider } from "native-base";
  
  function WelcomeScreen({navigation}) {
    return (
      <Box flex={1} bg={Colors.black}>
        <Box w="full" h="full" position="absolute" top="0">
          <Image
            source={{ uri: "https://images.unsplash.com/photo-1554189097-ffe88e998a2b?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}}
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

            <VStack space={3} pt="6" alignItems="center">      
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
                    onPress={() => navigation.navigate("Mill-Login")}
                >
                    MILL MANAGER
                </Buttone>
                {/* Driver */}
                <Buttone
                    bg={Colors.main}
                    onPress={() => navigation.navigate("Driver-Login")}
                >
                    DELIVERY DRIVER
                </Buttone>
            </VStack>
        </Box>
      </Box> 
    );
  }
  export default WelcomeScreen;
  