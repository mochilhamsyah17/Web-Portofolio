import Image from "next/image";
import heroImage from "../../../public/itsMe.webp";
import Reveal from "@/app/components/reveal";
import SectionTag from "@/app/components/section-tag";
import Typewriter from "@/app/components/typewriter";

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-57px)] flex-col items-center justify-center gap-6 px-6 py-16 text-center md:gap-8">
      <div className="w-full max-w-2xl">
        <SectionTag index="00" label="Intro" />
      </div>
      <Reveal>
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-neutral-300 md:text-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          Available for freelance &amp; full-time
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="flex w-full justify-center">
          <div className="rounded-full bg-gradient-to-r from-[#FF8660] to-[#8000FF] p-1 shadow-[0_0_40px_-10px_rgba(128,0,255,0.7)]">
            <div className="h-32 w-32 overflow-hidden rounded-full bg-[#111] md:h-40 md:w-40">
              <Image
                alt="Foto profil Mochammad Ilhamsyah Maulana"
                src={heroImage}
                width={200}
                height={200}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.16}>
        <h1 className="mx-auto max-w-3xl text-balance text-2xl font-extrabold leading-tight md:text-4xl">
          <Typewriter
            phrases={["I do code and love it in someway!"]}
            typeSpeed={54}
            deleteSpeed={15}
            pauseTime={1600}
            startDelay={800}
          />
        </h1>
      </Reveal>

      <Reveal delay={0.24}>
        <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-2 text-sm leading-relaxed text-neutral-300 md:text-lg">
          <p>
            Hallo, Namaku Mochammad Ilhamsyah Maulana yang berasal dari Kota
            Bogor, Indonesia.{" "}
          </p>
          <p>
            Aku merupakan lulusan S1 Sistem Informasi di Insititut Bisnis dan
            Informatika Kesatuan yang menyukai bidang Web Development terutama
            pada{" "}
            <span className="bg-gradient-to-r from-[#FF8660] to-[#8000FF] bg-clip-text font-semibold text-transparent">
              Front-End
            </span>
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.32}>
        <div className="flex flex-row flex-wrap justify-center gap-3 py-2 font-semibold md:gap-4 md:py-4">
          <a
            href="https://www.linkedin.com/in/mochammad-ilhamsyah-maulana-163509207/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-white bg-white px-5 py-2 text-black transition-all hover:-translate-y-0.5 hover:bg-black hover:text-white active:translate-y-0 active:scale-95"
          >
            Get in touch
          </a>
          <a
            href="/myCV.pdf"
            download="CV_MochIlhamsyahMaulana.pdf"
            className="rounded-full border-2 border-white bg-black px-5 py-2 text-white transition-all hover:-translate-y-0.5 hover:bg-white hover:text-black active:translate-y-0 active:scale-95"
          >
            Download CV
          </a>
          <a
            href="#projects"
            className="rounded-full border-2 border-white/20 bg-transparent px-5 py-2 text-neutral-200 transition-all hover:-translate-y-0.5 hover:border-white hover:text-white active:translate-y-0 active:scale-95"
          >
            View Projects
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.4}>
        <dl className="flex items-center gap-6 pt-2 text-center md:gap-10">
          <div>
            <dt className="sr-only">Projects</dt>
            <dd className="text-xl font-extrabold md:text-2xl">7+</dd>
            <dd className="text-xs text-neutral-400 md:text-sm">Projects</dd>
          </div>
          <div className="h-8 w-px bg-white/15" aria-hidden="true" />
          <div>
            <dt className="sr-only">Tools</dt>
            <dd className="text-xl font-extrabold md:text-2xl">10+</dd>
            <dd className="text-xs text-neutral-400 md:text-sm">Tools</dd>
          </div>
          <div className="h-8 w-px bg-white/15" aria-hidden="true" />
          <div>
            <dt className="sr-only">Experience</dt>
            <dd className="text-xl font-extrabold md:text-2xl">2+</dd>
            <dd className="text-xs text-neutral-400 md:text-sm">Yrs Experience</dd>
          </div>
        </dl>
      </Reveal>
    </section>
  );
}
