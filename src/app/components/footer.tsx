import Image from "next/image";
import ImageEmail from "../../../public/Email Icon.webp";

export default function Footer() {
  return (
    <footer className="bg-[#191919] w-full h-fit px-10 lg:px-24 py-16 gap-8 flex flex-col">
      <span className="font-extrabold text-2xl md:text-4xl">Contact</span>
      <span className="text-[#C5C5C5] text-xs md:text-sm">
        Apakah Anda memiliki ide untuk sebuah website atau membutuhkan bantuan
        dalam proyek pengembangan web? Saya dengan senang hati siap membantu!
        Silahkan kirimkan pesan ke e-mail di bawah ini. Saya akan segera
        merespon dan berharap kita bisa berdiskusi lebih lanjut tentang
        bagaimana saya dapat berkontribusi untuk mewujudkan ide-ide Anda.
      </span>
      <div className="items-center flex flex-row gap-x-2">
        <Image src={ImageEmail} alt="image-email" className="w-6" />
        <span className="text-xs md:text-sm text-[#C5C5C5] font-semibold">
          mochilhamsyah18@gmail.com
        </span>
      </div>
      <div className="flex w-full justify-center text-[#C5C5C5] text-[10px] items-end h-full">
        <span>Design From Figma Community By ABM</span>
      </div>
    </footer>
  );
}
