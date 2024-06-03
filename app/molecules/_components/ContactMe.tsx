"use client"
import { Badge } from "@/components/ui/badge";
import { Section } from "../../organisms/_components/Section";
import { ContactCard } from "../../atoms/_components/ContactCard";
import { useRef, useState } from "react";

export const ContactMe = () => {
  const [emoIndex, setEmoIndex] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const getEmoji = () => {
    const emojis = ["😜", "🤓", "😘", "🤭", "🥱", "😴", "😵", "🤢", "🤮", "😡"];

    let btn = ref.current;
    if (btn) {
      if (emoIndex < emojis.length) {
        btn.innerText = emojis[emoIndex];
        setEmoIndex((prev) => prev + 1);
      } else {
        setEmoIndex(0);
      }
    }
  };
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant="outline">Contact me.</Badge>
      <h2
        className="pb-2 text-3xl font-semibold tracking-tight first:mt-0 cursor-default"
      >
        I will be happy to work with you <span ref={ref} className="inline-block transition grayscale hover:grayscale-0 scale-100 hover:scale-125 cursor-default" onMouseEnter={getEmoji}>🥰</span>
      </h2>
      <div className="flex max-md:flex-col gap-4 w-full cursor-default">
        <ContactCard
          className="flex-1 cursor-default"
          url="https://www.threads.net/@maissoum.dev"
          name="maissoum.dev"
          image="./assets/contact/thread.jpg"
          mediumImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmOQT83dtIlgCmJiM8X08gAFfHSDkuxBXA1Q&s"
          description=""
        />
        <ContactCard
          className="flex-1 cursor-default"
          url="https://www.linkedin.com/in/maissoum-aboudrare"
          name="Maïssoum.A"
          image="https://media.licdn.com/dms/image/D4E35AQHuGqXgXcjEsg/profile-framedphoto-shrink_400_400/0/1717399397665?e=1718017200&v=beta&t=49ipyGeL3tD3IryKeqSW4p_83wRMeWScTUYmDhJx4OU"
          mediumImage="https://static.vecteezy.com/system/resources/previews/023/986/970/original/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png"
          description="+1'000"
        />
        <ContactCard
          className="flex-1 cursor-default"
          url="mailto:me@maissoum.dev, rardooba@gmail.com"
          name="Mail"
          image="./assets/contact/mail.jpg"
          mediumImage="https://play-lh.googleusercontent.com/KSuaRLiI_FlDP8cM4MzJ23ml3og5Hxb9AapaGTMZ2GgR103mvJ3AAnoOFz1yheeQBBI"
          description="mail me 💌"
        />
      </div>
    </Section>
  );
};
