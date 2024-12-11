import React from 'react';
import { Calendar, Info, DollarSign } from 'lucide-react';


const AIAssistant = ({ 
  backgroundImage, 
  title, 
  subTitle, 
  price, 
  location, 
  date, 
  disclaimer 
}) => {
  return (
    <li className="ai-assistant-card relative overflow-hidden rounded-lg shadow-lg mb-6 md:mb-8 lg:mb-10 bg-cover bg-center" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="ai-assistant-overlay absolute inset-0 z-10 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
        <div className="ai-assistant-reserve-container">
          <button className="ai-assistant-reserve-btn bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
            Réserver
          </button>
        </div>
      </div>
      
      <div className="ai-assistant-details p-4 bg-white bg-opacity-90 relative z-20">
        <h2 className="ai-assistant-title text-xl font-bold mb-2">{title}</h2>
        <p className="ai-assistant-subtitle text-gray-600 mb-3">{subTitle}</p>
        
        <p className="ai-assistant-price flex items-center text-lg font-semibold text-gray-800 mb-4">
          <DollarSign className="ai-assistant-price-icon mr-2 text-gray-600" size={24} />
          {price}
        </p>
        
        <div className="ai-assistant-additional-info">
          <div className="ai-assistant-info-grid grid grid-cols-2 gap-4 mb-4">
            <div className="ai-assistant-location flex items-center">
              <Info className="ai-assistant-location-icon mr-2 text-gray-600" size={24} />
              <p className="ai-assistant-location-text text-gray-700">{location}</p>
            </div>
            
            <div className="ai-assistant-date flex items-center">
              <Calendar className="ai-assistant-date-icon mr-2 text-gray-600" size={24} />
              <p className="ai-assistant-date-text text-gray-700">{date}</p>
            </div>
          </div>
          
          <p className="ai-assistant-disclaimer text-sm text-gray-500 italic">
            {disclaimer}
          </p>
        </div>
      </div>
    </li>
  );
};

const AIAssistantTicketCards = () => {
  const tickets = [
    {
      backgroundImage: 'https://images.unsplash.com/photo-1578944032637-f09897c5233d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
      title: 'Je suis un billet pour aller visiter un truc',
      subTitle: 'Et moi un je suis sous-titre',
      price: 'De 0 à 15 €',
      location: 'Parc des expositions à NANTES',
      date: 'Samedi 1er février 2020',
      disclaimer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eveniet perferendis culpa. Expedita architecto nesciunt, rem distinctio'
    },
    {
      backgroundImage: 'https://images.unsplash.com/photo-1580137197581-df2bb346a786?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
      title: 'Je suis moi aussi un billet',
      subTitle: 'Et moi je suis un 2ème sous-titre',
      price: 'De 0 à 35 €',
      location: 'Parlement de Bretagne à RENNES',
      date: 'À partir du Dimanche 3 Juin 2020',
      disclaimer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eveniet perferendis culpa. Expedita architecto nesciunt, rem distinctio'
    },
    {
      backgroundImage: 'https://images.unsplash.com/photo-1579489225078-27977a77bf72?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
      title: 'Encore un billet',
      subTitle: 'Encore un sous-titre',
      price: '20 €',
      location: 'Le Trident à CHERBOURG',
      date: 'Février 2020',
      disclaimer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eveniet perferendis culpa. Expedita architecto nesciunt, rem distinctio'
    },
    {
      backgroundImage: 'https://images.unsplash.com/photo-1532509854226-a2d9d8e66f8e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
      title: 'Now I\'m a ticket but in english',
      subTitle: 'And me, call me "sub-title" now',
      price: 'From 0 to 15 €',
      location: 'Centre Pompidou at PARIS',
      date: 'From October to December 2020',
      disclaimer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eveniet perferendis culpa. Expedita architecto nesciunt, rem distinctio'
    }
  ];

  return (
    <div className="ai-assistant-container mx-auto px-4 py-8">
      <ul className="ai-assistant-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {tickets.map((ticket, index) => (
          <AIAssistant key={index} {...ticket} />
        ))}
      </ul>
      
      <div className="ai-assistant-credits text-center text-sm text-gray-600 mt-8">
        Designed by <a href="https://www.linkedin.com/in/ana%C3%AFs-laghzali-8b613297/" target="_blank" rel="noopener noreferrer" className="ai-assistant-credit-link hover:text-blue-600">Anaïs Laghzali</a> & developed by <a href="https://remiruc.com" target="_blank" rel="noopener noreferrer" className="ai-assistant-credit-link hover:text-blue-600">Rémi Rucojevic</a><br />
        at <a href="https://www.hippocampe.fr" target="_blank" rel="noopener noreferrer" className="ai-assistant-credit-link hover:text-blue-600">Hippocampe.fr</a>
      </div>
    </div>
  );
};

export default AIAssistantTicketCards;