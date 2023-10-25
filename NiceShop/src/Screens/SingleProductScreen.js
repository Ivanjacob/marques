import { View, Text, Box, Image, ScrollView, HStack, Heading, Spacer } from 'native-base'
import React, { useState } from 'react'
import Colors from '../color'
import Ratings from '../Components/Ratings'
import NumericInput from 'react-native-numeric-input'
import Butons from "../Components/Buttons"
import Review from '../Components/Review'
import { useNavigation } from '@react-navigation/native'
import products from '../data/Products'

function SingleProductScreen({route}) {
  const [value, setValue] = useState(0);
  const navigation = useNavigation();
  const product = route.params;
  return (
    <Box safeArea flex={1} bg={Colors.white} > 
        <ScrollView px={5} showsVerticalScrollIndicator={false}>
          <Image
            source={{ uri: product.image}}
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
            elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin
            eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet.
            Duis dapibus diam vel metus tempus vulputate.
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