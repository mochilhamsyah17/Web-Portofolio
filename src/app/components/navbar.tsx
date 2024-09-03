"use client";

import React from "react";

export default function Navbar() {
  return (
    <section className="flex gap-x-1 lg:gap-x-10 w-full py-4 justify-center bg-[#222222] text-xs md:text-sm">
      <button className="hover:bg-[#191919] py-1 px-2 rounded-lg">
        <a href="#experienced-tools">
          <span>Experienced Tools</span>
        </a>
      </button>
      <button className="hover:bg-[#191919] py-1 px-2 rounded-lg">
        <a href="#projects">
          <span>Projects</span>
        </a>
      </button>
      <button className="hover:bg-[#191919] py-1 px-2 rounded-lg">
        <a href="#experiences">
          <span>Experiences</span>
        </a>
      </button>
    </section>
  );
}
