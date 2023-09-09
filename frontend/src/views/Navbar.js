/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState }from 'react'
import jwt_decode from "jwt-decode"
import AuthContext from '../context/AuthContext'
import { Link } from 'react-router-dom'

import {AiOutlineMenu} from 'react-icons/ai'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'

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

const Navbar = () => {
  const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked,  setScreenSize, screenSize} = useContext(AuthContext)

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth)

    window.addEventListener("resize", handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, []);

  useEffect(() => {
    if(screenSize <= 900){
      setActiveMenu(false)
    }else{
      setActiveMenu(true)
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  const token = localStorage.getItem("authTokens")

  if(token){
    const decode = jwt_decode(token)
    var user_id = decode.user_id
    var username = decode.username
    var full_name = decode.full_name
    var image = decode.image
  }

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      <div className="flex p-2 md:ml-6 md:mr-6 relative" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'sky-blue'}}>
        <div>
          <Tooltip title="Dashboard" onClick={handleActiveMenu}>
            <IconButton>
              <HomeIcon size={40} sx={{ color: blue[500] }}  />
            </IconButton>
          </Tooltip>
        </div>
        <div className="flex" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>  
          <Tooltip title="Chat" dotColor="#03C9D7" onClick={handleClick('chat')}>
            <IconButton>
              <ChatIcon size={20} sx={{ color: blue[500] }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Notifications" dotColor="rgb(254, 201, 15)" onClick={handleClick('notification')}>
            <IconButton>
              <NotificationIcon size={60} sx={{ color: blue[500] }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Profile" position="BottomCenter">
            <div  className="flex items-center"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', padding: '0.25rem',   ':hover': {
                backgroundColor: 'lightgray',
              },
              borderRadius: '0.25rem', }}
              onClick={() => handleClick('userProfile')}
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
              <MdKeyboardArrowDown className="text-gray-400 text-16" />
            </div>
          </Tooltip>
          {isClicked.chat && (<Chat />)}

        </div>
      </div>
    </div>
  )
};

export default Navbar;

