import React, { useState } from "react";
import axios from "axios";

function AddBookPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSearchResults([]);
    setSelectedBook(null);

    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`
      );
      setSearchResults(response.data.items || []);
    } catch (err) {
      setError("Failed to fetch search results.");
    } finally {
      setLoading(false);
    }
  };

  const fetchBookDetails = async (bookId) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${bookId}`
      );
      setSelectedBook(response.data);
    } catch (err) {
      setError("Failed to fetch book details.");
    } finally {
      setLoading(false);
    }
  };

  const addToFavorites = (book) => {
    setFavorites((prevFavorites) => [...prevFavorites, book]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-indigo-600">
        Book Explorer
      </h1>

      {/* Search Bar */}
      <div className="mb-8 p-4 border rounded shadow-sm bg-gray-50">
        <form onSubmit={handleSearch} className="flex space-x-2">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for books..."
            className="flex-grow p-3 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-500 text-white font-bold rounded shadow hover:bg-indigo-600 transition"
          >
            Search
          </button>
        </form>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="flex justify-center items-center">
          <div className="loader w-10 h-10 border-4 border-indigo-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline"> {error}</span>
        </div>
      )}

      {/* Search Results */}
      {searchResults.length > 0 && (
        <div className="mb-8 p-4 border rounded bg-white shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Search Results</h2>
          <ul className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {searchResults.map((book) => (
              <li
                key={book.id}
                className="p-4 border rounded shadow-sm hover:shadow-md transition"
              >
                <img
                  src={
                    book.volumeInfo.imageLinks?.thumbnail ||
                    "/api/placeholder/200/300"
                  }
                  alt={book.volumeInfo.title}
                  className="w-full h-48 object-cover rounded"
                />
                <h3 className="text-lg font-bold mt-4">
                  {book.volumeInfo.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {book.volumeInfo.authors?.join(", ") || "Unknown Author"}
                </p>
                <div className="flex space-x-2 mt-4">
                  <button
                    onClick={() => fetchBookDetails(book.id)}
                    className="px-4 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => addToFavorites(book)}
                    className="px-4 py-2 bg-green-500 text-white text-sm rounded hover:bg-green-600 transition"
                  >
                    Add to Favorites
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Selected Book Details */}
      {selectedBook && (
        <div className="p-4 border rounded bg-white shadow-sm">
          <h2 className="text-2xl font-bold mb-4">
            {selectedBook.volumeInfo.title}
          </h2>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <img
              src={
                selectedBook.volumeInfo.imageLinks?.thumbnail ||
                "/api/placeholder/200/300"
              }
              alt={selectedBook.volumeInfo.title}
              className="w-48 h-auto object-cover rounded shadow-md"
            />
            <div className="flex-grow">
              <p className="text-gray-700">
                {selectedBook.volumeInfo.description || "No description available."}
              </p>
              <div className="mt-4">
                <p>
                  <strong>Author(s):</strong>{" "}
                  {selectedBook.volumeInfo.authors?.join(", ") || "Unknown"}
                </p>
                <p>
                  <strong>Published:</strong>{" "}
                  {selectedBook.volumeInfo.publishedDate || "Unknown"}
                </p>
                <p>
                  <strong>Pages:</strong>{" "}
                  {selectedBook.volumeInfo.pageCount || "Unknown"}
                </p>
                <p>
                  <strong>Categories:</strong>{" "}
                  {selectedBook.volumeInfo.categories?.join(", ") || "Unknown"}
                </p>
                <p>
                  <strong>Rating:</strong>{" "}
                  {selectedBook.volumeInfo.averageRating || "Not rated"} / 5
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Favorites Section */}
      {favorites.length > 0 && (
        <div className="p-4 border rounded bg-white shadow-sm mt-8">
          <h2 className="text-2xl font-bold mb-4">Favorites</h2>
          <ul className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {favorites.map((book, index) => (
              <li
                key={index}
                className="p-4 border rounded shadow-sm hover:shadow-md transition"
              >
                <img
                  src={
                    book.volumeInfo.imageLinks?.thumbnail ||
                    "/api/placeholder/200/300"
                  }
                  alt={book.volumeInfo.title}
                  className="w-full h-48 object-cover rounded"
                />
                <h3 className="text-lg font-bold mt-4">
                  {book.volumeInfo.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {book.volumeInfo.authors?.join(", ") || "Unknown Author"}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default AddBookPage;
