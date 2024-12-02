import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Users, PlusCircle, BookOpen, Bot } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-extrabold mb-4 animate-pulse">
            Welcome to Our Library
          </h1>
          <p className="text-2xl mb-8 opacity-80">
            Discover a world of knowledge at your fingertips
          </p>
          <Link 
            to="/books" 
            className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-opacity-90 transition duration-300 shadow-lg hover:shadow-xl"
          >
            Explore Books
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Book className="text-yellow-300" size={48} />} 
            title="Browse Books" 
            description="Explore our vast collection of books" 
            link="/books" 
          />
          <FeatureCard 
            icon={<Users className="text-green-300" size={48} />} 
            title="Manage Members" 
            description="Add and view library members" 
            link="/members" 
          />
          <FeatureCard 
            icon={<PlusCircle className="text-blue-300" size={48} />} 
            title="Add New Books" 
            description="Expand our library catalog" 
            link="/add-book" 
          />
          <FeatureCard 
            icon={<BookOpen className="text-red-300" size={48} />} 
            title="Borrow Books" 
            description="Check out books with ease" 
            link="/BookBorrow" 
          />
          <FeatureCard 
            icon={<Bot className="text-pink-300" size={48} />} 
            title="AI Assistant" 
            description="Get help from our AI librarian" 
            link="/AIAssistant" 
          />
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description, link }) => {
  return (
    <Link to={link} className="group">
      <div className="bg-white bg-opacity-10 rounded-xl p-6 hover:bg-opacity-20 transition duration-300 transform hover:-translate-y-2 hover:shadow-xl">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 transform group-hover:scale-110 transition duration-300">{icon}</div>
          <h2 className="text-2xl font-semibold mb-2 group-hover:text-yellow-200 transition duration-300">{title}</h2>
          <p className="text-sm opacity-80 group-hover:opacity-100 transition duration-300">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default LandingPage;