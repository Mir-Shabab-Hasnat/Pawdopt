

import Review from "@/components/Feedback";
import Hero from "@/components/Hero";

import CardCarousel from "@/components/PetCarousel";


export default function Home() {
  return (
    <div className="flex overflow-hidden flex-col items-center px-16 pt-44 pb-96 bg-white max-md:px-5 max-md:py-24">
      <div className="w-full max-w-[1139px] max-md:max-w-full">
        
        <Hero />
        <CardCarousel />
        <Review />
      </div>
    </div>
  );
}
