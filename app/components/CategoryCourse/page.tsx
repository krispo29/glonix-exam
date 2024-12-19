import React from "react";
import IconVideo from "@/public/video-vertical.png";
import Image from "next/image";
import { MoveRight } from "lucide-react";

interface CardProps {
  image: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, image, description }) => {
  return (
    <div className="bg-base-100 shadow-xl">
      <div className="p-6">
        <div className="flex items-center">
          <Image
            src={image}
            alt="image"
            width={40}
            height={40}
            className="mr-4"
          />
          <h2 className="text-xl font-semibold line-clamp-2">{title}</h2>
        </div>

        <p className="mt-6 line-clamp-3">{description}</p>

        <div className="flex justify-end mt-4">
          <button
            className="p-2 rounded-lg"
            style={{ backgroundColor: "#00665E" }}
          >
            <MoveRight className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

const CategoryCourse: React.FC<{ cards: CardProps[] }> = ({ cards }) => {
  return (
    <div className="px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex items-center space-x-2 mb-6">
          <Image src={IconVideo} alt="icon" className="w-6 h-6 md:w-8 md:h-8" />
          <h1 className="text-lg md:text-xl font-bold">
            เลือกเรียนตามหัวข้อที่สนใจ
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cards.map((card) => (
            <Card {...card} key={card.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryCourse;
