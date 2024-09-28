"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./NavBar-Menu";
import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <NavbarItem className="top-2" />
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
          <div className="flex flex-col space-y-4 text-sm md:flex-row md:space-y-0 md:space-x-4">
            <HoveredLink href="#home">Home</HoveredLink>
            <HoveredLink href="#adopt">Adopt</HoveredLink>
            <HoveredLink href="#about">About Us</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="text-sm grid grid-cols-1 md:grid-cols-2 gap-10 p-4">
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