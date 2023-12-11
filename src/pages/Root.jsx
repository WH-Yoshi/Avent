import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '/images/F1_white.png';
import { Outlet } from 'react-router';
import ScrollToTop from "./scripts/ScrollToTop";

export default function Root (props) {
    
    const [activeMenu, setActiveMenu] = useState('');

    const handleMenuClick = (menuName) => {
        setActiveMenu(menuName);
    }
 
    return (
        <>
            <div className="header">
                <NavLink exact="true" href="/Main" className={activeMenu === 'Main' ? 'active' : ''} onClick={() => handleMenuClick('Main')}><img src={logo} alt="logo" className='logo' /></NavLink>
                <div className="navbar">
                    <NavLink exact="true" to="/Seasons" className={activeMenu === 'Seasons' ? 'active' : ''} onClick={() => handleMenuClick('Seasons')}>Season</NavLink>
                    <NavLink exact="true" to="/Drivers" className={activeMenu === 'Drivers' ? 'active' : ''} onClick={() => handleMenuClick('Drivers')}>Drivers</NavLink>
                    <NavLink exact="true" to="/Teams" className={activeMenu === 'Teams' ? 'active' : ''} onClick={() => handleMenuClick('Teams')}>Teams</NavLink>
                    <NavLink exact="true" to="/Historic" className={activeMenu === 'Historic' ? 'active' : ''} onClick={() => handleMenuClick('Historic')}>Historical</NavLink>
                </div>
            </div>
            <div className="content">
                <ScrollToTop/>
                <Outlet/>  
            </div>
            
            <div className='footer'>
                <div className="links">
                    <div className='menu'>
                        <h2>Menu</h2>
                        <NavLink exact="true" to="/Seasons" className={activeMenu === 'Seasons' ? 'active' : ''} onClick={() => handleMenuClick('Seasons')}>Season</NavLink>
                        <NavLink exact="true" to="/Drivers" className={activeMenu === 'Drivers' ? 'active' : ''} onClick={() => handleMenuClick('Drivers')}>Drivers</NavLink>
                        <NavLink exact="true" to="/Teams" className={activeMenu === 'Teams' ? 'active' : ''} onClick={() => handleMenuClick('Teams')}>Teams</NavLink>
                        <NavLink exact="true" to="/Historic" className={activeMenu === 'Historic' ? 'active' : ''} onClick={() => handleMenuClick('Historic')}>Historic</NavLink>                    
                    </div>
                    <div className="sources">
                        <h2>Sources</h2>
                        <a href="https://www.formula1.com/" target="_blank" rel="noopener noreferrer">F1.com</a>
                        <a href="https://www.flaticon.com/fr/" target="_blank" rel="noopener noreferrer">Flaticon</a>
                        <a href="http://ergast.com/mrd/" target="_blank" rel="noopener noreferrer">Ergast API</a>
                    </div>
                </div>
                
                <div className="foot">
                    <a href="/"><img src={logo} alt="logo" className='logo'/></a>
                    <p>Developed by Abs, Van Eenoo, Kurshubadze</p>
                    <h2>© 2023 - Formula One</h2>
                </div>
            </div>
        </>
    )
}