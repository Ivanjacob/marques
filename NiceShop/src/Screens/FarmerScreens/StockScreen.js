import { 
    View, 
    Heading, 
    Text, 
    Center, 
    Image, 
    Box, 
    Flex, 
    Pressable, HStack, VStack, Stack, ScrollView } from 'native-base'
import React from 'react'
import Colors from "../../color";
import { Ionicons, AntDesign, FontAwesome5, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const StockScreen = () => {
  return (
    <ScrollView space={4} bg={Colors.subGreen} pt={3} pb={20} >
        <Box bg="amber.500" pt={4} pb={5} mr={3} ml={3} rounded="lg">
            <Text color={Colors.white} fontSize={20} bold textAlign="center">
                Your Stock
            </Text>
            <VStack space={4} >
                <HStack 
                    direction="row"  
                    ml={3} 
                    mr={3}
                    bg="amber.500"
                    justifyContent="space-between"
                >
                    <View rounded="full" borderRadius="full" ml={3} >
                        <Pressable  >
                            <Ionicons name="menu-outline" size={30} color="black" />
                        </Pressable>
                    </View>
                    <View rounded="full" borderRadius="full" mr={3} bg={Colors.white} >
                        <Pressable >
                            <Image
                            source={require('../../../assets/jacob.png')}
                            alt="Alternate Text"
                            size={50}
                            resizeMode="contain"
                            borderRadius="full"
                
                            />
                        </Pressable>
                    </View>
                </HStack>
                <HStack justifyContent="space-between" px={5}>
                    <VStack>
                        <Text color={Colors.black}  fontSize={14} ml={3} pt={1}>
                            1000 KGs 
                        </Text>
                        <Text color={Colors.black}  fontSize={12} ml={3} pt={1}>
                            Paddy Rice
                        </Text>
                    </VStack>
                    <VStack>
                        <Text color={Colors.black}  fontSize={14} ml={3} pt={1}>
                            900 KGs
                        </Text>
                        <Text color={Colors.black}  fontSize={12} ml={3} pt={1}>
                            Milled Rice
                        </Text>
                    </VStack>
                    <VStack>
                        <Text color={Colors.black}  fontSize={14} ml={3} pt={1}>
                            3000 KGs
                        </Text>
                        <Text color={Colors.black}  fontSize={12} ml={3} pt={1}>
                            Sold Rice
                        </Text>
                    </VStack>
                </HStack>
            </VStack>
        </Box>
        
        <VStack space={4} px={1} py={1} pt={4} pb={50}>
            <ScrollView space={4} px={1} pt={4} >
                <Box w="full"  rounded="lg" bg="0" mr={2}>
                    <Stack direction="row" mb="2.5" mt="3.5" space={3} justifyContent="space-between" px={2} pb={4}>
                        <Center size="40" bg="white" rounded="sm" _text={{
                        fontWeight: "medium"
                        }} shadow={"1"}>
                        <MaterialCommunityIcons name="book-plus-multiple" size={24} color="black" />
                            <Text color={Colors.black} fontSize={12}>Book Milling Position</Text>
                        </Center>
                        <Center bg="white" size="40" rounded="sm" _text={{
                            fontWeight: "medium"
                        }} shadow={"1"}>
                            <FontAwesome5 name="buysellads" size={24} color="black" />
                            <Text color={Colors.black} fontSize={12}>Sell to us</Text>
                        </Center>
                    </Stack>
                </Box>
                <Box w="full"  rounded="lg" bg="0">
                    <Stack direction="row" mb="2.5" mt="3.5" space={3} justifyContent="space-between" px={2} pb={4}>
                        <Center size="40" bg="white" rounded="sm" _text={{
                        fontWeight: "medium"
                        }} shadow={"1"}>
                            <AntDesign name="pluscircle" size={24} color="black" />
                            <Text color={Colors.black} fontSize={12}>Store with us</Text>
                        </Center>
                        <Center bg="white" size="40" rounded="sm" _text={{
                            fontWeight: "medium"
                        }} shadow={"1"}>
                            <MaterialCommunityIcons name="database-minus" size={24} color="black" />
                            <Text color={Colors.black} fontSize={12}>Mill</Text>
                        </Center>
                    </Stack>
                </Box>
                <Box w="full"  rounded="lg" bg="0">
                    <Stack direction="row" mb="2.5" mt="3.5" space={3} justifyContent="space-between" px={2} pb={4}>
                        <Center size="40" bg="white" rounded="sm" _text={{
                        fontWeight: "medium"
                        }} shadow={"1"}>
                            <Ionicons name="bar-chart-outline" size={24} color="black" />
                            <Text color={Colors.black} fontSize={12}>View Statistics</Text>
                        </Center>
                        <Center bg="white" size="40" rounded="sm" _text={{
                            fontWeight: "medium"
                        }} shadow={"1"}>
                            <Ionicons name="md-print" size={24} color="black" />
                            <Text color={Colors.black} fontSize={12}>Generate Report</Text>
                        </Center>
                    </Stack>
                </Box>
            </ScrollView>
        </VStack>
    </ScrollView>
  )
}

export default StockScreen