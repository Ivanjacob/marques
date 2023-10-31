import { View, Text } from 'react-native'
import { Box, Flex, HStack, Pressable, Image, Center, Input, Heading, ScrollView } from "native-base"
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import { AntDesign, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from "../../color";

import Stocks from "./Components/Stocks";


const AddStockScreen = () => {
  
  const navigation = useNavigation();

  return (
    <Box bg={Colors.gray} pb={5}>
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
            Add Stock to Inventory
          </Text>
        </View>
      </HStack>
      <View mt={5} >
        <Input
          placeholder="Search Products in Inventory"
          w="95%"
          variant="rounded"
          bg={Colors.white}
          type="search"
          borderWidth={0}
          _focus={{
              bg: Colors.white,
          }}
          mt={5}
          ml={2}
          mr={2}
          _placeholder={{
              color: "black",
          }}
          InputLeftElement={
              <MaterialIcons
                  name="search"
                  size={24}
                  color={Colors.main}
                  style={{ marginLeft: 10 }}
              />
          }
          InputRightElement={
              <Pressable>
                  <MaterialCommunityIcons style={{ marginRight: 10 }} name="microphone" size={24} color={Colors.black} />
              </Pressable>
          }
        />
      </View>
      <Box px={4} >
        <Heading bold fontSize={15} isTruncated my={6} italic >
          Products in Stock
        </Heading>
        {/* Products in Stock */}
        <Stocks />
      </Box>
    </Box>
  )
}

export default AddStockScreen;

// <Box px={6} flex={1} pb={3}>
// <Heading bold fontSize={15} isTruncated my={4}>
//   Products in Stock
// </Heading>
// <Stocks />
// </Box>