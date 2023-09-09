/* eslint-disable no-unused-vars */
import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './utils/PrivateRoute';

import DashboardScreen from './screens/DashboardScreen';
import UserScreen from './screens/UserScreen';

import Homepage from './views/Homepage';
import Loginpage from './views/Loginpage';
import Registerpage from './views/Registerpage';
import Navbar from './views/Navbar';
import Sidebars from './views/Sidebars';
import "./App.css";

function App() {

  return (
    <div>
      <Router>
        <AuthProvider>            
            <Routes>
              <Route element={<PrivateRoute/>}>
                <Route exact path="/" element={<DashboardScreen/>}/>
                <Route path="/users" element={<UserScreen/>}/>
              </Route>
              <Route path="/login" element={<Loginpage/>}/>
              <Route path="/register" element={<Registerpage/>}/>
            </Routes>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App