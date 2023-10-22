import { Button } from 'native-base'
import React, { Children } from 'react'

function Buttons({ mt, bg, color, children, onPress }) {
  return (
    <Button
        w="full"
        h={55}
        mt={mt}
        rounded="full"
        bg={bg}
        _text={{ 
            color: color, 
            fontWeight: "bold",
        }}
        onPress={onPress}
        _pressed={{ bg: bg, opacity: 0.5 }}
    >
        {children}
    </Button>
  );
}

export default Buttons