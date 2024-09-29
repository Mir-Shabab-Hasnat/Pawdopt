"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/NavBar-Menu";
import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <NavbarItem className="top-2 px-3" />
    </div>
  );
}

function NavbarItem({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Navigate">
          <div className="flex flex-col space-y-4  text-xs md:text-base md:flex-row md:space-y-0 md:space-x-4">
            <HoveredLink href="/">Home</HoveredLink>
            <HoveredLink href="/#adopt">Adopt</HoveredLink>
            <HoveredLink href="/pawdopt-mission">About Us</HoveredLink>
            <HoveredLink href="/#stories">Stories</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Get Involved">
          <div className="flex flex-col space-y-4 text-xs md:text-base md:flex-row md:space-y-0 md:space-x-4">
            <HoveredLink href="/pawdopt-mission">Our Mission</HoveredLink>
            <HoveredLink href="/animal-cruelty">Animal Cruelty</HoveredLink>
            
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="text-xs md:text-base grid grid-cols-1 md:grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Adoption"
              href="#adopt"
              description="Adopt animals near you!"
            />
            {/* You can add more ProductItems here for larger screens */}
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}