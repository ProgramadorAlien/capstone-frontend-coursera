import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/Logo.png'

const Footer = () => {


    return (
        <footer>
            <section>
                <div className='company-info'>
                    <img src={logo} alt='Little Lemon Logo' />
                    <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>
                </div>
                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><a href="#">About</a></li>
                        <li><a href='#'>Menu</a></li>
                        <li><Link to='/booking'>Reservation </Link></li>
                        <li><a href='#'>Order Online</a></li>
                        <li><a href='#'>Login</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: <br /> 1234 Anywhere, USA</li>
                        <li>Telephone:<br /> 123-345-7890</li>
                        <li>Email: <br /> littlelemon@mail.com</li>
                    </ul>
                </div>
                <div>
                    <address>
                        <h3>Social Media Links</h3>
                        <ul>
                            <li><a href='#'>Facebook</a></li>
                            <li><a href='/'>Instagram</a></li>
                            <li><a href='/'>Twitter</a></li>
                        </ul>
                    </address>
                </div>
            </section>
        </footer>
    );
}

export default Footer;