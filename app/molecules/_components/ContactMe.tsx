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
          description="Daily news 🗞️"
        />
        <ContactCard
          className="flex-1 cursor-default"
          url="https://www.linkedin.com/in/maissoum-aboudrare"
          name="Maïssoum.A"
          image="https://media.licdn.com/dms/image/D4D35AQGPrpZ_aLf35Q/profile-framedphoto-shrink_400_400/0/1719224661914?e=1719864000&v=beta&t=LwKr-ci-TCwIpi72DT8S54pT2k9wTsGJsIK-38guIEQ"
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
        <div className="flex max-md:flex-col gap-4 w-full cursor-default">
        <ContactCard
          className="flex-1 cursor-default"
          url="https://www.instagram.com/maissoum.dev/"
          name="maissoum.dev"
          image="https://scontent.cdninstagram.com/v/t51.2885-19/432721232_467964668905408_3263302185316715409_n.jpg?stp=dst-jpg_s150x150&_nc_cat=100&ccb=1-7&_nc_sid=07cfa3&_nc_ohc=G3UwK0Ji8qYQ7kNvgFbd48I&_nc_ht=scontent.cdninstagram.com&oh=00_AYCNRg6vG6osT7W4ug2br2bsprA_0bj6J4OkHGmDFbyZyQ&oe=667FBC7B"
          mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/800px-Instagram_logo_2022.svg.png"
          description="My coder life 🔥"
        />
        <ContactCard
          className="flex-1 cursor-default"
          url="https://www.youtube.com/@maissoum"
          name="🦄 maïssoum"
          image="https://yt3.googleusercontent.com/TqClVWBSeycRwJjFmzwrtR-579veEbqSH9PDP2hmaaM1HXtzFxE21Kii4bCmPalK415kqCxEhg=s176-c-k-c0x00ffffff-no-rj"
          mediumImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_4N37TIgWC_QLpspNwGddZH8DhzljeYMFnA&s"
          description="Beginner 🌱"
        />
        <ContactCard
          className="flex-1 cursor-default"
          url="https://www.malt.fr/profile/maissoumaboudrare"
          name="Freelancer"
          image="https://media.licdn.com/dms/image/D4D35AQGPrpZ_aLf35Q/profile-framedphoto-shrink_400_400/0/1719224661914?e=1719864000&v=beta&t=LwKr-ci-TCwIpi72DT8S54pT2k9wTsGJsIK-38guIEQ"
          mediumImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuvPz7GsZ6Bq7Q3pF1AkBBmH7QTh6uAlIbjg&s"
          description="Hire me 🚀"
        />
      </div>
    </Section>
  );
};
