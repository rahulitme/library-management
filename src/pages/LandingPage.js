import React from 'react';
import './LandingPage.css'; // Add a CSS file for styling

const LandingPage = () => {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <h1>Welcome to XYZ College</h1>
      </header>

      {/* Mission Section */}
      <section className="mission">
        <h2>"Passionate about Innovation"</h2>
        <p>
          Our college is committed to fostering students' holistic development, encompassing academic, spiritual, cultural, and social growth. We aim to empower individuals to excel and make a meaningful impact.
        </p>
      </section>

      {/* Statistics Section */}
      <section className="statistics">
        <h2>A Place for Service, Empower, Career</h2>
        <div className="stats-grid">
          <div>
            <h3>0</h3>
            <p>FACULTIES</p>
          </div>
          <div>
            <h3>0</h3>
            <p>PROGRAMS</p>
          </div>
          <div>
            <h3>0</h3>
            <p>RESEARCH AND DEVELOPMENT</p>
          </div>
          <div>
            <h3>0</h3>
            <p>PLACEMENTS</p>
          </div>
        </div>
      </section>

      {/* Recruiters Section */}
      <section className="recruiters">
        <h2>Some of Our Prestigious Recruiters</h2>
        <p>[Logos or names of companies go here]</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <h3>More About Us</h3>
            <ul>
              <li>Clubs</li>
              <li>Cells</li>
              <li>Grievance</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h3>Quick Links</h3>
            <ul>
              <li>Academic Calendar</li>
              <li>Curriculum</li>
              <li>Web Mail</li>
              <li>Media & Press</li>
            </ul>
          </div>
          <div>
            <h3>Contact Us</h3>
            <p>Office: +91-424-2555018</p>
            <p>Email: xyzcollege@gmail.com</p>
          </div>
          <div>
            <h3>Follow Us</h3>
            <div className="social-icons">
              <span>📘</span> <span>📷</span> <span>🐦</span> <span>▶️</span>
            </div>
          </div>
        </div>
        <p>&copy; 2024 XYZ College. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
