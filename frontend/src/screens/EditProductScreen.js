import React from 'react'
import Sidebars from '../Inventory/Sidebars';
import Navbars from '../Inventory/Navbars';
import EditProduct from '../Inventory/EditProduct';

function EditProductScreen() {
  return (
    <div className='dashboard-wrap'>
      <Sidebars />
      <main className='main-wrap'>
        <Navbars />
        <EditProduct /> 
      </main>
    </div>
  )
}

export default EditProductScreen