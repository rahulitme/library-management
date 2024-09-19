import React from 'react';
import { Link } from 'react-router-dom';

const books = [
  { id: 1, title: '1984', author: 'George Orwell' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
];

function BooksPage({ setSelectedBook }) {
  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  return (
    <div>
      <h1>Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`} onClick={() => handleBookClick(book)}>
              {book.title} by {book.author}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BooksPage;
