"use client"

import { useRef } from 'react';
import PetCategory from './PetCategoryCard';

const petCategories = [
  { name: 'Cats', color: 'bg-green-200 transition-colors duration-300 hover:bg-green-400'},
  { name: 'Dogs', color: 'bg-amber-200 transition-colors duration-300 hover:bg-amber-400'},
  { name: 'Other', color: 'bg-rose-200 transition-colors duration-300 hover:bg-rose-400'}
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
    <div className="flex overflow-x-scroll scrollbar-hide" ref={carouselRef} onMouseMove={handleDrag}>
      {petCategories.map((category, index) => (
            <PetCategory key={index} name={category.name} color={category.color} />
          ))}
    </div>
  );
};

export default CardCarousel;
