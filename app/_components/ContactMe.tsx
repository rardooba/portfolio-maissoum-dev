import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { ReactLogo } from "./icons/ReactLogo";
import { Code } from "./Code";
import { TailwindLogo } from "./icons/TailwindLogo";
import { NextLogo } from "./icons/NextLogo";
import { ContactCard } from "./ContactCard";

export const ContactMe = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant="outline">Contact me.</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I will be happy to work with you 🥰
      </h2>
      <div className="flex max-md:flex-col gap-4 w-full">
        <ContactCard
          className="flex-1"
          url="/"
          name="@rardooba"
          image="https://media.licdn.com/dms/image/C4E03AQE_zbpU8wOhGQ/profile-displayphoto-shrink_400_400/0/1621109832517?e=1718841600&v=beta&t=KowsdyeHbSNCBzsOfh3YrcJka4ggkENJxoVfRCCcftg"
          mediumImage="https://upload.wikimedia.org/wikipedia/commons/9/95/Twitter_new_X_logo.png"
          description="2'000"
        />
        <ContactCard
          className="flex-1"
          url="/"
          name="Maïssoum.A"
          image="https://media.licdn.com/dms/image/C4E03AQE_zbpU8wOhGQ/profile-displayphoto-shrink_400_400/0/1621109832517?e=1718841600&v=beta&t=KowsdyeHbSNCBzsOfh3YrcJka4ggkENJxoVfRCCcftg"
          mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
          description="+3'000"
        />
        <ContactCard
          className="flex-1"
          url="mailto:contact@maissoum.dev"
          name="Mail"
          image="https://media.licdn.com/dms/image/C4E03AQE_zbpU8wOhGQ/profile-displayphoto-shrink_400_400/0/1621109832517?e=1718841600&v=beta&t=KowsdyeHbSNCBzsOfh3YrcJka4ggkENJxoVfRCCcftg"
          mediumImage="https://play-lh.googleusercontent.com/KSuaRLiI_FlDP8cM4MzJ23ml3og5Hxb9AapaGTMZ2GgR103mvJ3AAnoOFz1yheeQBBI"
          description="Email me 💌"
        />
      </div>
    </Section>
  );
};
