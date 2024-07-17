import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BlogPostList from './components/BlogPostList';
import BlogPostDetail from './components/BlogPostDetail';
import { useTheme } from './context/ThemeContext';
import { BiSun, BiMoon } from 'react-icons/bi';

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`container mx-auto ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="flex justify-end p-4">
        <button
          onClick={toggleTheme}
          className="text-xl p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition duration-300"
        >
          {theme === 'light' ? <BiMoon /> : <BiSun />}
        </button>
      </div>
      <Routes>
        <Route path="/" element={<BlogPostList />} />
        <Route path="/posts/:id" element={<BlogPostDetail />} />
      </Routes>
    </div>
  );
};

export default App;
