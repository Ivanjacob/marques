import React from 'react'
import Sidebars from '../views/Sidebars';
import Navbars from '../views/Navbars';
import OrderApproval from '../Pages/OrderApproval';


function OrderApprovalScreen() {
  return (
    <div className="dashboard-wrap">
        <Sidebars/>
        <main className="main-wrap">
            <Navbars />
            <OrderApproval />
        </main>
    </div>
  )
}

export default OrderApprovalScreen;