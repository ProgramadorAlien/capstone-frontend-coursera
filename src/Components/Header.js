import React from "react";
import Logo from '../Images/Logo.png';

function Header(){
    return(
     <header>
         <h1>Home Page</h1>
         <img src={Logo} alt="Description"/>
         <nav>
            <ul>
             <li><a href="#" >Home</a></li>
             <li><a href="#" >About</a></li>
             <li><a href="#" >Menu</a></li>
             <li><a href="#" >Reservation</a></li>
             <li><a href="#" >Order Online</a></li>
             <li><a href="#" >Login</a></li>
            </ul>
         </nav>
    </header>
)}

export default Header;






