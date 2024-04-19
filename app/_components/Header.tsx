/* eslint-disable @next/next/no-img-element */
import { buttonVariants } from "@/components/ui/button";
import { Section } from "./Section";
import {
  FaGithub,
  FaBehance,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

import Link from "next/link";
import { cn } from "@/lib/utils";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm backdrop-grayscale">
      <Section className="flex item-baseline py-4">
        <Link href="/">
          <img src="./assets/logo.jpg" alt="Maïssoum logo" className="w-10 h-10 rounded-full object-contain"/>
        </Link>
        <div className="flex-1" />
        <ul className="flex items-center gap-2">
          <Link
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-6 p-0 text-lg"
            )}
            href="http://github.com/rardooba"
          >
            <FaGithub />
          </Link>
          <Link
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-6 p-0 text-lg"
            )}
            href="http://github.com/rardooba"
          >
            <FaBehance />
          </Link>
          <Link
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-6 p-0 text-lg"
            )}
            href="http://github.com/rardooba"
          >
            <FaXTwitter />
          </Link>
          <Link
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-6 p-0 text-lg"
            )}
            href="http://github.com/rardooba"
          >
            <FaInstagram />
          </Link>
          <Link
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-6 p-0 text-lg"
            )}
            href="http://github.com/rardooba"
          >
            <FaLinkedinIn />
          </Link>
        </ul>
      </Section>
    </header>
  );
};
