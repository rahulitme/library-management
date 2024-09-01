import React, { useState } from 'react';
import axios from 'axios';

function AddBookPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSearchResults([]);
    setSelectedBook(null);

    try {
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`);
      setSearchResults(response.data.items || []);
    } catch (err) {
      setError('Failed to fetch search results.');
    } finally {
      setLoading(false);
    }
  };

  const fetchBookDetails = async (bookId) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}`);
      setSelectedBook(response.data);
    } catch (err) {
      setError('Failed to fetch book details.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Book Search</h1>
      
      <div className="mb-8 p-4 border rounded">
        <form onSubmit={handleSearch} className="flex space-x-2">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for books..."
            className="flex-grow p-2 border rounded"
          />
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
            Search
          </button>
        </form>
      </div>

      {loading && (
        <div className="flex justify-center items-center">
          <p>Loading...</p>
        </div>
      )}
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline"> {error}</span>
        </div>
      )}

      {searchResults.length > 0 && (
        <div className="mb-8 p-4 border rounded">
          <h2 className="text-xl font-bold mb-4">Search Results</h2>
          <ul className="space-y-2">
            {searchResults.map(book => (
              <li key={book.id}>
                <button 
                  onClick={() => fetchBookDetails(book.id)}
                  className="w-full text-left p-2 hover:bg-gray-100 rounded"
                >
                  {book.volumeInfo.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {selectedBook && (
        <div className="p-4 border rounded">
          <h2 className="text-xl font-bold mb-4">{selectedBook.volumeInfo.title}</h2>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <img 
              src={selectedBook.volumeInfo.imageLinks?.thumbnail || "/api/placeholder/200/300"} 
              alt={selectedBook.volumeInfo.title}
              className="w-48 h-auto object-cover rounded shadow-md"
            />
            <div className="flex-grow">
              <p className="text-gray-700">{selectedBook.volumeInfo.description}</p>
              <div className="mt-4">
                <p><strong>Author(s):</strong> {selectedBook.volumeInfo.authors?.join(', ') || 'Unknown'}</p>
                <p><strong>Published:</strong> {selectedBook.volumeInfo.publishedDate || 'Unknown'}</p>
                <p><strong>Pages:</strong> {selectedBook.volumeInfo.pageCount || 'Unknown'}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddBookPage;