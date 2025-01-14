import React, {useEffect, useState} from 'react';
import { useBlogPosts } from '../hooks/useBlogPosts';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import CustomInput from './CustomInput';
import { BentoGrid, BentoGridItem } from '../ui/bento-grid';
import { motion } from 'framer-motion';
import LoadingSpinner from "./LoadingSpinner"
const BlogPostList: React.FC = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useBlogPosts();
  const [searchQuery, setSearchQuery] = useState('');
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  const placeholders = [
    "Search for posts...",
    "Find your favorite blog...",
    "Discover new posts...",
    "Type to search...",
    "Look up a blog post...",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner className="text-gray-900/50" />
      </div>
    );
  }

  if (error) return <div>Error loading posts</div>;

  const filteredPosts = data?.pages.flatMap(page =>
    page.filter(post =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Blog Posts</h1>
      <form onSubmit={onSubmit} className="mb-4 flex justify-center">
        <CustomInput
          placeholders={placeholders}
          onChange={handleChange}
        />
      </form>
      <section>
        {filteredPosts && filteredPosts.length > 0 ? (
            <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
              {filteredPosts.map((post, i) => (
                <BentoGridItem
                  key={post.id}
                  title={
                    <Link to={`/posts/${post.id}`} className="text-left w-full">
                      {post.title}
                    </Link>
                  }
                  header={<Skeleton />}
                  className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                />
              ))}
            </BentoGrid>
          ) : (
          <div>No records found</div>
        )}
      </section>
      <div ref={ref} />
    </div>
  );
};

const Skeleton = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  const arr = new Array(6).fill(0);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      {arr.map((_, i) => (
        <motion.div
          key={"skeleton-two" + i}
          variants={variants}
          style={{
            maxWidth: Math.random() * (100 - 40) + 40 + "%",
          }}
          className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-neutral-100 dark:bg-black w-full h-4"
        ></motion.div>
      ))}
    </motion.div>
  );
};

export default BlogPostList;
