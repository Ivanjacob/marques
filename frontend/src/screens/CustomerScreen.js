import React, { Component } from 'react'
import Sidebars from '../views/Sidebars';
import Navbars from '../views/Navbars';
import Customers from '../Pages/Customers';

export class CustomerScreen extends Component {
  render() {
    return (
    <div className="dashboard-wrap">
        <Sidebars/>
        <main className="main-wrap">
            <Navbars />
            <Customers />
        </main>
    </div>
    )
  }
}

export default CustomerScreen
