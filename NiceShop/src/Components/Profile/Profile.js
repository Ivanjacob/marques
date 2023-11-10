import { 
    View,
    Text,
    Box,
    FormControl,
    ScrollView,
    VStack,
    Input,
    Icon,
    Pressable,
  } from "native-base"
import React, { useState } from 'react'
import Colors from "../../color"
import Buttons from "../Buttons";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
  
  
  const Inputs = [
    {
      label: "USERNAME",
      type: "text",
    },
    {
      label: "EMAIL",
      type: "email",
    },
    {
      label: "NEW PASSWORD",
      type: "password",
    },
    {
        label: "CONFIRM PASSWORD",
        type: "password",
      }
  ]
  
  
  
  const Profile = () => {
    
    const navigation = useNavigation();

    return (
      <Box h="full" bg={Colors.white} px={5} pb={20} >
        <ScrollView style={{ height: 700 }} showsVerticalScrollIndicator={false}>
          <VStack space={10} mt={5} pb={10}>
            {
              Inputs.map((i, index) => (
                <FormControl key={index}>
                  <FormControl.Label 
                    _text={{
                      bold:true,
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    {i.label}
                  </FormControl.Label>
                  <Input
                   borderWidth={0}
                   bg={Colors.subGreen}
                   borderColor={Colors.main}
                   py={4}
                   type={i.type}
                   color={Colors.main}
                   fontSize={15}
                     _focus={{
                        bg: Colors.subGreen,
                        borderColor: Colors.main,
                        borderWidth: 1,
                     }}
                  />
                </FormControl>
              ))
            }
            <Buttons bg={Colors.main} color={Colors.white} onPress={() => navigation.navigate("Account")} >
             UPDATE PROFILE
            </Buttons>
          </VStack>
        </ScrollView>
      </Box>
    );
  };
  
  export default Profile;