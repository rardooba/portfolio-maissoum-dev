import { cn } from "@/lib/utils"
import { PropsWithChildren } from "react"

export const Section = (props: PropsWithChildren<{className?: string}>) => {
  // définir une largeure par défaut

  return (
    <section className={cn("max-w-4xl px-4 m-auto", props.className)}>
      {props.children}
    </section>
  )
}