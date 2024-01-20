import React, {useState} from "react";
import Logo from '../Images/Logo.png';

const Nav = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    }

    return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <img src={Logo} alt="Description"/>
        {/*Mobil Navbar*/}
    <div className='menu-icon' onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
    </div>
        <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
            <li>
                <a href="#" >Home</a>
            </li>
            <li>
                <a href="#" >About</a>
            </li>
            <li>
                <a href="#" >Menu</a>
            </li>
            <li>
                <a href="#" >Reservation</a>
            </li>
            <li>
                <a href="#" >Order Online</a>
            </li>
            <li>
                <a href="#" >Login</a>
            </li>
        </ul>
    </nav>
);}

export default Nav;