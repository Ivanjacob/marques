import { 
  View, 
  Text,
  Center,
  Image,
  Heading,
} from 'native-base'
import React from 'react'
import Colors from "../color";
import Tabs from '../Components/Profile/Tabs';
 

function ProfileScreen() {
  return (
    <>
      <Center bg={Colors.main} pt={10} pb={6}>
        <Image 
          source={{
            uri: "https://i.pravatar.cc/150?img=16"
          }} 
          alt="Profile"
          h={24}
          w={24}
          resizeMode='cover'
          size={150}
          rounded={100}
        />
        <Heading bold fontSize={15} isTruncated my={2} color={Colors.white}>
          Julie Evans
        </Heading>
        <Text color={Colors.white} italic fontSize={10}>
          Joined - October 23 2023
        </Text>
      </Center>
      {/* TABS */}
      <Tabs />
    </>
  )
}

export default ProfileScreen