import { View, Text, FlatList, Pressable, HStack, Box, Center, Image, VStack, Button, ScrollView } from 'native-base';
import React from 'react'
import products from "../../../data/Products";
import Colors from '../../../color';
import { useNavigation } from '@react-navigation/native';


const Stocks = () => {
    
    const navigation = useNavigation();

  return (
    <ScrollView  style={{ height: 500 }} showsVerticalScrollIndicator={false}>
        <FlatList
            showsVerticalScrollIndicator={false}
            data={products.slice(0, 8)}
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
                        <Center w="30%" bg={Colors.deepGray}>
                            <Image
                                source={{ uri: item.image }}
                                alt={item.name}
                                w="full"
                                h={32}
                                resizeMode='contain'
                            />
                        </Center>
                        <VStack w="50%" px={2}>
                            <Text isTruncated color={Colors.black} bold fontSize={12}>
                                {item.name}
                            </Text>
                            <Text color={Colors.lightBlack} mt={2} bold>
                                Ksh.{item.price}
                            </Text>
                        </VStack>
                        <Center >
                            <Button
                                mr={3} 
                                bg={Colors.main}
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

export default Stocks;





















