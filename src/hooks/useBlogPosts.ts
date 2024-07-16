import { useQuery } from '@tanstack/react-query';
import { fetchBlogPosts } from '../api/blogPosts';

export const useBlogPosts = () => {
  return useQuery({
    queryKey: ['blogPosts'],
    queryFn: fetchBlogPosts,
  });
};
