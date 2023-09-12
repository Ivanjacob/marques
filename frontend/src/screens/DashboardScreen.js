import React from 'react'
import Sidebars from '../views/Sidebars';
import Navbars from '../views/Navbars';
import Dashboard from '../views/Dashboard';

function DashboardScreen() {
  return (
    <div className='dashboard-wrap'>
      <Sidebars />
      <main className='main-wrap'>
        <Navbars />
        <Dashboard />
      </main>
    </div>
  )
}

export default DashboardScreen;
