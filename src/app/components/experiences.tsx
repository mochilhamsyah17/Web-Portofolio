import Image from "next/image";
import ImageIBIK from "../../../public/Logo_Kampus.webp";
import ImageHIMA from "../../../public/logo-hima.webp";
import ImageKamer from "../../../public/Logo_Kampus_Merdeka_Kemendikbud.webp";
import ImageMknows from "../../../public/mknows.webp";
import Reveal from "@/app/components/reveal";
import SectionTag from "@/app/components/section-tag";

export default function Experiences() {
  const dataExperience = [
    {
      icon: ImageHIMA,
      alt: "Logo HIMA Sistem Informasi IBI Kesatuan",
      title:
        "Kepala Divisi Potensi Mahasiswa - HIMA Sistem Informasi IBI Kesatuan",
      duration: "Januari 2021 - Desember 2022",
      desc: "Sebagai Kepala Divisi Potensi Mahasiswa di Himpunan Mahasiswa Sistem Informasi Institut Bisnis dan Informatika Kesatuan pada tahun 2021 hingga 2022. Saya memiliki tanggung jawab untuk membuat keputusan dan menjalankan acara yang telah dirancang oleh Divisi Penelitian dan Pengembangan.",
    },
    {
      icon: ImageKamer,
      alt: "Logo Kampus Merdeka Kemendikbud",
      title:
        "Studi Independen Front End Web Dev - PT. Impactbyte Teknologi Edukasi",
      duration: "Agustus 2022 - Desember 2022",
      desc: "Sebagai salah satu anggota studi independen di Skilvul bagian Front-End Web Developer di tahun 2022, saya mempelajari bagaimana merancang dan membangun sebuah website dari sisi front-end. Dimulai dengan belajar Design Thinking, Dasar-dasar HTML CSS dan Javascript & React JS. Di studi independen juga saya memiliki kelompok dan membangun website Voluntegreen sebagai final project kami.",
    },
    {
      icon: ImageHIMA,
      alt: "Logo Dewan Pengawas Himpunan IBI Kesatuan",
      title:
        "Anggota Komite III Pengawasan dan Evaluasi - Dewan Pengawas Himpunan IBI Kesatuan",
      duration: "Januari 2023 - Januari 2024",
      desc: "Sebagai salah satu anggota Komite III Pengawasan dan Evaluasi, Dewan Pengawas Himpunan memiliki kewajiban untuk mengawasi dan mengevaluasi setiap acara yang dirancang dan dilakukan oleh Himpunan Mahasiswa di Institut Bisnis dan Informatika Kesatuan.",
    },
    {
      icon: ImageMknows,
      alt: "Logo M-Knows Consulting",
      title:
        "Magang Kampus Merdeka Front End Web Developer - M-Knows Consulting",
      duration: "Januari 2023 - Juni 2023",
      desc: "Sebagai salah satu anggota magang Front-End Web Developer, saya membangun website menggunakan beberapa tools seperti Next.js dan bahasa pemrograman TypeScript. Di sini saya banyak belajar hal baru dengan terjun langsung ke proyek nyata.",
    },
    {
      icon: ImageIBIK,
      alt: "Logo Institut Bisnis dan Informatika Kesatuan",
      title: "Lab. Assistant Pemrograman Berbasis Web II",
      duration: "Maret 2024 - Juli 2024",
      desc: "Sebagai asisten lab di mata kuliah Pemrograman Berbasis Web II (PBW2), saya membantu mahasiswa dalam belajar membangun website menggunakan framework CodeIgniter 4 dan Bootstrap dengan memberikan studi kasus.",
    },
  ];

  return (
    <section
      id="experiences"
      className="mx-auto w-full max-w-4xl scroll-mt-24 flex-col items-center space-y-10 px-6 py-16 md:px-10"
    >
      <SectionTag index="03" label="Path" />
      <Reveal>
        <h2 className="flex w-full justify-center bg-gradient-to-r from-[#5BADFF] to-[#1373D1] bg-clip-text text-center text-2xl font-extrabold uppercase text-transparent md:text-4xl">
          Experiences
        </h2>
      </Reveal>

      <ol className="relative flex w-full flex-col gap-8 border-l-2 border-white/10 pl-6 md:pl-8">
        {dataExperience.reverse().map((data, index) => (
          <li key={index} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[33px] top-1 h-3.5 w-3.5 rounded-full border-2 border-[#5BADFF] bg-[#0a0a0a] md:-left-[41px]"
            />
            <Reveal delay={Math.min(index, 4) * 0.06}>
              <article className="flex w-full flex-col gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-white/20 md:p-5">
                <div className="flex w-full flex-row items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white/5 p-1">
                    <Image
                      src={data.icon}
                      alt={data.alt}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-sm font-bold leading-snug text-neutral-100 md:text-base">
                      {data.title}
                    </h3>
                    <span className="inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] font-medium text-neutral-300 md:text-xs">
                      {data.duration}
                    </span>
                  </div>
                </div>
                <p className="text-xs leading-relaxed text-neutral-400 md:text-sm">
                  {data.desc}
                </p>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
