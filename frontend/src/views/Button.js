/* eslint-disable no-unused-vars */
import React, {useContext, useState} from 'react'

import AuthContext from '../context/AuthContext'
import { Tooltip } from '@mui/material';
import { IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';


const Button = () => {

    const { setIsClicked, initialState } = useContext(AuthContext)

    return(
        <div>
            <Tooltip title="close" onClick={() => setIsClicked(initialState)}>
                <IconButton>
                    <ClearIcon fontSize="small" />
                </IconButton>
            </Tooltip>
        </div>
    );
}; 
export default Button;

// style={{ borderRadius: '50%', border: '1px solid #000', padding: '4px', color: 'white' }}
// backgroundColor: 'whitesmoke', color: 'brown', borderRadius: '50%' 