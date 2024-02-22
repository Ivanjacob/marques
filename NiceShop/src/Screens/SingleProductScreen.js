import { View, Text, Box, Image, ScrollView, HStack, Heading, Spacer } from 'native-base'
import React, { useState, useEffect } from 'react'
import Colors from '../color'
import Ratings from '../Components/Ratings'
import NumericInput from 'react-native-numeric-input'
import Butons from "../Components/Buttons"
import Review from '../Components/Review'
import { useNavigation } from '@react-navigation/native'

import { fetchProductById, addToCart } from '../../utils/productsAxios'

function SingleProductScreen({route}) {
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(0);
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

  // const handleAddToCart = () => {
  //   // call the addToCart function when adding to the cart
  //   addToCart(productId, value); 
  //   navigation.navigate("Cart")
  //   // value is the quantity
  //   // You might want to provide feedback to the user upon successful addition to the cart

  // };

  const handleAddToCart = () => {
    const productData = {
      product: {
        id: product.id,
        name: product.name,
        category: product.category,
        image: product.image || product.image_url,
        description: product.description,
        price: product.price,
        quantity_in_stock: product.quantity_in_stock,
        rating: product.rating,
        created_at: product.created_at,
        updated_at: product.updated_at,
        created_by: product.created_by
      },
      quantity: quantity
    };
  
    addToCart(productData)
      .then((response) => {
        console.log('Added to cart:', response.data);
        navigation.navigate("Cart");
      })
      .catch((error) => {
        console.error('Error adding item to cart:', error);
        throw error;
      });
  };

  const AddToCart = () => {
    const productData = {
      product: {
        id: product.id,
        name: product.name,
        category: product.category,
        image: product.image || product.image_url,
        description: product.description,
        price: product.price,
        quantity_in_stock: product.quantity_in_stock,
        rating: product.rating,
        created_at: product.created_at,
        updated_at: product.updated_at,
        created_by: product.created_by
      },
      quantity: quantity
    };
    console.log('Product Information:', productData); // Logging all information of the product
    console.log('Quantity:', quantity); // Logging the selected quantity
      // navigation.navigate("Cart")
  
    // Here you can add the logic to actually add the product to the cart
    // For now, it's logging the product information and quantity
  };
  


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
            {product.quantity_in_stock > 0 ? (
              <NumericInput 
                value={quantity}
                rounded 
                totalWidth={150} 
                totalHeight={40} 
                iconSize={25}
                onChange={setQuantity}
                step={1}
                maxValue={product.quantity_in_stock}
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
            onPress={handleAddToCart}
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