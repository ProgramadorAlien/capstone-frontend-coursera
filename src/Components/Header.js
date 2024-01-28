import React from "react";
import bannerimg from '../Images/restauranfood.jpg';


const Header = () => {
    return (
        <header className="header">
            <section>
                <div className="banner-text">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterranean restaurant, focoused on traditional recipies served whit a modern twist.</p>
                    <button className="reserve-button">Reserve a table</button>
                </div>
                <div className="banner-img">
                    <img src={bannerimg} alt="description" />
                </div>
            </section>
        </header>
    )
}

export default Header;






