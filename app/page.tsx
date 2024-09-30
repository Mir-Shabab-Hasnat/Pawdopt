
"use client"
import Review from "@/components/Feedback";
import Footer from "@/components/Footer";
import Game from "@/components/Game";

import Hero from "@/components/Hero";

import CardCarousel from "@/components/PetCarousel";
import { Metadata } from "next";


export default function Home() {
  return (
    <div className="flex overflow-hidden flex-col items-center px-16 pt-40 pb-8 bg-white max-md:px-5 max-md:py-24">
      <div className="w-full max-w-[1139px] max-md:max-w-full">
        
        <Hero />
        <CardCarousel />
        <Review />
        <Footer />
        <Game />
      </div>
    </div>
  );
}

export const dynamic = "force-dynamic";


