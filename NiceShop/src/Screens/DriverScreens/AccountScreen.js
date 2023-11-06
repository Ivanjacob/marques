// Date: 09/08/2021
import { View, Heading, Text, Center, Image, Box, Flex, HStack, VStack, Stack, ScrollView, ZStack } from 'native-base'
import React from 'react'
import Colors from "../../color"
import { Ionicons, AntDesign, FontAwesome5, EvilIcons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';


const Spacer = () => (
    <Box flex={1} />
);

const AccountScreen = () => {
  return (
    <ScrollView bg={Colors.subGreen} space={3} pt={1}>
        <Box bg="amber.500" pt={4} pb={150} mr={1} ml={1} rounded="lg" >
            <Flex 
              direction='row'  
              alignItems="normal" 
              justifyContent="space-between" 
              justifyItems="space-between" 
              mr={2} 
              ml={2} 
              overflow="visible"
              overflowY={3}
              overflowX={4}
            >
                <MaterialIcons name="menu" size={24} color="white" />
                <Text color={Colors.white} fontSize={20} bold textAlign="center" alignSelf="center" >
                    Account
                </Text>
                <EvilIcons name="search" size={24} color="white" />
            </Flex>

        </Box>
        <VStack ml={5} mt={8} pb={10} space={4} alignItems="center" >   
            <ZStack mt={-1} alignSelf="center" >
                <Box 
                    position="absolute"
                    bottom={-45}
                    alignSelf="center"
                    zIndex={10}
                    overflow="visible"
                    overflowY={3}
                    overflowX={4}
                >
                    <Image
                        source={{ uri: "https://i.pravatar.cc/150?img=16" }}
                        alt="Alternate"
                        size={100}
                        borderWidth={2}
                        resizeMode="contain"
                        borderRadius="full"
                        borderColor="white"
                    />
                    <Text  color={Colors.black} fontSize={20} bold textAlign="center" alignSelf="center" >
                        Jacob Evans
                    </Text> 
                </Box>
            </ZStack>
        </VStack>
        <Box pt={10} pb={30} >
            <Heading  color="gray.500" fontSize="20" textDecoration="gray" italic >
                General
            </Heading>
            <VStack ml={5} mt={8} pb={10} space={2} alignItems="flex-start" mr={4} >
                <Center w="full" h="20" bg="white" rounded="md" shadow={3}>
                    <HStack space={4} alignItems="flex-start" alignSelf="flex-start" ml={2} mr={2}>
                        <MaterialCommunityIcons name="account" size={24} color="white" />
                        <Text color={Colors.black} fontSize={20}  textAlign="center" alignSelf="flex-start" >
                           Update Profile
                        </Text>
                        <Spacer/>
                        <AntDesign name="right" size={20} color="black" alignSelf="center" />
                    </HStack>
                </Center>
                <Center w="full" h="20" bg="white" rounded="md" shadow={3}>
                    <HStack space={4} alignItems="center" alignSelf="flex-start" ml={2} mr={2}>
                        <MaterialIcons name="payment" size={24} color="white" />
                        <Text color={Colors.black} fontSize={20}  textAlign="center" alignSelf="center" >
                            Update Payment
                        </Text>
                        <Spacer/>
                        <AntDesign name="right" size={20} color="black" alignSelf="center" />
                    </HStack>
                </Center>
                <Center w="full" h="20" bg="white" rounded="md" shadow={3}>
                    <HStack space={4} alignItems="center"  alignSelf="flex-start" ml={2} mr={2} >
                        <MaterialIcons name="notifications" size={24} color="white" />
                        <Text color={Colors.black} fontSize={20}  textAlign="center" alignSelf="center" >
                            Notifications
                        </Text>
                        <Spacer/>
                        <AntDesign  name="right" size={20} color="black" alignSelf="center"/>
                    </HStack>
                </Center>
                {/*Settings*/}
                <Center w="full" h="20" bg="white" rounded="md" shadow={3}>
                    <HStack space={4} alignItems="center"  alignSelf="flex-start" ml={2} mr={2} >
                        <MaterialIcons name="settings" size={24} color="white" />
                        <Text color={Colors.black} fontSize={20}  textAlign="center" alignSelf="center" >
                            Settings
                        </Text>
                        <Spacer/>
                        <AntDesign  name="right" size={20} color="black" alignSelf="center"/>
                    </HStack>
                </Center>
            </VStack>
        </Box>
    </ScrollView>
  )
}

export default AccountScreen;