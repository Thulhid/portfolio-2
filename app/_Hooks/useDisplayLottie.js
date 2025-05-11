"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

export function useDisplayLottie(lottieName) {
  const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch(`/lottie/${lottieName}`)
      .then((res) => res.json())
      .then(setAnimationData)
      .catch((err) => console.error("Failed to load animation:", err));
  }, [lottieName]);

  return { animationData, Lottie };
}
