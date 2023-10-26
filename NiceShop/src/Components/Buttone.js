import { Button } from 'native-base'
import React, { Children } from 'react'
import Colors from '../color';

function Buttone({ mt, color, children, onPress }) {
  return (
    <Button
        //h={55}
        //mt={mt}
        //rounded="full"
        bg={Colors.main}
        mt={mt}
        w="70%"
        my={30}
        mb={5}
        rounded={50}
        onPress={onPress}
        _text={{ 
            color: color, 
            fontWeight: "bold",
        }}
        _pressed={{ bg: Colors.main, opacity: 0.5 }}
    >
        {children}
    </Button>
  );
}

export default Buttone