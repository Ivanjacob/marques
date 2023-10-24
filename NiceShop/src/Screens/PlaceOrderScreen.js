import { View, Text, ScrollView, Box, Heading } from 'native-base'
import React from 'react'
import Colors from "../color";
import OrderInfo from "../Components/OrderInfo"
import OrderItem from "../Components/OrderItem"
import PlaceOrderModel from "../Components/PlaceOrderModel"
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';

function PlaceOrderScreen() {
  return (
    <Box bg={Colors.subGreen} flex={1} safeArea pt={6}>
      <Box>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
        <OrderInfo
          // icon={<Text fontSize={30}>🚚</Text>}
          // title="Shipping"
          // subTitle="Address"
          // text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptate."
          // success
          title="CUSTOMER"
          subTitle={"Name: " + "John Doe"}
          text={"Phone: " + "0712785655"}
          icon={<FontAwesome name="user" size={30} color={Colors.white} />}
        />
        <OrderInfo
          title="SHIPPMENT INFO"
          subTitle={"Status: " + "In Transit"}
          text={"Paid Via: " + "M-Pesa"}
          icon={<FontAwesome5 name="shipping-fast" size={30} color={Colors.white} />}
        />
        <OrderInfo
          title="DELIVER TO"
          subTitle={"Address:" }
          text={"Kahawa, P.O BOX 00100 Nairobi, Kenya."}
          icon={<Ionicons name="location-sharp" size={30} color={Colors.white} />}
        />
        </ScrollView>
      </Box>
      {/* ORDER ITEMS */}
      <Box px={6} flex={1} pb={3}>
        <Heading bold fontSize={15} isTruncated my={4}>
          Products
        </Heading>
        <OrderItem />
        {/* TOTAL */}
        <PlaceOrderModel />
      </Box>
    </Box>
  )
}

export default PlaceOrderScreen