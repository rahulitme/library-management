import React from 'react';

export default function Header() {
  // Card data with online image URLs
  const cardData = [
    {
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Digital Innovation",
      text: "Exploring cutting-edge technologies and their impact on modern business strategies.",
      buttonText: "Discover More"
    },
    {
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Creative Collaboration",
      text: "Innovative solutions emerge from teamwork and diverse perspectives.",
      buttonText: "Learn More"
    },
    {
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
      title: "Tech Development",
      text: "Transforming ideas into powerful technological solutions.",
      buttonText: "Explore Projects"
    },
    {
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Data Analytics",
      text: "Turning complex data into actionable insights and strategic decisions.",
      buttonText: "View Insights"
    },
    {
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Cloud Computing",
      text: "Revolutionizing business infrastructure with scalable cloud solutions.",
      buttonText: "Get Started"
    },
    {
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
      title: "Software Engineering",
      text: "Crafting intelligent software solutions for complex challenges.",
      buttonText: "Explore Capabilities"
    },
    {
      image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
      title: "Artificial Intelligence",
      text: "Pushing the boundaries of machine learning and intelligent systems.",
      buttonText: "Learn AI"
    },
    {
      image: "https://images.unsplash.com/photo-1504610926078-a1611fbcbea0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
      title: "Cybersecurity",
      text: "Protecting digital assets with advanced security strategies.",
      buttonText: "Secure Now"
    },
    {
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
      title: "Web Development",
      text: "Creating responsive and innovative web solutions.",
      buttonText: "Build Websites"
    },
    {
      image: "https://images.unsplash.com/photo-1605647540755-98d713c90a59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
      title: "Mobile Applications",
      text: "Innovative mobile solutions for the digital era.",
      buttonText: "Discover Apps"
    }
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cardData.map((card, index) => (
          <div 
            key={index}
            className="border rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h5 className="text-xl font-bold mb-2 text-gray-800">{card.title}</h5>
              <p className="text-gray-600 mb-4 h-20 overflow-hidden">{card.text}</p>
              <button
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
              >
                {card.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}