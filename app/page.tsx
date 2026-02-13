import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Tournaments } from "@/components/sections/Tournaments";
import { Recruitment } from "@/components/sections/Recruitment";

export default function Home() {
  return (
    <main className="min-h-screen bg-uwin-dark text-white selection:bg-uwin-pink selection:text-white">
      <Navbar />
      <Hero />
      <Tournaments />
      <Recruitment />
      <Footer />
    </main>
  );
}
