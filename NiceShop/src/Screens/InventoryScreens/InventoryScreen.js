import { View, Text } from 'react-native'
import { Box, Flex, HStack, Pressable, Image, Center, ScrollView } from "native-base"
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

import { AntDesign } from '@expo/vector-icons';

import Headers from "./Components/Headers";
import StockList from "./Components/StockList";
import Colors from "../../color";

const InventoryScreen = () => {
  
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState("All")
  const onCategoryPress = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  return (
    <Box bg={Colors.mygray} mt={8}>
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
        shadow={3}
      >
        <Pressable justifyContent="flex-start" alignItems="center" mt={5} onPress={() => setSelectedCategory('All')}>
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
            Inventory
          </Text>
        </View>
      </HStack>
      {/*Headers*/}
      <Headers selectedCategory={selectedCategory} onCategoryPress={onCategoryPress} />
      {/*List*/}
      <StockList selectedCategory={selectedCategory} />
    </Box>
    )
}

export default InventoryScreen;