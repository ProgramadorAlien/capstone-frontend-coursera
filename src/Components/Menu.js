import React from "react";
import recipes from '../recipes.js';

const Menu = () => {
  return (
    <main className="main">
      <section className="specials-section">
        <div className="specials-header">
          <h2>This week's specials!</h2>
        </div> 
          <button>Online Menu</button>
      </section>
      <section className="recipes-section">
        {recipes.map(recipe => (
          <article key={recipe.id} className="recipe-card">
            <img src={recipe.image} alt={`Image of ${recipe.title}`} />
            <div className="menu-content">
              <div className="menu-heading">
                <h5>{recipe.title}</h5>
                <p>{recipe.price}</p>
              </div>
              <p>{recipe.description}</p>
              <button className="orderbtn">Order Now</button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Menu;
