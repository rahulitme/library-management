import React, { useState } from 'react';

const facultyDepartments = [
  { id: 1, name: 'MCA (Master of Computer Applications)' },
  { id: 2, name: 'MBA (Master of Business Administration)' },
  { id: 3, name: 'Engineering' },
  { id: 4, name: 'Arts and Science' },
];

const mcaCards = [
  {
    id: 1,
    title: 'Advanced Software Development',
    description: 'Learn cutting-edge software development techniques and methodologies.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    skills: ['Java', 'Python', 'Cloud Computing']
  },
  {
    id: 2,
    title: 'Machine Learning Fundamentals',
    description: 'Dive deep into machine learning algorithms and artificial intelligence.',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    skills: ['Python', 'TensorFlow', 'Data Science']
  },
  {
    id: 3,
    title: 'Cybersecurity Strategies',
    description: 'Master advanced cybersecurity techniques and network protection.',
    image: 'https://images.unsplash.com/photo-1504610926078-a1611fbcbea0?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    skills: ['Network Security', 'Ethical Hacking', 'Cryptography']
  },
  {
    id: 4,
    title: 'Cloud Computing Specialization',
    description: 'Explore advanced cloud infrastructure and distributed systems.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    skills: ['AWS', 'Azure', 'Cloud Architecture']
  },
  {
    id: 5,
    title: 'Data Analytics and Visualization',
    description: 'Learn to transform complex data into meaningful insights.',
    image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    skills: ['R', 'Power BI', 'Statistical Analysis']
  },
  {
    id: 6,
    title: 'Mobile Application Development',
    description: 'Create innovative mobile apps for iOS and Android platforms.',
    image: 'https://images.unsplash.com/photo-1605647540755-98d713c90a59?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    skills: ['React Native', 'Flutter', 'Mobile UX']
  },
  {
    id: 7,
    title: 'Artificial Intelligence Applications',
    description: 'Develop intelligent systems and cognitive computing solutions.',
    image: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    skills: ['AI', 'Neural Networks', 'Deep Learning']
  },
  {
    id: 8,
    title: 'Enterprise Software Engineering',
    description: 'Design and implement scalable enterprise-level software solutions.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    skills: ['Java Enterprise', 'Microservices', 'Design Patterns']
  },
  {
    id: 9,
    title: 'Internet of Things (IoT) Specialization',
    description: 'Explore connected devices and IoT ecosystem development.',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    skills: ['Embedded Systems', 'IoT Protocols', 'Sensor Networks']
  },
  {
    id: 10,
    title: 'Digital Transformation Strategies',
    description: 'Understand the latest trends in digital business transformation.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    skills: ['Digital Strategy', 'Innovation Management', 'Technology Trends']
  }
];

function BookDetails() {
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedCards, setSelectedCards] = useState([]);

  const handleDepartmentSelect = (departmentId) => {
    setSelectedDepartment(departmentId);
    
    // If MCA is selected, show MCA cards
    if (departmentId === 1) {
      setSelectedCards(mcaCards);
    } else {
      setSelectedCards([]);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Select Faculty Department</h2>
      
      <div className="flex flex-wrap gap-4 mb-6">
        {facultyDepartments.map((dept) => (
          <button
            key={dept.id}
            onClick={() => handleDepartmentSelect(dept.id)}
            className={`
              px-4 py-2 rounded-lg transition-colors duration-300
              ${selectedDepartment === dept.id 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-blue-100'
              }
            `}
          >
            {dept.name}
          </button>
        ))}
      </div>

      {selectedDepartment === 1 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {selectedCards.map((card) => (
            <div 
              key={card.id} 
              className="border rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h5 className="text-xl font-bold mb-2 text-gray-800">{card.title}</h5>
                <p className="text-gray-600 mb-4 h-20 overflow-hidden">{card.description}</p>
                <div className="mb-4">
                  <h6 className="font-semibold text-gray-700">Key Skills:</h6>
                  <div className="flex flex-wrap gap-2">
                    {card.skills.map((skill, index) => (
                      <span 
                        key={index} 
                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BookDetails;