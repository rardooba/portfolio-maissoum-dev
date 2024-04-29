import { Badge } from "@/components/ui/badge";
import { Section } from "../../organisms/_components/Section";
import { ReactLogo } from "../../atoms/_components/icons/ReactLogo";
import { Code } from "../../atoms/_components/Code";
import { TailwindLogo } from "../../atoms/_components/icons/TailwindLogo";
import { NextLogo } from "../../atoms/_components/icons/NextLogo";
import { JavascriptLogo } from "../../atoms/_components/icons/JavascriptLogo";
import { SiJavascript, SiReact, SiTailwindcss } from "react-icons/si";

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
            My main library is{" "}
            <Code
              className="inline-flex items-center gap-1"
              title={
                <>
                  <SiJavascript className="inline" /> Javascript
                </>
              }
              description="blabla"
            >
              <SiJavascript className="inline" />
              Javascript
            </Code>
            . I also
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
            My main library is{" "}
            <Code
              className="inline-flex items-center gap-1"
              title={
                <>
                  <SiReact className="inline" /> React
                </>
              }
              description="blabla"
            >
              <SiReact className="inline" />
              React
            </Code>
            . I also
          </p>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <TailwindLogo size={42} />

          <h3 className="text-2xl font-semibold tracking-tight">
            Tailwind CSS
          </h3>
          <p className="text-sm text-muted-foreground">
            I can create <u>beautiful</u> application <i>in second</i> using{" "}
            <Code
              className="inline-flex items-center gap-1"
              title={
                <>
                  <SiTailwindcss className="inline" /> Tailwind Css
                </>
              }
              description="blabla"
            >
              <SiTailwindcss className="inline" />
              Tailwind Css
            </Code>
            .
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
