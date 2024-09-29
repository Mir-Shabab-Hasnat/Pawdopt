import React from "react";

const page = () => {
  return (
    <div className="flex overflow-hidden flex-col items-center px-16 pt-44 pb-8 bg-gradient-to-b from-purple-100 to-purple-300 max-md:px-5 max-md:py-24">
      <div className="bg-white rounded-xl border-orange-400 shadow-lg p-10">
        <div className="max-w-3xl text-center">
          <h1 className="text-5xl font-bold text-orange-400 mb-6">
            Our Mission
          </h1>
          <p className="text-lg leading-relaxed mb-4 text-gray-700">
            At Pawdopt, we believe that every animal deserves a loving home. Our mission is to provide a safe and nurturing environment for pets in need while promoting responsible pet ownership and adoption. We strive to connect animals with compassionate families and raise awareness about the importance of rescuing pets from shelters.
          </p>
          <p className="text-lg leading-relaxed mb-4 text-gray-700">
            We are dedicated to improving the lives of homeless animals by offering comprehensive support services, including adoption, fostering, and educational resources for prospective pet owners. Our team works tirelessly to ensure that every pet we rescue is given the chance to thrive in a forever home, filled with love and care.
          </p>
          <p className="text-lg leading-relaxed mb-4 text-gray-700">
            Pawdopt is not just about finding homes for pets; it’s about building a community. We engage with local organizations and volunteers to create a network of support for both pets and their owners. By fostering a sense of community, we aim to reduce the number of animals in shelters and promote a culture of kindness towards all living beings.
          </p>
          <p className="text-lg leading-relaxed mb-4 text-gray-700">
            Join us in our mission to create a world where every pet has a loving home. Together, we can make a difference in the lives of countless animals and the families that adopt them. At Pawdopt, we are committed to making a positive impact, one paw at a time.
          </p>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-orange-400 mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-lg text-gray-700">
              <li>Compassion: We treat all animals with kindness and respect.</li>
              <li>Community: We believe in the power of collaboration and support.</li>
              <li>Integrity: We uphold the highest standards in our practices.</li>
              <li>Education: We empower pet owners with knowledge and resources.</li>
              <li>Advocacy: We stand up for the rights of animals everywhere.</li>
            </ul>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-orange-400 mb-4">Get Involved</h2>
            <p className="text-lg leading-relaxed mb-4 text-gray-700">
              Whether you’re looking to adopt, volunteer, or support our mission in other ways, we welcome you to join us! Your involvement helps us create a brighter future for pets in need.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Visit our <a href="/get-involved" className="text-orange-400 underline">Get Involved</a> page for more information on how you can help make a difference.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
