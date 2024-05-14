import React from "react";

const BlogCards = ({ clickHandler, blog }) => {
  //     <button
  //     onClick={() => clickHandler(blog)}
  //     className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
  //   >
  //     Devamını oku
  //   </button>
  return (
    <>
      {/* <div key={blog.id}>
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
      </div> */}
      <div className="relative flex w-80 flex-col justify-between rounded-xl bg-white bg-clip-border text-gray-700 shadow-md h-[400px]">
        <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 ">
          <img src={blog.picture} alt="" />
        </div>
        <div className="p-6">
          <h5 className="mb-2 h-[50px] block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {blog.baslik}
          </h5>
          <p className="block h-[50px] font-sans text-base font-light leading-relaxed text-inherit antialiased">
            {blog.kazanim}
          </p>
        </div>
        <div className="p-6 pt-0">
          <button
            onClick={() => clickHandler(blog)}
            className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Devamını oku
          </button>
        </div>
      </div>
    </>
  );
};

export default BlogCards;
