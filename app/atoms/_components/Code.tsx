import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface CodeProps extends Omit<ComponentPropsWithoutRef<"span">, "title">{
  title?: ReactNode | string;
  description: string;
}

export const Code = ({
  className,
  title,
  description,
  ...props
}: CodeProps) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <span
          className={cn(
            "bg-accent/30 hover:bg-accent/80 transition-colors border border-accent rounded-sm px-1 py-0.5 font-mono text-primary cursor-zoom-in",
            className
          )}
          {...props}
        />
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">{title}</h4>
            <p className="text-sm">{description}</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
