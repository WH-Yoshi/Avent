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
                <Link href="/" className={activeMenu === '' ? 'active' : ''} onClick={() => handleMenuClick('')}><img src={logo} alt="logo" className='logo' /></Link>
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
                        <h2>Menu</h2>
                        <Link to="/" className={activeMenu === '' ? 'active' : ''} onClick={() => handleMenuClick('')}>Home</Link>
                        <Link to="/Seasons" className={activeMenu === 'Seasons' ? 'active' : ''} onClick={() => handleMenuClick('Seasons')}>Season</Link>
                        <Link to="/Drivers" className={activeMenu === 'Drivers' ? 'active' : ''} onClick={() => handleMenuClick('Drivers')}>Drivers</Link>
                        <Link to="/Teams" className={activeMenu === 'Teams' ? 'active' : ''} onClick={() => handleMenuClick('Teams')}>Teams</Link>
                        <Link to="/Historic" className={activeMenu === 'Historic' ? 'active' : ''} onClick={() => handleMenuClick('Historic')}>Historic</Link>                    </div>
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