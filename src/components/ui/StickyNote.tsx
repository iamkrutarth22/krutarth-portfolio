import { cn } from "@/lib/utils";

interface StickyNoteProps {
  color?: "yellow" | "mint" | "coral" | "blue" | "white";
  rotate?: number;
  className?: string;
  children: React.ReactNode;
}

const colorMap = {
  yellow: "bg-note-yellow",
  mint: "bg-note-mint",
  coral: "bg-note-coral",
  blue: "bg-note-blue",
  white: "bg-white",
};

export function StickyNote({
  color = "white",
  rotate = 0,
  className,
  children,
}: StickyNoteProps) {
  return (
    <div
      className={cn(
        "relative shadow-md rounded-sm p-5",
        colorMap[color],
        className
      )}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </div>
  );
}