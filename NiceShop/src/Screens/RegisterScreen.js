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
import React, { useState, useContext, useEffect } from 'react';
import Colors  from "../color";
import Spinner from 'react-native-loading-spinner-overlay';
import { MaterialIcons, Ionicons, FontAwesome } from '@expo/vector-icons';

import api from '../core/app'
import utils from '../core/utils'
import useGlobal from '../core/global';

function RegisterScreen({ navigation }) {

  const [username, setUsername] = useState("")  
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState("")
  const [confirm_password, setConfirmPassword] = useState("")

  const login = useGlobal(state => state.login)


  function onSignUp() {
    utils.log('onSignUp:', username, email, password)   

    api({
      method: 'POST',
      url: 'signup/',
      data: {
        username: username,
        email: email,
        password: password,
        confirm_password: confirm_password,
      }
    })
    .then(response => {
      utils.log('Sign Up:', response.data)
      
      const credentials = {
        username: username,
        password: password,
      }
      login(
        credentials, 
        response.data.user
      )
    })
    .catch(error => {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    })

  };



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
        onPress={onSignUp}
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




