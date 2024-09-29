import React from 'react'

const AnimalCurelty = () => {
    return (
        <div className="flex overflow-hidden flex-col items-center px-16 pt-44 pb-8 bg-gradient-to-b from-rose-100 to-rose-300 max-md:px-5 max-md:py-24">
          <div className="bg-white rounded-xl border-orange-400 shadow-lg p-10">
            <div className="max-w-3xl text-center">
              <h1 className="text-5xl font-bold text-orange-400 mb-6">
                What Constitutes Animal Cruelty
              </h1>
              <img
                src="sad.jpg" // Replace with the actual image path
                alt="A dog in need"
                className="w-full h-auto rounded-lg mb-8" // Responsive image with rounded corners
              />
              <p className="text-lg leading-relaxed mb-4 text-gray-700">
                Animal cruelty encompasses a range of behaviors harmful to animals,
                including <span className="font-bold">neglect</span>, <span className="font-bold">physical abuse</span>, and <span className="font-bold">emotional mistreatment</span>. It is
                essential to recognize the various forms of animal cruelty to combat
                it effectively and promote the welfare of all animals.
              </p>
              <p className="text-lg leading-relaxed mb-4 text-gray-700">
                <span className="font-bold">Neglect</span> occurs when an animal's basic needs are not met,
                including food, water, shelter, and medical care. This can lead to
                severe health issues, suffering, and even death. It is crucial to
                report any signs of neglect to local authorities to ensure the
                safety of the animal.
              </p>
              <p className="text-lg leading-relaxed mb-4 text-gray-700">
                <span className="font-bold">Physical abuse</span> involves intentionally causing harm to an animal,
                such as beating, kicking, or using weapons. This form of cruelty can
                leave both physical and psychological scars on the animal. Raising
                awareness and educating communities about the consequences of such
                actions is vital in preventing abuse.
              </p>
              <p className="text-lg leading-relaxed mb-4 text-gray-700">
                <span className="font-bold">Emotional mistreatment</span>, though less visible, can be equally
                damaging. This includes isolating an animal, using fear as a means of
                control, or failing to provide social interaction. Animals require
                companionship and mental stimulation to thrive, and depriving them of
                these can lead to long-lasting trauma.
              </p>
              <p className="text-lg leading-relaxed mb-4 text-gray-700">
                At Pawdopt, we advocate for the fair treatment of all animals and
                work tirelessly to educate the public about the signs of animal
                cruelty. By promoting responsible pet ownership and compassion, we
                can work together to create a safer world for our furry friends.
              </p>
              <div className="mt-8">
                <h2 className="text-2xl font-semibold text-orange-400 mb-4">
                  How You Can Help
                </h2>
                <p className="text-lg leading-relaxed mb-4 text-gray-700">
                  If you suspect an animal is being abused or neglected, do not
                  hesitate to reach out to local animal control or shelters. Your
                  voice can make a difference in rescuing an animal from a harmful
                  situation. Additionally, supporting organizations like Pawdopt
                  through donations or volunteer work helps us continue our mission
                  to protect animals in need.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  Together, we can put an end to animal cruelty and create a
                  compassionate community for all animals.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
}

export default AnimalCurelty