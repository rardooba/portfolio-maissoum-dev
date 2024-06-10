"use client"
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
import { FaDev, FaFilePdf, FaHeadset } from "react-icons/fa6";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Magnetic from "../../atoms/_components/Magnetic";
import TitleEncrypt from "../../atoms/_components/TitleEncrypt";
import GlitchAvatar from "../../atoms/_components/GlitchAvatar";
import { useState, useEffect } from "react";

export const Hero = () => {
  const [isWizzing, setIsWizzing] = useState(false);

  useEffect(() => {
    const wizzInterval = setInterval(() => {
      setIsWizzing(true);
      setTimeout(() => {
        setIsWizzing(false);
      }, 1000); 
    }, 5000); 

    return () => clearInterval(wizzInterval);
  }, []);

  return (
    <Section className="flex max-md:flex-col items-center gap-6">
      <GlitchAvatar />
      <div className="flex-[3] w-full flex flex-col gap-2">
        <h2 className="font-caption text-5xl text-primary font-bold flex gap-2">
          🦄 <TitleEncrypt />
        </h2>

        <h3 className="text-3xl font-caption">Digital Craftsman</h3>
        <h4 className="text-sm text-muted-foreground -mt-3">Artist / Developer / Designer</h4>
        <p className="text-base leading-7">
          Based in{" "}
          <Link href="#">
            <Code
              className="inline-flex gap-1"
              title={<>🇫🇷 France</>}
              description="I am of French nationality and proudly embrace the “made in France” while adding a touch of exoticism from my Amazigh ⵣ origins in Morocco 🇲🇦."
            >
              <span className="inline">🇫🇷</span>France
            </Code>
          </Link>
          , with 10 years of web experience, Specialized in{" "}
          <Link href="#">
            <Code
              className="inline-flex gap-1"
              title={
                <>
                  <SiNextdotjs className="inline" /> Nextjs
                </>
              }
              description="Next.js is an open-source framework based on React, used to develop high-performance web applications. It is particularly appreciated for its ability to generate static and dynamic pages, manage server-side rendering (SSR), and facilitate SEO optimization. These features make it a preferred choice in the modern web application industry."
            >
              <span className="block">
              <SiNextdotjs className="inline" />
              </span>
              Nextjs
            </Code>
          </Link>{" "}
          and{" "}
          <Link href="#">
            <Code
              className="inline-flex gap-1"
              title={
                <>
                  <SiReact className="inline" /> React
                </>
              }
              description="I took a course to update my skills on the React library at OpenClassrooms in 2021. Since then, I have continuously learned by working on various side projects, which has allowed me to strengthen my skills and stay at the forefront of new front-end development practices."
            >
              <span className="block">

              <SiReact className="inline" />
              </span>
              React
            </Code>
          </Link>
          , with particular affinity for web design and front-end development, while also working solid skills in back-end with Node,{" "}
          <Link href="#">
            <Code
              className="inline-flex gap-1"
              title={
                <>
                  <SiTypescript className="inline" /> TypeScript
                </>
              }
              description="Using TypeScript with JavaScript has become essential for ensuring code robustness and maintainability. TypeScript’s static typing allows for error detection before execution, facilitates refactoring, and improves code documentation, making development more reliable and efficient."
            >
              <span className="block">

                <SiTypescript className="inline" />
              </span>
              
              TypeScript
            </Code>
          </Link>{" "}
          and{" "}
          <Link href="#">
            <Code
              className="inline-flex gap-1"
              title={
                <>
                  <BiLogoPostgresql className="inline" /> PostgreSQL
                </>
              }
              description="To advance towards a full-stack profile, I delved into back-end exploration through Node.js, PostgreSQL, Drizzle, Argon2, and Hono. This approach has allowed me to better understand the interactions between front-end and back-end, as well as develop complete web applications."
            >
              <span className="block">

              <BiLogoPostgresql className="inline" />
              </span>
              PostgreSQL
            </Code>
          </Link>
          . Passionate about sharing knowledge, I create content on{" "}
          <Link href="#">
            <Code
              className="inline-flex gap-1"
              title={
                <>
                  <SiYoutubeshorts className="inline" />
                  Youtube
                </>
              }
              description="I launched my YouTube channel in 2024 to share my daily life as a developer, meet future collaborators, and improve my programming skills through feedback from my community. I am just starting on this platform, but the best is yet to come."
            >
              <span className="block">

              <SiYoutubeshorts className="inline" />
              </span>
              Youtube
            </Code>
          </Link>
          about the life of a freelance developer and programming concepts. Currently , I am working on various personal projects and publishing articles on{" "}
          <Link href="#">
            <Code
              className="inline-flex gap-1"
              title={
                <>
                  <FaDev className="inline" />
                  Dev.co
                </>
              }
              description="I love writing, and contributing to Dev.co gives me the opportunity to share my knowledge and stay updated on innovations shaping the future of web development."
            >
              <span className="block">

              <FaDev className="inline" />
              </span>
              Dev.co
            </Code>
          </Link>
          . <Code
              className={`inline-flex gap-1 ${
                isWizzing ? "animate-wizz" : ""
              }`}
              title={
                <>
                  OPEN TO WORK !
                </>
              }
              description="I am open to opportunities for missions or permanent positions in startups, scaleups, unicorns or other companies. I specialize in creating web interfaces with Figma, front-end and back-end development using Next.js, PostgreSQL, Node.js, TailwindCSS, and TypeScript. I build turnkey websites with customized content management systems or headless CMS like Strapi or WordPress. While I do limited unit testing, I am proficient with Jest and React Testing Library for simple tests. I adapt quickly to new organizations or technologies within a week, provided there is documentation. I use GitHub for team collaboration and version control of my projects."
            ><span className="text-red-600 font-medium">
            
            [ OPEN TO WORK ! ]
            </span></Code> ✨
        </p>
        <div className="flex gap-4">
          <Magnetic>
            <Button asChild className="flex gap-2 hover:bg-red-600 cursor-default">
            <a href="./assets/cv/cv-maissoum-aboudrare-dev-js.pdf" target="_blank">
              <FaFilePdf className="inline" />
              my CV.
            </a>
            </Button>
          </Magnetic>
          <Magnetic>
            <Button asChild className="flex gap-2 hover:bg-red-600 cursor-default">
              <a href="#callme">
                <FaHeadset className="inline" />
                Schedule a call
              </a>
            </Button>
          </Magnetic>
        </div>
      </div>
    </Section>
  );
};
