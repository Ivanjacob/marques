import { View, Text, FlatList, Pressable, HStack, Box, Center, Image, VStack, Button, ScrollView } from 'native-base';
import React from 'react'
import products from "../../../data/Products";
import Colors from '../../../color';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const StockList = ({ selectedCategory }) => {
    
    const navigation = useNavigation();

    const filteredProducts = products.filter((item) => { 
        if (selectedCategory === "All") {
            return true; // show all products when "All" is selected.
        } else { 
            return item.category === selectedCategory;
        }
    });

  return (
    <ScrollView pt={5} style={{ height: 600 }} showsVerticalScrollIndicator={false}>
        <FlatList
            showsVerticalScrollIndicator={false}
            data={filteredProducts.slice(0, 8)}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
                <Pressable>
                    <Box mb={3}>
                        <HStack
                            alignItems="center"
                            bg={Colors.white}
                            shadow={4}
                            rounded={10}
                            overflow="hidden"
                        >
                        {/* Image */}
                        <Center w="30%" bg={Colors.deepGray}>
                            <Image
                                source={{ uri: item.image }}
                                alt={item.name}
                                w="full"
                                h={32}
                                resizeMode='contain'
                            />
                        </Center>
                        {/* Details */}
                        <VStack w="50%" px={2}>
                            <Text isTruncated color={Colors.black} bold fontSize={12}>
                                {item.name}
                            </Text>
                            <Text color={Colors.black} mt={2} >
                                {item.description}
                            </Text>
                            {item.countInStock < 5 ? (
                                <HStack alignItems="center" mt={2}>
                                  <Text color="green" mr={1}>
                                    {item.countInStock} ~ Pcks
                                  </Text>
                                  <MaterialCommunityIcons
                                    name="alert-octagram"
                                    size={24}
                                    color="red"
                                  />
                                </HStack>
                              ) : (
                                <Text color={Colors.black} mt={2}>
                                  {item.countInStock} ~ Pcks Available
                                </Text>
                            )}
                        </VStack>
                        {/* Buton */}
                        <Center >
                            <Button
                                mr={3} 
                                bg={Colors.primary}
                                _pressed={{ bg: Colors.white }}
                                onPress={() => navigation.navigate("Add")}
                                _text={{
                                    color: Colors.white,
                                }}
                            >
                                Add
                            </Button>
                        </Center>
                        </HStack>
                    </Box>
                </Pressable>
            )}
        />
    </ScrollView>
  )
}

export default StockList;





















