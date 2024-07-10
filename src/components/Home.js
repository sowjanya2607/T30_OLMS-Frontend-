// components/Home.js

import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Import CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <h1>Welcome to Our Library</h1>
        <p>Digitizing library operations for the modern age.</p>
      </header>

      <section className="features">
        <div className="feature">
          <h2>Explore Books</h2>
          <p>Discover a vast collection of books and resources.</p>
        </div>
        <div className="feature">
          <h2>Borrow Online</h2>
          <p>Easy borrowing process with just a few clicks.</p>
        </div>
        <div className="feature">
          <h2>User Authentication</h2>
          <p>Secure login and registration for personalized access.</p>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Your Library. All rights reserved.</p>
      </footer>

      <nav className="navigation">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/admin-login">Admin-login</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
