import React from "react";
import HeroLorem from "@/public/hero-section/Lorem.png";
import Image from "next/image";
import { Search } from "lucide-react";

interface CardProps {
  title: string;
  description: string;
  author: string;
  imageAuthor: string;
  backgroundColor: string;
  jobPosition: string;
  height: string;
  width: string;
}
const Card: React.FC<CardProps & { index: number }> = ({
  title,
  description,
  jobPosition,
  author,
  imageAuthor,
  backgroundColor,
  height,
  width,
  index,
}) => {
  return (
    <div
      className="bg-white rounded-2xl shadow-md overflow-hidden my-4 p-4"
      style={{
        backgroundColor,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height,
        width,
      }}
    >
      <div className="flex flex-col justify-between h-full p-4">
        <div className="flex-1">
          <h2
            className={`text-2xl ${
              index === 0 ? "text-white" : "text-black -rotate-90"
            } font-bold mb-2`}
          >
            {title}
          </h2>
          <p className={`text-lg ${index === 0 ? "text-white" : "text-black"}`}>
            {description}
          </p>
        </div>
        <div className="flex items-center mt-4 self-start">
          <img
            src={imageAuthor}
            className="w-8 h-8 rounded-full mr-2"
            alt={author}
          />
          <div>
            <p className="text-sm text-white">{author}</p>
            <p className="text-sm text-white">{jobPosition}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const HeroSection: React.FC<{ cards: CardProps[] }> = ({ cards }) => {
  console.dir(cards, null);
  return (
    <div className="hero  min-h-56 mt-10">
      <div className="hero-content flex-row ">
        <div>
          <p className="text-[#00665E] font-semibold">
            Lorem Ipsum is simply dummy .
          </p>
          <h1 className="text-5xl font-bold">
            <Image src={HeroLorem} alt="loremHero" />
          </h1>
          <div className="py-6">
            <div className="flex items-center border border-gray-300 rounded-lg px-2 py-1">
              <Search className="text-gray-400 mr-2" size={20} />
              <input
                type="text"
                className="flex-grow outline-none"
                placeholder="ค้นหาหลักสูตร"
              />
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
                ค้นหา
              </button>
            </div>
          </div>
        </div>
        {cards.map((card, index) => (
          <Card {...card} index={index} key={card.title} />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
