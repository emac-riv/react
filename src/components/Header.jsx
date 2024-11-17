import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = ({ darkMode, toggleTheme }) => {
  return (
    <header>
      <div className="logo">
        <NavLink className="navLink" to="/"><img src={darkMode ? "/images/solid-dark-mode.svg" : "/images/solid.svg"} alt="Hemsidans logga och texten Silikon" /></NavLink>
      </div>
      <nav>
        <ul>
          <NavLink className="navLink" to="/">Home</NavLink>
          <NavLink className="navLink" to="/features">Features</NavLink>
          <NavLink className="navLink" to="/contact">Contacts</NavLink>
        </ul>
      </nav>
      <div className="toggle">
        <span>Dark mode</span>
        <label className={`switch ${darkMode ? 'active' : ''}`} onClick={toggleTheme}>
          <span className='slider'></span>
        </label>
      </div>
      <div className="sign-in">
        <button>
          <a href="#" className="sign-in-btn"><img src="/images/loggain.svg" alt="" /></a>
        </button>
      </div>
    </header>
  );
};

export default Header;
