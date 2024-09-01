import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import BooksPage from './pages/BooksPage';
import AddBookPage from './pages/AddBookPage';
import MembersPage from './pages/MembersPage';
import './styles/index.css';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/add-book" element={<AddBookPage />} />
          <Route path="/members" element={<MembersPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
