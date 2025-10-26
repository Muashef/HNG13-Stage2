import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Login from '../pages/auth/Login';
// import Landing from '../pages/Landing'
import Home from '../pages/Home';
import Signup from '../pages/auth/Signup';

const AppRoutes = () => {
  return (
    // <div className='app'>
        <Routes>
            <Route path="/login" element={<Login />} />
            {/* <Route index element={<Landing />} /> */}
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<Signup />} />

        </Routes>
    // </div>
  )
}

export default AppRoutes