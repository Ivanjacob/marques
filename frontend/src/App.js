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

import Homepage from './views/Homepage';
import Loginpage from './views/Loginpage.js';
import Registerpage from './views/Registerpage.js';
import LoginInventory from './views/LoginInventory.js'

import "./App.css";


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
              </Route>
              <Route exact path="/" element={<HomeScreen/>}/>
              <Route path="/login" element={<Loginpage/>}/>
              <Route path="/register" element={<Registerpage/>}/>
              <Route path="/logininventory" element={<LoginInventory/>}/>
            </Routes>
        </AuthProvider>
      </Router>
    </div>

  )
}
export default App;


// function App() {

//   return (
//     <div>
//       <Router>
//         <AuthProvider>            
//             <Routes>
//               <Route element={<PrivateRoute/>}>
//                 <Route exact path="/" element={<DashboardScreen/>}/>
//                 <Route path="/users" element={<UserScreen/>}/>
//               </Route>
//               <Route path="/login" element={<Loginpage/>}/>
//               <Route path="/register" element={<Registerpage/>}/>
//             </Routes>
//         </AuthProvider>
//       </Router>
//     </div>
//   )
// }

// export default App