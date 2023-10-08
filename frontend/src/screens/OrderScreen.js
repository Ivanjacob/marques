import React from 'react'
import Sidebars from '../views/Sidebars';
import Navbars from '../views/Navbars';
import Orders from '../Pages/Orders';

function OrderScreen() {
  return (
    <div className="dashboard-wrap">
        <Sidebars/>
        <main className="main-wrap">
            <Navbars />
            <Orders />
        </main>
    </div>
  )
}

export default OrderScreen;