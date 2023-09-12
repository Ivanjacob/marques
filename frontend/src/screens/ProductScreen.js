import React, { Component } from 'react'
import Sidebars from '../views/Sidebars';
import Navbars from '../views/Navbars';

export class ProductScreen extends Component {
  render() {
    return (
    <div className="dashboard-wrap">
        <Sidebars/>
        <main className="main-wrap">
            <Navbars />
            <h2>List of Products</h2>
        </main>
    </div>
    )
  }
}

export default ProductScreen;
