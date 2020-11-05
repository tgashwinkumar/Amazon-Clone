import React from 'react';
import logo from "./images/logo.png"
import './Header.css'
import {Link} from 'react-router-dom';
import SearchIcon from  '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from './StateProvider'

function Header() {

    const [{basket}, dispatch] = useStateValue();

    return (
        <nav className="header">
            <Link to="/">
                <img className="header__logo" src={logo} alt="ShopMart" />
            </Link>

            <div className="header__search">
                <input className="header__searchInput" type="text" placeholder="Enter your search here" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <p>Hello,</p>
                        <p>Sign In</p>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <p>Returns &</p>
                        <p>Orders</p>
                    </div>
                </Link>

                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon className="header__basketIcon"/>
                        <span>{basket?.length}</span>
                    </div>

                    {/* Optional chaining:- (?.)

                    The optional chaining ?. stops the evaluation if the part before ?. is undefined or null,
                     and returns that part. */}
                     
                </Link>


            </div>
        </nav>
    )
}

export default Header
