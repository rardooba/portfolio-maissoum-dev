"use client"
import { Section } from "../../organisms/_components/Section";

export const Footer = () => {
  return (
    <footer className="bg-card">
      <Section className="py-8">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Maïssoum Aboudrare. All right reserved.
        </p>
      </Section>
    </footer>
  );
};
