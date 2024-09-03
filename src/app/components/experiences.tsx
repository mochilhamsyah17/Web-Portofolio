import Image from "next/image";
import ImageIBIK from "../../../public/Logo_Kampus.webp";
import ImageHIMA from "../../../public/logo-hima.webp";
import ImageKamer from "../../../public/Logo_Kampus_Merdeka_Kemendikbud.webp";
import ImageMknows from "../../../public/mknows.webp";

export default function Experiences() {
  const dataExperience = [
    {
      icon: ImageHIMA,
      title:
        "Kepala Divisi Potensi Mahasiswa - HIMA Sistem Informasi IBI Kesatuan",
      duration: "Januari 2021 - Desember 2022",
      desc: "Sebagai Kepala Divisi Potensi Mahasiswa di Himpunan Mahasiswa Sistem Informasi Institut Bisnis dan Informatika Kesatuan pada tahun 2021 hingga 2022. Saya memiliki tanggung jawab untuk membuat keputusan dan menjalankan acara yang telah dirancang oleh Divisi Penelitian dan Pengembangan.",
    },
    {
      icon: ImageKamer,
      title:
        "Studi Independen Front End Web Dev - PT. Impactbyte Teknologi Edukasi",
      duration: "Agustus 2022 - Desember 2022",
      desc: "Sebagai salah satu anggota studi independen di Skilvul bagian Front-End Web Developer di tahun 2022, saya mempelajari bagaimana merancang dan membangun sebuah website dari sisi front-end. Dimulai dengan belajar Design Thinking, Dasar-dasar HTMl CSS dan Javascript & react js. Di studi independen juga saya memiliki kelompok dan membangun website Volutegreen sebagai final project kami.",
    },
    {
      icon: ImageHIMA,
      title:
        "Anggota Komite III Pengawasan dan Evaluasi - Dewan Pengawas Himpunan IBI Kesatuan",
      duration: "Januari 2023 - Januari 2024",
      desc: "Sebagai salah satu anggota Komite III Pengawasan dan Evaluasi, Dewan Pengawas Himpunan memiliki kewajiban untuk mengawasi danmengevaluasi  setiap acara yang dirancang dan dilakukan oleh Himpunanan Mahasiswa di Institut Bisnis dan Informatika Kesatuan. ",
    },
    {
      icon: ImageMknows,
      title:
        "Magang Kampus Merdeka Front End Web Developer - M-Knows Consulting",
      duration: "Januari 2023 - Juni 2023",
      desc: "Sebagai salah satu anggota magang Front-End Web Developer, saya membangun website menggunakan beberapa tools seperti Next dan bahasa pemrograman Typescript. Disini saya banyak belajar hal baru dengan terjun langsung ke projek nyata.",
    },
    {
      icon: ImageIBIK,
      title: "Lab. Assistant Pemrograman Berbasis Web II",
      duration: "Maret 2024 - Juli 2024",
      desc: "Sebagai asisten lab di mata kuliah Pemrograman Berbasis Web II (PBW2), saya membantu Mahasiswa dalam belajar membangun website menggunakan framework CodeIgniter4 dan Bootstrap dengan memberikan studi kasus.",
    },
  ];

  return (
    <section
      id="experiences"
      className="py-16 space-y-8 flex-col items-center px-10 lg:px-24 "
    >
      <span className="uppercase w-full flex justify-center text-2xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#5BADFF] to-[#1373D1]">
        Experiences
      </span>
      {/* experience */}
      {dataExperience.map((data, index) => (
        <section key={index} className="py-2 w-full flex flex-col gap-2">
          <div className="w-full flex flex-row">
            <Image src={data.icon} alt="image-js" className="w-10 h-10" />
            <div className="flex flex-col px-2 items-center">
              <div className="w-full h-fit font-bold text-sm md:text-lg items-center">
                {data.title}
              </div>
              <div className="w-full flex items-center text-xs text-[#8491A0]">
                <p>{data.duration}</p>
              </div>
            </div>
          </div>
          <div className="text-justify flex justify-items-center text-xs text-[#8491A0]">
            <p>{data.desc}</p>
          </div>
        </section>
      ))}
    </section>
  );
}
