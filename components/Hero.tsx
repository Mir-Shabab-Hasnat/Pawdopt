import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";

const Hero = () => {
    return (
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto text-black max-md:mt-10 max-md:max-w-full">
              <h1 className="text-8xl font-black max-md:max-w-full max-md:text-4xl">
                Just One <div className="text-rose-500">Paw Away</div> 
              </h1>
              <p className="mt-9 mr-9 text-base max-md:mr-2.5 max-md:max-w-full">
                Find Your Purrfect Match – Adopt Love, One Paw at a Time!
              </p>
              <MagicButton title="Our Services" icon={<FaLocationArrow />} position="right"/>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow justify-center px-16 py-16 w-full  bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[51px] max-md:px-5 max-md:mt-10 max-md:max-w-full max-sm:pt-5 max-sm:pb-7 max-sm:mb-0">
          <img
            loading="lazy"
            src="hero2.png"
            alt="Adorable pet ready for adoption"
            className="object-contain w-full aspect-[2.16] max-md:max-w-full"
          />
        </div>
      </div>
        </div>
      );
    }
export default Hero