import { 
  View, 
  Text,
  Box,
  Center,
  Image,
  Button,
  Input,
  VStack,
} from 'native-base'
import React from 'react'
import Colors from "../color";
import Buttons from "../Components/Buttons";

function NotVerifyScreen() {
  return (
    <Box flex={1} bg={Colors.main} safeAreaTop >
      <Center w="full" h={250} >
        <Image
          rounded="full"
          source={require("../../assets/icons.png")}
          alt="Logo"
          size="lg"
        />
      </Center>
      <VStack space={6} px={5} alignItems="center">
        <Buttons bg={Colors.black} color={Colors.white} >
          REGISTER
        </Buttons>
        <Buttons bg={Colors.white} color={Colors.black} >
          LOGIN
        </Buttons>
      </VStack>
    </Box>
  )
}

export default NotVerifyScreen