import { View, Text, ScrollView } from 'react-native'
import { Box, Flex, HStack, Pressable, Image, Modal, Center, Button, VStack, Heading, Input } from "native-base"
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import NumericInput from "react-native-numeric-input"
import { AntDesign, Feather, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { Calendar } from "react-native-calendars";


import Colors from "../../../color";


const AddStock = () => {
  
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  
  const handleDateSelect = (date) => {
    setSelectedDate(date.dateString);
    setModalVisible(false); // Close the modal
  }

  return (
    <Box bg={Colors.gray} mt={2} >

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
            Add
          </Text>
        </View>
      </HStack>
      <Box bg={Colors.white} ml={5} mr={5} mt={10} pb={10} rounded={10} shadow={2} >
          {/* close Icon */}
          <HStack justifyContent="flex-end" pt={2} pr={3}>
            <Pressable onPress={() => navigation.navigate("Inventory")}>
              <AntDesign name="close" size={24} color="black" />
            </Pressable>
          </HStack>
          <VStack space={4} alignItems="center" >
            <Center w="200" h="200" rounded="md" shadow={3}>
              {/* Product Image */}
              <Image
                source={{ uri: "https://images.yaoota.com/uZ_gS67cSOWu7Fxu0TAWuwKs-6w=/trim/fit-in/500x500/filters:quality(80)/yaootaweb-production-ke/media/crawledproductimages/6ab9cde55a6b18c1d174053a311e4e55066f6765.jpg"}}
                alt="Alternate Text"
                rounded={10}
                h={200}
                w={200}
                resizeMode="cover"
              />
            </Center>
              {/* Product Name */}
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "black",
                  marginLeft: 10,
                  
                }}
              >
                Pure Pishori
              </Text>
            
              {/*Numeric Input*/}
              <NumericInput
                value={0}
                onChange={value => console.log(value)}
                onLimitReached={(isMax,msg) => console.log(isMax,msg)}
                totalWidth={150}
                totalHeight={40}
                iconSize={25}
                step={1}
                minValue={0}
                maxValue={29}
                valueType='real'
                rounded
                borderColor={Colors.deepGray}
                textColor={Colors.black}
                iconStyle={{ color: Colors.white }}
                rightButtonBackgroundColor={Colors.main}
                leftButtonBackgroundColor={Colors.main}
              />
            {/* Add Expiry Date */}
            <Heading style={{ fontSize: 15 }} >Add Expiry Date</Heading>
            <Flex 
              w="75%"
              direction="row" 
              alignItems="center"
              _text={{
                color: "black",
              }} 
              space={4} 
              bg={Colors.white}
              rounded={10}
              shadow={1}
              px={2}
              py={2}
            >
              <View>
                <Feather name="alert-triangle" size={24} color="black" />
              </View>
              <Input
                justifyContent="center"
                alignSelf="center"
                alignItems="center"
                flex={1}
                placeholder="12-10-2023"
                variant="unstyled"
                _placeholder={{
                  color: "gray.400", 
                  textAlign: "center",
                }}
                value={selectedDate}
                onChangeText={text => setSelectedDate(text)}
              />
              <Pressable onPress={() => setModalVisible(true)} >
                <MaterialCommunityIcons name="pencil" size={24} color="black" />
              </Pressable>
            </Flex>
          </VStack>
      </Box>
      <Center pt={5} >
        <Button
          onPress={() => navigation.navigate("Inventory")}
          bg={Colors.main}
          _text={{
            color: "black",
            fontSize: 15,
          }}
          _pressed={{
            bg: "white",
            _text: {
              color: "black",
            },
          }}
          px={10}
          rounded={10}
        >
          Continue
        </Button>
      </Center>
      {/* Date Modal */}
      <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)} size="lg">
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Choose Date</Modal.Header>
          <Modal.Body>
            <ScrollView>
              <Calendar onDayPress={handleDateSelect} />
            </ScrollView>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </Box>
  )
}

export default AddStock;