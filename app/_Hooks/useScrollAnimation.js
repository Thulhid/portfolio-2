"use client";

import { useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export function useScrollAnimation() {
  const homeRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: homeRef });

  const headerWidth = useTransform(scrollYProgress, [0, 0.1], ["90%", "75%"]);
  const headerPadding = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["13px", "6px"],
  );

  const headerMotion = {
    headerWidth: useSpring(headerWidth, {
      stiffness: 100,
      damping: 20,
      mass: 0.5,
    }),
    headerPadding: useSpring(headerPadding, {
      stiffness: 100,
      damping: 20,
      mass: 0.5,
    }),
  };

  return { homeRef, headerMotion };
}
