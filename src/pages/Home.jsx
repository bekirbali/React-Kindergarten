import React from "react";

import { blogs } from "../utils/data";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const clickHandler = (blog) => {
    console.log(blog.id);
    navigate(`/blogs/${blog.id}`, { state: { id: blog } });
  };
  return (
    <div>
      {blogs.map((blog) => {
        return (
          <div key={blog.id}>
            <h2 className="font-bold text-2xl">{blog.baslik}</h2>
            <p>{blog.icerik}</p>
            <p>
              <span>Yazar:</span> {blog.yazar}
            </p>
            <p>
              <span>Yayın Tarihi:</span> {blog.yayin_tarihi}
            </p>
            <p>
              <span>Kategori:</span> {blog.kategori}
            </p>
            <button
              onClick={() => clickHandler(blog)}
              className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Devamını oku
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
