import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import ImageBMI from "../../../public/BMI.webp";
import ImageToDoList from "../../../public/ToDoList_1.webp";
import ImageSkillMovie from "../../../public/SkillMovie.webp";
import ImageRida from "../../../public/Rida.webp";
import ImageBoncal from "../../../public/Boncal.webp";
import ImagePMBot from "../../../public/PMBot.webp";
import ImageKG from "../../../public/kg.webp";
import Reveal from "@/app/components/reveal";
import SectionTag from "@/app/components/section-tag";
export default function Project() {
  const dataProject = [
    {
      src: ImageBMI,
      alt: "Screenshot aplikasi BMI Calculator",
      title: "BMI Calculator",
      desc: "Aplikasi web untuk menghitung Body Mass Index berdasarkan tinggi dan berat badan, lengkap dengan interpretasi kategori underweight hingga obese.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://ilhamsyah-tpa-02.netlify.app/",
    },
    {
      src: ImageToDoList,
      alt: "Screenshot aplikasi To Do List",
      title: "To Do List",
      desc: "Aplikasi pengelola tugas harian: tambah, edit, tandai selesai, dan hapus tugas dengan tampilan user-friendly.",
      tech: ["React", "CSS"],
      link: "https://tpa-05-ilhamsyah.netlify.app/",
    },
    {
      src: ImageSkillMovie,
      alt: "Screenshot aplikasi Movies Filters",
      title: "Movies Filters",
      desc: "Katalog film dengan fitur filter untuk memudahkan pencarian film yang pernah diproduksi.",
      tech: ["React", "API"],
      link: "https://ilhamsyah-tpa-03.netlify.app/",
    },
    {
      src: ImageRida,
      alt: "Screenshot landing page Rida",
      title: "Rida Landing Page",
      desc: "Company profile PT. Rihlah Duta Amanah — saya membangun landing page-nya.",
      tech: ["HTML", "Tailwind"],
      link: "https://rida-project.netlify.app/",
    },
    {
      src: ImageBoncal,
      alt: "Screenshot chatbot Boncal",
      title: "Tourism Chatbot Boncal",
      desc: "Chatbot pengenalan Kota Bogor, dibuat saat lomba Disparbud Kota Bogor bersama SMOJO AI.",
      tech: ["Chatbot", "SMOJO AI"],
      link: "https://app.smojo.org/teamtam/boncal",
    },
    {
      src: ImagePMBot,
      alt: "Screenshot chatbot PMBot",
      title: "Marketing Chatbot PMBot",
      desc: "Chatbot Unit Marketing IBI Kesatuan untuk layanan informasi 24/7 bagi calon mahasiswa.",
      tech: ["Chatbot", "SMOJO AI"],
      link: "https://app.smojo.org/marketingibik/PMBot",
    },
    {
      src: ImageKG,
      alt: "Screenshot website Kampus Gratis",
      title: "Kampus Gratis",
      desc: "Kontribusi pada platform Kampus Gratis — ikut membangun fitur front-end nyata.",
      tech: ["Next.js", "TypeScript"],
      link: "https://kampusgratis.id/",
    },
  ];
  return (
    <section id="projects" className="flex-col items-center space-y-8 py-16">
      <div className="px-6 md:px-12 lg:px-16 xl:px-24">
        <SectionTag index="02" label="Work" />
      </div>
      <Reveal>
      <div className="flex scroll-mt-24">
        <h2 className="w-full bg-gradient-to-r from-[#FF8660] to-[#D5491D] bg-clip-text text-center text-2xl font-extrabold uppercase text-transparent md:text-4xl">
          Projects
        </h2>
      </div>
      </Reveal>
      <div className="grid w-full grid-cols-1 justify-center gap-6 px-6 py-4 sm:grid-cols-2 md:px-12 lg:grid-cols-3 lg:px-16 xl:px-24">
        {dataProject.map((data, index) => (
          <Reveal key={index} delay={(index % 3) * 0.1}>
          <a
            className="group h-fit w-full overflow-hidden rounded-lg bg-[#2A2A2A] transition-all hover:-translate-y-1 hover:shadow-md hover:shadow-slate-400/40"
            href={data.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Kunjungi ${data.title}`}
          >
            <div className="relative h-44 w-full overflow-hidden">
              <Image
                src={data.src}
                alt={data.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="rounded-t-lg object-cover object-center transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/85 via-black/20 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="line-clamp-3 text-left text-xs leading-relaxed text-neutral-200">
                  {data.desc}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 px-4 py-3">
              <div className="flex flex-wrap gap-1.5">
                {data.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-medium text-neutral-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex h-auto flex-row items-center">
                <div className="flex w-full flex-col font-bold uppercase">
                  <span className="text-[10px] font-medium normal-case text-[#C5C5C5]">
                    Click here to visit
                  </span>
                  <span className="text-sm md:text-base">{data.title}</span>
                </div>
                <span className="flex justify-end transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <FiArrowUpRight aria-hidden="true" />
                </span>
              </div>
              <p className="line-clamp-2 text-xs normal-case text-neutral-400 group-hover:hidden">
                {data.desc}
              </p>
            </div>
          </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
