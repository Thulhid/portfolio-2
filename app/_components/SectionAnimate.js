import { useIsXL } from "@/app/_Hooks/useIsXL";
import { motion } from "framer-motion";

export default function SectionAnimate({ id, children }) {
  const { isXL } = useIsXL();

  return (
    <section id={id} className="m-auto w-full max-w-7xl">
      {isXL ? (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ amount: 0.01, once: false }}
          transition={{ duration: 0.8 }}
        >
          <div className="mt-5 xl:mt-30">{children}</div>
        </motion.div>
      ) : (
        <div className="mt-5 xl:mt-30">{children}</div>
      )}
    </section>
  );
}
