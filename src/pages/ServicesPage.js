import React from 'react';

const services = [
  {
    icon: '🎓',
    title: 'Academic Programs',
    description: 'We offer a wide range of undergraduate, postgraduate, and doctoral programs in various disciplines to empower students with quality education.',
  },
  {
    icon: '🏫',
    title: 'State-of-the-Art Facilities',
    description: 'Our campus is equipped with modern labs, libraries, sports facilities, and student lounges to support a holistic learning experience.',
  },
  {
    icon: '💼',
    title: 'Placement Assistance',
    description: 'Our dedicated placement cell helps students secure opportunities at top companies through training and career guidance.',
  },
  {
    icon: '🌐',
    title: 'Online Learning',
    description: 'Access a variety of online courses and resources to enhance your knowledge from the comfort of your home.',
  },
  {
    icon: '📚',
    title: 'Library Services',
    description: 'Our digital and physical libraries house thousands of books, journals, and research papers for academic enrichment.',
  },
  {
    icon: '🎉',
    title: 'Extracurricular Activities',
    description: 'Join clubs, societies, and sports teams to develop leadership skills and foster a sense of community.',
  },
];

const ServicesPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Our Services</h1>
      <div style={styles.servicesContainer}>
        {services.map((service, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.icon}>{service.icon}</div>
            <h2 style={styles.title}>{service.title}</h2>
            <p style={styles.description}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '50px 20px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
  },
  heading: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '30px',
    color: '#333',
  },
  servicesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  },
  card: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '300px',
    textAlign: 'center',
    transition: 'transform 0.3s',
  },
  icon: {
    fontSize: '50px',
    marginBottom: '10px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '10px 0',
  },
  description: {
    fontSize: '16px',
    color: '#555',
  },
};

export default ServicesPage;
