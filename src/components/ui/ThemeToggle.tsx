"use client";

import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { mode, toggleMode } = useTheme();
  const isDark = mode === "dark";

  return (
    <button
      onClick={toggleMode}
      aria-label="Toggle theme"
      className={cn(
        "relative flex items-center w-16 h-9 rounded-full px-1",
        "border border-gray-300 dark:border-gray-600",
        "bg-white/80 dark:bg-card-dark shadow-md transition-colors duration-500"
      )}
    >
      {/* sliding thumb — fully opaque, covers whichever icon is inactive */}
      <div
        className={cn(
          "absolute top-1 left-1 w-7 h-7 rounded-full shadow-sm",
          "bg-accent dark:bg-accent-dark transition-transform duration-300 ease-in-out",
          isDark && "translate-x-7"
        )}
      />
      <Sun
        size={16}
        className={cn(
          "relative z-10 w-7 h-7 p-1.5 transition-colors",
          isDark ? "text-gray-400" : "text-white"
        )}
      />
      <Moon
        size={16}
        className={cn(
          "relative z-10 w-7 h-7 p-1.5 transition-colors",
          isDark ? "text-white" : "text-gray-400"
        )}
      />
    </button>
  );
}