import { Box, HStack, Input } from "native-base";
import React from 'react';
import Colors from "../color";
import { FontAwesome5, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

function HomeSearch() {

    const navigation = useNavigation();

  return (
    <HStack
        space={3}
        w="full"
        px={6}
        bg={Colors.main}
        py={4}
        alignItems="center"
        safeAreaTop
    >
       <Input
            placeholder="Search"
            w="85%"
            borderRadius="full"
            bg={Colors.white}
            type="search"
            borderWidth={0}
            _focus={{
                bg: Colors.white,
            }}
            h={12}
            px={3}
            py={2}
            _placeholder={{
                color: "gray.400",
            }}
            InputLeftElement={
                <MaterialIcons
                    name="search"
                    size={24}
                    color={Colors.main}
                    style={{ marginLeft: 10 }}
                />
            }
            InputRightElement={
                <Pressable>
                    <MaterialCommunityIcons style={{ marginRight: 10 }} name="microphone" size={24} color={Colors.black} />
                </Pressable>
            }
       />
       <Pressable ml={3} onPress={() => navigation.navigate("Cart")} >
            <FontAwesome5 name="shopping-cart" size={24} color={Colors.white} />
            <Box
                px={1}
                rounded="full"
                position="absolute"
                top={-13}
                left={2}
                bg={Colors.red}
                _text={{
                    color: Colors.white,
                    fontSize: "11px",
                    fontWeight: "bold",
                }}
            >
                5
            </Box>
       </Pressable>
    </HStack>
  )
}

export default HomeSearch