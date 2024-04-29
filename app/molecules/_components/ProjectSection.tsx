/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import { Section } from "../../organisms/_components/Section";
import { Code, MessageCircle, Rss, StickyNote } from "lucide-react";
import {
  SideProject,
  SideProjectProps,
} from "../../atoms/_components/SideProject";
import { ContactCard } from "../../atoms/_components/ContactCard";
import { Work, WorkProps } from "../../atoms/_components/Work";

export const ProjectSection = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-6">
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
                url="/"
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
        <Card className="p-4 flex-1 flex flex-col gap-2">
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
        </Card>
      </div>
    </Section>
  );
};

const SIDE_PROJECTS: SideProjectProps[] = [
  {
    Logo: Code,
    title: "To_ox",
    description: "A platform for front-end developers to share a dev tool.",
    url: "/",
  },
  {
    Logo: StickyNote,
    title: "To_ox",
    description: "A platform for front-end developers to share a dev tool.",
    url: "/",
  },
  {
    Logo: Rss,
    title: "To_ox",
    description: "A platform for front-end developers to share a dev tool.",
    url: "/",
  },
  {
    Logo: MessageCircle,
    title: "To_ox",
    description: "A platform for front-end developers to share a dev tool.",
    url: "/",
  },
  {
    Logo: MessageCircle,
    title: "To_ox",
    description: "A platform for front-end developers to share a dev tool.",
    url: "/",
  },
];

const WORKS: WorkProps[] = [
  {
    image:
      "https://media.licdn.com/dms/image/C4E0BAQFS8xQa957hUA/company-logo_100_100/0/1677256019498?e=1721260800&v=beta&t=FFoSKz0V2SZtEXj1old7mQEoUgDrIYWXAPJhqu0PPdA",
    title: "Imiximik",
    role: "Freelancer DA.",
    date: "2009 - 2017",
    url: "/",
  },
  {
    image:
      "https://media.licdn.com/dms/image/C4E0BAQFS8xQa957hUA/company-logo_100_100/0/1677256019498?e=1721260800&v=beta&t=FFoSKz0V2SZtEXj1old7mQEoUgDrIYWXAPJhqu0PPdA",
    title: "Imiximik",
    role: "Freelancer DA.",
    date: "2009 - 2017",
    url: "/",
    freelance: true,
  },
];
