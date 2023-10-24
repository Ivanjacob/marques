import { Center, View, Text, VStack, HStack, Modal, Button, Pressable, Image } from 'native-base';
//import { Modal } from 'react-native'
import React, { useState } from 'react'
import Colors from "../color"
import Buttons from "./Buttons";

const OrdersInfos = [
  {
    title:"Products",
    price:126.77,
    color:"black"
  },
  {
    title:"Shipping",
    price:26.01,
    color:"black"
  },
  {
    title:"Tax",
    price:12.43,
    color:"black"
  },
  {
    title:"Total Amount",
    price:165.21,
    color:"main"
  }
];

const OrderModal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Center>
      <Buttons
        mt={5}
        color={Colors.white}
        bg={Colors.black}
        onPress={() => setShowModal(true)}
      >
        SHOW PAYMENT & TOTAL
      </Buttons>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="lg">
        <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Order</Modal.Header>
          <Modal.Body>
            <VStack space={3}>
              {OrdersInfos.map((item, index) => (
                <HStack key={index} alignItems="center" justifyContent="space-between">
                  <Text fontWeight="medium">{item.title}</Text>
                  <Text color={item.color === "main" ? Colors.main  : Colors.black }>KSh.{item.price}</Text>
                </HStack>
              ))}
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Pressable
                w="full"
                justifyContent="center"
                bg={Colors.paypal}
                rounded={3}
                overflow="hidden"
                h={45}
                onPress={() => setShowModal(false)}
            >
                <Image
                    source={require("../../assets/mpesaa.png")}
                    alt="mpesa"
                    resizeMode='contain'
                    w="full"
                    h="150%"
                />
            </Pressable>
            <Button
                w="full"
                mt={2}
                bg={Colors.black}
                h={45}
                _text={{
                  color: Colors.white,
                }}
                onPress={() => setShowModal(false)}
                _pressed={{
                  bg: Colors.black,
                }}
            >
              <Text color="white">Place Order</Text>
            </Button>
            </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default OrderModal;