import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mochammad Ilhamsyah Maulana — Front-End Web Developer",
  description:
    "Portofolio Mochammad Ilhamsyah Maulana, lulusan S1 Sistem Informasi dari Bogor yang fokus pada Front-End Web Development: React, Next.js, TypeScript, dan Tailwind CSS.",
  openGraph: {
    title: "Mochammad Ilhamsyah Maulana — Front-End Web Developer",
    description:
      "Portofolio Front-End: Projects, Experiences, dan kontak kerja sama web development.",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mochammad Ilhamsyah Maulana — Front-End Web Developer",
    description:
      "Portofolio Front-End: React, Next.js, TypeScript, Tailwind CSS.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
