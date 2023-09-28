import React from 'react'
import Sidebars from '../Inventory/Sidebars';
import Navbars from '../Inventory/Navbars';
import AddProduct from '../Inventory/AddProduct';

function AddProductScreen() {
  return (
    <div className='dashboard-wrap'>
      <Sidebars />
      <main className='main-wrap'>
        <Navbars />
        <AddProduct />
      </main>
    </div>
  )
}

export default AddProductScreen