import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { stories } from "@/data";

const Review = () => {
  return (
    <div className="pt-20" id="stories">
      <h1 className="font-bold text-4xl md:text-5xl text-center">
        Some of our <span className="text-rose-500">Paw-some Stories</span>
      </h1>
      <div className="flex flex-col items-center py-8 md:pt-8">
        <div className="h-[25vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden">
          <InfiniteMovingCards items={stories} direction="right" speed="slow" />
        </div>
      </div>
    </div>
  );
};

export default Review;
