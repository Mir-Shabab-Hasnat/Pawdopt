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
    const router = useRouter()
  const searchParams = useSearchParams(); // Get query parameters
  const petTypeQuery = searchParams.get("type") || "cat"; // Extract 'type' query param, default to "cat"
  const petNameQuery = searchParams.get("title") || ""; // Extract 'title' query param
  const breedQuery = searchParams.get("breed") || "";   // Extract 'breed' query param

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [reason, setReason] = useState("");
  const [petType, setPetType] = useState(petTypeQuery);
  const [petName, setPetName] = useState(petNameQuery || initialPet?.title || "");
  const [breed, setBreed] = useState(breedQuery || initialPet?.breed || "");

  // Update pet breed when pet name changes
  useEffect(() => {
    if (petType === "cat") {
      const selectedCat = catCards.find(cat => cat.title === petName);
      setBreed(selectedCat?.breed || "");
    } else {
      const selectedDog = dogCards.find(dog => dog.title === petName);
      setBreed(selectedDog?.breed || "");
    }
  }, [petName, petType]);

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

    // Send form data via email (example implementation)
    await fetch("/api/send-email", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    alert("Form submitted!");

    router.push('/');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-lg mx-auto">
      {/* Form fields */}
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Contact Info"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      />
      <textarea
        placeholder="Reason for adoption"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        required
      />
      
      {/* Pet Type Dropdown */}
      <select value={petType} onChange={(e) => setPetType(e.target.value)}>
        <option value="cat">Cat</option>
        <option value="dog">Dog</option>
      </select>

      {/* Pet Name Dropdown based on selected pet type */}
      <select value={petName} onChange={(e) => setPetName(e.target.value)}>
        {petType === "cat" ? (
          catCards.map((cat) => (
            <option key={cat.title} value={cat.title}>
              {cat.title}
            </option>
          ))
        ) : (
          dogCards.map((dog) => (
            <option key={dog.title} value={dog.title}>
              {dog.title}
            </option>
          ))
        )}
      </select>

      {/* Auto-filled breed input */}
      <input
        type="text"
        placeholder="Breed"
        value={breed}
        readOnly
      />

      <button type="submit" className="px-4 py-2 bg-green-500 text-white">Submit</button>
    </form>
  );
}
