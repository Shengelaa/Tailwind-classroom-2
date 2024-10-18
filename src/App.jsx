import React, { useState, useEffect } from "react";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
        );

        const data = await response.json();
        setPosts((prevPosts) => [...prevPosts, ...data]);

        if (data.length === 0) setHasMore(false);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    fetchPosts();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.offsetHeight;
      const scrollTop = document.documentElement.scrollTop;

      if (
        windowHeight + scrollTop >= documentHeight - 100 &&
        hasMore &&
        !loading
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore, loading]);

  return (
    <>
      <h1 className='text-red'>Infinity Scroll</h1>

      <div>
        {posts.map((post) => (
          <div
            key={post.id}
            className='border border-gray-500 shadow-md bg-white my-11'>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
        {loading && <p>Loading...</p>}
      </div>
    </>
  );
};

export default App;
