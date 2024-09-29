import { AdoptionForm } from '@/components/Form';
import React from 'react';

const page = () => {
  return (
    <main className="flex overflow-hidden flex-col justify-center items-center px-16 py-44 bg-white max-md:px-5 max-md:py-24">
      <section className="w-full max-w-[1140px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
              <AdoptionForm />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="bg-white rounded-xl border-orange-400 shadow-lg p-10 h-full">
              <div className="max-w-3xl text-center">
                <h1 className="text-5xl font-bold text-orange-400 mb-6">
                  Our Adoption Process
                </h1>
                <img
                  src="cool.png" // Replace with the actual image path
                  alt="Adoption Process"
                  className="w-full h-auto rounded-lg mb-8" // Responsive image with rounded corners
                />
                <p className="text-lg leading-relaxed mb-4 text-gray-700">
                  At Pawdopt, we are a local organization dedicated to finding loving homes for animals in need. 
                  Our adoption process is straightforward and designed to ensure a good match between pets and their new families.
                </p>
                <h2 className="text-2xl font-semibold text-orange-400 mb-4">
                  Steps to Adopt
                </h2>
                <ul className="list-disc list-inside mb-4 text-left text-lg leading-relaxed text-gray-700">
                  <li>Submit an adoption form.</li>
                  <li>Receive an email confirmation indicating that your application has been received.</li>
                  <li>Our team will evaluate your application.</li>
                  <li>We will get back to you within one week.</li>
                  <li>If approved, you can arrange a meet-and-greet with your potential pet!</li>
                </ul>
                <p className="text-lg leading-relaxed mb-4 text-gray-700">
                  If you have any questions or need further assistance, feel free to reach out. 
                  Your journey to adopting a new furry friend begins with us!
                </p>
                <h2 className="text-2xl font-semibold text-orange-400 mb-4">
                  Why Choose Adoption?
                </h2>
                <p className="text-lg leading-relaxed mb-4 text-gray-700">
                  Adopting a pet not only gives a loving animal a second chance but also enriches your life with 
                  companionship and joy. All of our animals are evaluated for health and temperament, ensuring a 
                  good fit for your family.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  Thank you for considering adoption! Together, we can make a difference in the lives of 
                  animals in our community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default page;
