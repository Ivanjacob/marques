/* eslint-disable no-unused-vars */
import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'


import { chatData } from '../data/dummy'
import Button from './Button'

const Chat = () => {
    
    return(
       <div className="nav-item" style={{ position: 'absolute', right: '5px', top: '4rem', backgroundColor: 'white', darkBackgroundColor: '#42464D', padding: '2rem', borderRadius: '0.5rem', width: '24rem'}}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <div style={{
                display: 'flex',
                marginLeft: '0.75rem',
                justifyContent: 'space-between'
              }}>
            <p style={{ fontSize: '25px', fontWeight: 'bold', color: 'gray'}}>Messages</p>
            <button 
                type="button"
                style={{ backgroundColor: 'orange', color: 'white', borderRadius: '0.25rem', padding: '0.25rem', fontSize: '0.75rem'}}
            >
                5 New
            </button>
            </div>
            <Button
                icon={<MdOutlineCancel />}
                bgColor="red-500"
                bgHoverColor="light-gray"
                color="rgb(153, 171, 180)"
                borderRadius="50%"
                size="2xl"
            />
        </div>
        <div className="mt-5" style={{ marginTop: '1.25rem'}}>
            {chatData?.map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', borderBottom: '1px solid #E5E7EB', padding: '0.75rem', lineHeight: '1.5', cursor: 'pointer'}}>
                    <div style={{ position: 'relative'}}>
                        <img
                            className="w-12 h-12 rounded-full"
                            style={{ width: '40px', height: '40px', borderRadius: '50%' }}
                            src={item.image} 
                            alt={item.message}
                        />
                        <span
                            style={{background: item.dotColor, position: 'absolute', display: 'inline-flex', borderRadius: '50%', height: '12px', width: '12px', right: '0', top: '-1px'}}
                            className="absolute inline-flex rounded-full h-2 w-2 right-0 -top-1"
                        />
                    </div>
                    <div>
                        <p className="font-semibold dark:text-gray-200 " style={{fontWeight: 'bold', color: 'black'}}>{item.message}</p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm" style={{color: 'black', darkTextColor: 'gray', fontSize: '14px'}}>{item.desc}</p>
                        <p className="text-gray-500 dark:text-gray-400 text-xs" style={{color: 'black', darkTextColor: 'gray', fontSize: '12px'}}>{item.time}</p>
                    </div>
                </div>
            ))}
            <div className="mt-5">
                <button
                    style={{
                        color: "white",
                        backgroundColor: "blue",
                        borderRadius: "10px",
                        width:"100%",
                        height: "3.5rem",
                        bgHoverColor: "light-gray",
                    }}
                >View All Messages</button>
            </div>
        </div>
       </div>
    );
};

export default Chat;


