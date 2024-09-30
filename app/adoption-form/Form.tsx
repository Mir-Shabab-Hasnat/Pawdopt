"use client";
import { catCards, dogCards } from "@/data";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation"; // Import the useSearchParams hook

interface Pet {
  title: string;
  breed: string;
}

interface AdoptionFormProps {
  initialPet?: Pet | null;
}

export function AdoptionForm({ initialPet }: AdoptionFormProps) {
  const router = useRouter();
  const searchParams = useSearchParams(); // Get query parameters
  const petTypeQuery = searchParams.get("type") || "cat"; // Extract 'type' query param, default to "cat"
  const petNameQuery = searchParams.get("title") || ""; // Extract 'title' query param
  const breedQuery = searchParams.get("breed") || ""; // Extract 'breed' query param

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [reason, setReason] = useState("");
  const [petType, setPetType] = useState(petTypeQuery);
  const [petName, setPetName] = useState(
    petNameQuery || initialPet?.title || ""
  );
  const [breed, setBreed] = useState(breedQuery || initialPet?.breed || "");

  // Update pet breed when pet name changes
  useEffect(() => {
    if (petType === "cat") {
      const selectedCat = catCards.find((cat) => cat.title === petName);
      setBreed(selectedCat?.breed || "");
    } else {
      const selectedDog = dogCards.find((dog) => dog.title === petName);
      setBreed(selectedDog?.breed || "");
    }
  }, [petName, petType]);

  useEffect(() => {
    document.body.style.overflow = "auto"; // Ensure scrolling is enabled
    return () => {
      document.body.style.overflow = ""; // Clean up on unmount
    };
  }, []);

  

  // Submit form function
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      contact,
      address,
      reason,
      petType,
      petName,
      breed,
    };

    // Send form data via email
    await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        contact: formData.contact,
        address: formData.address,
        reason: formData.address,
        petType: formData.petType,
        petName: formData.petName,
        breed: formData.breed,
      }),
    });

    alert("Form submitted!");

    router.push("/");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full mx-auto"
    >
      {/* Form fields */}
      
        <input
        className="border-2 border-purple-400 rounded-full p-4"
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      

      <input
      className="border-2 border-purple-400 rounded-full p-4"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
      className="border-2 border-purple-400 rounded-full p-4"
        type="text"
        placeholder="Contact Info"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        required
      />
      <input
      className="border-2 border-purple-400 rounded-full p-4"
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      />
      <textarea
      className="border-2 border-purple-400 rounded-xl p-4"
        placeholder="Reason for adoption"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        required
        style={{width: "100%", height: "200px"}}
      />

      {/* Pet Type Dropdown */}
      <select className="border-2 border-purple-400 rounded-xl p-4" value={petType} onChange={(e) => setPetType(e.target.value)}>
        <option value="cat">Cat</option>
        <option value="dog">Dog</option>
      </select>

      {/* Pet Name Dropdown based on selected pet type */}
      <select className="border-2 border-purple-400 rounded-xl p-4" value={petName} onChange={(e) => setPetName(e.target.value)}>
        {petType === "cat"
          ? catCards.map((cat) => (
              <option key={cat.title} value={cat.title}>
                {cat.title}
              </option>
            ))
          : dogCards.map((dog) => (
              <option key={dog.title} value={dog.title}>
                {dog.title}
              </option>
            ))}
      </select>

      {/* Auto-filled breed input */}
      <input className="border-2 border-purple-400 rounded-xl p-4" type="text" placeholder="Breed" value={breed} readOnly />

      <button type="submit" className="px-4 py-2 rounded-full bg-green-500 hover:bg-green-600 text-white">
        Submit
      </button>
    </form>
  );
}
