"use client";

import Image from "next/image";
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

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Experience() {
  const image = [
    { src: ImageHTML, alt: "image-html" },
    { src: ImageCSS, alt: "image-css" },
    { src: ImageJS, alt: "image-js" },
    { src: ImageTS, alt: "image-ts" },
    { src: ImagePHP, alt: "image-php" },
    { src: ImageReact, alt: "image-react" },
    { src: ImageNextJS, alt: "image-nextjs" },
    { src: ImageTailwind, alt: "image-tailwind" },
    { src: ImageBootstrap, alt: "image-bootstrap" },
    { src: ImageGit, alt: "image-git" },
  ];
  return (
    <section id="experienced-tools" className="flex flex-col space-y-8 py-16">
      <div className="text-[#C5C5C5] flex w-full justify-center font-semibold text-xl">
        <span className="uppercase">Experienced Tools</span>
      </div>

      <div className="py-4 w-full">
        <Swiper
          allowTouchMove={true}
          spaceBetween={100}
          slidesPerView={2}
          centeredSlides={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            100: {
              slidesPerView: 4,
              spaceBetween: -50,
            },
            768: {
              slidesPerView: 6,
              spaceBetween: -100,
            },
            1024: {
              slidesPerView: 8,
              spaceBetween: 0,
            },
            1440: {
              slidesPerView: 8,
              spaceBetween: 100,
            },
          }}
          loop={true}
          rewind={true}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="h-full w-full "
        >
          {image.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image.src}
                alt={image.alt}
                className="w-16 lg:w-24 hover:scale-105 hover:cursor-pointer"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
