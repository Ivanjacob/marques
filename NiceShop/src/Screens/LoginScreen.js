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
import Alert from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Colors  from "../color";

import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons, Entypo } from '@expo/vector-icons';
import Spinner from 'react-native-loading-spinner-overlay';
import api from '../core/app'
import utils from '../core/utils'
import useGlobal from '../core/global';

function LoginScreen({navigation}) {
  
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const login = useGlobal(state => state.login)
  

  function onSignin() {
    utils.log('onSignin:', username, password)
    
    // Cherck username
    
    // Check password
    
    // Break out of this function if there were any problems
    
    //Make API call to sign in
    api({
      method: 'POST',
      url: 'signin/',
      data: {
        username: username,
        password: password,
      }
    })
    .then(response => {
      utils.log('Sign In:', response.data);
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
      <Box w="full" h="full" position="absolute" top="0">
        <Image
          source={{ uri: "https://images.unsplash.com/photo-1554189097-ffe88e998a2b?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}}
          alt="login"
          resizeMode="cover"
          height="100%"
          flex={1}
          width="100%"
        />
      </Box>
      
      <Box
        w="full"
        h="full"
        position="absolute"
        top="0"
        px="6"
        justifyContent="center" 
      >
        <Heading>LOGIN</Heading>
        <VStack space={5} pt="6">
        
          {/* USERNAME */}
          <Input
            onChangeText={(text) => setUsername(text)}
            value={username}
            InputLeftElement={
              <Entypo name="user" size={24} color="black" />
            }
            variant="underlined"
            placeholder="Username"
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
        </VStack>
        
        <Button
          _pressed={{ bg: Colors.main, opacity: 0.5 }}
          w="70%"
          my={30}
          mb={5}
          rounded={50}
          bg={Colors.main}          
          onPress={onSignin}
        >
          LOGIN
        </Button>
        <Pressable mt={4} onPress={() => {
          navigation.navigate("Register")}} >
          <Text color={Colors.deepestGray}>SIGN UP</Text>
        </Pressable>
      </Box>
    </Box> 
  );
}
export default LoginScreen;


