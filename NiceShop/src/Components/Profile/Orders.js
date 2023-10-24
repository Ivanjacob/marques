import { View, Text, Box, HStack, ScrollView, Button } from 'native-base';
import React from 'react'
import { Pressable } from "react-native";
import Colors from "../../color";

const Orders = () => {
  return (
    <Box h="full" bg={Colors.white} pt={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
      {/* PAID ORDER */}
        <Pressable>
          <HStack
            space={4} 
            justifyContent="space-between" 
            px={2} 
            py={5} 
            bg={Colors.deepGray}
            alignItems="center"
          >
            <Text fontSize={9} color={Colors.blue}  isTruncated>
              #6464678945678
            </Text>
            <Text fontSize={12} bold color={Colors.black} isTruncated>
              PAID
            </Text>
            <Text fontSize={11} italic color={Colors.black} isTruncated>
              Oct 24 2023
            </Text>
            <Button
              px={2}
              py={1}
              rounded={50}
              bg={Colors.main}
              _text={{
                color: Colors.white,
              }}
              _pressed={{
                bg: Colors.main,
              }}
            >
              KSh.2560
            </Button>
          </HStack>
        </Pressable>
      {/* NOT PAID ORDER */}
      <Pressable>
        <HStack
          space={4} 
          justifyContent="space-between" 
          px={2} 
          py={5}
          alignItems="center"
        >
          <Text fontSize={9} color={Colors.blue}  isTruncated>
            #646462345673
          </Text>
          <Text fontSize={12} bold color={Colors.black} isTruncated>
            NOT PAID
          </Text>
          <Text fontSize={11} italic color={Colors.black} isTruncated>
            Oct 24 2023
          </Text>
          <Button
            px={2}
            py={1}
            rounded={50}
            bg={Colors.red}
            _text={{
              color: Colors.white,
            }}
            _pressed={{
              bg: Colors.orange,
            }}
          >
            KSh.560
          </Button>
        </HStack>
      </Pressable>
      </ScrollView>
    </Box>
  )
}

export default Orders