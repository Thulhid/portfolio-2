import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function TypingText({ text, speed = 100 }) {
  const [displayedText, setDisplayedText] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    if (!isInView || !text) return;

    setTypingDone(false);
    setDisplayedText("");
    let i = 0;

    const interval = setInterval(() => {
      const char = text[i];
      setDisplayedText((prev) => prev + char);
      i++;

      if (i >= text.length) {
        clearInterval(interval);
        setTypingDone(true);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [isInView, text, speed]);

  return (
    <motion.div
      ref={ref}
      animate={
        typingDone
          ? { backgroundPosition: ["0% center", "100% center"] }
          : undefined
      }
      transition={{ duration: 3, ease: "easeInOut" }}
      className="mb-10 flex justify-center bg-gradient-to-r from-gray-700 via-blue-400 to-gray-700 bg-[length:300%_300%] bg-clip-text font-mono font-bold text-transparent uppercase md:text-4xl dark:from-gray-50 dark:via-sky-500 dark:to-gray-50"
    >
      {displayedText}
      {!typingDone && <span className="animate-pulse">|</span>}
    </motion.div>
  );
}
