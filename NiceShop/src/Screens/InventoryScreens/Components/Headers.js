import { View, Text, FlatList, Pressable, HStack, Box, Center, Image, VStack, Button, ScrollView, IconButton } from 'native-base';
import React from 'react'
import products from "../../../data/Products";
import Colors from "../../../color";
import { StyleSheet } from 'react-native';


const Headers = ({ selectedCategory, onCategoryPress }) => {

    const customFontStyle = StyleSheet.create({
        customFont: {
            fontFamily: 'Rancho', // Replace 'Logo Rancho' with your actual font family name
            fontSize: 20,
            fontStyle: 'italic', // Adjust font size as needed
        },
    });

    const category = [
        {
            name: "All",
            id: "1",
        },
        {
            name: "Pure",
            id: "2",
        },
        {
            name: "Brown",
            id: "3",
        },
        {
            name: "Sindano",
            id: "4",
        },
        {
            name: "Blended",
            id: "5",
        },
        {
            name: "Others",
            id: "6",
        }
    ]

  return (
    <ScrollView pt={2} horizontal={true} showsHorizontalScrollIndicator={false}>
        <HStack space={3} ml={1} mr={2} pb={5}>
            {category.map((item, index) => (
                <Pressable
                    key={index}
                    onPress={() => {
                        onCategoryPress(item.name);
                      }}
                    _pressed={{ bg: Colors.white }}
                    // px={2}
                    // py={1}
                    // rounded={10}
                    // bg={Colors.main}
                    // shadow={2}
                >
                <Center 
                    h={12} 
                    w={32} 
                    rounded={10} 
                    shadow={3} 
                    bg={selectedCategory === item.name ? Colors.primary : Colors.white} 
                    borderBottomWidth={4} 
                    borderColor={selectedCategory === item.name ? Colors.white : Colors.primary}
                >
                    <Text style={[customFontStyle.customFont, { color: selectedCategory === item.name ? Colors.white : Colors.black, textAlign: 'center' }]}>{item.name}</Text>
                </Center>
                </Pressable>
            ))}
        </HStack>
      </ScrollView>
  )
}

export default Headers;



