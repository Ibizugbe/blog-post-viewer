import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext'; // Adjust path according to your setup
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
        Blog App
      </Link>
      <div className="flex items-center">
        <button onClick={toggleTheme} className="focus:outline-none">
          {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
