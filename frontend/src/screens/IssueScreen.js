import React from 'react'
import Sidebars from '../Inventory/Sidebars';
import Navbars from '../Inventory/Navbars';
import IssueProduct from '../Inventory/IssueProduct';

function IssueScreen() {
  return (
    <div className='dashboard-wrap'>
      <Sidebars />
      <main className='main-wrap'>
        <Navbars />
        <IssueProduct /> 
      </main>
    </div>
  )
}

export default IssueScreen;