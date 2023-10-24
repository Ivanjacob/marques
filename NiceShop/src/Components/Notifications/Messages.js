import { Center, View, Text } from "native-base"
import React from 'react'

export default function Messages({ color, bg, size, children, bold  }) {
  return (
    <Center bg={bg} p={4} rounded={5}>
        <Text color={color} fontSize={size} bold={bold}>
            {children}
        </Text>
    </Center>
  )
}

