import React, { useState, useEffect } from 'react';
import './LandingPage.css'; 


// Add a CSS file for styling

const LandingPage = () => {
  const [faculties, setFaculties] = useState(0);
  const [programs, setPrograms] = useState(0);
  const [research, setResearch] = useState(0);
  const [placements, setPlacements] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFaculties((prev) => (prev < 100 ? prev + 1 : prev));
      setPrograms((prev) => (prev < 50 ? prev + 1 : prev));
      setResearch((prev) => (prev < 30 ? prev + 1 : prev));
      setPlacements((prev) => (prev < 200 ? prev + 1 : prev));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Header */}
      <header className="header">
        <h1>Indian Institute of Science (IISc)</h1>
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
            <h3>{faculties}</h3>
            <p>FACULTIES</p>
          </div>
          <div>
            <h3>{programs}</h3>
            <p>PROGRAMS</p>
          </div>
          <div>
            <h3>{research}</h3>
            <p>RESEARCH AND DEVELOPMENT</p>
          </div>
          <div>
            <h3>{placements}</h3>
            <p>PLACEMENTS</p>
          </div>
        </div>
      </section>

      {/* Recruiters Section */}
      <section className="recruiters">
        <h2>Some of Our Prestigious Recruiters</h2>
        <p>[Logos or names of companies go here]</p>
      </section>

      {/* Student Inquiry Form */}
      <section className="student-inquiry">
        <h2>Student Login</h2>
        <form>
          <div>
            <label htmlFor="inquiry-name">Name:</label>
            <input type="text" id="inquiry-name" name="name" required />
          </div>
          <div>
            <label htmlFor="inquiry-email">Email:</label>
            <input type="email" id="inquiry-email" name="email" required />
          </div>
          <div>
            <label htmlFor="inquiry-message">Message:</label>
            <textarea id="inquiry-message" name="message" required></textarea>
          </div>
          <button type="submit">Submit Inquiry</button>
        </form>
      </section>

      {/* Student Registration Form */}
      <section className="student-registration">
        <h2>Faculty Login</h2>
        <form>
          <div>
            <label htmlFor="register-name">Name:</label>
            <input type="text" id="register-name" name="name" required />
          </div>
          <div>
            <label htmlFor="register-email">Email:</label>
            <input type="email" id="register-email" name="email" required />
          </div>
          <div>
            <label htmlFor="register-password">Password:</label>
            <input type="password" id="register-password" name="password" required />
          </div>
          <div>
            <label htmlFor="register-confirm-password">Confirm Password:</label>
            <input type="password" id="register-confirm-password" name="confirm-password" required />
          </div>
          <button type="submit">Register</button>
        </form>
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