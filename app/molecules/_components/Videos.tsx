import { Badge } from "@/components/ui/badge";
import { Section } from "../../organisms/_components/Section";
import { YouTubeEmbed } from "@next/third-parties/google";

export const Videos = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant="outline">Youtube</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0 cursor-default">
        My hacker life 📼
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        <div className="rounded-md overflow-hidden shadow-md">
          <YouTubeEmbed videoid="I38QX8ax0kI" style="max-width: 100%; background-image: url(https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHo0Z3kxZWN3dGg4bHVvaDZzemt2Y21jZW9tZHBpZDZlMGhyZWZzYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/A8KMNmq4Q1NhR5B0wH/giphy.gif);"/>
        </div>
        <div className="rounded-md overflow-hidden shadow-md w-full">
          <YouTubeEmbed videoid="flkx6_IXNMI" style="max-width: 100%; background-image: url(https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHo0Z3kxZWN3dGg4bHVvaDZzemt2Y21jZW9tZHBpZDZlMGhyZWZzYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/A8KMNmq4Q1NhR5B0wH/giphy.gif);"/>
        </div>
        <div className="rounded-md overflow-hidden shadow-md w-full">
          <YouTubeEmbed videoid="DXFMdbW9_pU" style="max-width: 100%; background-image: url(https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHo0Z3kxZWN3dGg4bHVvaDZzemt2Y21jZW9tZHBpZDZlMGhyZWZzYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/A8KMNmq4Q1NhR5B0wH/giphy.gif);"/>
        </div>
        <div className="rounded-md overflow-hidden shadow-md w-full">
          <YouTubeEmbed videoid="gqPoh_gWYmc" style="max-width: 100%; background-image: url(https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHo0Z3kxZWN3dGg4bHVvaDZzemt2Y21jZW9tZHBpZDZlMGhyZWZzYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/A8KMNmq4Q1NhR5B0wH/giphy.gif);"/>
        </div>
      </div>
    </Section>
  );
};
