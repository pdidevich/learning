import React, {useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import NavBar from "./components/UI/NavBar/NavBar";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";

const App = () => {
    const [isAuth, setIsAuth] = useState(false)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        console.log(localStorage.getItem('auth'))
        if (localStorage.getItem('auth') === 'true') {
            setIsAuth(true)
        }
        setLoading(false)
    }, [])

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading
        }}>
            <BrowserRouter>
                <NavBar/>
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>
    );
};

export default App;