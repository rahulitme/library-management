
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import BooksPage from './pages/BooksPage';
import AddBookPage from './pages/AddBookPage';
import MembersPage from './pages/MembersPage';
import AboutPage from './pages/AboutPage';

import ServicesPage from './pages/ServicesPage';
// import AIAssistant from './pages/AIAssistant';
import BookBorrow from './pages/BookBorrow';
import './styles/index.css';
import './styles/App.css';
import Chat from "./components/Chat";
import BorrowedBooks from './Books/BorrowedBooks';
import AvailableBooks from './Books/AvailableBooks';
import Contact from './pages/Contact';
import ReturnBook from './Books/ReturnBook';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="/home" element={<HomePage />} />

          <Route path="/books" element={<BooksPage />} />

          <Route path="/add-book" element={<AddBookPage />} />
          <Route path="/members" element={<MembersPage />} />
          <Route path="/Chat" element={<Chat />} />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/ServicesPage" element={<ServicesPage />} />
          <Route path="/BookBorrow" element={<BookBorrow />} />



          <Route path="/" element={<BookBorrow />} />
        <Route path="/available-books" element={<AvailableBooks />} />
        <Route path="/borrowed-books" element={<BorrowedBooks />} />
        <Route path="/return-book" element={<ReturnBook />} />
          <Route path="/Contact" element={<Contact/>} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
