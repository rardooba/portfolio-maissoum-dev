"use client";
/* eslint-disable @next/next/no-img-element */
import { buttonVariants } from "@/components/ui/button";
import { Section } from "../../organisms/_components/Section";
import {
  FaGithub,
  FaBehance,
  FaThreads,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

import Link from "next/link";
import { cn } from "@/lib/utils";
import Magnetic from "../../atoms/_components/Magnetic";
import LogoAnimation from "../../atoms/_components/LogoAnimation";
import AudioPlayer from "@/app/atoms/_components/AudioPlayer";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm backdrop-grayscale z-30 hover:cursor-grab active:cursor-grabbing">
      <Section className="flex item-baseline pt-4 pb-[1.35rem]">
        <LogoAnimation />

        <div className="flex-1">
          <AudioPlayer src="./assets/playlist/audio.mp3" />
        </div>
        <ul className="flex items-center gap-2">
          <Magnetic>
            <Link
              className={cn(
                buttonVariants({ variant: "outline" }),
                "size-6 p-0 text-lg"
              )}
              href="https://github.com/rardooba"
              target="_blank"
            >
              <FaGithub />
            </Link>
          </Magnetic>
          <Magnetic>
            <Link
              className={cn(
                buttonVariants({ variant: "outline" }),
                "size-6 p-0 text-lg"
              )}
              href="https://www.behance.net/art-to-code"
              target="_blank"
            >
              <FaBehance />
            </Link>
          </Magnetic>
          <Magnetic>
            <Link
              className={cn(
                buttonVariants({ variant: "outline" }),
                "size-6 p-0 text-lg"
              )}
              href="https://www.threads.net/@maissoum.dev"
              target="_blank"
            >
              <FaThreads />
            </Link>
          </Magnetic>
          <Magnetic>
            <Link
              className={cn(
                buttonVariants({ variant: "outline" }),
                "size-6 p-0 text-lg"
              )}
              href="https://www.instagram.com/maissoum.dev"
              target="_blank"
            >
              <FaInstagram />
            </Link>
          </Magnetic>
          <Magnetic>
            <Link
              className={cn(
                buttonVariants({ variant: "outline" }),
                "size-6 p-0 text-lg"
              )}
              href="https://www.linkedin.com/in/maissoum-aboudrare"
              target="_blank"
            >
              <FaLinkedinIn />
            </Link>
          </Magnetic>
        </ul>
      </Section>
    </header>
  );
};
