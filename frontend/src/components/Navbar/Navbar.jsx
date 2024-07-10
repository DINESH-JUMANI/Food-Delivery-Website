import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={assets.logo} alt="" className="logo" />
            <u1 className="navbar-menu">
                <li>home</li>
                <li>menu</li>
                <li>mobile app</li>
                <li>contact us</li>
            </u1>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className="navbar-search-icon">
                    <img src={assets.basket_icon} alt="" />
                    <div className="dot"></div>
                </div>
                <button>Sign in</button>
            </div>
        </div>
    )
}

export default Navbar