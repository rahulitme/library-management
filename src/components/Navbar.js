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
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} end>
            <button style={styles.button}>Home</button>
          </NavLink>
        </li>

        {/* Dropdown Menu */}
        <li
          style={styles.navItem}
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button style={styles.dropdownToggle}>More ▼</button>
          {dropdownOpen && (
            <ul style={styles.dropdownMenu}>
              <li>
                <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
                  <button style={styles.dropdownMenuItem}>About</button>
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')}>
                  <button style={styles.dropdownMenuItem}>Services</button>
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
                  <button style={styles.dropdownMenuItem}>Contact</button>
                </NavLink>
              </li>
            </ul>
          )}
        </li>

        <li><NavLink to="/books"><button style={styles.button}>Books</button></NavLink></li>
        <li><NavLink to="/add-book"><button style={styles.button}>Add Book</button></NavLink></li>
        <li><NavLink to="/members"><button style={styles.button}>Members</button></NavLink></li>
        <li><NavLink to="/chat"><button style={styles.button}>Chat</button></NavLink></li>
        <li><NavLink to="/bookborrow"><button style={styles.button}>Book Borrow</button></NavLink></li>
      </ul>
    </nav>
  );
}

// Styles
const styles = {
  navbar: {
    background: 'linear-gradient(90deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',

    padding: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    borderRadius: '8px'
  },
  logo: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '22px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
    padding: '0',
    margin: '0',
    color: 'white',
    alignItems: 'center'
  },
  navItem: {
    position: 'relative',
    cursor: 'pointer'
  },
  button: {
    background: 'white',
    color: '#2b5876',

    border: 'none',
    padding: '8px 12px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '600',
    transition: 'background 0.3s, color 0.3s',
    boxShadow: '0px 2px 5px rgba(0,0,0,0.2)'
  },
  dropdownToggle: {
    background: 'rgba(255, 255, 255, 0.2)',
    color: 'white',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '600',
    backdropFilter: 'blur(5px)'
  },
  dropdownMenu: {
    position: 'absolute',
    top: '100%',
    left: '0',
    backgroundColor: '#ffffff',
    listStyle: 'none',
    padding: '10px',
    margin: '0',
    borderRadius: '5px',
    boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
    minWidth: '160px',
    zIndex: '100',
    animation: 'fadeIn 0.3s ease-in-out'
  },
  dropdownMenuItem: {
    padding: '8px 12px',
    transition: 'background 0.3s',
    borderRadius: '3px',
    cursor: 'pointer',
    background: 'white',
    color: '#ff758c',
    border: 'none',
    fontSize: '14px',
    fontWeight: '600'
  }
};

export default Navbar;
