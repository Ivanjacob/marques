// /* eslint-disable no-unused-vars */
// import React, {useContext, useState} from 'react'

// import AuthContext from '../context/AuthContext'
// import { Tooltip } from '@mui/material';
// import { IconButton } from '@mui/material';
// import ClearIcon from '@mui/icons-material/Clear';


// const Button = () => {

//     const { setIsClicked, initialState } = useContext(AuthContext)

//     return(
//         <div>
//             <Tooltip title="close" onClick={() => setIsClicked(initialState)}>
//                 <IconButton>
//                     <ClearIcon fontSize="small" />
//                 </IconButton>
//             </Tooltip>
//         </div>
//     );
// }; 
// export default Button;

// // style={{ borderRadius: '50%', border: '1px solid #000', padding: '4px', color: 'white' }}
// // backgroundColor: 'whitesmoke', color: 'brown', borderRadius: '50%' 
import * as React from 'react';
import { Button, buttonClasses } from '@mui/base/Button';
import { styled } from '@mui/system';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

export default function UnstyledButtonsSimple({ buttonText, onButtonClick, to }) {
  return (
    <Stack spacing={2} direction="row">
      <Link to={to} ><CustomButton>{buttonText}</CustomButton></Link>
    </Stack>
  );
}

const blue = {
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
};

const CustomButton = styled(Button)`
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  line-height: 1.5;
  background-color: ${blue[500]};
  color: white;
  border-radius: 8px;
  font-weight: 600;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 150ms ease;
  border: none;

  &:hover:not(:disabled) {
    background-color: ${blue[600]};
  }

  &:active:not(:disabled) {
    background-color: ${blue[700]};
  }

  &.${buttonClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgb(61 71 82 / 0.1), 0 0 0 5px rgb(0 127 255 / 0.5);
    outline: none;
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;