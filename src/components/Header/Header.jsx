// import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="__container --header__container">
                <nav>
                    <button className="button --header__button">
                        <Link to="/edit-user/1">
                            Edit Users
                        </Link>
                    </button>
                    <button className="button --header__button">
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