import './App.css';
import Button from './Button';
import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Route, Routes, Outlet, useLocation, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import About from './pages/About';
import Text from './pages/Text';
import { AuthProvider, useAuth } from './AuthProvider';
import Register from './pages/Register';


function App() {
  return (
    <BrowserRouter>
    <div className='flex'>
      <Sidebar />
      <div className='flex-1'>
        <Header />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/user' element={<Users />} />
          <Route path='/about' element={<About />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>

  );
}

export default App;
