import React from 'react'

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import useFetch from './hooks/useFetch';

import AuthScreen from './components/AuthScreen';
import MenuScreen from './components/menu-screen/MenuScreen';

const MyRoutes = ({ user, setUser }) => {

    const API_URL = "http://localhost:8080"


    const [data] = useFetch(`${API_URL}/menu`)

    const logged = () => {
        return (user && user.username)
    }
    const logout = () => {
        setUser({})
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={logged() ? <Navigate replace to="/menu" /> : <Navigate replace to="/auth" />} index={true} />
                <Route path="/menu" element={logged() ? <MenuScreen user={[user, setUser]} logout={logout} items={data && data.items} /> : <Navigate replace to="/auth" />} />
                <Route path="/auth" element={logged() ? <Navigate replace to="/menu" /> : <AuthScreen user={user} setUser={setUser} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes