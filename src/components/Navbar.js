import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Library Management</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/books" className={({ isActive }) => (isActive ? 'active' : '')}>
            Books
          </NavLink>
        </li>
        <li>
          <NavLink to="/add-book" className={({ isActive }) => (isActive ? 'active' : '')}>
            Add Book
          </NavLink>
        </li>
        <li>
          <NavLink to="/members" className={({ isActive }) => (isActive ? 'active' : '')}>
          Members
          </NavLink>
          </li>
          <li>
          <NavLink to="/AIAssistant" className={({ isActive }) => (isActive ? 'active' : '')}>
            AI 
          </NavLink>
          </li>
          <NavLink to="/BookBorrow" className={({ isActive }) => (isActive ? 'active' : '')}>
          BookBorrow
        </NavLink>
        
      </ul>
    </nav>
  );
}

export default Navbar;
