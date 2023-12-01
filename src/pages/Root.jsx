import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '/images/F1_white.png';


export default function Root (props) {
    
    const [activeMenu, setActiveMenu] = useState('');

    const handleMenuClick = (menuName) => {
        setActiveMenu(menuName);
    }

    return (
        <>
            <div className="header">
                <a href="/"><img src={logo} alt="logo" className='logo' /></a>
                <div className="navbar">
                    <Link to="/Seasons" className={activeMenu === 'Seasons' ? 'active' : ''} onClick={() => handleMenuClick('Seasons')}>Season</Link>
                    <Link to="/Drivers" className={activeMenu === 'Drivers' ? 'active' : ''} onClick={() => handleMenuClick('Drivers')}>Drivers</Link>
                    <Link to="/Teams" className={activeMenu === 'Teams' ? 'active' : ''} onClick={() => handleMenuClick('Teams')}>Teams</Link>
                    <Link to="/Historic" className={activeMenu === 'Historic' ? 'active' : ''} onClick={() => handleMenuClick('Historic')}>Historic</Link>
                </div>
            </div>
            <div className="content">
                {props.children}
            </div>
            <div className='footer'>
                <div className="links">
                    <div className='menu'>

                    </div>
                    <div className="sources">

                    </div>
                </div>
                <div className="foot">
                    <a href="/"><img src={logo} alt="logo" className='logo' /></a>
                    <p>Developed by Abs, Van Eenoo, Kurshubadze</p>
                    <h2>© 2023 - Formula One</h2>
                </div>
            </div>
        </>
    )
}