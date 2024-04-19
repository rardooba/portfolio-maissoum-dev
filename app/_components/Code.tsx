import { cn } from "@/lib/utils"
import { ComponentPropsWithoutRef } from "react"

export const Code = ({className, ...props}: ComponentPropsWithoutRef<"span">) => {
  return <span className={cn("bg-accent/30 hover:bg-accent/80 transition-colors border border-accent rounded-sm px-1 py-0.5 font-mono text-primary cursor-zoom-in", className)} {...props}/>
}