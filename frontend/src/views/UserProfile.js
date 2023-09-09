/* eslint-disable no-unused-vars */
import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'

import { Button } from '.'
import { userProfileData } from '../data/dummy'



const UserProfile = () => {
    return(
        <div>
            <h1> User Profile </h1>
        </div>
    )
};
export default UserProfile;



// <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
//             <div className="flex justify-between items-center">
//                 <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
//                 <Button 
//                     icon={<MdOutlineCancel />}
//                     bgColor="white"
//                     bgHoverColor="light-gray"
//                     color="rgb(153, 171, 180)"
//                     borderRadius="50%"
//                     size="2xl"
//                 />
//             </div>
//             <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
//                 <img className="rounded-full h-20 w-20" src={userProfileData.image} alt="user-profile" />
//                 <div>
//                     <p className="font-semibold text-xl dark:text-gray-200"> Michael Roberts </p>
//                     <p className="text-gray-500 text-sm dark:text-gray-400">  Administrator   </p>
//                     <p className="text-gray-500 text-sm font-semibold dark:text-gray-400"> info@shop.com </p>
//                 </div>
//             </div>
//             <div>
//                 {userProfileData.map((item, index) => (
//                     <div key={index} className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]">
//                         <button
//                             type="button"
//                             style={{ color: item.iconColor, backgroundColor: item.iconBg }}
//                             className="flex items-center justify-center w-10 h-10 text-gray-500 rounded-full hover:bg-gray-200 focus:outline-none"
//                         >
//                             {item.icon}
//                         </button>

//                         <div>
//                             <p className="font-semibold dark:text-gray-200 ">{item.title}</p>
//                             <p className="text-gray-500 dark:text-gray-400 text-sm">{item.desc}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <div className="mt-5">
//                 <Button
//                     color="white"
//                     bgColor="blue-500"
//                     text="Logout"
//                     borderRadius="10px"
//                     width="full"
//                 />
//             </div>
//         </div>