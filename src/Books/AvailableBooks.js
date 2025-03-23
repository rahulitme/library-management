import React from "react";
import "./BookPages.css";

const AvailableBooks = () => {
  const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "1984", author: "George Orwell" },
    { title: "Pride and Prejudice", author: "Jane Austen" },
    { title: "Moby-Dick", author: "Herman Melville" },
  ];

  return (
    <div className="book-page">
      <h2 className="page-title">📚 Available Books</h2>
      <ul className="book-list">
        {books.map((book, index) => (
          <li key={index} className="book-item">
            <h3>{book.title}</h3>
            <p>by {book.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvailableBooks;
