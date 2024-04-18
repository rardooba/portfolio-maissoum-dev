import Image from "next/image";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Spacing } from "./_components/Spacing";
import { StatusSection } from "./_components/StatusSection";

export default function Home() {
  return (
    <main>
      {/* HEADER */}
      <Header/>
      <Spacing size="md"/>
      <Hero/>
      <Spacing size="md"/>
      <StatusSection/>
    </main>
  );
}
