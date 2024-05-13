import React from "react";
import { useLocation } from "react-router-dom";

const Blogs = () => {
  const blog = useLocation();

  return (
    <div>
      <h1>{blog.state.id.baslik}</h1>
      <p>{blog.state.id.icerik}</p>

      <p>
        <strong>Yazar:</strong> {blog.state.id.yazar}
      </p>
    </div>
  );
};

export default Blogs;
