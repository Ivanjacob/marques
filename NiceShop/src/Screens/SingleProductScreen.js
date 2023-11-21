import { View, Text, Box, Image, ScrollView, HStack, Heading, Spacer } from 'native-base'
import React, { useState, useEffect } from 'react'
import Colors from '../color'
import Ratings from '../Components/Ratings'
import NumericInput from 'react-native-numeric-input'
import Butons from "../Components/Buttons"
import Review from '../Components/Review'
import { useNavigation } from '@react-navigation/native'

import { fetchProductById } from '../../utils/productsAxios'

function SingleProductScreen({route}) {
  const [product, setProduct] = useState([]);
  const [value, setValue] = useState(0);
  const navigation = useNavigation();
  const productId = route.params.id;

  useEffect(() => {
    fetchProductById(productId)
    .then((response) => {
        setProduct(response.data);
    })
    .catch((error) => {
        console.error("Error fetching product:", error);
    });
  }, [productId])


  return (
    <Box safeArea flex={1} bg={Colors.white} pb={20} > 
        <ScrollView px={5} showsVerticalScrollIndicator={false} style={{ height: 700 }}  >
          <Image
            source={{ uri: product.image || product.image_url }}
            alt="Image"
            w="full"
            h={300}
            resizeMode="contain"
          />
          <Heading bold mb={2}  lineHeight={22} fontSize={15}>
            {product.name}
          </Heading>
          <Ratings value={product.rating} text={`${product.numReviews} reviews`} />
          <HStack space={2} alignItems="center" my={5}>
            {product.countInStock > 0 ? (
              <NumericInput 
                value={value} 
                rounded 
                totalWidth={150} 
                totalHeight={40} 
                iconSize={25}
                onChange={console.log(value)}
                step={1}
                maxValue={product.countInStock}
                minValue={0}
                borderColor={Colors.deepGray}
                textColor={Colors.black}
                iconStyle={{ color: Colors.white }}
                rightButtonBackgroundColor={Colors.main}
                leftButtonBackgroundColor={Colors.main}
              />
            ) : (
              <Heading bold bg={Colors.orange} color={Colors.red} italic fontSize={14}>
                Out of Stock
              </Heading>
            )}
            
            <Spacer />
            <Heading bold color={Colors.black} fontSize={19}>
              KSh. {product.price}
            </Heading>
          </HStack>
          <Text lineHeight={24} fontSize={12} >
            Indulge your taste buds with the exquisite flavor and perfectly fluffy texture of our premium rice product. 
            Elevate your culinary experience with each mouthful, as our rice promises a delightful journey of 
            unparalleled quality and satisfaction.
          </Text>
          <Butons 
            bg={Colors.main} 
            color={Colors.white}  
            mt={10}
            onPress={() => navigation.navigate("Cart")}
            >
              ADD TO CART
          </Butons>
          {/* ####### REVIEW ######## */}
          <Review />
        </ScrollView>
    </Box>
  )
}

export default SingleProductScreen;