import { View, Text } from 'react-native'
import { Box, Flex, HStack, Pressable, Image, Center, useDisclose, Stagger, Icon, IconButton } from "native-base"
import React from 'react'

import Colors from "../../color";
import { useNavigation } from '@react-navigation/native';

import { AntDesign, MaterialCommunityIcons, MaterialIcons, Ionicons } from '@expo/vector-icons';


const DestinationScreen = () => {

  const navigation = useNavigation();

  const {
    isOpen,
    onToggle, 
  } = useDisclose();

  return (
    <Box flex={1}>
      <Box w="full" h="full" position="absolute" top="0" >
        <Image
          source={{ uri: "https://images.unsplash.com/photo-1604357209793-fca5dca89f97?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
          alt="Destinations"
          resizeMode='cover'
          height="100%"
          flex={1}
          width="100%"
        />
      </Box>
        <HStack justifyContent="flex-start" mt={3} ml={5}>
          <IconButton variant="solid" borderRadius="full" size="lg" onPress={onToggle} bg="amber.400" icon={<Icon as={Ionicons } size="6" name="menu" color="warmGray.50" _dark={{
            color: 'warmGray.50' }} />} 
          />
        </HStack>
        <Box alignItems="center">
          <Stagger visible={isOpen} initial={{
            opacity: 0,
            scale: 0,
            translateY: 17
          }} animate={{
            translateY: 0,
            scale: 1,
            opacity: 1,
            transition: {
              type: 'spring',
              mass: 0.8,
              stagger: {
                offset: 30,
                reverse: true
              }
            }
          }} exit={{
            translateY: 17,
            scale: 0.5,
            opacity: 0,
            transition: {
              duration: 100,
              stagger: {
                offset: 30,
                reverse: true,
                ease: 'easeOut'
              }
            }
          }}
          >
            <IconButton mb="4" onPress={() => navigation.navigate("Home")} variant="solid" bg="red.500" colorScheme="red" borderRadius="full" icon={<Icon as={MaterialIcons} size="6" name="home" _dark={{
              color: 'warmGray.50'
            }} color="warmGray.50" />} />
            <IconButton mb="4" variant="solid" bg="indigo.500" colorScheme="indigo" borderRadius="full" icon={<Icon as={MaterialIcons} size="6" name="location-pin" _dark={{
              color: 'warmGray.50'
            }} color="warmGray.50" />} />
              <IconButton mb="4" variant="solid" bg="yellow.400" colorScheme="yellow" borderRadius="full" icon={<Icon as={MaterialCommunityIcons} _dark={{
              color: 'warmGray.50'
            }} size="6" name="microphone" color="warmGray.50" />} />
              <IconButton mb="4" onPress={() => navigation.navigate("OpenCamera")} variant="solid" bg="teal.400" colorScheme="teal" borderRadius="full" icon={<Icon as={MaterialCommunityIcons} _dark={{
              color: 'warmGray.50'
            }} size="6" name="video" color="warmGray.50" />} />
          </Stagger>
        </Box>
    </Box>
  )
}

export default DestinationScreen;
