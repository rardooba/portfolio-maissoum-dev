"use client";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Spacing } from "./_components/Spacing";
import { ProjectSection } from "./_components/ProjectSection";
import { Skills } from "./_components/Skills";
import { ContactMe } from "./_components/ContactMe";
import { Footer } from "./_components/Footer";
import { Gallery } from "./_components/Gallery";
import { Partners } from "./_components/Partners";
import { ProgressBarPage } from "./_components/ProgressBarPage";

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
