"use client";
import { useEffect, useState } from "react";

export function useIsXL() {
  const [isXL, setIsXL] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1280px)");

    const updateMatch = () => setIsXL(mediaQuery.matches);
    updateMatch();

    mediaQuery.addEventListener("change", updateMatch);
    return () => mediaQuery.removeEventListener("change", updateMatch);
  }, []);

  return { isXL };
}
