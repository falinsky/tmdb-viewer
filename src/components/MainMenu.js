import React from 'react';
import {NavLink} from 'react-router-dom';
import './MainMenu.css';

function MainMenu() {
  return (
    <nav className="MainMenu">
      <NavLink className="MainMenu-Item" exact to="/">Popular</NavLink>
    </nav>
  );
}

export default MainMenu;