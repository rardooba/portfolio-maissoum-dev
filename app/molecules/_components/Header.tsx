/* eslint-disable @next/next/no-img-element */
import { buttonVariants } from "@/components/ui/button";
import { Section } from "../../organisms/_components/Section";
import {
  FaGithub,
  FaBehance,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

import Link from "next/link";
import { cn } from "@/lib/utils";
import Magnetic from "../../atoms/_components/Magnetic";
import LogoAnimation from "../../atoms/_components/LogoAnimation";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm backdrop-grayscale z-30 hover:cursor-grab active:cursor-grabbing">
      <Section className="flex item-baseline py-4">
        <LogoAnimation />
        <div className="flex-1" />
        <ul className="flex items-center gap-2">
          <Magnetic>
            <Link
              className={cn(
                buttonVariants({ variant: "outline" }),
                "size-6 p-0 text-lg"
              )}
              href="http://github.com/rardooba"
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
              href="http://github.com/rardooba"
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
              href="http://github.com/rardooba"
            >
              <FaXTwitter />
            </Link>
          </Magnetic>
          <Magnetic>
            <Link
              className={cn(
                buttonVariants({ variant: "outline" }),
                "size-6 p-0 text-lg"
              )}
              href="http://github.com/rardooba"
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
              href="http://github.com/rardooba"
            >
              <FaLinkedinIn />
            </Link>
          </Magnetic>
        </ul>
      </Section>
    </header>
  );
};
