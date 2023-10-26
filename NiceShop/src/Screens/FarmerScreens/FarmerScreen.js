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
import { Ionicons, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../color';


const data = [
  {
  id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
  fullName: "Internal Sales",
  timeStamp: "12:47 PM",
  recentText: "Sold to us 100 bags of rice",
  avatarUrl: "https://images.pexels.com/photos/8293694/pexels-photo-8293694.jpeg?auto=compress&cs=tinysrgb&w=600"
}, 
{
  id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
  fullName: "Milled Rice",
  timeStamp: "11:11 PM",
  recentText: "Milled 1000 KGs of rice",
  avatarUrl: "https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=600"
},
{
  id: "68694a0f-3da1-431f-bd56-142371e29d72",
  fullName: "Milled Rice",
  timeStamp: "8:56 PM",
  recentText: "Milled 900 KGs of rice",
  avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU"
}
];

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

const FarmerScreen = () => {
  return (
    <Box pt={5}>
      <HStack 
        direction="row"  
        ml={3} 
        mr={3}
        bg={Colors.white}
        justifyContent="space-between"
        >
        <View rounded="full" borderRadius="full" ml={3}>
          <Pressable >
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
      <Box bg="white" pt={8} pb={5} mr={3} ml={3} rounded="lg">
        <Center >
          <Text color={Colors.black} fontSize={40} bold alignSelf="flex-start">
            Hello,
          </Text>
          <Text pt={2} color="black" fontSize={32} alignSelf="flex-start">
            Jacob Evans 👋 
            <Entypo name="grid" size={24} color="black" alignSelf="flex-end"/>
          </Text>
        </Center>
        
      </Box>
      <Spacer />
      <Flex direction="row" justifyContent="space-between" ml={3} mr={3} pt={2}>
        <Text color="black" fontSize={15}  alignSelf="flex-start">
          Our Services
        </Text>
        <Text color={Colors.blue} fontSize={15}  italic alignSelf="flex-end" mr={2}>
          See all
        </Text>
      </Flex>
      <ScrollView pt={4} horizontal={true} showsHorizontalScrollIndicator={false}>
        <VStack space={4} direction="column" ml={3} mr={2}>
          <Center h={200} w={200} rounded="lg">
            <Image
              source={{ uri: "https://media.istockphoto.com/id/1190411048/photo/paddy-factory-in-selangor-malaysia.jpg?b=1&s=612x612&w=0&k=20&c=PnDalK755VyvaHuZzV907SOnD5AzuC10c8hUtBNGhe8="}}
              alt="Alternate Text"
              rounded={10}
              h={200}
              w={200}
              resizeMode="cover"
            />
          </Center>
          <Text color="black" fontSize={15} italic textAlign="center" alignSelf="flex-start">
              Rice Milling
            </Text>
        </VStack>
        <VStack space={4} direction="column" ml={1} mr={2}>
          <Center h={200} w={200} rounded="lg" shadow={3}>
            <Image
              source={{ uri: "https://media.istockphoto.com/id/458560823/photo/hemp-sacks-stacked-high-in-a-large-warehouse.jpg?b=1&s=612x612&w=0&k=20&c=57lXJNSCfNXHD7HUcYFbAAhwTofbma5JuyAWkFHpRps="}}
              alt="Alternate Text"
              rounded={10}
              h={200}
              w={200}
              resizeMode="cover"
            />
          </Center>
          <Text color="black" fontSize={15} italic textAlign="center" alignSelf="flex-start">
              Rice Storage
            </Text>
        </VStack>
        <VStack space={4} direction="column" ml={1} mr={3}>
          <Center h={200} w={200} rounded="lg" shadow={3}>
            <Image
              source={{ uri: "https://media.istockphoto.com/id/950986656/photo/business-finance-accounting-contract-advisor-investment-consulting-marketing-plan-for-the.jpg?b=1&s=612x612&w=0&k=20&c=LrfjTLJ2rsFldMH-aPUYxV1jRVCSKBCne9zTRL5DwNY="}}
              alt="Alternate Text"
              rounded={10}
              h={200}
              w={200}
              resizeMode="cover"
            />
          </Center>
          <Text color="black" fontSize={15} italic textAlign="center" alignSelf="flex-start">
              Marketing and Sales
            </Text>
        </VStack>
      </ScrollView>
      <Flex direction="row" justifyContent="space-between" ml={3} mr={3} pt={8}>
        <Text color="black" fontSize={15}  alignSelf="flex-start">
          Transactions
        </Text>
        <Text color={Colors.blue} fontSize={15}  italic alignSelf="flex-end" mr={2}>
          See all
        </Text>
      </Flex>
      
      {/*Transactions*/}

      <Box rounded={10} ml={1} mr={1} bg={Colors.subGreen}>
        <FlatList 
          data={data} 
          renderItem={({ item }) => 
          <Box borderBottomWidth="1" 
              _dark={{
                borderColor: "muted.50"
              }}  
              borderColor="muted.800" 
              pl={["0", "4"]} 
              pr={["0", "5"]} 
              py="2"
          >
            <HStack space={[2, 3]} justifyContent="space-between">
                <Avatar size="48px" source={{ uri: item.avatarUrl}} ml={1} />
                <VStack>
                  <Text _dark={{ color: "warmGray.50" }} color="coolGray.800" bold>
                    {item.fullName}
                  </Text>
                  <Text color="coolGray.600" _dark={{ color: "warmGray.200" }}>
                    {item.recentText}
                  </Text>
                </VStack>
                <Spacer />
                <Text fontSize="xs" _dark={{ color: "warmGray.50" }} color="coolGray.800" alignSelf="flex-start">
                  {item.timeStamp}
                </Text>
            </HStack>
          </Box>} keyExtractor={item => item.id}
        />
      </Box>
    </Box>
  )
}

export default FarmerScreen;