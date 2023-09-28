import React from 'react'
import Sidebars from '../Inventory/Sidebars';
import Navbars from '../Inventory/Navbars';
import AddRiceStock from '../Inventory/AddRiceStock';

function AddStockScreen() {
  return (
    <div className='dashboard-wrap'>
      <Sidebars />
      <main className='main-wrap'>
        <Navbars />
        <AddRiceStock />
      </main>
    </div>
  )
}

export default AddStockScreen