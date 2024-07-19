import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { BlogPost } from '../types/types';
import { fetchBlogPost } from '../api/blogPosts';
import LoadingSpinner from "./LoadingSpinner"



const BlogPostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: post, error, isLoading } = useQuery<BlogPost, Error>({
    queryKey: ['blogPost', id],
    queryFn: () => fetchBlogPost(id!),
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner className="text-gray-900/50" />
      </div>
    );
  }
  
  if (error) return <div>Error loading post</div>;

  return (
    <article className='p-4 m-5 lg:w-4/5  border shadow'>
      <div className="">
        <h2 className="text-2xl font-bold mb-2">{post?.title}</h2>
        <p>{post?.body}</p>
      </div>
    </article>
  );
};

export default BlogPostDetail;
