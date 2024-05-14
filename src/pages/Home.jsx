import React from "react";

import { blogs } from "../utils/data";
import { useNavigate } from "react-router-dom";
import BlogCards from "../components/BlogCards";

const Home = () => {
  const navigate = useNavigate();
  const clickHandler = (blog) => {
    console.log(blog.id);
    navigate(`/blogs/${blog.id}`, { state: { id: blog } });
  };
  return (
    <div className="flex justify-center mt-10 gap-4 my-10 flex-wrap">
      {blogs.map((blog) => {
        return (
          <div key={blog.id}>
            <BlogCards blog={blog} clickHandler={clickHandler} />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
