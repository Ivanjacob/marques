/* eslint-disable no-unused-vars */
import React from 'react'
import Sidebars from '../Inventory/Sidebars';
import Navbars from '../Inventory/Navbars';
import ReceiveProduct from '../Inventory/ReceiveProduct.jsx';
import EditStock from '../Inventory/EditStock';

function ReceiveScreen() {
  return (
    <div className='dashboard-wrap'>
      <Sidebars />
      <main className='main-wrap'>
        <Navbars />
        <ReceiveProduct/>
      </main>
    </div>
  )
}

export default ReceiveScreen;