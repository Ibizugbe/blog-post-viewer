import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BlogPostList from './components/BlogPostList';
import BlogPostDetail from './components/BlogPostDetail';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <div className="container mx-auto">
      <header>
        <Navbar />
      </ header>
      <main>
        <Routes>
          <section>
            <Route path="/" element={<BlogPostList />} />
          </section>
          <section>
            <Route path="/posts/:id" element={<BlogPostDetail />} />
          </section>
        </Routes>
      </main>
    </div>
  );
};

export default App;
