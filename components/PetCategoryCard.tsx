import React from 'react';

interface PetCategoryProps {
  name: string;
  color: string;
  
}

const PetCategory: React.FC<PetCategoryProps> = ({ name, color }) => {
  return (
    <article className={`flex flex-col w-[33%] max-md:ml-0 max-md:w-full px-2`}>
      <div className={`grow px-8 py-6 w-full ${color} rounded-2xl max-md:px-5 max-md:mt-4 max-md:max-w-full`}>
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
            <h2 className="mt-48 text-5xl text-center text-black max-md:mt-10 max-md:text-4xl">
              {name}
            </h2>
          </div>
          <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10">
              <img 
                src="cat-animal.png" 
                alt={`${name} icon 1`} 
                className="object-contain ml-5 w-16 aspect-[1.05] max-md:ml-2.5" 
              />
              <img 
                src="arrow-right.png" 
                alt={`${name} icon 2`} 
                className="object-contain mt-32 aspect-[1.26] w-[82px] max-md:mt-10" 
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PetCategory;