import type { ComponentProps } from "react";
import { cn } from "@/src/lib/utils";

export function Alert({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      role="status"
      className={cn("rounded-xl border p-5 text-sm", className)}
      {...props}
    />
  );
}
export function AlertTitle({ className, ...props }: ComponentProps<"h3">) {
  return (
    <h3
      className={cn("mb-2 flex items-center gap-2 font-semibold", className)}
      {...props}
    />
  );
}
export function AlertDescription({
  className,
  ...props
}: ComponentProps<"div">) {
  return <div className={cn("text-sm leading-7", className)} {...props} />;
}
