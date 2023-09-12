import React from 'react'
import Sidebars from '../views/Sidebars';
import Navbars from '../views/Navbars';

function OrderScreen() {
  return (
    <div className="dashboard-wrap">
        <Sidebars/>
        <main className="main-wrap">
            <Navbars />
            <h2>List of Orders</h2>
        </main>
    </div>
  )
}

export default OrderScreen;