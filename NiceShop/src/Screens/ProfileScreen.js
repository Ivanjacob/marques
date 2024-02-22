import { 
  View, 
  Text,
  Center,
  Image,
  Heading,
} from 'native-base'
import React, { useState, useEffect } from 'react';
import Colors from "../color";
import Tabs from '../Components/Profile/Tabs';
import useGlobal from '../core/global';
import { Pressable, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

import { launchImageLibrary } from 'react-native-image-picker';
import utils from '../core/utils';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';

import { Button, Platform } from 'react-native';

function ProfileImage() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      utils.log('launchImageLibrary', result);
      setImage(result.uri);
      // You can handle the selected image here as per your requirements
    }
  };

  return (
    <View style={{ marginBottom: 20 }}>
      <TouchableOpacity onPress={pickImage}>
        {image ? (
          <Image
            source={{ uri: image }}
            style={{
              height: 150,
              width: 150,
              borderRadius: 75,
            }}
          />
        ) : (
          <Image
            source={require('../../assets/jacob.png')}
            alt="Profile"
            style={{
              height: 150,
              width: 150,
              borderRadius: 75,
            }}
          />
        )}
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: 40,
            height: 40,
            backgroundColor: 'black',
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 3,
            borderColor: 'white',
          }}
        >
          <FontAwesome name="camera" size={15} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
}





function ImagePickerExample() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <Button title="Pick an image from camera roll" onPress={pickImage} />
    //   {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    // </View>
    <TouchableOpacity 
      style={{ marginBottom: 20 }}
      onPress={pickImage}
    >
      <Image 
        source={require('../../assets/jacob.png')} 
        alt="Profile"
        h={24}
        w={24}
        resizeMode='cover'
        size={150}
        rounded={100}
      />
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: 40,
          height: 40,
          backgroundColor: Colors.black,
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 3,
          borderColor: Colors.white,
        }}
      >
        <FontAwesome name="camera" size={15} color={Colors.white} />
      </View>
    </TouchableOpacity>
  );
}


function ProfileScreen() {
  
  const user = useGlobal(state => state.user)
  const logout = useGlobal(state => state.logout)

  const renderProfileImage = () => {

    // Concatenate the base URL with the profile image URL
    const fullProfileImageURL = `http://127.0.0.1:8000/${user.profile_image}`;
    if (user.profile_image === 'default.jpg') {
      return 'https://i.pravatar.cc/150?img=16'; // Default avatar URL
    } else {
      return fullProfileImageURL; // User's profile image URL
    }
  };
  
  

  return (
    <>
      <Center bg={Colors.main} pt={10} pb={6}>
        <ProfileImage />
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