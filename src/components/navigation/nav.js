import React from 'react';
import "./nav.scss";
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const Nav = (props) => {
    return (
        <div>
            <div className="topnav">
                <NavLink to="/" exact>Home</NavLink>
                <NavLink to="/news">News</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/social">About</NavLink>

            </div>
        </div>
    );
}

export default Nav;