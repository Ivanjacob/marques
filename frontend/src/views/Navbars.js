/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState }from 'react'
import jwt_decode from "jwt-decode"
import AuthContext from '../context/AuthContext'
import { Link } from 'react-router-dom'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';


import { Tooltip } from '@mui/material'
import { IconButton } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import NotificationIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import { blue } from '@mui/material/colors';

import Chat from './Chat.js';
import Notification from './Notification.js';
import UserProfile from './UserProfile.js';

import avatar from '../data/avatar.jpg'

export default function Navbars() {

  const { logoutUser } = useContext(AuthContext);

  const handleLogoutClick = () => {
    logoutUser();
  };

  const token = localStorage.getItem("authTokens")

  if(token){
    const decode = jwt_decode(token)
    var user_id = decode.user_id
    var username = decode.username
    var full_name = decode.full_name
    var image = decode.image
  }

  return (
    <div className="flex p-2 md:ml-6 md:mr-6 relative" style={{ display: 'flex', justifyContent: 'space-between', padding: '2px', marginLeft: '6px', marginRight: '6px', position: 'relative', alignItems: 'center', background: 'sky-blue'}}>
      <div>
        <Tooltip title="Dashboard">
          <IconButton>
            <HomeIcon size={40} sx={{ color: blue[500] }}  />
          </IconButton>
        </Tooltip>
      </div>
      <div className="flex" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>  
        <Tooltip title="Chat">
          <IconButton>
            <ChatIcon size={20} sx={{ color: blue[500] }} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Notifications">
          <IconButton>
            <NotificationIcon size={60} sx={{ color: blue[500] }} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Logout">
            <IconButton onClick={handleLogoutClick}>
              <PowerSettingsNewIcon size={60} sx={{ color: blue[500] }}/>
            </IconButton>
        </Tooltip>
        <Tooltip title="Profile" position="BottomCenter">
          <div  className="flex items-center"
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', padding: '0.25rem',   ':hover': {
              backgroundColor: 'lightgray',
            },
            borderRadius: '0.25rem', }}
            
          >
            <img
              className="rounded-full w-8 h-8"
              style={{borderRadius: '50%', width: '35px', height: '35px'}}
              src={avatar}
              alt="default.jpg"
            />
            <p>
              <span 
                className="text-gray-400 text-14"
                style={{ color: 'gray', fontSize: '14px' }}
              >
                Hello
              </span>{' '}
              <span 
                className="text-gray-400 font-bold ml-1 text-14"
                style={{ color: 'gray', fontWeight: 'bold', marginLeft: '1px', fontSize: '16px'}}
              >
                {username}!
              </span>
            </p>
          </div>
        </Tooltip>

      </div>
    </div>
  )
};







