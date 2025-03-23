import React from "react";
import "./BookPages.css";

const BorrowedBooks = () => {
  const borrowedBooks = [
    { title: "The Catcher in the Rye", author: "J.D. Salinger", dueDate: "2024-12-15" },
    { title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", dueDate: "2024-12-22" },
  ];

  return (
    <div className="book-page">
      <h2 className="page-title">📂 My Borrowed Books</h2>
      <ul className="book-list">
        {borrowedBooks.map((book, index) => (
          <li key={index} className="book-item">
            <h3>{book.title}</h3>
            <p>by {book.author}</p>
            <p>Due Date: {book.dueDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BorrowedBooks;
