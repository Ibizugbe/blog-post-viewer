import React from 'react';
import { Link } from 'react-router-dom';
import { useBlogPosts } from '../hooks/useBlogPosts';

const BlogPostList: React.FC = () => {
  const { data: posts, error, isLoading } = useBlogPosts();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading posts</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
      <ul>
        {posts?.map(post => (
          <li key={post.id} className="mb-2">
            <Link to={`/posts/${post.id}`} className="text-left w-full">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPostList;
