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
    <div className="card bg-base-100 w-96 shadow-xl mx-4">
      <div className="card-body">
        <div className="flex sm:flex-row items-center">
          <Image
            src={image}
            alt="image"
            width={40}
            height={40}
            className="mx-4"
          />
          <h2 className="card-title">{title}</h2>
        </div>

        <p className="mt-8">{description}</p>

        <div className="card-actions justify-end">
          <button className="btn" style={{ backgroundColor: "#00665E" }}>
            <MoveRight className="text-white" />
          </button>
        </div>
      </div>

      {/* Progress Bar ด้านล่าง */}
    </div>
  );
};

const CategoryCourse: React.FC<{ cards: CardProps[] }> = ({ cards }) => {
  return (
    <>
      <div className="flex justify-between mt-4">
        <div className="flex items-center">
          <Image src={IconVideo} alt="icon" />
          <h1 className="font-bold">เลือกเรียนตามหัวข้อที่สนใจ</h1>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        {cards.map((card) => (
          <Card {...card} key={card.title} />
        ))}
      </div>
    </>
  );
};

export default CategoryCourse;
