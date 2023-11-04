// Date: 09/04/2021
import { View, Text } from 'react-native'
import { Box, Flex, HStack, Pressable, Center, Image, ScrollView, FlatList, VStack, Button } from "native-base"
import React from 'react'
import { AntDesign, MaterialCommunityIcons  } from '@expo/vector-icons';

import Colors from "../../color";
import products from "../../data/Products";

import { useNavigation } from '@react-navigation/native';

const AlertScreen = () => {
  
  const navigation = useNavigation();

  // Get today's date
  const today = new Date(); // Current date
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based, so add 1
  const day = String(today.getDate()).padStart(2, '0');
  const formattedToday = `${year}-${month}-${day}`;
  console.log(formattedToday)
  
  // Define the number of days to check for expiry
  // Calculate the cutoff date
  const daysToCheck = 3;

  const cuttoffDate = new Date(today);
  cuttoffDate.setDate(cuttoffDate.getDate() + daysToCheck);
  console.log(cuttoffDate);

  // Filter produts based on expiry date
  const filteredProducts = products.filter((item) => {
    const expiryDate = new Date(item.expiryDate.replace(/\//g, '-')); // Replace slashes with dashes
    return expiryDate <= cuttoffDate;

  });
  


  return (
    <Box bg={Colors.mygray}>
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
        shadow={2}
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
            Inventory Alerts
          </Text>
        </View>
      </HStack>
      {filteredProducts.length === 0 ? (
        <>
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
      <Box w="full" h="50%"  position="fixed" >
        <Image
          source={{ uri: "https://img.freepik.com/free-photo/handsome-young-african-american-with-pink-polo-tshirt_176420-32120.jpg?size=626&ext=jpg&ga=GA1.1.1824785898.1697047782&semt=ais"}}
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
          No New Alerts
        </Text>
      </Center>
        </>
      ) : (
        <Box>
          <HStack 
            flexDirection="row" 
            justifyItems="center" 
            alignContent="center"
            bg={Colors.white} 
            h={16}
            px={2} 
            space={5}
            mt={2}
          >
            <Pressable justifyContent="flex-start" alignItems="center" mt={5} onPress={() => navigation.navigate("Inventory")}>
              <MaterialCommunityIcons name="alert-outline" size={24} color="black" alignSelf="flex-start" />
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
                  fontSize: 15,
                  color: "black",
                  fontStyle: "italic",
                  fontFamily: "sans-serif",
                }}
              >
                Upcoming Expiry dates
              </Text>
            </View>
            <Pressable justifyContent="flex-start" alignItems="center" mt={5} onPress={() => navigation.navigate("Inventory")}>
              <AntDesign name="filter" size={24} color="black" alignSelf="flex-end"  />
            </Pressable>
          </HStack>
          <ScrollView style={{ height: 500 }} showsVerticalScrollIndicator={false}>
          <FlatList
              showsVerticalScrollIndicator={false}
              data={filteredProducts.slice(0, 8)}
              keyExtractor={(item) => item._id}
              renderItem={({ item }) => {
                const expiryDate = new Date(item.expiryDate.replace(/\//g, '-')); // Replace slashes with dashes
                const timeDiff = expiryDate.getTime() - today.getTime(); // Use getTime() to get timestamp
                const daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24));
                console.log(daysRemaining);
                return (
                  <Pressable>
                      <Box mb={3}>
                          <HStack
                              alignItems="center"
                              bg={Colors.white}
                              shadow={4}
                              rounded={10}
                              overflow="hidden"
                          >
                          <Center w="30%" bg={Colors.deepGray}>
                              <Image
                                  source={{ uri: item.image }}
                                  alt={item.name}
                                  w="full"
                                  h={32}
                                  resizeMode='contain'
                              />
                          </Center>
                          <VStack w="50%" px={2}>
                              <Text isTruncated color={Colors.black} bold fontSize={12}>
                                  {item.name}
                              </Text>
                              {item.countInStock < 5 ? (
                                <HStack alignItems="center" mt={2}>
                                  <Text color="green" mr={1}>
                                    {item.countInStock} ~ Pcks
                                  </Text>
                                  <MaterialCommunityIcons
                                    name="alert-octagram"
                                    size={24}
                                    color="red"
                                  />
                                </HStack>
                              ) : (
                                <Text color={Colors.black} mt={2}>
                                  {item.countInStock} ~ Pcks
                                </Text>
                              )}
                          </VStack>
                          <Center mr={5} >
                            <Text color="red" mt={2}>
                              {daysRemaining}d
                            </Text>
                          </Center>
                          <Center mr={2} >
                              <MaterialCommunityIcons name="delete" size={24} color="red" />
                          </Center>
                          </HStack>
                      </Box>
                  </Pressable>
            )}}
          />
          </ScrollView>
      </Box>
      )}
    </Box>
  )
}

export default AlertScreen;