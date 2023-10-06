/* eslint-disable no-unused-vars */
import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './utils/PrivateRoute';

import DashboardScreen from './screens/DashboardScreen.js';
import UserScreen from './screens/UserScreen.js';
import EmployeeScreen from './screens/EmployeeScreen.js';
import OrderScreen from './screens/OrderScreen.js';
import ProductScreen from './screens/ProductScreen.js';
import CustomerScreen from './screens/CustomerScreen.js';
import HomeScreen from './screens/HomeScreen';
import InventoryScreen from './screens/InventoryScreen.js';
import ProductInventory from './screens/ProductInventory.js';
import AddProductScreen from './screens/AddProductScreen.js';
import ReceiveScreen from './screens/ReceiveScreen.js';
import IssueScreen from './screens/IssueScreen.js';

import Homepage from './views/Homepage';
import Loginpage from './views/Loginpage.js';
import Registerpage from './views/Registerpage.js';
import LoginInventory from './views/LoginInventory.js'
import RegisterInventory from './views/RegisterInventory.js'

import "./App.css";
import AddRiceStock from './Inventory/AddRiceStock';
import EditProductScreen from './screens/EditProductScreen';
import AddStockScreen from './screens/AddStockScreen';



const App = () => {

  return (
    <div>
      <Router>
        <AuthProvider>            
            <Routes>
              <Route element={<PrivateRoute/>}>
                <Route path="/dashboard" element={<DashboardScreen/>}/>
                <Route path="/users" element={<UserScreen/>}/>
                <Route path="/employees" element={<EmployeeScreen/>}/>
                <Route path="/orders" element={<OrderScreen/>}/>
                <Route path="/products" element={<ProductScreen/>}/>
                <Route path="/customers" element={<CustomerScreen/>} />
                <Route path="/inventory" element={<InventoryScreen/>} />
                <Route path="/inventory/add-stock" element = {<AddStockScreen/>} />
                <Route path="/inventory/products" element = {<ProductInventory/>} />
                <Route path="/inventory/add-product" element = {<AddProductScreen/>} />
                <Route path="/inventory/edit-product/:id" element ={<EditProductScreen/>} />
                <Route path="/inventory/issue-product/:id" element={<IssueScreen/>} />
                <Route path="/inventory/receive-product/:id" element = {<ReceiveScreen/>} />
              </Route>
              <Route exact path="/" element={<HomeScreen/>}/>
              <Route path="/login" element={<Loginpage/>}/>
              <Route path="/register" element={<Registerpage/>}/>
              <Route path="/login-inventory" element={<LoginInventory/>}/>
              <Route path="/register-inventory" element={<RegisterInventory/>} />
            </Routes>
        </AuthProvider>
      </Router>
    </div>

  )
}
export default App;

