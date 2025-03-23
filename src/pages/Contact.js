import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contact Us</h1>
      <p style={styles.subHeading}>
        Have questions or feedback? Feel free to reach out to us!
      </p>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={styles.textarea}
          required
        />
        <button type="submit" style={styles.button}>
          Send Message
        </button>
      </form>
      <div style={styles.contactDetails}>
        <h3>College Address</h3>
        <p>123 College Road, City, State, Zip</p>
        <p>Email: info@college.edu</p>
        <p>Phone: (123) 456-7890</p>
        <div style={styles.socialMedia}>
          <a href="https://www.example.com" style={styles.socialLink}>🌐 Website</a>
          <a href="https://www.facebook.com" style={styles.socialLink}>📘 Facebook</a>
          <a href="https://www.twitter.com" style={styles.socialLink}>🐦 Twitter</a>
          <a href="https://www.instagram.com" style={styles.socialLink}>📷 Instagram</a>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '50px 20px',
    textAlign: 'center',
    backgroundColor: '#f1f1f1',
  },
  heading: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  subHeading: {
    fontSize: '18px',
    marginBottom: '30px',
    color: '#666',
  },
  form: {
    maxWidth: '400px',
    margin: '0 auto',
  },
  input: {
    width: '100%',
    padding: '12px',
    margin: '8px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  textarea: {
    width: '100%',
    padding: '12px',
    margin: '8px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
    minHeight: '100px',
  },
  button: {
    padding: '12px 20px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '18px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  contactDetails: {
    marginTop: '30px',
    textAlign: 'center',
  },
  socialMedia: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
  },
  socialLink: {
    textDecoration: 'none',
    fontSize: '20px',
    color: '#333',
  },
};

export default Contact;
