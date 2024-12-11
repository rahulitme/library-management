import React, { useState } from 'react';

function HomePage() {
  const [userType, setUserType] = useState('student');
  const [showLogin, setShowLogin] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(
      `${userType.charAt(0).toUpperCase() + userType.slice(1)} login attempted`
    );
    setShowLogin(false);
  };

  const pageStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage:
      'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
  };

  const contentStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
    maxWidth: '420px',
    width: '100%',
  };

  const titleStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '24px',
    color: '#333',
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'transform 0.2s, background-color 0.3s',
  };

  const buttonHoverStyle = {
    transform: 'scale(1.05)',
    backgroundColor: '#0056b3',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    marginBottom: '16px',
    boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s',
  };

  const inputFocusStyle = {
    boxShadow: '0 0 6px rgba(0, 123, 255, 0.6)',
    outline: 'none',
  };

  return (
    <div style={pageStyle}>
      <div style={contentStyle}>
        <h1 style={titleStyle}>School Public Library</h1>

        <div>
          <h2
            style={{
              fontSize: '20px',
              fontWeight: 'bold',
              marginBottom: '16px',
              color: '#444',
            }}
          >
            Login
          </h2>

          {!showLogin ? (
            <button
              onClick={() => setShowLogin(true)}
              style={buttonStyle}
              onMouseOver={(e) => Object.assign(e.target.style, buttonHoverStyle)}
              onMouseOut={(e) => Object.assign(e.target.style, buttonStyle)}
            >
              Login
            </button>
          ) : (
            <form
              onSubmit={handleLogin}
              style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
            >
              <div>
                <label
                  style={{
                    display: 'block',
                    marginBottom: '4px',
                    color: '#555',
                  }}
                >
                  User Type
                </label>
                <select
                  value={userType}
                  onChange={(e) => setUserType(e.target.value)}
                  style={inputStyle}
                  onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                  onBlur={(e) => Object.assign(e.target.style, inputStyle)}
                >
                  <option value="student">Student</option>
                  <option value="faculty">Faculty</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="username"
                  style={{
                    display: 'block',
                    marginBottom: '4px',
                    color: '#555',
                  }}
                >
                  {userType === 'student' ? 'Name' : 'Email'}
                </label>
                <input
                  id="username"
                  type={userType === 'student' ? 'text' : 'email'}
                  placeholder={
                    userType === 'student'
                      ? 'Enter your name'
                      : 'Enter your email'
                  }
                  required
                  style={inputStyle}
                  onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                  onBlur={(e) => Object.assign(e.target.style, inputStyle)}
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  style={{
                    display: 'block',
                    marginBottom: '4px',
                    color: '#555',
                  }}
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                  style={inputStyle}
                  onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                  onBlur={(e) => Object.assign(e.target.style, inputStyle)}
                />
              </div>

              <button
                type="submit"
                style={buttonStyle}
                onMouseOver={(e) => Object.assign(e.target.style, buttonHoverStyle)}
                onMouseOut={(e) => Object.assign(e.target.style, buttonStyle)}
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
