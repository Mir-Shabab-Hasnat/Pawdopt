import React from "react";

const MagicButton = ({
    title, icon, position, handleClick, otherClasses
}: {
    title: string; icon: React.ReactNode, position: string; handleClick?: () => void; otherClasses?: string
}) => {
  return (
    <div>
      <button onClick={handleClick} className="p-[3px] relative md:w-60 md:mt-10 mt-5">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="inline-flex h-full w-full items-center justify-center px-8 py-2 bg-white rounded-[6px]  relative group transition duration-200 text-black hover:text-white font-bold hover:bg-transparent">
          {position === "left" && icon}
          {title}
          {position === "right" && icon}
        </div>
      </button>
    </div>
  );
};

export default MagicButton;
