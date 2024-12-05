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
                    <button className={`button --header__button ${isEditUserPage ? 'button__active' : ''}`}>
                        <Link to="/edit-user/1">
                            Edit Users
                        </Link>
                    </button>
                    <button className={`button --header__button ${isUsersPage ? 'button__active' : ''}`}>
                        <Link to="/">
                            Users
                        </Link>
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;