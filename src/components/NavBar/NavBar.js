import React from 'react';
import './NavBar.scss';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <div className={'NavBar-container'}>
                <NavLink to={'/'} className={'NavBar-item'}>
                    <h4>Home</h4>
                </NavLink>

                <NavLink to={'/projects'} className={'NavBar-item'}>
                    <h4>Projects</h4>
                </NavLink>

                    <h4 className={'NavBar-item'}>About</h4>
                    <h4 className={'NavBar-item'}>Contact</h4>
            </div>
        </div>
    );
};

export default NavBar;