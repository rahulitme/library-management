import React from 'react';
import { Link } from 'react-router-dom';

const book = () => {
  const facultyCards = [
    {
      id: 1,
      title: 'Computer Applications (MCA)',
      description: 'Cutting-edge computer science and software development programs.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      courses: 5,
      faculty: 12,
      icon: '💻'
    },
    {
      id: 2,
      title: 'Business Administration (MBA)',
      description: 'Comprehensive business leadership and management education.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      courses: 8,
      faculty: 15,
      icon: '📊'
    },
    {
      id: 3,
      title: 'Computer Science Engineering',
      description: 'Advanced technology and software engineering programs.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      courses: 6,
      faculty: 18,
      icon: '🖥️'
    },
    {
      id: 4,
      title: 'Electronics & Communication',
      description: 'Innovative electronics and communication technologies.',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      courses: 4,
      faculty: 10,
      icon: '📡'
    },
    {
      id: 5,
      title: 'Data Science',
      description: 'Advanced data analytics and machine learning programs.',
      image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      courses: 5,
      faculty: 8,
      icon: '📈'
    },
    {
      id: 6,
      title: 'Artificial Intelligence',
      description: 'Cutting-edge AI and cognitive computing education.',
      image: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      courses: 4,
      faculty: 7,
      icon: '🤖'
    },
    {
      id: 7,
      title: 'Mechanical Engineering',
      description: 'Advanced mechanical design and innovation programs.',
      image: 'https://images.unsplash.com/photo-1605647540755-98d713c90a59?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      courses: 5,
      faculty: 12,
      icon: '⚙️'
    },
    {
      id: 8,
      title: 'Cyber Security',
      description: 'Comprehensive network and information security education.',
      image: 'https://images.unsplash.com/photo-1504610926078-a1611fbcbea0?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      courses: 3,
      faculty: 6,
      icon: '🔒'
    },
    {
      id: 9,
      title: 'Biotechnology',
      description: 'Innovative biological and technological research programs.',
      image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      courses: 4,
      faculty: 9,
      icon: '🧬'
    },
    {
      id: 10,
      title: 'Digital Marketing',
      description: 'Modern digital strategy and marketing communication.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      courses: 5,
      faculty: 7,
      icon: '📱'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {facultyCards.map((faculty) => (
        <div
          key={faculty.id}
          className="bg-white border rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105"
        >
          <div className="relative">
            <img
              src={faculty.image}
              alt={faculty.title}
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-4 right-4 bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl">
              {faculty.icon}
            </div>
          </div>
          <div className="p-5">
            <h2 className="text-xl font-bold mb-2 text-gray-800">{faculty.title}</h2>
            <p className="text-gray-600 mb-4 h-20 overflow-hidden">
              {faculty.description}
            </p>
            <div className="flex justify-between mb-4 text-sm">
              <div className="flex items-center">
                <span className="mr-2">📚</span>
                <span>{faculty.courses} Courses</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">👥</span>
                <span>{faculty.faculty} Faculty</span>
              </div>
            </div>
            <Link
              to={`/faculty/${faculty.id}`}
              className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
            >
              Explore Department
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default book;     