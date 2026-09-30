import Image from "next/image";
import ImageEmail from "../../../public/Email Icon.webp";
import { FaLinkedin, FaArrowUp } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import Reveal from "@/app/components/reveal";
import SectionTag from "@/app/components/section-tag";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="flex h-fit w-full flex-col gap-8 bg-[#191919] px-6 py-16 md:px-10 lg:px-24">
      <SectionTag index="04" label="Contact" />
      <Reveal>
      <h2 className="text-2xl font-extrabold md:text-4xl">Contact</h2>
      </Reveal>
      <Reveal delay={0.08}>
      <p className="max-w-3xl text-xs leading-relaxed text-[#C5C5C5] md:text-sm">
        Apakah Anda memiliki ide untuk sebuah website atau membutuhkan bantuan
        dalam proyek pengembangan web? Saya dengan senang hati siap membantu!
        Silahkan kirimkan pesan ke e-mail di bawah ini. Saya akan segera
        merespon dan berharap kita bisa berdiskusi lebih lanjut tentang
        bagaimana saya dapat berkontribusi untuk mewujudkan ide-ide Anda.
      </p>
      </Reveal>

      <Reveal delay={0.16}>
      <div className="flex flex-col gap-4">
        <a
          href="mailto:mochilhamsyah17@gmail.com"
          className="flex w-fit flex-row items-center gap-x-2 rounded-lg transition-opacity hover:opacity-80"
        >
          <Image
            src={ImageEmail}
            alt="Ikon email"
            className="h-6 w-6 object-contain"
          />
          <span className="text-xs font-semibold text-[#C5C5C5] md:text-sm">
            mochilhamsyah17@gmail.com
          </span>
        </a>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="https://www.linkedin.com/in/mochammad-ilhamsyah-maulana-163509207/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Ilhamsyah"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-neutral-200 transition-colors hover:border-white hover:bg-white hover:text-black md:text-sm"
          >
            <FaLinkedin aria-hidden="true" />
            LinkedIn
          </a>
          <a
            href="/myCV.pdf"
            download="CV_MochIlhamsyahMaulana.pdf"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-neutral-200 transition-colors hover:border-white hover:bg-white hover:text-black md:text-sm"
          >
            <MdOutlineFileDownload aria-hidden="true" />
            Download CV
          </a>
          <a
            href="#top"
            aria-label="Kembali ke atas"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-neutral-200 transition-colors hover:border-white hover:bg-white hover:text-black md:text-sm"
          >
            <FaArrowUp aria-hidden="true" />
            Back to top
          </a>
        </div>
      </div>
      </Reveal>

      <div className="flex flex-col items-center gap-1 border-t border-white/10 pt-6 text-center text-[10px] text-[#C5C5C5] md:text-xs">
        <span>© {year} Mochammad Ilhamsyah Maulana. All rights reserved.</span>
        <span className="text-neutral-500">
          Design inspired by Figma Community
        </span>
      </div>
    </footer>
  );
}
