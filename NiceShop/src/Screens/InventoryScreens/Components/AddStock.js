import { View, Text } from 'react-native'
import { Box, Flex, HStack, Pressable, Image, Center, Button, VStack } from "native-base"
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import { AntDesign } from '@expo/vector-icons';

import Colors from "../../../color";


const AddStock = () => {
  
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
        <Pressable justifyContent="flex-start" alignItems="center" mt={5} onPress={() => navigation.navigate("Inventory")}>
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
            Add
          </Text>
        </View>
      </HStack>
      <Box bg={Colors.white} ml={5} mr={5} mt={20} pb={20} rounded={10}>
          {/* close Icon */}
          <HStack justifyContent="flex-end" pt={5} pr={3}>
            <Pressable onPress={() => navigation.navigate("Inventory")}>
              <AntDesign name="close" size={24} color="white" />
            </Pressable>
          </HStack>
          <VStack space={4} alignItems="center" >
            <Center w="200" h="200" bg="indigo.300" rounded="md" shadow={3}>
              {/* Product Image */}
              <Image
                source={{ uri: "https://images.yaoota.com/uZ_gS67cSOWu7Fxu0TAWuwKs-6w=/trim/fit-in/500x500/filters:quality(80)/yaootaweb-production-ke/media/crawledproductimages/6ab9cde55a6b18c1d174053a311e4e55066f6765.jpg"}}
                alt="Alternate Text"
                rounded={10}
                h={200}
                w={200}
                resizeMode="cover"
              />
            </Center>
              {/* Product Name */}
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "black",
                  marginLeft: 10,
                  
                }}
              >
                Pure Pishori
              </Text>
            <Center w="64" h="20" bg="indigo.500" rounded="md" shadow={3}></Center>
          </VStack>
      </Box>
      <Center pt={20} >
        <Button>
          Continue
        </Button>
      </Center>
    </Box>
  )
}

export default AddStock;