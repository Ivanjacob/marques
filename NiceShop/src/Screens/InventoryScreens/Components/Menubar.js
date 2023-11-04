import { View, Text } from 'react-native'
import { NativeBaseProvider, Box, Menu, Pressable,  } from 'native-base'
import React from 'react'
import { Ionicons, EvilIcons, MaterialCommunityIcons, MaterialIcons, Entypo, AntDesign } from '@expo/vector-icons';

const Menubar = () => {
  return (
    <Box h="80%" w="90%" alignItems="flex-start">
      <Menu shadow={2} w="190" trigger={triggerProps => {
      return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
              <Ionicons name="menu" size={24} color="black"
                style={{ 
                  marginLeft: 10,
                  width: 32,
                  height: 32,
                }}
              />
            </Pressable>;
    }}>
        <Menu.Item>Arial</Menu.Item>
        <Menu.Item>Nunito Sans</Menu.Item>
        <Menu.Item>Roboto</Menu.Item>
        <Menu.Item>Poppins</Menu.Item>
        <Menu.Item>SF Pro</Menu.Item>
        <Menu.Item>Helvetica</Menu.Item>
        <Menu.Item>Cookie</Menu.Item>
      </Menu>
    </Box>
  )
}

export default Menubar