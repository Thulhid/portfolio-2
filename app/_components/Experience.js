import SectionAnimate from "@/app/_components/SectionAnimate";
import TypingText from "@/app/_components/TypingText";
import { motion } from "framer-motion";
import { IoCalendarOutline } from "react-icons/io5";

function Experience() {
  return (
    <SectionAnimate id="experience">
      <h2 className="mt-15">
        <TypingText text="Experience" />
      </h2>
      <motion.div
        className="m-auto max-w-lg rounded-xl border border-blue-400 bg-gradient-to-r from-gray-200 via-blue-200 to-gray-200 bg-[length:200%_200%] p-8 shadow-lg transition-colors duration-300 dark:from-gray-700 dark:via-sky-700 dark:to-gray-700"
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: "100% 50%" }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      >
        {" "}
        <p className="text-lg text-blue-900 sm:text-2xl dark:text-sky-200">
          Trainee Web Developer - Full Stack Web Developer
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Career Investment & Management Agency (Pvt) Limited (CIMA), Gampaha,
          Sri Lanka
        </p>
        <p className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300">
          <IoCalendarOutline />
          <time dateTime="2024-09">Jul 2025</time> -{" "}
          <time>Jan 2026 (Trainee Program)</time>
        </p>
        <p className="my-5 text-sm text-gray-800 sm:text-base dark:text-gray-300">
          Engaged in developing full-stack web solutions for internal and
          external clients using modern web technologies
        </p>
        <p className="my-5 text-sm text-gray-800 sm:text-base dark:text-gray-300">
          Actively participating in daily stand-ups and Agile sprints,
          collaborating with cross-functional teams to ensure timely delivery
          and meet project milestones
        </p>
      </motion.div>
    </SectionAnimate>
  );
}

export default Experience;
