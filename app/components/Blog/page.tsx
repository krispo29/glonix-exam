import React from "react";

interface ArticleCardProps {
  title: string;
  description: string;
  category: string;
  date: string;
  views: string;
}

const Blog: React.FC<{ articles: ArticleCardProps[] }> = ({ articles }) => {
  return (
    <div className="container mx-auto py-10 px-5">
      <h2 className="text-2xl font-bold mb-6">บทความและข่าวสารล่าสุด</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div
            key={index}
            className="card bg-white shadow-md p-4 rounded-lg hover:shadow-lg transition-all"
          >
            <span className="badge badge-outline mb-2">{article.category}</span>
            <h3 className="text-lg font-semibold">{article.title}</h3>
            <p className="text-gray-600 mt-2 text-sm">{article.description}</p>
            <div className="flex justify-between text-xs text-gray-400 mt-4">
              <span>{article.date}</span>
              <span>อ่าน {article.views} ครั้ง</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
