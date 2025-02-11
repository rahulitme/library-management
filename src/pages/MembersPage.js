import React from 'react';
import './MembersPage.css'; 

function Header() {
  const facultyCards = [
    { id: 1, title: 'Computer Applications (MCA)', description: 'Cutting-edge computer science and software development programs.', image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80', courses: 5, faculty: 12, icon: '💻' },
    { id: 2, title: 'Business Administration (MBA)', description: 'Comprehensive business leadership and management education.', image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80', courses: 8, faculty: 15, icon: '📊' },
    { id: 3, title: 'Computer Science Engineering', description: 'Advanced technology and software engineering programs.', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80', courses: 6, faculty: 18, icon: '🖥️' },
    { id: 4, title: 'Electronics & Communication', description: 'Innovative electronics and communication technologies.', image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80', courses: 4, faculty: 10, icon: '📡' },
    { id: 5, title: 'Data Science', description: 'Advanced data analytics and machine learning programs.', image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80', courses: 5, faculty: 8, icon: '📈' }
  ];

  return (
    <div className="book-container">
      {facultyCards.map(card => (
        <div key={card.id} className="book-card">
          <div className="book-icon">{card.icon}</div>
          <h2 className="book-title">{card.title}</h2>
          <p className="book-description">{card.description}</p>
          <img src={card.image} alt={card.title} className="book-image" />
          <p className="book-info">Courses: {card.courses} | Faculty: {card.faculty}</p>
        </div>
      ))}
    </div>
  );
}

export default Header;
