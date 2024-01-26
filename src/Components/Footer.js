import React from 'react';
import logo from '../Images/Logo .jpg'

const Footer = () => {
    return (
        <footer>
            <section>
                <div className='company-info'>
                    <img src={logo} alt='Little Lemon Logo' />
                    <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>
                </div>
                <div>
                    <h3>Links</h3>
                    <nav>
                        <ul>
                            <li><a href='/'>Home</a></li>
                            <li><a href='/'>About</a></li>
                            <li><a href='/'>Menu</a></li>
                            <li><a href='/'>Reservation</a></li>
                            <li><a href='/'>Order Online</a></li>
                            <li><a href='/'>Login</a></li>
                        </ul>
                    </nav>
                </div>

                <h3>Contact</h3>
                <ul>
                    <li>Address: <br /> 1234 Anywhere, USA</li>
                    <li>Telephone:<br /> 123-345-7890</li>
                    <li>Email: <br /> littlelemon@mail.com</li>
                </ul>

                <div>
                    <address>
                        <h3>Social Media</h3>
                        <ul>
                            <li><a href='/'>Facebook</a></li>
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