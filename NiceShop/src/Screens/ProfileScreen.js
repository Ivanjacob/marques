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
import useGlobal from '../core/global';
import { Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
 

function ProfileScreen() {
  
  const user = useGlobal(state => state.user)
  const logout = useGlobal(state => state.logout)

  const renderProfileImage = () => {

    // Concatenate the base URL with the profile image URL
    const fullProfileImageURL = `http://192.168.88.253:8000/${user.profile_image}`;
    if (user.profile_image === 'default.jpg') {
      return 'https://i.pravatar.cc/150?img=16'; // Default avatar URL
    } else {
      return fullProfileImageURL; // User's profile image URL
    }
  };
  
  

  return (
    <>
      <Center bg={Colors.main} pt={10} pb={6}>
        <Image 
          source={{
            uri: renderProfileImage(),
          }} 
          alt="Profile"
          h={24}
          w={24}
          resizeMode='cover'
          size={150}
          rounded={100}
        />
        <Heading bold fontSize={15} isTruncated my={2} color={Colors.white}>
          {user.username}
        </Heading>
        <Pressable
          onPress={logout}
          bg={Colors.white}
          px={10}
          py={2}
          rounded={100}
          mt={2}
        >
          <MaterialCommunityIcons name="logout" size={24} color="black" />
        </Pressable>
      </Center>
      {/* TABS */}
      <Tabs />
    </>
  )
}

export default ProfileScreen