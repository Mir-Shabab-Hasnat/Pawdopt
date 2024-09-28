"use client"

import { useRef } from 'react';

const cards = [
  {
    title: "Reptiles",
    description: "Adopt a scaly and fascinating reptile.",
    icon: "🐍", // You can replace these with SVGs or images
    color: "bg-green-300", // Card color
  },
  {
    title: "Birds",
    description: "Adopt a beautiful and intelligent avian friend.",
    icon: "🐦",
    color: "bg-pink-300", // Card color
  },
  {
    title: "Cats",
    description: "Adopt a cuddly and independent feline.",
    icon: "🐱",
    color: "bg-yellow-300", // Card color
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
    <div className="flex overflow-x-scroll scrollbar-hide" ref={carouselRef} onMouseMove={handleDrag}>
      {cards.map((card, index) => (
        <div 
          key={index} 
          className={`min-w-[200px] max-w-[300px] ${card.color} m-4 p-4 rounded-lg shadow-lg flex flex-col items-center`}
        >
          <div className="text-5xl">{card.icon}</div>
          <h2 className="text-xl font-bold">{card.title}</h2>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CardCarousel;
