import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';

export const AuthRouter = () => {
  return (
    <div className='auth__main'>
        <div className='auth__box-container'>
            <Routes>
                <Route
                    path='login'
                    element={<Login/>}
                />
                <Route
                    path='register'
                    element={<Register/>}
                />
            </Routes>
        </div>
    </div>
  )
}