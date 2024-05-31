"use client"
/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import { Section } from "../../organisms/_components/Section";
import { Box, MessageCircle, Rss, StickyNote, Code, Flame, ChefHat, Image} from "lucide-react";
import {
  SideProject,
  SideProjectProps,
} from "../../atoms/_components/SideProject";
// import { ContactCard } from "../../atoms/_components/ContactCard";
import { Work, WorkProps } from "../../atoms/_components/Work";

export const ProjectSection = () => {
  return (
    <Section className="flex flex-col max-md:flex-col items-start gap-6">
      <div className="flex-[3] w-full">
        <Card className="flex flex-col gap-2 p-4 w-full">
          <p className="text-lg text-muted-foreground uppercase">
            Side, fun projects.
          </p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((project, index) => (
              <SideProject
                key={index}
                Logo={project.Logo}
                title={project.title}
                description={project.description}
                url={project.url}
              />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[2] w-full gap-4 flex flex-col">
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground uppercase">Works.</p>
          <div className="flex flex-col gap-4">
            {WORKS.map((work, index) => (
              <Work key={index} {...work} />
            ))}
          </div>
        </Card>
        {/* <Card className="p-4 flex-1 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground uppercase">Contact me.</p>
          <ContactCard
            url="/"
            name="@rardooba"
            image="https://media.licdn.com/dms/image/C4E03AQE_zbpU8wOhGQ/profile-displayphoto-shrink_400_400/0/1621109832517?e=1718841600&v=beta&t=KowsdyeHbSNCBzsOfh3YrcJka4ggkENJxoVfRCCcftg"
            mediumImage="https://upload.wikimedia.org/wikipedia/commons/9/95/Twitter_new_X_logo.png"
            description="2'000"
          />
          <ContactCard
            url="/"
            name="Maïssoum.A"
            image="https://media.licdn.com/dms/image/C4E03AQE_zbpU8wOhGQ/profile-displayphoto-shrink_400_400/0/1621109832517?e=1718841600&v=beta&t=KowsdyeHbSNCBzsOfh3YrcJka4ggkENJxoVfRCCcftg"
            mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
            description="+3'000"
          />
        </Card> */}
      </div>
    </Section>
  );
};

const SIDE_PROJECTS: SideProjectProps[] = [
  {
    Logo: Box,
    title: "To_ox",
    description: "A community platform for sharing dev tools between front-end developers. ⚙️: Firebase | Next.js | ChakraUI | Emotion | Framer Motion | TypeScript.",
    url: "https://toox-app.vercel.app/",
  },
  {
    Logo: Flame,
    title: "Combosss",
    description: "🚧 W.I.P >> A platform for fans of versus fighting games 🎮 (2D brawlers) to share their best combos. ⚙️: PostgreSQL | Drizzle | Hono | Node.js | Argon2 | TypeScript.",
    url: "https://github.com/rardooba/combosss-backEnd",
  },
  {
    Logo: Image,
    title: "My Portfolio",
    description: "Made with ❤️. I implemented a few surprises to highlight my out-of-the-box thinking while maintaining a minimalist portfolio. The goal is to help you quickly establish an accurate candidate or collaborator profile. My passion has become my work, not the reverse. ⚙️: Next | Typescript | TailwindCss | ShadCnUi | Calcom | Framer Motion | Gsap.",
    url: "https://maissoum.dev",
  },
  // {
  //   Logo: ChefHat,
  //   title: "Les petits plats",
  //   description: "A school project from OpenClassrooms. I created a cooking recipe search algorithm in Vanilla JS. ⚙️: JAvascript | SCSS | Webpack4 | State pattern.",
  //   url: "https://github.com/rardooba/Les-petits-plats-by-rardooba",
  // },
];

const WORKS: WorkProps[] = [
  {
    image:
      "https://perigordians-by-rardooba.netlify.app/public/imgs/mods/mod-personnages/tuile-bouclier-pourpre.png",
    title: "Perigordiä",
    role: "dev front",
    date: "2013 - 2022",
    url: "https://www.perigordians.fr/",
  },
  {
    image:
      "./assets/clients/comnecting-management.jpg",
    title: "CBI Immo",
    role: "Dev Wordpress | Web design",
    date: "2013 - 2017",
    url: "https://www.comnecting-management.com",
    freelance: true,
  },
  {
    image:
      "./assets/clients/digital-prod.jpg",
    title: "Digital Prod",
    role: "Webdesigner",
    date: "2011 - 2017",
    url: "https://www.digitalprod.com/",
  },
  {
    image:
      "./assets/clients/saint-alvere.jpg",
    title: "Mairie de Sainte-Alvère",
    role: "Dev Wordpress",
    date: "2013 - 2014",
    url: "https://arttocode.fr/le-village-de-sainte-alvere",
    freelance: true,
  },
  {
    image:
      "./assets/clients/disney.jpg",
    title: "Disney Infinity 2.0",
    role: "Dev Front",
    date: "2013 - 2014",
    url: "https://arttocode.fr/disney-infinity-20",
    freelance: true,
  },
  {
    image:
      "./assets/clients/miniplanes.jpg",
    title: "Miniplanes",
    role: "Webdesigner",
    date: "2012 - 2013",
    url: "https://arttocode.fr/miniplanes",
  },
];
