"use client"

import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter()
  return (
    <main id="home" className="flex overflow-hidden flex-col items-center px-20 py-8 max-md:px-5 max-md:py-24">
      <header className="flex flex-col justify-center items-center px-20 py-16 w-full bg-gradient-to-r from-amber-300 to-orange-300 max-w-[1140px] rounded-[51px] max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          src="hero2.png"
          alt="Adoption service logo"
          className="object-contain max-w-full aspect-[2.16] w-[474px]"
        />
      </header>
      <section>
        <h1 className="mt-5 text-8xl font-black text-center text-black max-md:max-w-full max-md:text-4xl">
          Just One <span className="text-rose-500">Paw Away</span>
        </h1>
        <p className="mt-8 text-base text-center text-black max-md:max-w-full">
          Find Your Purrfect Match – Adopt Love, One Paw at a Time!
        </p>
      </section>
      <MagicButton handleClick={() => router.push("/adoption-form")} title="Our Services" icon={<FaLocationArrow />} position="right"/>
    </main>
  );
    }
export default Hero
