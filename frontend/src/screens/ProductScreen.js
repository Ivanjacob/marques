import React, { Component } from 'react'
import Sidebars from '../views/Sidebars';
import Navbars from '../views/Navbars';
import Product from '../Inventory/Product.js'
export class ProductScreen extends Component {
  render() {
    return (
    <div className="dashboard-wrap">
        <Sidebars/>
        <main className="main-wrap">
            <Navbars />
            <Product />
        </main>
    </div>
    )
  }
}

export default ProductScreen;
