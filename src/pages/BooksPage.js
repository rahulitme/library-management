import React, { useState } from 'react';

const departments = {
  "Computer Science": [
    { title: "Introduction to Algorithm", author: "Thomas H. Cormen", year: 2009, description: "A comprehensive update to the leading algorithms text, with new material on matchings in bipartite graphs, online algorithms, machine learning, and other topics." },
    { title: "Clean Code", author: "Robert C. Martin", year: 2008, description: "A handbook of agile software craftsmanship that helps programmers write better code." },
    { title: "The Pragmatic Programmer", author: "Andrew Hunt, David Thomas", year: 1999, description: "A guide to software craftsmanship, covering both the art and the science of software development." },
    { title: "Design Patterns", author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides", year: 1994, description: "A classic book on software design patterns that has influenced countless developers." },
    { title: "Code Complete", author: "Steve McConnell", year: 2004, description: "A practical handbook of software construction that provides developers with a clear and concise guide to writing high-quality code." },
    { title: "Artificial Intelligence: A Modern Approach", author: "Stuart Russell, Peter Norvig", year: 2020, description: "The leading textbook in Artificial Intelligence, now updated with new content on robotics, machine learning, and more." },
    { title: "Database System Concept", author: "Abraham Silberschatz, Henry F. Korth, S. Sudarshan", year: 2019, description: "A comprehensive introduction to database systems, covering both theory and practice." }
  ],
  "Mathematics": [
    { title: "Calculus", author: "James Stewart", year: 2015, description: "A comprehensive guide to calculus, covering limits, derivatives, integrals, and their applications." },
    { title: "Linear Algebra", author: "Gilbert Strang", year: 2006, description: "An introductory text that covers the core concepts of linear algebra with clarity and precision." },
    { title: "Discrete Mathematics", author: "Kenneth H. Rosen", year: 2018, description: "A thorough introduction to the mathematical foundations of computer science." },
    { title: "Real Analysis", author: "Walter Rudin", year: 1976, description: "A classic text on real analysis, known for its rigor and comprehensive coverage." },
    { title: "Abstract Algebra", author: "David S. Dummit, Richard M. Foote", year: 2003, description: "A comprehensive text on abstract algebra, covering groups, rings, and fields." },
    { title: "Topology", author: "James Munkres", year: 2000, description: "A clear and comprehensive text on point-set and algebraic topology." },
    { title: "An Introduction to Mathematical Statistics and Its Applications", author: "Richard J. Larsen, Morris L. Marx", year: 2017, description: "A balanced and comprehensive introduction to mathematical statistics with real-world applications." }
  ],
  "Physics": [
    { title: "Classical Mechanics", author: "John R. Taylor", year: 2005, description: "A clear and detailed presentation of the fundamental principles of classical mechanics." },
    { title: "Quantum Physics", author: "Stephen Gasiorowicz", year: 2003, description: "A comprehensive introduction to quantum mechanics, suitable for advanced undergraduate students." },
    { title: "Thermodynamics", author: "Enrico Fermi", year: 1936, description: "A classic text on thermodynamics by the renowned physicist Enrico Fermi." },
    { title: "Electromagnetism", author: "David J. Griffiths", year: 2017, description: "A widely-used textbook on electromagnetic theory, known for its clear explanations and examples." },
    { title: "Optics", author: "Eugene Hecht", year: 2016, description: "A comprehensive guide to optics, covering both classical and modern topics." },
    { title: "Introduction to Elementary Particles", author: "David Griffiths", year: 2008, description: "A clear and accessible introduction to the world of particle physics." },
    { title: "General Relativity", author: "Robert M. Wald", year: 1984, description: "A rigorous and comprehensive introduction to Einstein's theory of general relativity." }
  ],
  "Literature": [
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, description: "A Pulitzer Prize-winning novel about racial injustice and the loss of innocence in a small Southern town." },
    { title: "1984", author: "George Orwell", year: 1949, description: "A dystopian novel set in a totalitarian society, exploring themes of surveillance, control, and the manipulation of truth." },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813, description: "A classic novel of manners, satirizing the social expectations of the English middle and upper classes." },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, description: "A novel depicting the lavish lifestyle of wealthy Americans during the Roaring Twenties." },
    { title: "One Hundred Years of Solitude", author: "Gabriel García Márquez", year: 1967, description: "A landmark novel in the magical realism style, tracing the multi-generational story of the Buendía family." },
    { title: "Brave New World", author: "Aldous Huxley", year: 1932, description: "A dystopian novel exploring the implications of technology, social engineering, and psychological manipulation." },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951, description: "A controversial novel about teenage alienation and angst, told through the eyes of its protagonist Holden Caulfield." }
  ]
};

function Modal({ book, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-2xl transform transition-all duration-300 ease-in-out">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold text-indigo-800">{book.title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-3xl transition-colors duration-200">&times;</button>
        </div>
        <p className="text-gray-600 mb-2"><strong>Author:</strong> {book.author}</p>
        <p className="text-gray-600 mb-4"><strong>Year:</strong> {book.year}</p>
        <p className="text-gray-700 leading-relaxed">{book.description}</p>
      </div>
    </div>
  );
}

function BooksPage() {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-200 to-indigo-300 p-8 font-sans">
      <h1 className="text-5xl font-extrabold text-center text-indigo-900 mb-12 tracking-tight">
        📚 Enchanted Library Catalog
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {Object.entries(departments).map(([department, books], index) => (
          <div key={index} className="bg-white bg-opacity-80 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4">
              <h2 className="text-2xl font-bold flex items-center">
                📖 {department}
              </h2>
              <p className="text-sm mt-1 opacity-80">
                {books.length} magical tome{books.length !== 1 ? 's' : ''}
              </p>
            </div>
            <ul className="p-4 h-72 overflow-y-auto">
              {books.map((book, bookIndex) => (
                <li 
                  key={bookIndex} 
                  className="mb-3 last:mb-0 cursor-pointer group"
                  onClick={() => setSelectedBook(book)}
                >
                  <div className="flex items-center p-2 rounded-lg transition-all duration-200 transform group-hover:scale-105 group-hover:bg-indigo-100">
                    <span className="w-3 h-3 bg-indigo-400 rounded-full mr-3 flex-shrink-0 group-hover:bg-indigo-600 transition-colors duration-200"></span>
                    <span className="text-gray-700 group-hover:text-indigo-800 transition-colors duration-200">{book.title}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {selectedBook && (
        <Modal book={selectedBook} onClose={() => setSelectedBook(null)} />
      )}
    </div>
  );
}

export default BooksPage;