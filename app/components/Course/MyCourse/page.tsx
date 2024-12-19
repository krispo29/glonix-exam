"use client";
import React, { useState } from "react";
import IconVideo from "@/public/video-vertical.png";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselCardProps {
  title: string;
  description: string;
  image: string;
  process: number;
}

const CarouselCard: React.FC<CarouselCardProps> = ({
  title,
  description,
  image,
  process,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden relative h-full flex flex-col">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute top-2 left-0 w-full">
          <h3 className="text-white text-xl font-bold px-2 line-clamp-2">
            {title}
          </h3>
        </div>
      </div>

      <div className="p-4 bg-white flex-grow">
        <p className="text-gray-600 line-clamp-2">{description}</p>
      </div>

      <div className="mt-auto p-4 pt-0">
        <p className="mb-2">เรียนไปแล้ว {process}%</p>
        <progress
          className="progress progress-success w-full"
          value={process}
          max="100"
        ></progress>
      </div>
    </div>
  );
};

const MyCourse: React.FC<{ cards: CarouselCardProps[] }> = ({ cards }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = {
    mobile: 1,
    tablet: 2,
    desktop: 4,
  };

  const maxPages = Math.ceil(cards.length / cardsPerPage.desktop);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? maxPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === maxPages - 1 ? 0 : prev + 1));
  };

  const visibleCards = cards.slice(
    currentPage * cardsPerPage.desktop,
    (currentPage + 1) * cardsPerPage.desktop
  );

  return (
    <div className="container mx-auto relative px-4 mt-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Image src={IconVideo} alt="icon" className="mr-2" />
          <h1 className="text-lg font-semibold">คอร์สของฉัน</h1>
        </div>
        <button className="btn btn-outline btn-success rounded-full">
          ดูทั้งหมด
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {visibleCards.map((card, index) => (
          <div key={index} className="transition-all duration-300">
            <CarouselCard {...card} />
          </div>
        ))}
      </div>

      {cards.length > cardsPerPage.desktop && (
        <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 pointer-events-none">
          <button
            onClick={handlePrev}
            className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200 transition-colors pointer-events-auto"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200 transition-colors pointer-events-auto"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      )}
    </div>
  );
};

export default MyCourse;
