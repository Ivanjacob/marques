import { View, Text } from 'react-native'
import { Box, Flex, HStack, Pressable, Image, Center } from "native-base"
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import { AntDesign } from '@expo/vector-icons';

import Colors from "../../color";
import NoNotifications from './Components/NoNotifications';

const NotificationScreen = () => {
  
  const navigation = useNavigation();

  return (
    <Box bg={Colors.gray}>
      <HStack 
        flexDirection="row" 
        justifyItems="center" 
        alignContent="center"
        bg={Colors.white} 
        borderBottomWidth={1}
        borderBottomColor={Colors.black}
        h={16}
        px={2} 
        space={5}
      >
        <Pressable justifyContent="flex-start" alignItems="center" mt={5} onPress={() => navigation.navigate("Inventory")}>
          <AntDesign name="left" size={24} color="black" alignSelf="flex-start" />
        </Pressable>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "black",
            }}
          >
            Notification
          </Text>
        </View>
      </HStack>
      <Center
        bg={Colors.white}
        rounded="lg"
        _text={{
          color: "green",
          fontWeight: "700",
        }}
        h={16}
        mt={4}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "green",
          }}
        >
          Rest Up!!
        </Text>
      </Center>
      <Box w="full" h="60%"  position="fixed" >
        <Image
          source={require("../../../assets/svg.jpg")}
          alt="login"
          resizeMode="cover"
          height="100%"
          flex={1}
          width="100%"
        />
      </Box>
      <Center
        bg={Colors.gray}
        rounded="lg"
        
        _text={{
          color: "Colors.primary",
          fontWeight: "700",
        }}
        px={4}
        py={2}
        h={16}
        mt={4}
        
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
          }}
          color={Colors.primary}
        >
          No New Notifications
        </Text>
      </Center>
    </Box>
  )
}

export default NotificationScreen