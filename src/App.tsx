import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BlogPostList from './components/BlogPostList';
import BlogPostDetail from './components/BlogPostDetail';
import Navbar from './components/Navbar';
import NotFoundPage from './components/NotFoundPage';

const App: React.FC = () => {
  return (
    <div className="container mx-auto">
      <header>
        <Navbar />
      </ header>
      <main>
        <Routes>
          <Route path="/" element={<BlogPostList />} />
          <Route path="/posts/:id" element={<BlogPostDetail />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
