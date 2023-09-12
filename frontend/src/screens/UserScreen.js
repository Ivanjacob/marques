import React from 'react'
import Sidebars from '../views/Sidebars';
import Navbars from '../views/Navbars';
import Users from '../views/Users';


function UserScreen() {
  return (
    <div className='dashboard-wrap'>
      <Sidebars />
      <main className='main-wrap'>
        <Navbars/>
        <Users/>
      </main>
    </div>
  )
}

export default UserScreen;