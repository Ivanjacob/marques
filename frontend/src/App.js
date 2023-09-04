import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './utils/PrivateRoute';

import Dashboard from './views/Dashboard';
import Homepage from './views/Homepage';
import Loginpage from './views/Loginpage';
import Registerpage from './views/Registerpage';
import Navbar from './views/Navbar';


function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar/>
          <Routes>
            <Route element={<PrivateRoute/>}>
              <Route exact path="/dashboard" element={<Dashboard/>}/>
            </Route>
            <Route path="/login" element={<Loginpage/>}/>
            <Route path="/register" element={<Registerpage/>}/>
            <Route path="/" element={<Homepage/>}/>
          </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App