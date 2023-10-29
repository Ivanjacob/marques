import { View, Text } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Box, Center, Image, HStack, Pressable, VStack, SectionList } from 'native-base'

// Sample data for notifications
const notificationsData = [
    {
        title: "Stock",
        data: [
            {
                title: "Low Stock",
                description: "You have 2 items that are low in stock",
                icon: "alert-circle-outline",
                color: "red"
            },
            {
                title: "Out of Stock",
                description: "You have 2 items that are out of stock",
                icon: "alert-circle-outline",
                color: "red"
            },
            {
                title: "Expired",
                description: "You have 2 items that are expired",
                icon: "alert-circle-outline",
                color: "red"
            },        
        ]
    },
    {
        titile: "Orders",
        data: [
            {
                title: "Pending Orders",
                description: "You have 2 pending orders",
                icon: "alert-circle-outline",
                color: "red"
            },
            {
                title: "Completed Orders",
                description: "You have 2 completed orders",
                icon: "alert-circle-outline",
                color: "red"
            },
            {
                title: "Cancelled Orders",
                description: "You have 2 cancelled orders",
                icon: "alert-circle-outline",
                color: "red"
            }
        ]
    }
];

const Notifications = () => {
  return (
    <SectionList
        sections={notificationsData}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
            <Pressable>
                <HStack space={3} alignItems="center" p={2}>
                    <Box
                        size={12}
                        bg={item.color}
                        borderRadius="md"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <MaterialCommunityIcons name={item.icon} size={24} color="white" />
                    </Box>
                    <VStack>
                        <Text>{item.title}</Text>
                        <Text>{item.description}</Text>
                    </VStack>
                </HStack>
            </Pressable>
        )}
        renderSectionHeader={({ section: { title } }) => (
            <Box bg="gray.100" px={2} py={1}>
                <Text fontWeight="bold">{title}</Text>
            </Box>
        )}
    />
  );
};

export default Notifications;