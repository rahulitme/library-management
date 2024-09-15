import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Github, Linkedin, Twitter, ChevronDown } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex items-center justify-between">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/books" className="hover:text-gray-300">
              Books
            </Link>
          </li>
          <li>
            <Link to="/add-book" className="hover:text-gray-300">
              Add Book
            </Link>
          </li>
          <li>
            <button 
              onClick={toggleMenu} 
              className="flex items-center space-x-1 hover:text-gray-300 focus:outline-none"
              aria-haspopup="true"
              aria-expanded={isMenuOpen}
            >
              <span>Members</span>
              <ChevronDown size={16} className={`transform transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
            </button>
          </li>
        </ul>

        {/* Full menu toggled when clicking "Members" */}
        {isMenuOpen && (
          <div className="mt-4">
            <ul className="flex space-x-4">
              <li>
                <Link to="https://linkedin.com" className="hover:text-gray-300 flex items-center">
                  <Linkedin size={16} className="mr-2" />
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link to="https://github.com" className="hover:text-gray-300 flex items-center">
                  <Github size={16} className="mr-2" />
                  GitHub
                </Link>
              </li>
              <li>
                <Link to="https://twitter.com" className="hover:text-gray-300 flex items-center">
                  <Twitter size={16} className="mr-2" />
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
