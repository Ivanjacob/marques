import { View, Text, TouchableOpacity } from 'react-native'
import { Image, HStack, Box, Input, Flex, Pressable, Menu, Icon, VStack, Heading, Center, Button, ScrollView, Container, Content, Card, CardItem, IconButton } from 'native-base'
import React, { useState } from 'react'
import { Ionicons, EvilIcons, MaterialCommunityIcons, MaterialIcons, Entypo, AntDesign } from '@expo/vector-icons';
import Colors from "../../color";


import { useNavigation } from '@react-navigation/native';

const menubar = [
  {
    title: 'Inventory',
    icon: 'home',
    link: 'Inventory',

  },
  {
    title: 'Alert',
    icon: 'alert',
    link: 'Alert',
  },
  {
    title: 'Notifications',
    icon: 'bell',
    link: 'Notifications',
  },
  {
    title: 'Add Stock',
    icon: 'plus',
    link: 'AddStock',
  },
  {
    title: 'Add Product',
    icon: 'plus',
    link: 'Add',
  },
  {
    title: 'Logout',
    icon: 'logout',
    link: 'Manager-Login',
  }
]

const HomeScreen = () => {
  
  const navigation = useNavigation();

  const handleMenuItemPress = (screenName) => {
    // Navigate to the desired screen when a menu item is pressed
    navigation.navigate(screenName);
  };

  return (
    <Box bg={Colors.subGreen} space={5} ml={2} mr={2} pb={4} >
      <HStack bg={Colors.white} style={{ flexDirection: "row", height: 50 }}
        alignItems="space-between"
        justifyContent="space-between"
      >
        <Box alignItems="flex-start">
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
          {menubar.map((item, index) => (
            
              <Menu.Item key={index}>
              <Pressable onPress={() => handleMenuItemPress(item.link)}>
                <HStack space={2}>
                  <Icon as={MaterialCommunityIcons } name={item.icon} size={5} />
                  <Text ml={2}>{item.title}</Text>
                </HStack>
                </Pressable>
              </Menu.Item>
          ))}
        </Menu>
        </Box>
        <View alignSelf='center' syle={{ flex: 1, alignItems: "center", justifyContent: "center", width: "100%" }}  >
          <View 
            mt={12}
            bg="grey.200"
            width="100%"
            height="100%"
            alignItems="center"
            justifyContent="center"
            borderRadius="10px"
          >
            <Text bold fontSize={30} >Inventory</Text>
          </View>
        </View>
        <TouchableOpacity
          alignSelf="flex-end"
          rounded="full"
          style={{
            width: 50,
            paddingRight: 10,
            justifyContent: "center",
          }}
        >
          <Image
            source={{ uri: "https://i.pravatar.cc/150?img=16" }}
            resizeMode="contain"
            rounded="full"
            size={23}
            style={{ 
              marginLeft: 10,
              width: 32,
              height: 32,
            }}
          />
        </TouchableOpacity>
      </HStack>
      
      <View mt={5} >
        <Input
          placeholder="Search Inventory Items"
          w="85%"
          variant="rounded"
          bg={Colors.white}
          type="search"
          borderWidth={0}
          _focus={{
              bg: Colors.white,
          }}
          mt={5}
          ml={4}
          mr={4}
          _placeholder={{
              color: "black",
          }}
          InputLeftElement={
              <MaterialIcons
                  name="search"
                  size={24}
                  color={Colors.main}
                  style={{ marginLeft: 10 }}
              />
          }
          InputRightElement={
              <Pressable>
                  <MaterialCommunityIcons style={{ marginRight: 10 }} name="microphone" size={24} color={Colors.black} />
              </Pressable>
          }
        />
      </View>
      <Flex flexDirection="row" mt={5} alignItems="center" justifyContent="center" justifyItems="center" bg={Colors.main} rounded={20} h={16}>
          <Button
            bg={Colors.main}
            mt={1}
            ml={4}
            _text={{ color: 'white' }}
            _pressed={{ bg: 'blue.600', _text: { color: 'white' } }}
            onPress={() => navigation.navigate("Add")}
          >
          <Entypo name="plus" size={24} color="white"  />
          </Button>
          <View style={{ flex: 1, marginLeft: 8 }}>
            <Text >Add Items By Category</Text>
          </View>
      </Flex>
      <VStack direction="column" mt={10} bg={Colors.deepGray}>
          <Center>
            <Heading fontSize={16} >ADD PRODUCTS BY CATEGORY </Heading>
          </Center>
          
            <ScrollView pt={4} horizontal={true} showsHorizontalScrollIndicator={false}>
              <VStack space={4} direction="column" ml={3} mr={2}>
                <Center h={100} w={100} rounded="lg">
                  <Image
                    source={{ uri: "https://images.yaoota.com/uZ_gS67cSOWu7Fxu0TAWuwKs-6w=/trim/fit-in/500x500/filters:quality(80)/yaootaweb-production-ke/media/crawledproductimages/6ab9cde55a6b18c1d174053a311e4e55066f6765.jpg"}}
                    alt="Alternate Text"
                    rounded={10}
                    h={100}
                    w={100}
                    resizeMode="cover"
                  />
                </Center>
                <Text color="black" fontSize={15} italic textAlign="center" alignSelf="flex-start">
                    Pure Pishori
                  </Text>
              </VStack>
              <VStack space={4} direction="column" ml={1} mr={2}>
                <Center h={100} w={100} rounded="lg" shadow={3}>
                  <Image
                    source={{ uri: "https://cdnprod.mafretailproxy.com/sys-master-root/he0/h6c/14916132864030/27584_main.jpg_1700Wx1700H?im=Resize=400"}}
                    alt="Alternate Text"
                    rounded={10}
                    h={100}
                    w={100}
                    resizeMode="cover"
                  />
                </Center>
                <Text color="black" fontSize={15} italic textAlign="center" alignSelf="flex-start">
                    Brown Rice
                  </Text>
              </VStack>
              <VStack space={4} direction="column" ml={1} mr={3}>
                <Center h={100} w={100} rounded="lg" shadow={3}>
                  <Image
                    source={{ uri: "https://cdnprod.mafretailproxy.com/sys-master-root/h0b/h94/17014029811742/31969_main.jpg_1700Wx1700H?im=Resize=400"}}
                    alt="Alternate Text"
                    rounded={10}
                    h={100}
                    w={100}
                    resizeMode="cover"
                  />
                </Center>
                <Text color="black" fontSize={15} italic textAlign="center" alignSelf="flex-start">
                    Sindano Fragrant
                  </Text>
              </VStack>
              <VStack space={4} direction="column" ml={1} mr={2}>
                <Center h={100} w={100} rounded="lg" shadow={3}>
                  <Image
                    source={{ uri: "https://cdnprod.mafretailproxy.com/sys-master-root/h1f/h0f/17014023520286/31970_main.jpg_1700Wx1700H?im=Resize=400"}}
                    alt="Alternate Text"
                    rounded={20}
                    h={100}
                    w={100}
                    resizeMode="cover"
                  />
                </Center>
                <Text color="black" fontSize={15} italic textAlign="center" alignSelf="flex-start">
                    Blended Rice
                  </Text>
              </VStack>
            </ScrollView>
          
          <Center mt={5} color="blue.100">
            <Pressable flexDirection="row">
              <Text textColor="blue.100" bold >View all</Text>
              <AntDesign ml={5} name="right" size={20} color="black" />
            </Pressable>
          </Center>
      </VStack>
      <HStack mt={5} space={3} justifyContent="center">
        {/* Pie Chart */}
        <Center h="150" w="150" bg="white" rounded="md" shadow={3}>
          <Image
            source={{ uri: "https://images.pexels.com/photos/5466250/pexels-photo-5466250.jpeg?auto=compress&cs=tinysrgb&w=600"}}
            alt="Alternate Text"
            rounded={10}
            h={100}
            w={100}
            resizeMode="cover"

          />
          <Text italic mt={2}>Track</Text>
        </Center>
        <Center h="150" w="150" bg="white" rounded="md" shadow={3}>
        <Image
            source={{ uri: "https://media.istockphoto.com/id/1465464201/photo/checking-quality-of-rice-sack-before-delivery-to-customer.jpg?b=1&s=612x612&w=0&k=20&c=At47DUwQ-ktm1Ahg-RBvJR2i6ARLSmk8kDyLLuRCYLE="}}
            alt="Alternate Text"
            rounded={10}
            h={100}
            w={100}
            resizeMode="cover"

          />
          <Text italic mt={2}>Inventory</Text>
        </Center>
      </HStack>
      <VStack mt={4} space={4} alignItems="center">
        <Center w="64" h="12" bg="white" rounded="md" shadow={3}>
          <IconButton icon={<Icon as={Entypo} name="emoji-happy" />} borderRadius="full" 
            _icon={{
              color: "orange.500",
              size: "md"
            }} 
            _hover={{
              bg: "orange.600:alpha.20"
            }} 
            _pressed={{
              bg: "orange.600:alpha.20",
              _icon: {
                name: "emoji-flirt"
              },
              _ios: {
                _icon: {
                  size: "2xl"
                }
              }
            }} 
            _ios={{
              _icon: {
                size: "2xl"
              }
            }}
          />
        </Center>
      </VStack>

    </Box>
  )
}

export default HomeScreen
