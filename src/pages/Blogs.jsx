import React from "react";
import { useLocation } from "react-router-dom";
import avatar from "../assets/avatar.jpg";
// import kinder from "../../public/img/kinder1.jpg";

const Blogs = () => {
  const blog = useLocation();

  console.log(blog);

  return (
    <div className="flex flex-col w-[50%] mx-auto gap-4 mb-10">
      <h1 className="text-center text-[#333] text-[43px]">
        {blog.state.id.baslik}
      </h1>
      <div className="flex gap-4 items-center w-full">
        <img
          src={avatar}
          alt="esra"
          className="w-[50px] rounded-full object-cover"
        />
        <p>Esra Öğretmen</p>
      </div>
      <div className="max-h-[400px] overflow-hidden">
        <img src={blog.state.id.picture} alt="" className="h-full" />
      </div>
      <h2 className="font-semibold text-xl text-[#333] w-full text-left">
        Malzemeler
      </h2>
      <p className="text-left">{blog.state.id.malzeme.join(", ")}</p>
      <h2 className="font-semibold text-xl text-[#333] w-full text-left">
        Uygulama
      </h2>

      <div>
        {blog.state.id.uygulama.map((item, index) => (
          <ul key={index} className="list-disc list-inside">
            <li>{item}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
