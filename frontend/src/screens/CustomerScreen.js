import React, { Component } from 'react'
import Sidebars from '../views/Sidebars';
import Navbars from '../views/Navbars';

export class CustomerScreen extends Component {
  render() {
    return (
    <div className="dashboard-wrap">
        <Sidebars/>
        <main className="main-wrap">
            <Navbars />
            <h2>List of Customers</h2>
        </main>
    </div>
    )
  }
}

export default CustomerScreen
