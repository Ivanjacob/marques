import { View } from 'react-native'
import React from 'react'
import { Box, Flex, Heading, ScrollView, Center, Container, Text, Spacer } from 'native-base';
import Colors from "../color"

const AboutScreen = () => {
  return (
    <Box flex={1} bg={Colors.main}>
        <Flex
            
            direction='row' 
            flexWrap="wrap" 
            justifyContent="space-around" 
            alignItems="center"
            pt={10}
        >
            <Heading alignContent='center' >ABOUT US</Heading>
        </Flex>
        <ScrollView >
            <Box ml={3} mr={3} bg={Colors.white} alignContent="center" maxHeight={350} rounded={5}>
                <Heading alignContent='center' >About us</Heading>
                <ScrollView>
                    <Text mt="3" fontWeight="medium" textAlign="justify" ml={3} mr={3} >
                    Nice Millers has the biggest mills in Africa with a capacity of 70 metric tonnes a day. It mills about 70% of the over 40,000 tonnes of rice produced in Mwea Rice Irrigation Scheme every year. The Scheme produces 80% of the rice consumed in Kenya. The mill also has a warehouse with a monthly storage space of 30,000 metric tonnes of rice. We provide storage facilities and market space for free and also sell farmers’ rice on commission. The factory currently works with over 5,000 farmers and 300 women traders who mill and retail rice in the premises. The business has created employment for 1,000 youth who operate and ferry paddy rice by motorbikes and donkey carts. We currently employ over 80 permanent staff and 250 casual laborers.

                    Nice Rice Millers Ltd has helped farmers add value to their crop before delivering it to the market. Income to farmers has doubled since they are able to thresh their paddy rice after harvesting which ensures they deliver a finished product to the market.
                    </Text>
                </ScrollView>
            </Box>
            <Spacer/>
            <Box mt={2} ml={3} mr={3} bg={Colors.white} alignContent="space-between" rounded={5}>
                <Heading alignContent='center' >Accounts</Heading>
                <Text>
                    <Text fontWeight="bold">Account :</Text> Select the user type you want to Login as.
                </Text>
                <Text>
                    <Text fontWeight="bold">Login :</Text> Login into you account.
                </Text>
                <Text>
                    <Text fontWeight="bold">Register :</Text> You're a new user, Register and proceed to Login.
                </Text>
            </Box>
            <Box mt={2} ml={3} mr={3} bg={Colors.white} alignContent="space-between" rounded={5}>
                <Heading alignContent='center' >Our Services</Heading>
                <Text>
                    <Text fontWeight="bold">Rice Milling</Text>
                </Text>
                <Text>
                    <Text fontWeight="bold">Rice Storage</Text>
                </Text>
                <Text>
                    <Text fontWeight="bold">Rice Marketing and Sales</Text>
                </Text>
            </Box>
        </ScrollView>
    </Box>
  )
}

export default AboutScreen;