import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/register/register';
import Login from './pages/login/login';   
import { AuthContextProvider } from './context/authContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Login />} /> {/* Default: Login */}
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>
);
