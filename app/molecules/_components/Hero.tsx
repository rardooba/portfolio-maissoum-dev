/* eslint-disable @next/next/no-img-element */
import { Section } from "../../organisms/_components/Section";
import { Code } from "../../atoms/_components/Code";

import {
  SiYoutubeshorts,
  SiNextdotjs,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaDev, FaFilePdf } from "react-icons/fa6";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Magnetic from "../../atoms/_components/Magnetic";
import TitleEncrypt from "../../atoms/_components/TitleEncrypt";
import GlitchAvatar from "../../atoms/_components/GlitchAvatar";

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-center gap-6">
      <GlitchAvatar />
      <div className="flex-[3] w-full flex flex-col gap-2">
        <h2 className="font-caption text-5xl text-primary font-bold flex gap-2">
          🦄 <TitleEncrypt />
        </h2>

        <h3 className="text-3xl font-caption">Craftman Software & artist</h3>
        <p className="text-base">
          Based in{" "}
          <Link href="#">
            <Code
              className="inline-flex items-center gap-1"
              title={<>🇫🇷 France</>}
              description="blabla"
            >
              <span className="inline">🇫🇷</span>France
            </Code>
          </Link>
          , with 10 years of web experience, I specialize in{" "}
          <Link href="#">
            <Code
              className="inline-flex items-center gap-1"
              title={
                <>
                  <SiNextdotjs className="inline" /> Nextjs
                </>
              }
              description="blabla"
            >
              <SiNextdotjs className="inline" />
              Nextjs
            </Code>
          </Link>{" "}
          and{" "}
          <Link href="#">
            <Code
              className="inline-flex items-center gap-1"
              title={
                <>
                  <SiReact className="inline" /> React
                </>
              }
              description="blabla"
            >
              <SiReact className="inline" />
              React
            </Code>
          </Link>
          , focusing on front-end development and web design. Skilled in{" "}
          <Link href="#">
            <Code
              className="inline-flex items-center gap-1"
              title={
                <>
                  <SiTypescript className="inline" /> TypeScript
                </>
              }
              description="blabla"
            >
              <SiTypescript className="inline" />
              TypeScript
            </Code>
          </Link>{" "}
          and{" "}
          <Link href="#">
            <Code
              className="inline-flex items-center gap-1"
              title={
                <>
                  <BiLogoPostgresql className="inline" /> PostgreSQL
                </>
              }
              description="blabla"
            >
              <BiLogoPostgresql className="inline" />
              PostgreSQL
            </Code>
          </Link>
          . I love creating content on{" "}
          <Link href="#">
            <Code
              className="inline-flex items-center gap-1"
              title={
                <>
                  <SiYoutubeshorts className="inline" />
                  Youtube
                </>
              }
              description="Blabla"
            >
              <SiYoutubeshorts className="inline" />
              Youtube
            </Code>
          </Link>
          , currently working at home on my sides project. Sometime I write an
          article on{" "}
          <Link href="#">
            <Code
              className="inline-flex items-center gap-1"
              title={
                <>
                  <FaDev className="inline" />
                  Dev.co
                </>
              }
              description="Blabla"
            >
              <FaDev className="inline" />
              Dev.co
            </Code>
          </Link>
          . <br />
          Ready to bring digital visions to life! ✨
        </p>
        <div>
          <Magnetic>
            <Button className="flex gap-2 hover:bg-red-600">
              <FaFilePdf className="inline" />
              my CV.
            </Button>
          </Magnetic>
        </div>
      </div>
    </Section>
  );
};
