import Image from "next/image";
import heroImage from "../../../public/itsMe.png";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center gap-8 justify-center">
      <div className="w-full flex justify-center">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-gradient-to-r from-[#FF8660] to-[#8000FF]">
          <Image
            alt="profileImage"
            src={heroImage}
            className="h-full"
            width={200}
          />
        </div>
      </div>
      <div className="flex flex-col items-center text-2xl md:text-4xl font-extrabold">
        <span>I do code and</span>
        <span>
          love it in{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8660] to-[#8000FF]">
            someway!
          </span>
        </span>
      </div>
      <div className="flex flex-col items-center text-center w-1/2 text-sm md:text-lg">
        <span>
          Hallo, Namaku Mochammad Ilhamsyah Maulana yang berasal dari Kota
          Bogor, Indonesia.{" "}
        </span>
        <span>
          Aku merupakan lulusan S1 Sistem Informasi di Insititut Bisnis dan
          Informatika Kesatuan yang menyukai bidang Web Development terutama
          pada{" "}
          <span className="text-transparent bg-clip-text font-semibold bg-gradient-to-r from-[#FF8660] to-[#8000FF]">
            Front-End
          </span>
        </span>
      </div>
      <div className="flex flex-row py-4 gap-4 justify-center font-semibold">
        <a href="https://www.linkedin.com/in/mochammad-ilhamsyah-maulana-163509207/">
          <button className="hover:bg-black hover:text-white border-2 border-white bg-white text-black px-4 py-2 rounded-full">
            <span>Get in touch</span>
          </button>
        </a>
        <a href="/myCV.pdf" download="CV_MochIlhamsyahMaulana.pdf">
          <button className="hover:bg-white hover:text-black border-2 border-white bg-black text-white px-4 py-2 rounded-full">
            <span>Download CV</span>
          </button>
        </a>
      </div>
    </section>
  );
}
