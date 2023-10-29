import { View, Text } from 'react-native'
import React from 'react'
import { Box } from 'native-base'
import Colors from '../../../color'

const NoNotifications = () => {
  return (
    <Box>
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
                source={require("../../../../assets/svg.jpg")}
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

export default NoNotifications;
