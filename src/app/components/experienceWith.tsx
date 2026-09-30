"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import type { MouseEvent, ReactNode } from "react";
import ImageNextJS from "../../../public/nextjs-white.webp";
import ImageReact from "../../../public/react.webp";
import ImageHTML from "../../../public/html.webp";
import ImageCSS from "../../../public/css.webp";
import ImageJS from "../../../public/js.webp";
import ImageTS from "../../../public/typescript-original.webp";
import ImagePHP from "../../../public/php.webp";
import ImageTailwind from "../../../public/tailwindcss-plain.webp";
import ImageBootstrap from "../../../public/bootstrap.webp";
import ImageGit from "../../../public/git.webp";
import Reveal from "@/app/components/reveal";
import SectionTag from "@/app/components/section-tag";

type Category = "Language" | "Framework" | "Styling" | "Tool";

type Tool = {
  src: StaticImageData;
  alt: string;
  name: string;
  category: Category;
  context: string;
  featured?: boolean;
};

const dotByCategory: Record<Category, string> = {
  Language: "bg-orange-400",
  Framework: "bg-violet-400",
  Styling: "bg-sky-400",
  Tool: "bg-emerald-400",
};

const tools: Tool[] = [
  {
    src: ImageNextJS,
    alt: "Next.js",
    name: "Next.js",
    category: "Framework",
    context: "Dipakai di project nyata saat magang M-Knows dan portofolio ini.",
    featured: true,
  },
  {
    src: ImageReact,
    alt: "React",
    name: "React",
    category: "Framework",
    context: "Final project Voluntegreen bersama tim Skilvul.",
    featured: true,
  },
  {
    src: ImageTS,
    alt: "TypeScript",
    name: "TypeScript",
    category: "Language",
    context: "Bahasa utama saat magang front-end di M-Knows.",
  },
  {
    src: ImageJS,
    alt: "JavaScript",
    name: "JavaScript",
    category: "Language",
    context: "Logika dan interaksi client-side di semua project.",
  },
  {
    src: ImageHTML,
    alt: "HTML",
    name: "HTML",
    category: "Language",
    context: "Fondasi struktur semua project web saya.",
  },
  {
    src: ImageCSS,
    alt: "CSS",
    name: "CSS",
    category: "Language",
    context: "Styling dasar hingga animasi antarmuka.",
  },
  {
    src: ImageTailwind,
    alt: "Tailwind CSS",
    name: "Tailwind",
    category: "Styling",
    context: "Styling utama portofolio ini.",
  },
  {
    src: ImageBootstrap,
    alt: "Bootstrap",
    name: "Bootstrap",
    category: "Styling",
    context: "Materi ajar saat asisten lab PBW2.",
  },
  {
    src: ImagePHP,
    alt: "PHP",
    name: "PHP",
    category: "Language",
    context: "Backend CodeIgniter 4 saat asisten lab PBW2.",
  },
  {
    src: ImageGit,
    alt: "Git",
    name: "Git",
    category: "Tool",
    context: "Version control untuk semua project.",
  },
];

function CategoryBadge({ category }: { category: Category }) {
  return (
    <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-medium text-neutral-300 md:text-[11px]">
      <span
        aria-hidden="true"
        className={`h-1.5 w-1.5 rounded-full ${dotByCategory[category]}`}
      />
      {category}
    </span>
  );
}

function SpotCard({
  children,
  delay,
  featured = false,
}: {
  children: ReactNode;
  delay: number;
  featured?: boolean;
}) {
  const reduce = useReducedMotion();

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div
      onMouseMove={reduce ? undefined : handleMove}
      initial={reduce ? false : { opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      whileHover={reduce ? undefined : { y: -4 }}
      whileTap={reduce ? undefined : { scale: 0.98 }}
      className={
        featured
          ? "featured-ring rounded-2xl p-px sm:col-span-2"
          : "card-spotlight relative rounded-2xl border border-white/10 bg-white/[0.03] transition-colors hover:border-white/25"
      }
    >
      {featured ? (
        <div className="card-spotlight relative h-full rounded-[calc(1rem-1px)] bg-[#0d0d0d] transition-colors">
          {children}
        </div>
      ) : (
        children
      )}
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section
      id="experienced-tools"
      className="mx-auto flex w-full max-w-5xl scroll-mt-24 flex-col space-y-4 px-6 py-16 md:px-10"
    >
      <SectionTag index="01" label="Stack" />
      <Reveal>
        <div className="flex w-full flex-col items-center gap-2 text-center">
          <h2 className="w-full bg-gradient-to-r from-[#FF8660] to-[#8000FF] bg-clip-text text-center text-2xl font-extrabold uppercase text-transparent md:text-4xl">
            Experienced Tools
          </h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-2 gap-3 pt-4 md:grid-cols-4 md:gap-4">
        {tools.map((tool, index) => (
          <SpotCard
            key={tool.name}
            delay={Math.min(index * 0.05, 0.4)}
            featured={tool.featured}
          >
            <div className="flex h-full flex-col gap-3 p-4 md:p-5">
              <div className="flex items-start justify-between gap-2">
                <motion.div
                  whileHover={{ scale: 1.12, rotate: -4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <Image
                    src={tool.src}
                    alt={tool.alt}
                    className={`object-contain grayscale transition-all duration-300 hover:grayscale-0 ${tool.featured
                      ? "h-14 w-14 md:h-16 md:w-16"
                      : "h-10 w-10 md:h-12 md:w-12"
                      }`}
                  />
                </motion.div>
                <CategoryBadge category={tool.category} />
              </div>
              <div className="flex flex-col gap-1">
                <h3
                  className={`font-bold text-neutral-100 ${tool.featured ? "text-lg md:text-xl" : "text-sm md:text-base"
                    }`}
                >
                  {tool.name}
                </h3>
                <p className="text-[11px] leading-relaxed text-neutral-400 md:text-xs">
                  {tool.context}
                </p>
              </div>
            </div>
          </SpotCard>
        ))}
      </div>
    </section>
  );
}
