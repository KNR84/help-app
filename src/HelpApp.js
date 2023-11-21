import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './HelpApp.css';
import { Login } from './auth/Login';
import { Register } from './auth/Register';
import { Authorized } from './auth/views/Authorized';
import { ApplicationViews } from './auth/views/ApplicationViews';
import { Logout } from './nav/Logout';
import { NavBar } from './nav/NavBar';
import HomePage from './HomePage';

export const HelpApp = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="*"
        element={
          <Authorized>
            <>
              <ApplicationViews />
              <Logout />
              <NavBar />
              <HomePage />
          
            </>
          </Authorized>
        }
      />
     
      
    </Routes>
  );
};


