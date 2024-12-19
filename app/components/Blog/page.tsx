import Image from "next/image";
import React from "react";
import IconVideo from "@/public/video-vertical.png";
interface BlogCardProps {
  title: string;
  description: string;
  category: string;
  date: string;
  views: string;
  image: string;
  priority: number;
}

const BlogCard: React.FC<BlogCardProps> = (blog) => {
  return (
    <div
      className={`${
        blog.priority <= 2 ? "h-[18rem] mt-4" : "h-[10rem] mt-8 "
      } card card-side bg-base-100 shadow-md`}
    >
      <figure
        className={`${
          blog.priority <= 2 ? "h-[18rem] w-[15rem]" : "w-[10rem] h-[10rem]"
        }  flex items-center justify-center`}
      >
        <img
          className="object-cover w-full h-full"
          src={blog.image}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{blog.title}</h2>
        <p>
          {blog.description.length > 90
            ? `${blog.description.slice(0, 90)}...`
            : blog.description}
        </p>
        <div className="flex justify-between text-xs text-gray-400">
          <span>{blog.date}</span>
          <span>อ่าน {blog.views} ครั้ง</span>
        </div>
      </div>
    </div>
  );
};

const Blog: React.FC<{ blogs: BlogCardProps[] }> = ({ blogs }) => {
  const priorityBlogs = blogs.filter((blog) => blog.priority <= 2);
  const normalBlogs = blogs.filter((blog) => blog.priority > 2);

  return (
    <div className="container my-8 py-10 mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Image src={IconVideo} alt="icon" className="mr-2" />
          <h1 className="text-lg font-semibold">บทความล่าสุด</h1>
        </div>

        <button className="btn btn-outline btn-success rounded-full">
          ดูทั้งหมด
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex flex-col">
          {priorityBlogs.map((blog, index) => (
            <BlogCard key={`priority-${index}`} {...blog} />
          ))}
        </div>

        <div className="flex flex-col">
          {normalBlogs.map((blog, index) => (
            <BlogCard key={`normal-${index}`} {...blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
