import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useBlogPosts } from '../hooks/useBlogPosts';

const BlogPostList: React.FC = () => {
  const { data: posts, error, isLoading } = useBlogPosts();
  const [searchQuery, setSearchQuery] = useState('');

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading posts</div>;

  const filteredPosts = posts?.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
      <input
        type="text"
        placeholder="Search posts..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        className="mb-4 p-2 border rounded"
      />
      {filteredPosts && filteredPosts.length > 0 ? (
        <ul>
          {filteredPosts.map(post => (
            <li key={post.id} className="mb-2">
              <Link to={`/posts/${post.id}`} className="text-left w-full">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div>No records found</div>
      )}
    </div>
  );
};

export default BlogPostList;
