import { 
    View, 
    Text,
    Box,
    Center,
    Spacer,
    ScrollView,
    HStack,
    VStack,
    Image,
    Heading,
    Flex,
    FlatList,
    Avatar,
} from 'native-base'
import React from 'react'
import { LogBox, Pressable } from 'react-native'
import { Ionicons, Entypo, Fontisto  } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../color';


const QueueScreen = () => {
  return (
    <Box>
        <VStack mr={1} ml={1} justifyContent="center" space={4} >
            <Center 
                bg={Colors.black} 
                height={150} 
            >
                <Fontisto name="nav-icon-grid-a" size={28} bold color="white" />            
                <Text fontFamily="mono" fontSize={24} color="white" >
                    NICE RICE MILLERS
                </Text>
            </Center>
            <Center 
                bg={Colors.white}
                height={32}
            >
            <Text fontFamily="mono" bold fontSize={24} >
                Hi Jacob,
            </Text>
            <Text fontFamily="mono" fontSize={18} >
                Thank you for waiting.
            </Text>
            </Center>
            <Center 
                bg={Colors.white}
                height={20}
                _text={{
                    color: "black",
                    fontWeight: "bold"
                
                }}
            >
                <Text fontFamily="mono" fontSize={16} >
                    Here's you position
                </Text>
                <Text fontFamily="mono" fontSize={15} >
                    in the queue
                </Text>
            </Center>
            <Flex alignItems="center" >
                <Center 
                    bg={Colors.black}
                    rounded="full" 
                    borderRadius="full"                
                    height={200} 
                    width={200}
                    
                >
                    <Text fontSize={80}  color={Colors.white} >
                        4
                    </Text>
                    <Text fontSize={18} color={Colors.white}>
                        position
                    </Text>
                </Center>
            </Flex>
            <Center 
                bg={Colors.white}
                height={20}
            >
                <Text fontFamily="mono" fontSize={16} >
                    We'll text you when we're
                </Text>
                <Text fontFamily="mono" fontSize={15} >
                    almost ready to see you.
                </Text>
            </Center>
        </VStack>
    </Box>
  )
}

export default QueueScreen

{/* 
            LOGO:
        Nice Millers LTD

            Hi Jacob,
        Thank you for waiting.
            ooo
        
        Here's you position
            in the queue

            2
        Position

        We'll text you when we're
        almost ready to see you
*/}