"use client";
import { Header } from "./molecules/_components/Header";
import { Hero } from "./molecules/_components/Hero";
import { Spacing } from "./organisms/_components/Spacing";
import { ProjectSection } from "./molecules/_components/ProjectSection";
import { Skills } from "./molecules/_components/Skills";
import { ContactMe } from "./molecules/_components/ContactMe";
import { Footer } from "./molecules/_components/Footer";
import { Gallery } from "./molecules/_components/Gallery";
import { Partners } from "./molecules/_components/Partners";
import { ProgressBarPage } from "./atoms/_components/ProgressBarPage";

export default function Home() {
  return (
    <main>
      <ProgressBarPage />
      <Header />
      <Spacing size="md" />
      <Hero />
      <Spacing size="md" />
      <Gallery />
      <Spacing size="md" />
      <ProjectSection />
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
