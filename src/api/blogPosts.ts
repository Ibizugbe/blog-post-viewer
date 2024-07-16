import axios from 'axios';
import { BlogPost } from '../types/types';

export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');  
  return data;
};

export const fetchBlogPost = async (id: string): Promise<BlogPost> => {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return data;
};

