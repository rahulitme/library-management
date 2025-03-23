import React, { useState } from "react";
import "./BookPages.css";

const ReturnBook = () => {
  const [message, setMessage] = useState("");

  const handleReturn = () => {
    setMessage("✅ Book returned successfully!");
  };

  return (
    <div className="book-page">
      <h2 className="page-title">🔄 Return a Book</h2>
      <p>Enter the book title to return:</p>
      <input className="input-box" type="text" placeholder="Book Title" />
      <button className="return-btn" onClick={handleReturn}>
        Return Book
      </button>
      {message && <p className="success-message">{message}</p>}
    </div>
  );
};

export default ReturnBook;
