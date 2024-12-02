import React from 'react';

export default function Header() {
  // Sample card data - you can replace with your actual content
  const cardData = [
    {
      image: "/api/placeholder/300/200",
      title: "Card 1 Title",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      buttonText: "Go somewhere"
    },
    {
      image: "/api/placeholder/300/200",
      title: "Card 2 Title",
      text: "Another example of card content with some descriptive text.",
      buttonText: "Learn More"
    },
    {
      image: "/api/placeholder/300/200",
      title: "Card 3 Title",
      text: "Explore this card's content and discover something new.",
      buttonText: "Click Here"
    },
    {
      image: "/api/placeholder/300/200",
      title: "Card 4 Title",
      text: "Interesting information that catches the reader's attention.",
      buttonText: "Explore"
    },
    {
      image: "/api/placeholder/300/200",
      title: "Card 5 Title",
      text: "A brief description to intrigue potential readers.",
      buttonText: "Read More"
    },
    {
      image: "/api/placeholder/300/200",
      title: "Card 6 Title",
      text: "Engaging content that provides value to the audience.",
      buttonText: "Discover"
    },
    {
      image: "/api/placeholder/300/200",
      title: "Card 7 Title",
      text: "Compelling text that makes people want to learn more.",
      buttonText: "View Details"
    },
    {
      image: "/api/placeholder/300/200",
      title: "Card 8 Title",
      text: "An informative snippet designed to spark curiosity.",
      buttonText: "Get Started"
    },
    {
      image: "/api/placeholder/300/200",
      title: "Card 9 Title",
      text: "Concise yet meaningful description of the card's purpose.",
      buttonText: "Take Action"
    },
    {
      image: "/api/placeholder/300/200",
      title: "Card 10 Title",
      text: "Final card in the collection with its own unique message.",
      buttonText: "Learn More"
    }
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 gap-4">
        {cardData.map((card, index) => (
          <div 
            key={index} 
            className="border rounded-lg shadow-lg overflow-hidden"
          >
            <img 
              src={card.image} 
              alt={card.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h5 className="text-xl font-bold mb-2">{card.title}</h5>
              <p className="text-gray-700 mb-4">{card.text}</p>
              <button 
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
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