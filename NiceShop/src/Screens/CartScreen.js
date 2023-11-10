import React from 'react';
import {Center, Box, Text, View, ScrollView, HStack, Button } from 'native-base';
import Colors from "../color";
import CartEmpty from '../Components/CartEmpty';
import CartItems from '../Components/CartItems';
import Buttons from '../Components/Buttons';
import { useNavigation } from '@react-navigation/native';

function CartScreen() {

  const navigation = useNavigation();

  return (
    <Box flex={1} safeAreaTop bg={Colors.subGreen}>
      {/* Header */}
      <Center w="full" py={5}>
        <Text color={Colors.black} fontSize={20} bold>
          Cart Screen
        </Text>
      </Center>
      {/* IF CART IS EMPTY 
      <CartEmpty />*/}
      {/* CART ITEMS */}
      <ScrollView showsVerticalScrollIndicator={false} >
        <CartItems />
        {/* Total */}
        <Center mt={5}>
          <HStack
            rounded={50}
            justifyContent="space-between"
            bg={Colors.white}
            shadow={2}
            w="90%"
            pl={5}
            h={45}
            alignItems="center"
          >
            <Text>Total</Text>
            <Button 
              px={10} 
              h={45} 
              rounded={50} 
              bg={Colors.main}
              _text={{ color: Colors.white, fontWeight: "semibold" }}
              _pressed={{ bg: Colors.main }}
            >
                KSh. 500
            </Button>
          </HStack>
        </Center>

        {/* CHECKOUT */}
        <Center px={5}>
          <Buttons 
            bg={Colors.black} 
            color={Colors.white} 
            mt={10}
            onPress={() => navigation.navigate("Delivery")}
          >
            CHECKOUT
          </Buttons>
        </Center>
      </ScrollView> 
    </Box>
  );
}

export default CartScreen