// import React from "react";
import "./Header.css"
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    const isUsersPage = location.pathname === '/';
    const isEditUserPage = location.pathname.startsWith('/edit-user');

    return (
        <header>
            <div className="__container --header__container">
                <nav>
                    <Link to="/edit-user/1">
                    <button className={`button --header__button ${isEditUserPage ? 'button__active' : ''}`}>Edit Users</button>
                    </Link>
                    <Link to="/">
                        <button className={`button --header__button ${isUsersPage ? 'button__active' : ''}`}>Users</button>
                    </Link>
            </nav>
            </div>
        </header>
    );
};

export default Header;