import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { BlogPost } from '../types/types';
import { fetchBlogPost } from '../api/blogPosts';
import { Spinner } from '@material-tailwind/react';


const BlogPostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: post, error, isLoading } = useQuery<BlogPost, Error>({
    queryKey: ['blogPost', id],
    queryFn: () => fetchBlogPost(id!),
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner className="h-12 w-12" color="blue" />
      </div>
    );
  }
  if (error) return <div>Error loading post</div>;

  return (
    <section className='p-4 m-5 lg:w-4/5  border shadow'>
      <div className="">
        <h2 className="text-2xl font-bold mb-2">{post?.title}</h2>
        <p>{post?.body}</p>
      </div>
    </section>
  );
};

export default BlogPostDetail;
