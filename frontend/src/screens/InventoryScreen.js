import React from 'react'
import Sidebars from '../Inventory/Sidebars';
import Navbars from '../Inventory/Navbars';
import RiceStockList from '../Inventory/RiceStockList';

function InventoryScreen() {
  return (
    <div className='dashboard-wrap'>
      <Sidebars />
      <main className='main-wrap'>
        <Navbars />
        <RiceStockList />
      </main>
    </div>
  )
}

export default InventoryScreen