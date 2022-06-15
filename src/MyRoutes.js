import React from 'react'

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


import AuthScreen from './components/AuthScreen';
import MenuScreen from './components/menu-screen/MenuScreen';

const MyRoutes = ({ user, setUser }) => {

    const logged = () => {
        return (user && user.username)
    }
    const logout = () => {
        setUser({
            ...user,
            username: null,
            phone: null
        })
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={logged() ? <Navigate replace to="/menu" /> : <Navigate replace to="/auth" />} index={true} />
                <Route path="/menu" element={logged() ? <MenuScreen user={user} logout={logout} /> : <Navigate replace to="/auth" />} />
                <Route path="/auth" element={logged() ? <Navigate replace to="/menu" /> : <AuthScreen user={user} setUser={setUser} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes