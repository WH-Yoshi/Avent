import { NavLink } from 'react-router-dom';
import logo from '/images/F1_white.png';
import { Outlet } from 'react-router';
import ScrollToTop from "./scripts/ScrollToTop";

export default function Root () {

    return (
        <>
            <div className="header">
                <NavLink exact="true" to={"/"}><img src={logo} alt="logo" className='logo'/></NavLink>
                <div className="navbar">
                    <NavLink to="/Seasons">Season</NavLink>
                    <NavLink to="/Drivers">Drivers</NavLink>
                    <NavLink to="/Teams">Teams</NavLink>
                    <NavLink to="/Historic">Historical</NavLink>
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
                        <NavLink to="/Seasons">Season</NavLink>
                        <NavLink to="/Drivers">Drivers</NavLink>
                        <NavLink to="/Teams">Teams</NavLink>
                        <NavLink to="/Historic">Historic</NavLink>
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