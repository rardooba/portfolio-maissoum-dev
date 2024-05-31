"use client"
import { Badge } from "@/components/ui/badge";
import { Section } from "../../organisms/_components/Section";
import Link from "next/link";
import Magnetic from "../../atoms/_components/Magnetic";
import { CalcomEmbed } from "./CalcomEmbed";
//import {Booker} from "@calcom/atoms"

export const CallmeImFamous = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge id="callme" variant="outline">Schedule a call with me</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
         30 minutes to talk about your project 🤙
      </h2>
      {/* <Booker
      username="rardooba"
      eventSlug="call-with-maissoum"
      /> */}
      <CalcomEmbed />
    </Section>
  );
};
