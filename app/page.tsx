"use client";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Spacing } from "./_components/Spacing";
import { StatusSection } from "./_components/StatusSection";
import { Skills } from "./_components/Skills";
import { ContactMe } from "./_components/ContactMe";
import { Footer } from "./_components/Footer";
import { Gallery } from "./_components/Gallery";
import { Partners } from "./_components/Partners";
import { motion, useScroll } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <main>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[10px] bg-red-500 origin-[0%] z-40"
        style={{ scaleX: scrollYProgress }}
      />
      {/* HEADER */}
      <Header />
      <Spacing size="md" />
      <Hero />
      <Spacing size="md" />
      <Gallery />
      <Spacing size="md" />
      <StatusSection />
      <Spacing size="md" />
      <Skills />
      <Spacing size="md" />
      <Partners />
      <Spacing size="md" />
      <ContactMe />
      <Spacing size="md" />
      <Footer />
    </main>
  );
}
