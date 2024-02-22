import { Box, Image, Flex, ScrollView, Text, Heading } from 'native-base';
import React, { useState, useEffect } from 'react';

import { Pressable } from 'react-native';
import Colors from "../color";
import Ratings from "./Ratings";
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { fetchProducts } from "../../utils/productsAxios";
import HomeSearch from './HomeSearch';


function HomeProducts() {
    
    const navigation = useNavigation();
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        fetchProducts()
        .then((response) => {
            setProducts(response.data);
        })
        .catch((error) => {
            console.error("Error fetching products:", error);
        });
    }, []);

   useEffect(() => {
    // Filter
    const filtered = products.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
   }, [searchQuery, products]);

    const displayProducts = searchQuery.length === 0 ? products : filteredProducts;

  return (
    <>
        <HomeSearch setSearchQuery={setSearchQuery} />
        <ScrollView flex={1} showsVerticalScrollIndicator={false}>
            <Flex 
                flex={1} 
                direction='row' 
                flexWrap="wrap" 
                justifyContent="space-around" 
                alignItems="center"
                pb={16}
            >
                {
                    displayProducts.map((product) => (
                    <Flex
                        onPress={() => navigation.navigate("Single", product)}
                        key={product.id}
                        w="47%" 
                        bg={Colors.white}
                        rounded="md"
                        shadow={2}
                        my={2}
                        pt={0.3}
                        pb={4}
                        overflow="hidden"
                    >
                        <Pressable 
                            onPress={() => navigation.navigate("Single", product)}
                            key={product.id}
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
                            source={{ uri: product.image || product.image_url }}
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
    </>
  )
}

export default HomeProducts;

