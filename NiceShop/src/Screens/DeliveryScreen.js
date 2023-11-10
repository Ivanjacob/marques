import React, { useState, useEffect } from 'react';
import { View, Text, Center, Box, ScrollView, VStack, FormControl, Select } from 'native-base';
import Colors from "../color";
import Buttons from "../Components/Buttons";
import { useNavigation } from '@react-navigation/native';

const countryOptions = ["Kenya", "Uganda", "Tanzania", "Rwanda", "South Sudan"];

const countyOptions = {
  "Kenya": ["Nairobi", "Mombasa", "Meru", "Embu", "Kirinyaga", "Muranga", "Kiambu"],
  "Uganda": ["Kampala", "Gulu", "Mbarara", "Jinja", "Other"],
  "Tanzania": ["Dar es Salaam", "Dodoma", "Mwanza", "Arusha", "Other"],
  "Rwanda": ["Kigali", "Butare", "Gisenyi", "Ruhengeri", "Other"],
  "South Sudan": ["Juba", "Wau", "Malakal", "Yei", "Other"],
};

const townOptions = {
  "Nairobi": ["Westlands", "Kilimani", "Karen", "Kibera", "Other"],
  "Mombasa": ["Nyali", "Likoni", "Kisauni", "Mvita", "Other"],
  "Meru": ["Meru Town", "Makutano", "Nkubu", "Maua", "Other"],
  "Embu": ["Embu Town", "Runyenjes", "Manyatta", "Other"],
  "Kirinyaga": ["Kerugoya", "Sagana", "Wanguru", "Other"],
};

const ShippingInputs = [
  {
    label: "COUNTRY",
    options: countryOptions,
  },
  {
    label: "COUNTY",
    type: "select",
  },
  {
    label: "NEAREST TOWN",
    type: "select",
    placeholder: "Select Nearest Town",
  },
  {
    label: "DELIVERY POINT",
    options: ["SHOP 1002", "SHOP 1003", "SHOP 1004", "SHOP 1005", "Other"],
  },
];

function DeliveryScreen() {
  const navigation = useNavigation();
  const [selectedCountry, setSelectedCountry] = useState(countryOptions[0]);
  const [selectedCounty, setSelectedCounty] = useState(null);
  const [selectedNearestTown, setSelectedNearestTown] = useState(null);

  useEffect(() => {
    if (selectedCounty) {
      setSelectedNearestTown(null); // Reset nearest town when county changes
    }
  }, [selectedCounty]);

  const handleCountyChange = (value) => {
    setSelectedCounty(value);
  };

  const handleNearestTownChange = (value) => {
    setSelectedNearestTown(value);
  };

  return (
    <Box flex={1} safeArea bg={Colors.main} py={5}>
      {/* HEADER */}
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold>
          DELIVERY ADDRESS
        </Text>
      </Center>
      {/* INPUTS */}
      <Box h="full" bg={Colors.white} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {ShippingInputs.map((input, index) => (
              <FormControl key={index}>
                <FormControl.Label
                  _text={{
                    color: Colors.black,
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  {input.label}
                </FormControl.Label>
                <Select
                  minWidth={200}
                  accessibilityLabel={`Select ${input.label}`}
                  onValueChange={(value) => {
                    if (input.label === "COUNTY") {
                      handleCountyChange(value);
                    } else if (input.label === "NEAREST TOWN") {
                      handleNearestTownChange(value);
                    }
                  }}
                  _selectedItem={{
                    bg: Colors.main,
                  }}
                  mt="1"
                  placeholder={input.placeholder}
                  value={
                    input.label === "COUNTRY"
                      ? selectedCountry
                      : input.label === "COUNTY"
                      ? selectedCounty
                      : selectedNearestTown
                  }
                >
                  {input.label === "COUNTY" && selectedCountry
                    ? countyOptions[selectedCountry].map((county, countyIndex) => (
                        <Select.Item
                          key={countyIndex}
                          label={county}
                          value={county}
                        />
                      ))
                    : input.label === "NEAREST TOWN" && selectedCounty
                    ? townOptions[selectedCounty].map((town, townIndex) => (
                        <Select.Item
                          key={townIndex}
                          label={town}
                          value={town}
                        />
                      ))
                    : input.options &&
                      input.options.map((option, optionIndex) => (
                        <Select.Item
                          key={optionIndex}
                          label={option}
                          value={option}
                        />
                      ))}
                </Select>
              </FormControl>
            ))}
            <Buttons
              onPress={() => navigation.navigate("Checkout")}
              bg={Colors.main}
              color={Colors.white}
              mt={5}
            >
              CONTINUE
            </Buttons>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
}

export default DeliveryScreen;
