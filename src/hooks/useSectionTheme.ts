import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "@/lib/gsap";
import { useTheme } from "@/context/ThemeContext";

export function useSectionTheme(
  careerSectionRef: React.RefObject<HTMLElement>
) {
  const { setMode } = useTheme();

  useEffect(() => {
    if (!careerSectionRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: careerSectionRef.current,
      start: "top center",
      end: "bottom center",
      onEnter: () => setMode("dark"),
      onEnterBack: () => setMode("dark"),
      onLeave: () => setMode("light"),
      onLeaveBack: () => setMode("light"),
    });

    return () => trigger.kill();
  }, [careerSectionRef, setMode]);
}