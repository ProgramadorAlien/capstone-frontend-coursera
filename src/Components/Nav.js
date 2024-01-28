import React, { useState } from "react";
import Logo from '../Images/Logo.png';
import { Link } from 'react-router-dom';




const Nav = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
            <img src={Logo} alt="Description" />
            {/*Mobil Navbar*/}
            <div className='menu-icon' onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
                <li>

                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <a href="#" >About</a>
                </li>
                <li>
                    <a href="#" >Menu</a>
                </li>
                <li>
                    <Link to='/booking'>Reservation </Link>
                </li>
                <li>
                    <a href="#" >Order Online</a>
                </li>
                <li>
                    <a href="#" >Login</a>
                </li>
            </ul>

        </nav>



    );
}

export default Nav;