import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import ImageBMI from "../../../public/BMI.webp";
import ImageToDoList from "../../../public/ToDoList_1.webp";
import ImageSkillMovie from "../../../public/SkillMovie.webp";
import ImageRida from "../../../public/Rida.webp";
import ImageBoncal from "../../../public/Boncal.webp";
import ImagePMBot from "../../../public/PMBot.webp";
import ImageKG from "../../../public/kg.webp";

export default function Project() {
  const dataProject = [
    {
      src: ImageBMI,
      alt: "image-bmi",
      tittle: "BMI Calculator",
      desc: "BMI (Body Mass Index) Calculator adalah sebuah aplikasi web yang memungkinkan pengguna untuk menghitung indeks massa tubuh mereka berdasarkan tinggi dan berat badan. Dengan memasukkan nilai tinggi dan berat badan, aplikasi ini akan menghitung dan menampilkan BMI pengguna, serta memberikan interpretasi mengenai kategori berat badan seperti underweight, normal weight, overweight, atau obese. Aplikasi ini biasanya sederhana dan mudah digunakan, serta dapat membantu pengguna untuk memantau status kesehatan mereka terkait berat badan.",
      link: "https://ilhamsyah-tpa-02.netlify.app/",
    },
    {
      src: ImageToDoList,
      alt: "image-todolist",
      tittle: "To Do List",
      desc: "To-Do List adalah aplikasi web yang dirancang untuk membantu pengguna mengelola tugas dan aktivitas sehari-hari. Pengguna dapat membuat daftar tugas, menambahkan item baru, menandai tugas yang telah selesai, serta menghapus atau mengedit tugas yang ada. Aplikasi ini bertujuan untuk meningkatkan produktivitas dengan menyediakan cara yang sederhana dan efisien untuk mengatur dan melacak pekerjaan yang perlu diselesaikan. Dengan tampilan yang user-friendly, To-Do List membantu pengguna tetap fokus dan terorganisir dalam menjalani kegiatan harian mereka.",
      link: "https://tpa-05-ilhamsyah.netlify.app/",
    },
    {
      src: ImageSkillMovie,
      alt: "image-skillmovie",
      tittle: "Movies Filters",
      desc: "Pada aplikasi ini berisikan film-film yang pernah diproduksi dan memiliki fitur filter untuk memudahkan mencari film",
      link: "https://ilhamsyah-tpa-03.netlify.app/",
    },
    {
      src: ImageRida,
      alt: "image-rida",
      tittle: "Rida Landing Page",
      desc: "Website Rida merupakan Company profile dari PT. Rihlah Duta Amanah. Pada website ini saya membuat landing page",
      link: "https://rida-project.netlify.app/",
    },
    {
      src: ImageBoncal,
      alt: "image-boncal",
      tittle: "Tourism Chatbot Boncal",
      desc: "Boncal merupakan chatbot dengan tujuan untuk mengenalkan Kota Bogor yang dibuat ketika lomba yang diadakan oleh Dinas Pariwisata dan Budaya Kota Bogor yang bekerja sama dengan SMOJO AI.",
      link: "https://app.smojo.org/teamtam/boncal",
    },
    {
      src: ImagePMBot,
      alt: "image-pmbot",
      tittle: "Marketing Chatbot PMBot",
      desc: "PMBot merupakan chatbot dari Unit Marketing Institut Bisnis dan Informatika Kesatuan yang berfungsi memberikan layanan informasi 24/7 kepada calon Mahasiswa Institut Bisnis dan Informatika Kesatuan.",
      link: "https://app.smojo.org/marketingibik/PMBot",
    },
    {
      src: ImageKG,
      alt: "image-kampus-gratis",
      tittle: "Kampus Gratis",
      desc: "PMBot merupakan chatbot dari Unit Marketing Institut Bisnis dan Informatika Kesatuan yang berfungsi memberikan layanan informasi 24/7 kepada calon Mahasiswa Institut Bisnis dan Informatika Kesatuan.",
      link: "https://kampusgratis.id/",
    },
  ];
  return (
    <section id="projects" className="py-16 space-y-8 flex-col items-center">
      <div className="flex">
        <span className="w-full text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FF8660] to-[#D5491D] text-2xl md:text-4xl font-extrabold uppercase">
          Projects
        </span>
      </div>
      <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center gap-8 px-24 py-4">
        {/* Card */}

        {dataProject.map((data, index) => (
          <a
            key={index}
            className="  rounded-lg w-full h-fit cursor-pointer bg-[#2A2A2A] hover:shadow-sm hover:shadow-slate-400"
            href={data.link}
            target="_blank"
          >
            <div className="h-full flex justify-center">
              <Image
                alt={data.alt}
                src={data.src}
                className="w-full h-40 rounded-t-lg"
              />
            </div>
            <div className="px-3 items-center h-16 md:h-20 flex flex-row">
              <div className="flex flex-col font-bold uppercase w-full">
                <span className="text-[10px] text-[#C5C5C5]">
                  Click here to visit
                </span>
                <span className="text-sm md:text-base ">{data.tittle}</span>
              </div>
              <span className="flex justify-end">
                <FiArrowUpRight />
              </span>
            </div>
          </a>
        ))}
      </section>
    </section>
  );
}
