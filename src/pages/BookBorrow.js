import { useState } from "react";
import "./BookBorrow.css";

const BookBorrow = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Borrow Your Favorite Books</h1>
        <p className="description">
          Explore a vast collection of books and borrow them with ease.
        </p>
        <button className="toggle-btn" onClick={toggleSidebar}>
          {isSidebarVisible ? "Hide Sidebar" : "Show Sidebar"}
        </button>
      </div>

      {isSidebarVisible && (
        <div className="sidebar">
          <h2>Sidebar Menu</h2>
          <ul>
            <li>Available Books</li>
            <li>My Borrowed Books</li>
            <li>Return a Book</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default BookBorrow;
