import { cn } from "@/lib/utils";

export function Pin({
  color = "bg-red-500",
  className,
}: {
  color?: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full shadow-sm",
        color,
        className
      )}
    />
  );
}