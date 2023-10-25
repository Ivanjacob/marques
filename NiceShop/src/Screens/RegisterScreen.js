import { 
  Box, 
  Image, 
  Text, 
  View, 
  Heading, 
  VStack, 
  Input, 
  Button,
  Pressable,
} from 'native-base'
import React from 'react'
import Colors  from "../color";

import { MaterialIcons, Ionicons, FontAwesome } from '@expo/vector-icons';


function RegisterScreen({navigation}) {
  return (
    <Box flex={1} bg={Colors.black}>
      <Image
        source={require("../../assets/logo.jpg")}
        alt="login"
        resizeMode="cover"
        height="100%"
        flex={1}
        width="100%"
      />
    
    <Box
      w="full"
      h="full"
      position="absolute"
      top="0"
      px="6"
      justifyContent="center"
    >
      <Heading>SIGN UP</Heading>
      <VStack space={5} pt="6">

        {/* USERNAME */}
        <Input
          InputLeftElement={
            <FontAwesome name="user" size={24} color={Colors.main} />
          }
          variant="underlined"
          placeholder="Username"
          type='username'
          w="70%"
          pl={5}
          color={Colors.main}
          borderBottomColor={Colors.underline}
        />      
        {/* EMAIL */}
        <Input
          InputLeftElement={
            <MaterialIcons name="email" size={24} color={Colors.main} />
          }
          variant="underlined"
          placeholder="Email"
          w="70%"
          pl={5}
          color={Colors.main}
          borderBottomColor={Colors.underline}
        />

        {/* PASSWORD */}
        <Input
          InputLeftElement={
            <Ionicons name="eye" size={24} color={Colors.main} />
          }
          variant="underlined"
          placeholder="**********"
          type='password'
          w="70%"
          pl={5}
          color={Colors.main}
          borderBottomColor={Colors.underline}
        />
      </VStack>
      
      <Button
        _pressed={{ bg: Colors.main, opacity: 0.5 }}
        w="70%"
        my={30}
        mb={5}
        rounded={50}
        bg={Colors.main}
        onPress={() => navigation.navigate("Bottom")}
      >
        SIGN UP
      </Button>
      <Pressable mt={4} onPress={() => navigation.navigate("Login")} >
        <Text color={Colors.deepestGray}>LOGIN</Text>
      </Pressable>
    </Box>
  </Box> 
  )
}

export default RegisterScreen