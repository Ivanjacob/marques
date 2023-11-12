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
} from 'native-base';
import React, { useState, useContext } from 'react';
import Colors  from "../color";
import Spinner from 'react-native-loading-spinner-overlay';
import { createCustomer } from "../../utils/userAxios";

import { MaterialIcons, Ionicons, FontAwesome } from '@expo/vector-icons';
import { AuthContext } from '../Context/AuthContext';


function RegisterScreen({ navigation }) {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirm_password, setConfirmPassword] = useState("")

  const { isLoading, registerCustomer } = useContext(AuthContext);


  return (
    <Box flex={1} bg={Colors.black}>
      <Image
        source={{ uri: "https://images.unsplash.com/photo-1554189097-ffe88e998a2b?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}}
        alt="login"
        resizeMode="cover"
        height="100%"
        flex={1}
        width="100%"
      />

      <Spinner visible={isLoading} />
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
          onChangeText={(text) => setUsername(text)}
          value={username}
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
          onChangeText={(text) => setEmail(text)}
          value={email}
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
          onChangeText={(text) => setPassword(text)}
          value={password}
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
        {/* CONFIRM PASSWORD */}
        <Input
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirm_password}
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
        onPress={() => {
          registerCustomer(username, email, password, confirm_password);
          navigation.navigate("Login");
        }}
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