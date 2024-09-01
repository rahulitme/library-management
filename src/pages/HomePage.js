import React, { useState } from 'react';

function HomePage() {
  const [userType, setUserType] = useState('student');
  const [showLogin, setShowLogin] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(`${userType.charAt(0).toUpperCase() + userType.slice(1)} login attempted`);
    setShowLogin(false);
  };

  const pageStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: 'url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const contentStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    width: '100%',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginBottom: '10px',
  };

  return (
    <div style={pageStyle}>
      <div style={contentStyle}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px', color: '#333' }}>School Public Library</h1>
        
        <div>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px', color: '#444' }}>Login</h2>
          
          {!showLogin ? (
            <button 
              onClick={() => setShowLogin(true)} 
              style={buttonStyle}
              onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
            >
              Login
            </button>
          ) : (
            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '4px', color: '#555' }}>User Type</label>
                <select 
                  value={userType} 
                  onChange={(e) => setUserType(e.target.value)}
                  style={inputStyle}
                >
                  <option value="student">Student</option>
                  <option value="faculty">Faculty</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="username" style={{ display: 'block', marginBottom: '4px', color: '#555' }}>
                  {userType === 'student' ? 'Name' : 'Email'}
                </label>
                <input 
                  id="username" 
                  type={userType === 'student' ? 'text' : 'email'}
                  placeholder={userType === 'student' ? 'Enter your name' : 'Enter your email'} 
                  required 
                  style={inputStyle} 
                />
              </div>
              
              <div>
                <label htmlFor="password" style={{ display: 'block', marginBottom: '4px', color: '#555' }}>Password</label>
                <input 
                  id="password" 
                  type="password" 
                  placeholder="Enter your password" 
                  required 
                  style={inputStyle} 
                />
              </div>
              
              <button 
                type="submit" 
                style={buttonStyle}
                onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;