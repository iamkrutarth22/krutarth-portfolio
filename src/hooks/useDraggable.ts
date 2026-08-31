"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

interface UseDraggableOptions {
  cardRef: React.RefObject<HTMLElement | null>;
  spotlightRef: React.RefObject<HTMLElement | null>;
  onDropInSpotlight: () => void;
  enabled?: boolean;
}

export function useDraggable({
  cardRef,
  spotlightRef,
  onDropInSpotlight,
  enabled = true,
}: UseDraggableOptions) {
  const draggableInstance = useRef<Draggable[] | null>(null);

  useEffect(() => {
    if (!enabled || !cardRef.current || !spotlightRef.current) return;

    const instances = Draggable.create(cardRef.current, {
      type: "x,y",
      inertia: false,
      bounds: "body",
      onDragEnd: function (this: Draggable) {
        const cardBounds = this.target.getBoundingClientRect();
        const spotlightBounds = spotlightRef.current!.getBoundingClientRect();

        const overlaps =
          cardBounds.left < spotlightBounds.right &&
          cardBounds.right > spotlightBounds.left &&
          cardBounds.top < spotlightBounds.bottom &&
          cardBounds.bottom > spotlightBounds.top;

        if (overlaps) {
          onDropInSpotlight();
        } else {
          // snap back to original position
          gsap.to(this.target, {
            x: 0,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          });
        }
      },
    });

    draggableInstance.current = instances;

    return () => {
      instances.forEach((d) => d.kill());
    };
  }, [enabled, cardRef, spotlightRef, onDropInSpotlight]);
}