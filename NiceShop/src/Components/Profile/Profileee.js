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
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";


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
    label: "PASSWORD",
    type: "password",
  }
]



const Profileee = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <Box h="full" bg={Colors.white} px={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
                  
                </FormControl.Label>
                  <Input
                    w={{
                      base: "75%",
                      md: "25%"
                    }}
                    InputLeftElement={<Icon size={5} ml={2} color={Colors.main} as={<Ionicons name="person" />} />}
                    placeholder="Name"
                  />
                  <Input
                    w={{
                      base: "75%",
                      md: "25%"
                    }}
                    InputLeftElement={<Icon size={5} ml={2} color={Colors.main} as={<MaterialCommunityIcons name="email" />} />}
                    placeholder="Email"
                  />
                  <Input
                    w={{
                      base: "75%",
                      md: "25%"
                    }}
                    InputLeftElement={<Icon size={5} ml={2} color={Colors.main} as={<MaterialCommunityIcons name="lock" />} />}
                    placeholder="Password"
                    type={passwordVisible ? "text" : "password"}
                    InputRightElement={
                      <Pressable
                        onPress={() => setPasswordVisible(!passwordVisible)}
                      >
                        <Icon
                          size={5}
                          mr={2}
                          color={Colors.main}
                          as={
                            <Ionicons
                              name={passwordVisible ? "eye-off" : "eye"}
                            />
                          }
                        />
                      </Pressable>
                    }
                  />
              </FormControl>
            ))
          }
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default Profileee;