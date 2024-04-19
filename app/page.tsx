import Image from "next/image";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Spacing } from "./_components/Spacing";
import { StatusSection } from "./_components/StatusSection";
import { Skills } from "./_components/Skills";
import { ContactMe } from "./_components/ContactMe";
import { Footer } from "./_components/Footer";
import { Gallery } from "./_components/Gallery";

export default function Home() {
  return (
    <main>
      {/* HEADER */}
      <Header/>
      <Spacing size="md"/>
      <Hero/>
      <Spacing size="md"/>
      <Gallery />
      <Spacing size="md"/>
      <StatusSection/>
      <Spacing size="md"/>
      <Skills/>
      <Spacing size="md"/>
      <ContactMe/>
      <Spacing size="md"/>
      <Footer/>
    </main>
  );
}
