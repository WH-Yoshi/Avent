import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/f1.png';


export default function Root (props) {

    return (
        <>
            <div className="header">
                <img src={logo} alt="logo" className='logo' />
                <ul className="navbar">
                    <li className="navitems">
                        <Link to="/Seasons">Seasons</Link>
                    </li>
                    <li className="navitems">
                        <Link to="/Drivers">Drivers</Link>
                    </li>
                    <li className="navitems">
                        <Link to="/Main">Main</Link>
                    </li>
                </ul>
            </div>
            <div className="content">
                {props.children}
            </div>
            <p class="hover-underline-animation">Hover this text to see the effect!</p>
        </>
    )
}