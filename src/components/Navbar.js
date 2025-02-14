import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav style={styles.navbar}>
      <div className="navbar-logo">
        <Link to="/" style={styles.logo}>Library Management</Link>
      </div>
      
      <ul style={styles.navList}>
        {/* Home */}
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} end>
            Homen
          </NavLink>
        </li>

        {/* Dropdown Menu */}
        <li
          style={styles.navItem}
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <span style={styles.dropdownToggle}>More ▼</span>
          {dropdownOpen && (
            <ul style={styles.dropdownMenu}>
              <li>
                <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')}>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
                  Contact
                </NavLink>
              </li>
            </ul>
          )}
        </li>

        {/* Other Links */}
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
          <NavLink to="/Chat" className={({ isActive }) => (isActive ? 'active' : '')}>
          Chat
          </NavLink>
        </li>
        <li>
          <NavLink to="/BookBorrow" className={({ isActive }) => (isActive ? 'active' : '')}>
            BookBorrow
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

// Styles
const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 'bold'
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
    padding: '0',
    margin: '0',
    color: 'white'
  },
  navItem: {
    position: 'relative',
    cursor: 'pointer'
  },
  dropdownToggle: {
    color: 'white',
    textDecoration: 'none'
  },
  dropdownMenu: {
    position: 'absolute',
    top: '100%',
    left: '0',
    backgroundColor: '#444',
    listStyle: 'none',
    padding: '10px',
    margin: '0',
    borderRadius: '5px',
    boxShadow: '0px 4px 6px rgba(0,0,0,0.1)'
  }
};

export default Navbar;
