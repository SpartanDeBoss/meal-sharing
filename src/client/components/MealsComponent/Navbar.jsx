
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

//we have the Nav bar with a link component so you click on the link on the home it takes u to the homepage and the same with the meals as well 

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/meals">Meals</Link>
    </nav>
  );
};

export default Navbar;