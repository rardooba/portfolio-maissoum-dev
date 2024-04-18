/* eslint-disable @next/next/no-img-element */
import { ComponentPropsWithoutRef } from "react";
import { Section } from "./Section";
import { cn } from "@/lib/utils";

import { SiYoutubeshorts } from "react-icons/si";
import { FaDev } from "react-icons/fa6";
import Link from "next/link";

const Code = ({className, ...props}: ComponentPropsWithoutRef<"span">) => {
  return <span className={cn("bg-accent/30 hover:bg-accent/80 transition-colors border border-accent rounded-sm px-1 py-0.5 font-mono text-primary cursor-zoom-in", className)} {...props}/>
}

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-center gap-6">
      <div className="flex-[2] max-md:m-auto mr-auto">
        <img src="./assets/avatar.jpg" alt="Maïssoum's picture" className="w-full h-auto rounded-full max-md:w-50" />
      </div>
      <div className="flex-[3] w-full flex flex-col gap-2">
        <h2 className="font-caption text-5xl text-primary font-bold">🦄 Maïssoum</h2>
        <h3 className="text-3xl font-caption">Craftman Software dev & creator</h3>
        <p className="text-base">
          I love creating content on <Link href="#"><Code className="inline-flex items-center gap-1"><SiYoutubeshorts className="inline"/>Youtube</Code></Link>, currently working at home on my sides project. Sometime I write an article on <Link href="#"><Code className="inline-flex items-center gap-1"><FaDev className="inline"/>Dev.co</Code></Link>. Living in <Code className="inline-flex items-center gap-1"><span className="inline">🇫🇷</span>France</Code>.
        </p>
      </div>
    </Section>
  );
};
