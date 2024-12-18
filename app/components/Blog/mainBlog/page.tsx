import Image from "next/image";
import React from "react";

interface BlogCardProps {
  title: string;
  description: string;
  category: string;
  date: string;
  views: string;
}

const Blog: React.FC<{ blogs: BlogCardProps[] }> = ({ blogs }) => {
  return (
    <div className="py-10 px-5 w-1/2">
      <h2 className="text-2xl font-bold mb-6">บทความและข่าวสารล่าสุด</h2>
      <div className="">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className={`card lg:card-side bg-base-100 shadow-xl ${
              index % 2 !== 0 ? "" : ""
            }`}
          >
            <figure className="w-full lg:w-1/3 h-64 lg:h-auto">
              <Image
                src="/my-course/blue.png"
                alt="blog image"
                width={300}
                height={500}
                className="object-cover w-full h-full"
              />
            </figure>

            <div className="card-body flex flex-col justify-between">
              <div>
                <h2 className="card-title text-lg font-semibold">
                  {blog.title}
                </h2>
                <p className="text-gray-600">{blog.description}</p>
              </div>

              <div>
                <div className="card-actions justify-end mb-2">
                  <button className="btn btn-primary">Read More</button>
                </div>
                <div className="flex justify-between text-xs text-gray-400">
                  <span>{blog.date}</span>
                  <span>อ่าน {blog.views} ครั้ง</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
