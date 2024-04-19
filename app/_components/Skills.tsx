import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { ReactLogo } from "./icons/ReactLogo";
import { Code } from "./Code";
import { TailwindLogo } from "./icons/TailwindLogo";
import { NextLogo } from "./icons/NextLogo";
import { JavascriptLogo } from "./icons/JavascriptLogo";

export const Skills = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant="outline">Skills</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I love working on...
      </h2>
      <div className="flex max-md:flex-col gap-4">
        <div className="flex flex-col gap-2 flex-1">
          <JavascriptLogo size={42} />

          <h3 className="text-2xl font-semibold tracking-tight">
            Javascript ES+
          </h3>
          <p className="text-sm text-muted-foreground">
            My main library is <Code>React</Code>. I also
          </p>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <ReactLogo
            size={42}
            className="animate-spin"
            style={{ animationDuration: "10s" }}
          />

          <h3 className="text-2xl font-semibold tracking-tight">React</h3>
          <p className="text-sm text-muted-foreground">
            My main library is <Code>React</Code>. I also
          </p>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <TailwindLogo size={42} />

          <h3 className="text-2xl font-semibold tracking-tight">
            Tailwind CSS
          </h3>
          <p className="text-sm text-muted-foreground">
            I can create <u>beautiful</u> application <i>in second</i> using{" "}
            <Code>Tailwind CSS.</Code>.
          </p>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <NextLogo size={42} />

          <h3 className="text-2xl font-semibold tracking-tight">Next.js</h3>
          <p className="text-sm text-muted-foreground">
            I am an expert to implement Next in your application and create a
            perfect <u>user experience.</u>
          </p>
        </div>
      </div>
    </Section>
  );
};
