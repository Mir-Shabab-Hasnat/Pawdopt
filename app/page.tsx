

import Hero from "@/components/Hero";
import { Navbar } from "@/components/NavBar";
import CardCarousel from "@/components/PetCarousel";


import Image from "next/image";

export default function Home() {
  return (
    <div className="flex overflow-hidden flex-col items-center px-16 pt-44 pb-96 bg-white max-md:px-5 max-md:py-24">
      <div className="w-full max-w-[1139px] max-md:max-w-full">
        <Navbar />
        <Hero />
        <CardCarousel />
      </div>
    </div>
  );
}
