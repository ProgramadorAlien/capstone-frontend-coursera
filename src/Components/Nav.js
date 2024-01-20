import React from "react";
import Logo from '../Images/Logo.png';

const Nav = () => {
    return (  
    <nav>           
        <h1>Home Page</h1>
        <img src={Logo} alt="Description"/>
        
        <ul>
            <li><a href="#" >Home</a></li>
            <li><a href="#" >About</a></li>
            <li><a href="#" >Menu</a></li>
            <li><a href="#" >Reservation</a></li>
            <li><a href="#" >Order Online</a></li>
            <li><a href="#" >Login</a></li>
        </ul>
    </nav>
)}

export default Nav;