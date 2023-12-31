import { View, Text } from 'react-native'
import { Box, Flex, HStack, Pressable, Image, Center } from "native-base"
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import { AntDesign } from '@expo/vector-icons';

import Colors from "../../color";
import Notifications from './Components/Notifications';
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
      <NoNotifications />
    </Box>
  )
}

export default NotificationScreen