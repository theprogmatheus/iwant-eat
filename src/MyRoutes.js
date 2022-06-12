import React from 'react'

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


import AuthScreen from './components/AuthScreen';
import MenuScreen from './components/menu-screen/MenuScreen';

const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate replace to="/auth" />} index={true} />
                <Route path="/menu" element={<MenuScreen />} />
                <Route path="/auth" element={<AuthScreen />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes