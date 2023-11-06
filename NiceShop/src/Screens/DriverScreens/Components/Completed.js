import { View, Text } from 'react-native';
import React from 'react';
import { ScrollView, Box, HStack, Icon, Flex, Center, Pressable, VStack, Stack, Heading } from 'native-base';
import { MaterialCommunityIcons, Ionicons, Entypo, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import Colors from '../../../color';
import deliverydata from '../../../data/DeliveryData';


const Completed = () => {

    const completedDeliveries = deliverydata.filter((delivery) => delivery.status === "Delivered");

    return (
      <ScrollView bg={Colors.newgray} pb={10}  style={{ height: 570 }} showsVerticalScrollIndicator={false} >
          {completedDeliveries.map((delivery, index) => (
              <Center 
                  key={index}
                  bg={Colors.white} 
                  mt={3} 
                  ml={4} 
                  mr={4}
                  rounded={10}
                  mb={3}
              >
                  <VStack mt={2}>
                      <Stack direction="row" mt={2} px={6} alignItems="center" alignContent="center"   space={1}>
                          <Flex direction='column' >
                              <Center rounded="full" bg={Colors.press} h={10} w={10} >
                                  <Icon as={Ionicons} name="location" size={6} color="white" _dark={{ color: "warmGray.50" }}  />
                              </Center>
                              <Center mt={1} >
                                  <Text style={{ fontSize: 12, fontWeight: "bold" }} color={Colors.newestgray} _dark={{ color: "warmGray.50" }}>{delivery.Distance}</Text>
                              </Center>
                          </Flex>
                          <Flex direction='column' mr={1.5} ml={1}  >
                              <Text style={{ fontStyle: "italic", color: "red" }} fontSize={12}>Pickup Point</Text>
                              <Text color={Colors.black} style={{ marginTop: 5, fontWeight: "bold"  }} fontSize={12}>{delivery.PickupPoint} </Text>
                          </Flex>
                      </Stack>
                      <Stack direction="row" mb="2.5" mt="3.5" ml={1.5} flexWrap="wrap" >
                          <Center flexWrap="wrap" h={12} w={16} bg="white" borderRightWidth={1} borderRightColor={Colors.newgray} _text={{
                          fontWeight: "medium"
                          }}>
                              <Text style={{ fontStyle: "italic", color: "red" }} fontSize={10}>Time</Text>
                              <Text color={Colors.black} style={{ marginTop: 5, fontWeight: "bold" }} fontSize={10}>{delivery.Time}</Text>
                          </Center>
                          <Center bg="white" h={12} w="120" justifyContent="center" rounded="sm" _text={{
                              fontWeight: "medium",
                              fontStyle: "italic",
                          }}>
                              <Text style={{ fontStyle: "italic", color: "red" }} fontSize={8}>Pickup points</Text>
                              <Text color={Colors.black} style={{ marginTop: 8, fontWeight: "bold" }} fontSize={12}>{delivery.PickupPoints}</Text>
                          </Center>
                          <Center h={12} w="120" bg="white" borderLeftWidth={1} borderLeftColor={Colors.newgray} _text={{
                          fontWeight: "medium"
                          }}>
                              <Text style={{ fontStyle: "italic", color: "red" }} fontSize={8}>Delivery Points</Text>
                              <Text color={Colors.black} style={{ marginTop: 8, fontWeight: "bold" }} fontSize={12}>{delivery.DeliveryPoints}</Text>
                          </Center>
                      </Stack>
                  </VStack>
              </Center>
          ))}
      </ScrollView>
    )
  }

export default Completed;