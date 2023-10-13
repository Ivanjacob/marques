import React from 'react'
import Sidebars from '../views/Sidebars';
import Navbars from '../views/Navbars';
import Farmers from '../Pages/Farmers';

function FarmerScreen() {
  return (
    <div className="dashboard-wrap">
        <Sidebars/>
        <main className="main-wrap">
            <Navbars />
            <Farmers />
        </main>
    </div>
  )
}

export default FarmerScreen;