/* No renderizará sino que nos va a derivar a otra parte */
/* O entro al home o le doy paso a que se loguee */
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Notes } from '../pages/Notes'
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route
                        path='/'
                        element={<Notes/>}
                    />
                    <Route
                        path='/auth/*'
                        element={<AuthRouter/>} 
                    />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
