/* eslint-disable @next/next/no-img-element */
import { Section } from "./Section";
import { Code } from "./Code";

import { SiYoutubeshorts } from "react-icons/si";
import { FaDev, FaFilePdf } from "react-icons/fa6";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Magnetic from "./Magnetic";
import TitleEncrypt from "./TitleEncrypt";

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-center gap-6">
      <div className="flex-[2] max-md:m-auto mr-auto relative -z-50">
        <img
          src="./assets/avatar.jpg"
          alt="Maïssoum's picture"
          className="w-full h-auto rounded-full max-md:w-50 grayscale contrast-125"
        />
      </div>
      <div className="flex-[3] w-full flex flex-col gap-2">
        <h2 className="font-caption text-5xl text-primary font-bold flex gap-2">
          🦄 <TitleEncrypt />
        </h2>

        <h3 className="text-3xl font-caption">Craftman Software & artist</h3>
        <p className="text-base">
          I love creating content on{" "}
          <Link href="#">
            <Code className="inline-flex items-center gap-1">
              <SiYoutubeshorts className="inline" />
              Youtube
            </Code>
          </Link>
          , currently working at home on my sides project. Sometime I write an
          article on{" "}
          <Link href="#">
            <Code className="inline-flex items-center gap-1">
              <FaDev className="inline" />
              Dev.co
            </Code>
          </Link>
          . Living in{" "}
          <Code className="inline-flex items-center gap-1">
            <span className="inline">🇫🇷</span>France
          </Code>
          .
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
