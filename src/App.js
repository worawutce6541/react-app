import './App.css';
import Button from './Button';
import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Route, Routes, useLocation, Navigate, Outlet } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import About from './pages/About';
import { AuthProvider, useAuth } from './AuthProvider';
import Register from './pages/Register';
import Login from './pages/Login';
import NotPage from './pages/NotPage';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();
  if (!user) {
   return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
 };

const LayoutAdmin = () => {
  return (
    <ProtectedRoute>
      <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="m-6 p-10 bg-gray-50 min-h-screen rounded-lg">
          <Outlet />
        </div>
      </div>
      </div>
    </ProtectedRoute>
   );
 }

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
          <Routes>
            <Route element={<LayoutAdmin />}>
                <Route path='/' element={<Dashboard />} />
                <Route path='/user' element={<Users />} />
                <Route path='/about' element={<About />} />
            </Route>
            <Route path='*' element={<NotPage/>} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Routes>
    </BrowserRouter>
  </AuthProvider>
  );
}

export default App;
