"use client"
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Section } from "../../organisms/_components/Section";
import { Box, MessageCircle, Rss, StickyNote, Code, Flame, ChefHat, Image} from "lucide-react";
import {
  SideProject,
  SideProjectProps,
} from "../../atoms/_components/SideProject";
import { Work, WorkProps } from "../../atoms/_components/Work";
import { Pagination } from "@/app/atoms/_components/Pagination";

export const ProjectSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageSP, setCurrentPageSP] = useState(1);
  const worksPerPage = 3;

  const indexOfLastWork = currentPage * worksPerPage;
  const indexOfFirstWork = indexOfLastWork - worksPerPage;
  const currentWorks = WORKS.slice(
    indexOfFirstWork,
    indexOfLastWork
  );

  const SPPerPage = 1;

  const indexOfLastSP = currentPageSP * SPPerPage;
  const indexOfFirstSP = indexOfLastSP - SPPerPage;
  const currentSP = SIDE_PROJECTS.slice(
    indexOfFirstSP,
    indexOfLastSP
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const paginateSP = (pageNumber: number) => setCurrentPageSP(pageNumber);
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[2] w-full">
        <Card className="flex flex-col gap-2 p-4 w-full">
          <p className="text-lg text-muted-foreground uppercase">
            Side, fun projects.
          </p>
          <div className="flex flex-col gap-4">
            {currentSP.map((project, index) => (
              <SideProject
                key={index}
                Logo={project.Logo}
                title={project.title}
                description={project.description}
                url={project.url}
              />
            ))}
          </div>
          <Pagination
            itemsPerPage={SPPerPage}
            totalItems={SIDE_PROJECTS.length}
            paginate={paginateSP}
            currentPage={currentPageSP}
          />
        </Card>
      </div>
      <div className="flex-[2] w-full gap-4 flex flex-col">
        <Card className="p-4 flex-1 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
          <p className="text-lg text-muted-foreground uppercase">Works.</p>
          <div className="flex flex-col gap-4">
            {currentWorks.map((work, index) => (
              <Work key={index} {...work} />
            ))}
          </div>
          <Pagination
            itemsPerPage={worksPerPage}
            totalItems={WORKS.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </Card>
      </div>
    </Section>
  );
};



const SIDE_PROJECTS: SideProjectProps[] = [
  {
    Logo: Flame,
    title: "Combosss",
    description: "🚧 W.I.P >> A platform for fans of versus fighting games 🎮 (2D brawlers) to share their best combos. ⚙️: PostgreSQL | Drizzle | Hono | Node.js | Argon2 | TypeScript.",
    url: "https://github.com/rardooba/combosss-backEnd",
  },
  {
    Logo: Box,
    title: "To_ox",
    description: "A community platform for sharing dev tools between front-end developers. ⚙️: Firebase | Next.js | ChakraUI | Emotion | Framer Motion | TypeScript.",
    url: "https://toox-app.vercel.app/",
  },
  {
    Logo: Image,
    title: "My Portfolio",
    description: "Made with ❤️. I implemented a few surprises to highlight my out-of-the-box thinking while maintaining a minimalist portfolio. The goal is to help you quickly establish an accurate candidate or collaborator profile. My passion has become my work, not the reverse. ⚙️: Next | Typescript | TailwindCss | ShadCnUi | Calcom | Framer Motion | Gsap.",
    url: "https://maissoum.dev",
  },
];

const WORKS: WorkProps[] = [
  {
    image:
      "https://live.staticflickr.com/8460/7979955929_58e8c841da_m.jpg",
    title: "imiximik",
    role: "Artistic director | Webdesigner | 311 projects",
    date: "2010 - 2018",
    url: "https://www.behance.net/art-to-code",
    freelance: true,
  },
  {
    image:
      "https://perigordians-by-rardooba.netlify.app/public/imgs/mods/mod-personnages/tuile-bouclier-pourpre.png",
    title: "Perigordiä",
    role: "Wordpress developer | 4 projects",
    date: "2013 - 2022",
    url: "https://www.perigordians.fr/",
  },
  {
    image:
      "./assets/clients/comnecting-management.jpg",
    title: "Comnecting Management",
    role: "Wordpress developer | Webdesigner | 3 projects",
    date: "2013 - 2017",
    url: "https://www.comnecting-management.com",
    freelance: true,
  },
  {
    image:
      "./assets/clients/digital-prod.jpg",
    title: "Digital Prod",
    role: "Webdesigner | Flash animator | 67 projects",
    date: "2011 - 2017",
    url: "https://www.digitalprod.com/",
  },
  {
    image:
      "./assets/clients/miniplanes.jpg",
    title: "Miniplanes",
    role: "Webdesigner | Graphic designer | 29 projects",
    date: "2012 - 2013",
    url: "https://arttocode.fr/miniplanes",
  },
  {
    image:
      "./assets/clients/inextcom.jpg",
    title: "Inextcom",
    role: "Webdesigner | Joomla integrator | 7 projects",
    date: "2010 - 2011",
    url: "https://www.societe.com/societe/inextcom-501436232.html",
  },
];
