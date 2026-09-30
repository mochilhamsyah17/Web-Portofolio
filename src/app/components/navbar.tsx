"use client";

import React, { useEffect, useState } from "react";
import { motion, useReducedMotion, useScroll } from "framer-motion";

const links = [
  { href: "#experienced-tools", label: "Experienced Tools" },
  { href: "#projects", label: "Projects" },
  { href: "#experiences", label: "Experiences" },
];

export default function Navbar() {
  const [active, setActive] = useState<string>("");
  const { scrollYProgress } = useScroll();
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      const pos = window.scrollY + 120;
      let current = "";
      for (const link of links) {
        const el = document.querySelector(link.href);
        if (el && (el as HTMLElement).offsetTop <= pos) {
          current = link.href;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#222222]/80 backdrop-blur-md">
      {!reduce && (
        <motion.div
          aria-hidden="true"
          style={{ scaleX: scrollYProgress }}
          className="absolute inset-x-0 top-0 h-[2px] origin-left bg-gradient-to-r from-[#FF8660] to-[#8000FF]"
        />
      )}
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-3">
        <a
          href="#top"
          className="text-base font-extrabold tracking-tight md:text-lg"
          aria-label="Back to top"
        >
          <span className="bg-gradient-to-r from-[#FF8660] to-[#8000FF] bg-clip-text text-transparent">
            IM.
          </span>
        </a>
        <div className="flex items-center gap-1 text-xs md:gap-2 md:text-sm">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActive(link.href)}
              className={`rounded-lg px-2 py-1.5 transition-colors md:px-3 ${
                active === link.href
                  ? "bg-[#191919] text-white"
                  : "text-neutral-300 hover:bg-[#191919] hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
