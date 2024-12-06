import React, { useState } from "react";
import './BookBorrow.css'; // Import the CSS

const BookBorrow = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    console.log("Sidebar toggled"); // Log to confirm it gets triggered
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div>
      {/* Navigation bar */}
      <div className="navbar">
        <button className="link-button">Home</button>
        <button className="link-button">Books</button>
        <button className="link-button">Add Book</button>
        <button className="link-button">Assistance</button>
        <button className="link-button">Members</button>
        <button className="link-button" onClick={toggleSidebar}>BookBorrow</button>
      </div>

      {/* Conditionally render the sidebar */}
      {isSidebarVisible && (
        <div className="sidebar">
          <h2>Borrow a Book</h2>
          <p>Choose a book to borrow</p>
        </div>
      )}

      {/* Main content */}
      <div className="content">
        <h1>Welcome to LibraTech</h1>
      </div>
    </div>
  );
};

export default BookBorrow;
