import type { ComponentProps } from "react";
import { cn } from "@/src/lib/utils";
export function Separator({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      role="separator"
      className={cn("h-px w-full shrink-0 bg-border", className)}
      {...props}
    />
  );
}
