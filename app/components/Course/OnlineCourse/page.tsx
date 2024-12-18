"use client";
import React, { useState } from "react";
import IconVideo from "@/public/video-vertical.png";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
interface CarouselCardProps {
  title: string;
  description: string;
  image: string;
}

const CarouselCard: React.FC<CarouselCardProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden my-4">
      <img src={image} alt={title} className="w-full h-96 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const OnlineCourse: React.FC<{ cards: CarouselCardProps[] }> = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative mt-4 ">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Image src={IconVideo} alt="icon" className="mr-2" />
          <h1 className="text-lg font-semibold">คอร์สออนไลน์</h1>
        </div>

        <button className="text-blue-500 hover:underline">ดูทั้งหมด</button>
      </div>
      <div className="flex space-x-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide mt-4 justify-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-64 transition-transform duration-300 ${
              index === currentIndex ? "scale-105" : "scale-100"
            }`}
          >
            <CarouselCard {...card} />
          </div>
        ))}
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4">
        <button
          onClick={handlePrev}
          className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200 transition-colors"
        >
          <ChevronLeft className="h-6 w-6 text-gray-600" />
        </button>
        <button
          onClick={handleNext}
          className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200 transition-colors"
        >
          <ChevronRight className="h-6 w-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default OnlineCourse;
