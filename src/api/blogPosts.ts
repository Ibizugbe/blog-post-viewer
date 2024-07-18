import axios from 'axios';
import { BlogPost } from '../types/types';

export const fetchBlogPosts = async (page: number = 1, limit: number = 10): Promise<BlogPost[]> => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts', {
    params: { _page: page, _limit: limit }
  });
  return data;
};

export const fetchBlogPost = async (id: string): Promise<BlogPost> => {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return data;
};
