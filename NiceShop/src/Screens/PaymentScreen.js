import { View, Text, Center, Box, ScrollView, VStack, FormControl, Input, HStack, Image, Spacer } from 'native-base'
import React from 'react'
import Colors from "../color";
import Buttons from "../Components/Buttons";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const paymentMethods = [
  {
    image: require("../../assets/mpesaa.png"),
    alt: "Mpesa",
    icon: "Ionicons"
  },
  {
    image: require("../../assets/paypal.png"),
    alt: "PayPal",
    icon: "FontAwesome"
  },
  {
    image: require("../../assets/visa.jpg"),
    alt: "Visa",
    icon: "FontAwesome"
  },
];


function PaymentScreen() {
  return (
    <Box flex={1} safeArea bg={Colors.main} py={5}>
    {/* HEADER */}
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} boold>
          SELECT PAYMENT METHOD
        </Text>
      </Center>
      {/* SELECTION */}
      <Box h="full" bg={Colors.subGreen} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {paymentMethods.map((method, index) => (
              <HStack
                alignItems="center"
                bg={Colors.white}
                px={3}
                py={1}
                justifyContent="space-between"
                rounded={10}
                key={index}
              >
                <Box>
                  <Image
                    source={method.image}
                    alt={method.alt}
                    resizeMode='contain'
                    w={60}
                    h={50}
                    size={20}
                  />
                  <Spacer />
                </Box>
                {/* ICONS */}

                {method.icon === "Ionicons" ? (
                  <Ionicons name="checkmark-circle" size={24} color={Colors.main}/>
                ) : (
                  <FontAwesome name="circle-thin" size={24} color={Colors.main}/>
                )}
                
              </HStack>
            ))}
          <Buttons bg={Colors.main} color={Colors.white} mt={5}>
            CONTINUE
          </Buttons>
          <Text italic textAlign="center">
            Payment method is &nbsp;
             <Text bold>
                M-pesa &nbsp;
            </Text>
            by default.
          </Text>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  )
}

export default PaymentScreen