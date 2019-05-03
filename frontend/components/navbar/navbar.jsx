import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <>
    <div className="nav-wrapper">
        <div className="nav-logo">
            <img src={window.navLogo} />
        </div>
        <div className="nav-links">
            <div className="nav-left">
                <a href="#">The Pub</a>
                <a href="#">Top Rated</a>
                <a href="#">Supporter</a>
                <a href="#">Help</a>
            </div>

            <div className="nav-right">
                <div className="user-icon">
                    <img src={window.userIcon} />
                </div>
                <input type="text" className="nav-search" />
            </div>
        </div>
    </div>
    
    </>
);
  
export default NavBar;

// <ul className="user-dropdown">
//    <li><a href="#">one</a></li>
//    <li><a href="#">two</a></li>
//    <li><a href="#">three</a></li>
// </ul>