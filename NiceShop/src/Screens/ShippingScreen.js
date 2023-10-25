import { View, Text, Center, Box, ScrollView, VStack, FormControl, Input } from 'native-base'
import React from 'react'
import Colors from "../color";
import Buttons from "../Components/Buttons";
import { useNavigation } from '@react-navigation/native';

const ShippingInputs = [
  {
    label: "ENTER CITY",
    type: "text",
  },
  {
    label: "ENTER COUNTRY",
    type: "text",
  },
  {
    label: "ENTER POSTAL CODE",
    type: "text",
  },
  {
    label: "ENTER ADDRESS",
    type: "text",
  }
];


function ShippingScreen() {

  const navigation = useNavigation();

  return (
    <Box flex={1} safeArea bg={Colors.main} py={5}>
    {/* HEADER */}
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} boold>
          DELIVERY ADDRESS
        </Text>
      </Center>
      {/* INPUTS */}
      <Box h="full" bg={Colors.white} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
          {ShippingInputs.map((input, index) => (
            <FormControl>
              <FormControl.Label
                _text={{ 
                  color: Colors.black, 
                  fontSize: 12, 
                  fontWeight: "bold" }}
              >
                {input.label}
              </FormControl.Label>
              <Input
                  borderWidth={0.2}
                  borderColor={Colors.main}
                  bg={Colors.subGreen}
                  py={4}
                  type={input.type}
                  color={Colors.main}
                  _focus={{ 
                    borderColor: Colors.main,
                    borderWidth: 1,
                    bg: Colors.subGreen,
                  }}
              />
            </FormControl>
          ))}
          <Buttons 
            onPress={() => navigation.navigate("Checkout")}
            bg={Colors.main} 
            color={Colors.white} 
            mt={5}
          >
            CONTINUE
          </Buttons>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  )
}

export default ShippingScreen