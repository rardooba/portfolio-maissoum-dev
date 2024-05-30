import { Badge } from "@/components/ui/badge";
import { Section } from "../../organisms/_components/Section";
import { YouTubeEmbed } from "@next/third-parties/google";

export const Videos = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant="outline">Youtube</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        My hacker life 📼
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        <div className="rounded-md overflow-hidden shadow-md">
          <YouTubeEmbed videoid="I38QX8ax0kI" style="max-width: 100%; background-image: url(https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnFremc4YWh6Y2Y4c2JrMGRqNHVtbGpqOGtnY2RoOXgwOGpid2kzdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4Ev0Ari2Nd9io/giphy.webp);"/>
        </div>
        <div className="rounded-md overflow-hidden shadow-md w-full">
          <YouTubeEmbed videoid="flkx6_IXNMI" style="max-width: 100%; background-image: url(https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDBjb3E3amhueTc2YWc3dWtyeHMweHRhbzM4dDlxZG1odDV2ajMwZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/s3jU0y0Bt0en6/giphy.webp);"/>
        </div>
        <div className="rounded-md overflow-hidden shadow-md w-full">
          <YouTubeEmbed videoid="DXFMdbW9_pU" style="max-width: 100%; background-image: url(https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaW9od3B3eWpiZHZlOW1wcDNydHo0d3VuYXF4ejlqNzM4ZjB4ajl4byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9CffOPMLx0Hf2/giphy.webp);"/>
        </div>
        <div className="rounded-md overflow-hidden shadow-md w-full">
          <YouTubeEmbed videoid="gqPoh_gWYmc" style="max-width: 100%; background-image: url(https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2JhZmV3YzNhc3V4Z3k5Z2NybzVkenZmbmdzanVmMTdldXZlYzVncyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qWi6NKfkrt9TgXvIfg/giphy.webp);"/>
        </div>
      </div>
    </Section>
  );
};
