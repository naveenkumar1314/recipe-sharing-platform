import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <header>
        <h1 className="logo">RecipeShare</h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#recipes">Recipes</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/signup" className="signup-btn">Sign Up</a></li>
          </ul>
        </nav>
      </header>
      
      <section className="hero">
        <h2>Discover & Share Amazing Recipes</h2>
        <p>Explore delicious recipes from around the world and share your own culinary creations.</p>
        <a href="#recipes" className="cta-btn">Explore Recipes</a>
      </section>
      
      <section className="features">
        <div className="feature-card">
          <h3>Find New Recipes</h3>
          <p>Browse a wide variety of recipes curated by food lovers.</p>
        </div>
        <div className="feature-card">
          <h3>Share Your Own</h3>
          <p>Upload your own recipes and showcase your cooking skills.</p>
        </div>
        <div className="feature-card">
          <h3>Join the Community</h3>
          <p>Connect with other food enthusiasts and exchange tips.</p>
        </div>
      </section>
      
      <footer>
        <p>&copy; 2025 RecipeShare. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;