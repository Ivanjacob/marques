import React, { useState } from "react";
import { View, Text, Box, Alert, CheckIcon, Heading, VStack, FormControl, TextArea } from "native-base";
import SelectDropdown from 'react-native-select-dropdown'; // Import the SelectDropdown component
import Colors from "../color";
import Ratings from "./Ratings";
import Messages from "./Notifications/Messages";
import Buttons from "../Components/Buttons";
//import Alerts from "./Notifications/Alerts";

const ratingOptions = ["1 - Poor", "2 - Fair", "3 - Good"]; // Define your rating options

export default function Review() {
  const [ratings, setRatings] = useState("");  

  return (
    <Box my={9}>
      <Heading bold fontSize={15} mb={2}>
        REVIEW
      </Heading>

      {/* ####### IF THERE IS NO REVIEW ######## */}
    {/*<Messages color={Colors.main} bg={Colors.deepGray} bold children={"NO REVIEW"} />*/}

      {/* REVIEW */}
      <Box p={3} bg={Colors.deepGray} mt={5} rounded={5}>
        <Heading fontSize={15} color={Colors.black}>
          Jacob Evan
        </Heading>
        <Ratings value={4} />
        <Text mb={2} fontSize={11}>
          October 23, 2023
        </Text>
        <Messages
          color={Colors.black}
          bg={Colors.white}
          size={10}
          children={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat."
          }
        />
      </Box>

      {/* WRITE REVIEW */}
      {/*<Box mt={5} rounded={5}>
        <Heading fontSize={15} bold mb={4}>
          REVIEW THIS PRODUCT
        </Heading>
        <VStack space={6}>
          <FormControl>
            <FormControl.Label _text={{ fontSize: "12", color: Colors.black, fontWeight: "bold" }}>
              Rating
            </FormControl.Label>
            <SelectDropdown
              data={ratingOptions} // Provide the rating options
              onSelect={(selectedItem, index) => setRatings(selectedItem)}
              buttonTextAfterSelection={(selectedItem, index) => {
                // Customize the button text if needed
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                // Customize the dropdown item text if needed
                return item;
              }}
              defaultButtonText="Choose Rate"
              buttonStyle={{
                backgroundColor: Colors.subGreen,
                borderWidth: 0,
                rounded: 5,
                padding: 3,
              }}
              dropdownStyle={{ backgroundColor: Colors.deepGray }}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label _text={{ fontSize: "12px", color: Colors.black, fontWeight: "bold" }}>
              Comment
            </FormControl.Label>
            <TextArea
                h={24}
                w="full"
                bg={Colors.subGreen}
                placeholder="Write your comment here..."
                _placeholder={{ color: Colors.lightBlack }}
                rounded={5}
                borderWidth={0}
                py={4}
            />
          </FormControl>
            <Buttons
                bg={Colors.main}
                color={Colors.white}
                bold
                children={"SUBMIT"}
                onPress={() => alert("Submitted")}
                />
                <Messages
                    borderRadius={5}
                    color={Colors.white}
                    bg={Colors.black}
                    children={"Please Login to Review this product"}
                />
        </VStack>
    </Box>*/}
        {/* ALERT */}
    </Box>
  );
}
