import { View, Text } from 'react-native'
import React from 'react'
import { Image, Center, Box, Heading, Pressable, NativeBaseProvider, Stack, Flex, Button, Icon, HStack, ScrollView, VStack } from "native-base"

import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Colors from "../../color";
import booked from '../../data/Booked';

const Bookings = () => {

  const navigation = useNavigation();

  return (
    <Box bg={Colors.gray}>
      <HStack 
        flexDirection="row" 
        justifyItems="center" 
        alignContent="center"
        bg={Colors.white} 
        borderBottomWidth={1}
        borderBottomColor={Colors.black}
        h={16}
        px={2} 
        space={5}
      >
        <Pressable justifyContent="flex-start" alignItems="center" mt={5} onPress={() => navigation.navigate("Home")}>
          <AntDesign name="left" size={24} color="black" alignSelf="flex-start" />
        </Pressable>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "black",
            }}
          >
            Bookings
          </Text>
        </View>
      </HStack>
      <HStack space={2} justifyContent="flex-start" >
        <Center
          bg={Colors.white}
          rounded={10}
          h={12}
          w="40%"
          borderWidth={1}
          mt={5}
          ml={5}
          mr={4}
          alignContent="inline-flex"
        >
            <Pressable 
              _pressed={{ bg: Colors.gray}}
            >
              <Flex direction="row" space={2} >
                <MaterialCommunityIcons name="sort" size={24} color="black" />
                <Text  style={{ fontSize: 18, marginLeft: "20" }} >Sort</Text>
              </Flex>
            </Pressable>
        </Center>
        <Center 
          bg={Colors.white}
          rounded={10}
          h={12}
          w="40%"
          borderWidth={1}
          mt={5}
          ml={5}
          mr={4}
          alignContent="inline-flex"
        >
          <Pressable 
          _pressed={{ bg: Colors.gray }}
          >
            <Flex direction="row" space={2} >
              <MaterialCommunityIcons name="filter" size={24} color="black" />
              <Text  style={{ fontSize: 18, marginLeft: "20" }} >Filter</Text>
            </Flex>
          </Pressable>
        </Center>
      </HStack>
      {/* List of customers who have booked */}
      <Box bg={Colors.gray} mt={3}>
        <ScrollView bg={Colors.newgray} pb={10}  style={{ height: 570 }} showsVerticalScrollIndicator={false} >
          <Box 
            bg={Colors.white}
            rounded={10}
            w="98%"
            shadow={2}
            mt={2}
            ml={1}
            mr={3}
            justifyContent="flex-start"
            alignContent="inherit"
          >
            <HStack space={2} >
              <Image
                source={{ uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww" }}
                alt='Image'
                resizeMode='cover'
                size="xl"
                roundedLeft={10}
              />
              <VStack>
                <Flex direction="row" justifyContent="space-between" justifyItems="stretch" alignContent="space-between" >
                  <Text style={{ fontSize: 17, fontWeight: "bold", marginRight: 'auto' }} >Judy Karis</Text>
                  <Button
                    alignSelf="flex-end"
                    bg={Colors.red}
                    roundedBottomLeft={10}
                    roundedTopRight={10}
                    h={10}
                    w={20}
                    ml={10}
                    mt={2}
                    _pressed={{ bg: Colors.green }}
                  >Add </Button>
                </Flex>
                <Stack direction="row" mt={3} mb="2.5" >
                  <Center bg="white" h={12} w={24} justifyContent="center" rounded="sm" >
                    <Text style={{ fontSize: 10, fontStyle: "italic", color: "red" }} >Quantity</Text>
                    <Text style={{ fontSize: 12, fontWeight: "bold" }} >1000 KG</Text>
                  </Center>
                  <Center h={12} w={24} bg="white" borderLeftWidth={1} borderLeftColor={Colors.newgray} >
                    <Text>Category</Text>
                  </Center>
                </Stack>
              </VStack>
            </HStack>
          </Box>
        </ScrollView>
      </Box>
    </Box>
  )
}

export default Bookings;