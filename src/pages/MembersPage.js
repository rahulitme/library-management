import React from 'react';
import './MembersPage.css'; 

function Header() {
  const facultyCards = [
    { id: 1, title: 'Computer Applications (MCA)', description: 'Cutting-edge computer science and software development programs.', image: 'https://images.unsplash.com/photo-1531177077071-6c33c41f60bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80', courses: 5, faculty: 12, icon: '💻' },
    { id: 2, title: 'Business Administration (MBA)', description: 'Comprehensive business leadership and management education.', image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80', courses: 8, faculty: 15, icon: '📊' },
    { id: 3, title: 'Computer Science Engineering', description: 'Advanced technology and software engineering programs.', image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80', courses: 6, faculty: 18, icon: '🖥️' },
    { id: 4, title: 'Electronics & Communication', description: 'Innovative electronics and communication technologies.', image: 'https://images.unsplash.com/photo-1534126511673-b6899657816a?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80', courses: 4, faculty: 10, icon: '📡' },
    { id: 5, title: 'Data Science', description: 'Advanced data analytics and machine learning programs.', image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80', courses: 5, faculty: 8, icon: '📈' },
    { id: 6, title: 'Mechanical Engineering', description: 'Mechanical innovation and engineering design.', image: 'https://images.unsplash.com/photo-1581092795363-76a58c2b53f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80', courses: 7, faculty: 14, icon: '⚙️' },
    { id: 7, title: 'Civil Engineering', description: 'Infrastructure development and civil construction.', image: 'https://images.unsplash.com/photo-1581093598400-59d48d6f63db?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80', courses: 6, faculty: 11, icon: '🏗️' },
    { id: 8, title: 'Electrical Engineering', description: 'Power systems and electrical circuit design.', image: 'https://images.unsplash.com/photo-1503793952895-824225b3db36?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80', courses: 5, faculty: 9, icon: '🔌' },
    { id: 9, title: 'Architecture', description: 'Modern architectural design and construction techniques.', image: 'https://images.unsplash.com/photo-1521715761812-e6e026985d8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80', courses: 4, faculty: 8, icon: '🏛️' },
    { id: 10, title: 'Biomedical Engineering', description: 'Innovative healthcare technologies and solutions.', image: 'https://images.unsplash.com/photo-1551601651-1b8b6d8eeed4?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80', courses: 5, faculty: 10, icon: '🩺' },
    { id: 11, title: 'Physics', description: 'Fundamental physics and advanced research programs.', image: 'https://images.unsplash.com/photo-1531686264887-ef1f918a29db?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80', courses: 6, faculty: 9, icon: '🔬' },
    { id: 12, title: 'Mathematics', description: 'Mathematical sciences and computational techniques.', image: 'https://images.unsplash.com/photo-1500989141357-76c16f55233f?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80', courses: 5, faculty: 7, icon: '🧮' },
    { id: 13, title: 'Biotechnology', description: 'Exploring biological processes and innovative solutions.', image: 'https://images.unsplash.com/photo-1578496781985-8c3e9d58dbae?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80', courses: 5, faculty: 8, icon: '🧬' },
    { id: 14, title: 'English Literature', description: 'Literary analysis and critical thinking through classic and modern texts.', image: 'https://images.unsplash.com/photo-1516879949733-5dd1d33d3b8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80', courses: 4, faculty: 6, icon: '📚' },
    { id: 15, title: 'Psychology', description: 'Understanding human behavior and mental processes.', image: 'https://images.unsplash.com/photo-1573496784437-491d7204d40d?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80', courses: 5, faculty: 7, icon: '🧠' }
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
