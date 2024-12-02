import React from 'react';
import { useParams } from 'react-router-dom';

const books = [
  { id: 1, title: '1984', author: 'George Orwell' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
];

function BookDetails() {
  const { bookId } = useParams();
  const book = books.find((b) => b.id === parseInt(bookId));

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <p>Author: {book.author}</p>
    </div>
  );
}

export default BookDetails;
