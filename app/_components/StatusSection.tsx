/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import {
  Code,
  Home,
  LucideIcon,
  MessageCircle,
  Rss,
  StickyNote,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export const StatusSection = () => {
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
                <Work
                  key={index}
                  {...work}
                />
              ))}
            </div>
          
        </Card>
        <Card className="p-4 flex-1">Contact me.</Card>
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
];

type SideProjectProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
};

const SideProject = (props: SideProjectProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/80 transition-colors rounded p-1"
    >
      <span className="bg-accent text-accent-foreground p-3 rounded-sm">
        <props.Logo size={16} />
      </span>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};

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
  },
];

type WorkProps = {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
  freelance?: boolean;
};

const Work = (props: WorkProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/80 transition-colors rounded p-1"
    >
     
        <img
          src={props.image}
          alt={props.image}
          className="w-10 h-10 object-contain rounded-md"
          
        />
     
      <div className="mr-auto">
        <div className="flex items-center gap-2">
        <p className="text-lg font-semibold">{props.title}</p>
        {props.freelance && <Badge variant="outline">Mission</Badge>}
        </div>
        <p className="text-xs text-muted-foreground">{props.role}</p>
      </div>
   
        <p className="text-xs text-end text-muted-foreground">{props.date}</p>
   
    </Link>
  );
};
