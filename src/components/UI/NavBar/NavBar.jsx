import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";

const NavBar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }
    return (
        <div>
            <MyButton onClick={logout}>
                Выйти
            </MyButton>
            <div className="navbar">
                <Link to="/about" className="navbar__links">О сайте</Link>
                <Link to="/posts" className="navbar__links">Посты</Link>
            </div>
        </div>
    );
};

export default NavBar;