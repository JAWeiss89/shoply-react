import React from 'react';
import Cart from './Cart';
import {Link} from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="Navbar-logo">
                <Link to="/">shoply</Link>
            </div>
            <div className="Navbar-links">
                <Link to="/cart"><Cart /></Link>
            </div>
        </div>
    )
}

export default Navbar;