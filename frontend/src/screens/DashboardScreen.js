/* eslint-disable no-unused-vars */
import React, { Component } from 'react'

import Dashboard from '../views/Dashboard';
import Sidebars from '../views/Sidebars';
import Navbar from '../views/Navbar'
import Chat from '../views/Chat'

export class DashboardScreen extends Component {
  render() {
    return (
      <div className="dashboard-wrap">
        <Sidebars />
        <main className="main-wrap">
            <Navbar />
            <Dashboard />
        </main>
      </div>
    )
  }
}

export default DashboardScreen;