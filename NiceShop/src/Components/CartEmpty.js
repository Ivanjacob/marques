import { Box, View, Center, Text } from 'native-base'
//import { Text } from "react-native";
import React from 'react'
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import Colors from '../color';
import Buttons from './Buttons';

const CartEmpty = () => {
  return (
    <Box flex={1}>
        <Center h="90%">
            <Center w={200} h={200} bg={Colors.white} rounded="full">
                <FontAwesome name="shopping-basket" size={64} color="green" />
            </Center>
            <Text color={Colors.main} fontSize={20} bold mt={5}>
                Your cart is empty
            </Text>
        </Center>
        <Buttons bg={Colors.main} color={Colors.white}>
            Start Shopping
        </Buttons>
    </Box>
  );
};

export default CartEmpty;