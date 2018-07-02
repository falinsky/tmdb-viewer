import React from 'react';
import {NavLink} from 'react-router-dom';
import './MainMenu.css';

function MainMenu() {
  return (
    <nav className="MainMenu">
      <NavLink className="MainMenu-Item" exact to="/">Popular</NavLink>
      <NavLink className="MainMenu-Item" to="/favorites">Favorites</NavLink>
      <NavLink className="MainMenu-Item" to="/search">Search</NavLink>
    </nav>
  );
}

export default MainMenu;