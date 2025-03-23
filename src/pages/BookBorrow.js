import { useState } from "react";
import "./BookBorrow.css";

const BookBorrow = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="book-borrow-container">
      <div className="card">
        <h1 className="title">📚 Borrow Your Favorite Books</h1>
        <p className="description">
          Discover a world of books and borrow them effortlessly. Your gateway to knowledge awaits!
        </p>
        <button className="toggle-btn" onClick={toggleSidebar}>
          {isSidebarVisible ? "Hide Sidebar" : "Show Sidebar"}
        </button>
      </div>

      {isSidebarVisible && (
        <div className="sidebar">
          <h2 className="sidebar-title">📖 Sidebar Menu</h2>
          <ul className="sidebar-menu">
            <li className="menu-item">📚 <a href="/available-books">Available Books</a></li>
            <li className="menu-item">📂 <a href="/borrowed-books">My Borrowed Books</a></li>
            <li className="menu-item">🔄 <a href="/return-book">Return a Book</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default BookBorrow;
