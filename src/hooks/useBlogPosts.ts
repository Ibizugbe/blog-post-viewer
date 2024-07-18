import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchBlogPosts } from '../api/blogPosts';

export const useBlogPosts = () => {
  return useInfiniteQuery({
    queryKey: ['blogPosts'],
    queryFn: ({ pageParam = 1 }) => fetchBlogPosts(pageParam, 10),
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < 10) {
        return undefined;
      }
      return allPages.length + 1;
    },
    initialPageParam: 1,
  });
};
