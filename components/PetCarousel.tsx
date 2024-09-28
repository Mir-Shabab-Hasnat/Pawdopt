"use client";

import { useRef } from "react";
import Link from "next/link";
import PetCategory from "./PetCategoryCard";

const petCategories = [
  {
    name: "Cats",
    color: "bg-green-200 transition-colors duration-300 hover:bg-green-400",
    link: "/cats",
  },
  {
    name: "Dogs",
    color: "bg-amber-200 transition-colors duration-300 hover:bg-amber-400",
    link: "/dogs",
  },
];

const CardCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleDrag = (event: React.MouseEvent) => {
    const carousel = carouselRef.current;
    if (carousel) {
      const mouseX = event.clientX;
      carousel.scrollLeft += mouseX / 10; // Adjust the scroll speed here
    }
  };

  return (
    <div
      id="adopt"
      className="flex items-center justify-center overflow-x-scroll scrollbar-hide"
      ref={carouselRef}
      onMouseMove={handleDrag}
    >
      {petCategories.map((category, index) => (
        <Link
          href={category.link}
          key={index}
          passHref
          className={`flex flex-col w-[33%] max-md:ml-0 max-md:w-full px-2`}
        >
          <PetCategory
            key={index}
            name={category.name}
            color={category.color}
          />
        </Link>
      ))}
    </div>
  );
};

export default CardCarousel;
