import React from 'react';
import logo from "./images/logo.png"
import './Header.css'
import {Link} from 'react-router-dom';

function Header() {
    return (
        <nav className="header">
            <Link to="/">
                <img className="header__logo" src={logo} alt="ShopMart" />
            </Link>
            <input className="header__searchInput" type="text" />
            
        </nav>
    )
}

export default Header
