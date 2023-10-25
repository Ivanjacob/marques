import { Box, Image, Flex, ScrollView, Text, Heading } from 'native-base';
import React from 'react';
import products from "../data/Products";
import { Pressable } from 'react-native';
import Colors from "../color";
import Ratings from "./Ratings";
import { useNavigation } from '@react-navigation/native';

function HomeProducts() {
    
    const navigation = useNavigation();

  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={false}>
        <Flex 
            flex={1} 
            direction='row' 
            flexWrap="wrap" 
            justifyContent="space-around" 
            alignItems="center"
        >
            {
                products.map((product) => (
                <Flex
                    onPress={() => navigation.navigate("Single", product)}
                    key={product._id}
                    w="47%" 
                    bg={Colors.white}
                    rounded="md"
                    shadow={2}
                    my={2}
                    pt={0.3}
                    pb={2}
                    overflow="hidden"
                >
                    <Pressable 
                        onPress={() => navigation.navigate("Single", product)}
                        key={product._id}
                        w="47%" 
                        bg={Colors.white}
                        rounded="md"
                        shadow={2}
                        my={2}
                        pt={0.3}
                        pb={2}
                        overflow="hidden"
                    >
                        <Image
                            source={{ uri: product.image }}
                            alt={product.name}
                            w="full"
                            h={24}
                            resizeMode="contain"
                        />
                        <Box px={4} pt={1} >
                            <Text fontSize={15} mt={1} isTruncated w="full">
                                {product.name}
                            </Text>
                            <Heading size="sm" bold>
                                KSh. {product.price}
                            </Heading>
                            <Text fontSize={13} fontStyle='italic' mt={1} isTruncated w="full">
                                {product.category}
                            </Text>
                            <Text fontSize={10} mt={1} isTruncated w="full" color="red">
                                {product.description}
                            </Text>
                            {/* RATING */}
                            <Ratings value={product.rating} />
                        </Box>
                    </Pressable>
                </Flex>
            ))} 
        </Flex> 
    </ScrollView>
  )
}

export default HomeProducts

// Compare this snippet from src/Screens/LoginScreen.js:
// <ScrollView flex={1}>
// <Flex 

//     flexWrap="wrap" 
//     direction="row"
//     justifyContent="space-between" 
//     px={6}
// >
//     {
//         products.map((product) => (
//             <Pressable 
//                 key={product._id}
//                 bg={Colors.white}
//                 w="48%"
//                 rounded="md"
//                 shadow={2}
//                 pt={0.3}
//                 my={3}
//                 pb={2}
//                 overflow="hidden"
//             >
//             <Image
//                 source={{ uri: product.image }}
//                 alt={product.name}
//                 w="full"
//                 h={24}
//                 resizeMode="contain"
//             />
//             <Box px={4} pt={1} >
//                 <Heading size="sm" bold>
//                     KSh. {product.price}
//                 </Heading>
//                 <Text fontSize={10} mt={1} isTruncated w="full">
//                     {product.name}
//                 </Text>
//                 <Text fontSize={15} mt={1} isTruncated w="full">
//                     {product.category}
//                 </Text>
//                 <Text fontSize={10} mt={1} isTruncated w="full">
//                     {product.description}
//                 </Text>
//                 {/* RATING */}
//             </Box>
//             </Pressable>
//         ))}
// </Flex>
// </ScrollView>