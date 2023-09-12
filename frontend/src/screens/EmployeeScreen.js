import React from 'react'
import Sidebars from '../views/Sidebars';
import Navbars from '../views/Navbars';

function EmployeeScreen() {
  return (
    <div className="dashboard-wrap">
        <Sidebars/>
        <main className="main-wrap">
            <Navbars />
            <h2>List of Employees</h2>
        </main>
    </div>
  )
}

export default EmployeeScreen;