import type { ComponentProps } from "react";
import { cn } from "@/src/lib/utils";

export function Badge({ className, ...props }: ComponentProps<"span">) {
  return (
    <span
      data-slot="badge"
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-primary",
        className,
      )}
      {...props}
    />
  );
}
