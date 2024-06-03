"use client"
/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import { Section } from "../../organisms/_components/Section";
import Link from "next/link";
import Magnetic from "../../atoms/_components/Magnetic";

export const Partners = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant="outline">Partners</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0 cursor-default">
        My funny clients 🤝
      </h2>
      <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 dark:text-gray-400">
        {PARTNERS.map((partner, index) => (
          <Magnetic key={index}>
            <Link href="#" className="flex justify-center items-center">
              <img
                className="h-20 grayscale hover:grayscale-0 object-contain"
                src={partner.src}
                alt={partner.alt}
              />
            </Link>
          </Magnetic>
        ))}
      </div>
    </Section>
  );
};

type PartnersProps = {
  src: string;
  alt: string;
  url: string;
};

const PARTNERS: PartnersProps[] = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/SFR-2022-logo.svg/1200px-SFR-2022-logo.svg.png",
    alt: "SFR logo",
    url: "https://www.sfr.fr/",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Henkel-Logo.svg/2560px-Henkel-Logo.svg.png",
    alt: "Henkel logo",
    url: "https://www.henkel.fr/",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWqAbO41zC56huonG4Krm7zupZeUpkkjYKElhjQioQBA&s",
    alt: "Orange logo",
    url: "https://www.orange.fr",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVish2NFNmLqn3i8JXQE3ei2d_AbnbOMNlI2a0kFQqsQ&s",
    alt: "Sephora logo",
    url: "https://www.sephora.fr/",
  },
  {
    src: "https://logodownload.org/wp-content/uploads/2020/11/disney-plus-logo.png",
    alt: "Disney logo",
    url: "https://www.disney.fr/",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Monogramme_Nespresso.png/2048px-Monogramme_Nespresso.png",
    alt: "Nespresso logo",
    url: "https://www.nespresso.com/fr/en",
  },
  {
    src: "https://www.gide.com/sites/default/files/societe-generale-logo_2.png",
    alt: "Société générale logo",
    url: "https://particuliers.sg.fr/",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/fr/e/e1/Logo_Picard_surgel%C3%A9s.png",
    alt: "Picard logo",
    url: "https://www.picard.fr/",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnL1GadnOeRfoKlUFNPyEqzcLUSPH_34dx5XksKlgG&s",
    alt: "Thierry Mugler logo",
    url: "https://www.mugler.fr/",
  },
  {
    src: "https://www.shutterstock.com/image-vector/c-icon-vector-logo-sign-600nw-2242697067.jpg",
    alt: "Carrefour logo",
    url: "https://www.carrefour.fr/",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsbbDurqf3W_tYLAWb1H71s-xnxFhKOdYmEirOHkvf&s",
    alt: "Allianz logo",
    url: "https://www.allianz.fr/",
  },
  {
    src: "https://cdn.imweb.me/thumbnail/20221209/a543c57fd8a5f.png",
    alt: "Corthay logo",
    url: "https://www.corthay.com/fr/",
  },
];
