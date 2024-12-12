import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="social-links">
        <a href="https://github.com/azimatalantbek" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/azima-tostonova-608818311/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </header>
  );
};

export default Header;
