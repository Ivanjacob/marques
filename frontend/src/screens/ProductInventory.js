import React from 'react'
import Sidebars from '../Inventory/Sidebars';
import Navbars from '../Inventory/Navbars';
import Product from '../Inventory/Product';

function ProductInventory() {
  return (
    <div className='dashboard-wrap'>
      <Sidebars />
      <main className='main-wrap'>
        <Navbars />
        <Product />
      </main>
    </div>
  )
}

export default ProductInventory