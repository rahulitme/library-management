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
        <a href="javascript:void(0)">Home</a>
        <a href="javascript:void(0)">Books</a>
        <a href="javascript:void(0)">Add Book</a>
        <a href="javascript:void(0)">Assistance</a>
        <a href="javascript:void(0)">Members</a>
        <a href="javascript:void(0)" onClick={toggleSidebar}>BookBorrow</a>
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
