 {/*
 
 SafeArea => Profile Image, Name, Profile Settings
          => My Wishlist, Followed Store, Recently Viewed

My Orders => View All>
            => Unpaid, To be Shipped, Shipped, To be Reviewed, Refund/AfterSales

My Assets => My Coupons, My Points, My Cards, My Addresses, My Favorites, My Footprint

My Earnings => My Invitations, My Commissions, My Withdrawals

*/}

import { View, Heading, Text, Center, Image, Box, Flex, HStack, VStack, Stack, ScrollView, Pressable } from 'native-base'
import React from 'react'
import Colors from "../color"
import { Ionicons, AntDesign, FontAwesome5, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const AccountScreen = () => {

    const navigation = useNavigation();

  return (
    <ScrollView bg={Colors.subGreen} pt={9} space={3}>
        <Box bg={Colors.main} pt={4} pb={5} mr={3} ml={3} rounded="lg">
            <Text color={Colors.white} fontSize={20} bold textAlign="center">
                Account
            </Text>
            <VStack space={4} >
                <HStack >
                    <Image 
                        source={{
                        uri: "https://i.pravatar.cc/150?img=16"
                        }} 
                        alt="Profile" 
                        pt={10}
                        ml={4}
                        resizeMode='cover'
                        size={10}
                        rounded={100}
                    />
                    <Text color={Colors.white}  fontSize={12} ml={4} pt={5}>
                        Julie Evans         
                    </Text>                    
                    <Pressable ml={24} pt={5} px={10} onPress={() => navigation.navigate("Profile")} >
                        <Ionicons name="settings-outline" size={24} color="white" />
                    </Pressable>
                </HStack>
                <HStack justifyContent="space-between" px={5}>
                    <VStack>
                        <Text color={Colors.white}  fontSize={14} ml={8} pt={1}>
                            0
                        </Text>
                        <Text color={Colors.white}  fontSize={12} ml={3} pt={1}>
                            My Wishlist
                        </Text>
                    </VStack>
                    <VStack>
                        <Text color={Colors.white}  fontSize={14} ml={8} pt={1}>
                            0
                        </Text>
                        <Text color={Colors.white}  fontSize={12} ml={3} pt={1}>
                            Followed Store
                        </Text>
                    </VStack>
                    <VStack>
                        <Text color={Colors.white}  fontSize={14} ml={8} pt={1}>
                            0
                        </Text>
                        <Text color={Colors.white}  fontSize={12} ml={3} pt={1}>
                            Recently Viewed
                        </Text>
                    </VStack>
                </HStack>
            </VStack>
        </Box>
        <VStack space={4} px={1}>
            <Box w="full"  rounded="lg" bg={Colors.white}>
                <Flex direction='row' justifyContent="space-between" justifyItems="space-between" pt={4} ml={4} >
                    <Text color={Colors.black} fontSize={15}>
                        My Orders 
                    </Text>
                    <Text color={Colors.white} fontSize={12}>
                        View All <AntDesign name="right" size={12} color="black" />
                    </Text>
                </Flex>
                <Flex direction="row" justifyContent="space-between" justifyItems="center" px={5} pt={4} pb={10}>
                    <HStack direction="column" space={2}>
                        <AntDesign name="wallet" size={24} color="black" />
                        <Text color={Colors.black} fontSize={12}>
                            Unpaid
                        </Text>
                    </HStack>
                    <HStack direction="column" space={2}>
                        <FontAwesome5 name="gift" size={24} color="black" />
                        <Text color={Colors.black} fontSize={12}>
                            Processing
                        </Text>
                    </HStack>
                    <HStack direction="column" space={2} justifyContent="space-around" justifyItems="center" >
                        <MaterialIcons name="rate-review" size={20} bg="amber.500" color="black" />
                        <Text color={Colors.black} fontSize={12} justifyContent="center">
                            Reviewed
                        </Text>
                    </HStack>
                    <HStack direction="column" space={2}>
                        <MaterialIcons name="local-shipping" size={24} color="black" />
                        <Text color={Colors.black} fontSize={12}>
                            Delivered
                        </Text>
                    </HStack>        
                </Flex>
            </Box>
            <Box w="full"  rounded="lg" bg={Colors.white}>
                <Flex direction='row' justifyContent="space-between" justifyItems="space-between" pt={4} ml={4} >
                    <Text color={Colors.black} fontSize={15}>
                        My Assets 
                    </Text>
                    <Text color={Colors.white} fontSize={12}>
                        View All <AntDesign name="right" size={12} color="black" />
                    </Text>
                </Flex>
                <Stack direction="row" pb={4} mt="3.5" space={3} justifyContent="space-between" px={4} >
                    <Center size="24" bg="white" rounded="sm" _text={{
                    fontWeight: "medium"
                    }} shadow={"1"}>
                    <Flex direction="column" justifyContent="center">
                        <Heading color={Colors.black} fontSize={18}>0</Heading>
                        <Text color={Colors.black} fontSize={12}>
                            Balance
                        </Text>
                    </Flex>
                    </Center>
                    <Center bg="white" size="24" rounded="sm" _text={{
                    fontWeight: "medium"
                    }} shadow={"1"}>
                        <Flex direction="column" justifyContent="center">
                            <Heading color={Colors.black} fontSize={18}>0</Heading>
                            <Text color={Colors.black} fontSize={12}>Vouchers</Text>
                        </Flex>
                    </Center>
                    <Center size="24" bg="white" rounded="sm" _text={{
                    fontWeight: "medium"
                    }} shadow={"1"}>
                    <Flex direction="column" justifyContent="center">
                        <Heading color={Colors.black} fontSize={18}>0</Heading>
                        <Text color={Colors.black} fontSize={12}>Coins</Text>
                    </Flex>
                    </Center>
                </Stack>
            </Box>
            <Box w="full"  rounded="lg" bg={Colors.white}>
                <Flex direction='row' justifyContent="space-between" justifyItems="space-between" pt={4} ml={4} >
                    <Text color={Colors.black} fontSize={15}>
                        My Earnings 
                    </Text>
                    <Text color={Colors.white} fontSize={12}>
                        View All <AntDesign name="right" size={12} color="black" />
                    </Text>
                </Flex>
                <Stack direction="row" mb="2.5" mt="3.5" space={3} justifyContent="space-between" px={4} pb={4}>
                    <Center size="24" bg="white" rounded="sm" _text={{
                    fontWeight: "medium"
                    }} shadow={"1"}>
                        <MaterialIcons name="insert-invitation" size={24} color="black" />
                        <Text color={Colors.black} fontSize={12}>Invitations</Text>
                    </Center>
                    <Center bg="white" size="24" rounded="sm" _text={{
                        fontWeight: "medium"
                    }} shadow={"1"}>
                        <MaterialIcons name="attach-money" size={24} color="black" />
                        <Text color={Colors.black} fontSize={12}>Earn</Text>
                    </Center>
                    <Center size="24" bg="white" rounded="sm" _text={{
                    fontWeight: "medium"
                    }} shadow={"1"}>
                        <FontAwesome5 name="money-check" size={24} color="black" />
                        <Text color={Colors.black} fontSize={12}>Withdraw </Text>
                    </Center>
                </Stack>
            </Box>
        </VStack>
    </ScrollView>
  )
}

export default AccountScreen;