import TypingText from "@/app/_components/TypingText";
import { useDisplayLottie } from "@/app/_Hooks/useDisplayLottie";
import SectionAnimate from "@/app/_components/SectionAnimate";
import { useTheme } from "@/app/_context/ThemeContext";
import { useRef } from "react";
import { motion } from "framer-motion";
import { IoCalendarOutline } from "react-icons/io5";
import { FaMedal } from "react-icons/fa";
import { AiOutlineFileDone } from "react-icons/ai";

function Education() {
  const { isDarkMode } = useTheme();
  const { animationData, Lottie } = useDisplayLottie(
    isDarkMode ? "education-night.json" : "education-light.json",
  );

  return (
    <SectionAnimate id="education">
      <h2 className="mt-15">
        <TypingText text="Education" />
      </h2>
      <div className="flex flex-col items-center xl:flex-row">
        <motion.section
          className="order-2 ml-0 max-w-2xl items-center rounded-xl border border-blue-400 bg-gradient-to-r from-gray-200 via-blue-200 to-gray-200 bg-[length:200%_200%] p-5 shadow-lg transition-colors duration-300 md:p-10 xl:order-1 xl:ml-20 dark:from-gray-700 dark:via-sky-700 dark:to-gray-700"
          initial={{ backgroundPosition: "0% 50%" }}
          animate={{ backgroundPosition: "100% 50%" }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        >
          <article className="space-y-4 rounded-2xl">
            <div>
              <h3 className="mb-1.5 text-lg font-semibold text-blue-900 sm:text-2xl dark:text-sky-200">
                Bachelor of Information Technology (BIT)
              </h3>
              <p className="text-base font-medium text-gray-800 sm:text-lg dark:text-gray-100">
                University of Colombo School of Computing (UCSC)
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                GPA: 3.6 (Year 1)
              </p>
              <p className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300">
                <IoCalendarOutline />
                <time dateTime="2023-10">Oct 2023</time> - Present
              </p>
            </div>

            <p className="text-base leading-relaxed text-gray-800 dark:text-gray-100">
              Completed the first year of the BIT program with a{" "}
              <strong>3.6</strong> GPA, highlighting strong performance in key
              subjects.
            </p>

            <div>
              <span className="mb-2 flex items-center gap-2 text-xl font-semibold text-gray-700 dark:text-gray-300">
                {" "}
                <FaMedal className="w-5 text-gray-600 dark:text-gray-300" />
                Grade A in:
              </span>
              <ul className="mx-8 list-inside space-y-0.5 text-base text-gray-800 dark:text-gray-200">
                <li>Fundamentals of Software Engineering</li>
                <li>Web Application Development</li>
                <li>Database Systems</li>
                <li>Information Systems</li>
              </ul>
            </div>

            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
              Built a strong foundation in <em>software engineering</em>,{" "}
              <em>web development</em>, <em>databases</em>, and{" "}
              <em>programming</em>, paving the way for advanced studies in IT.
            </p>
            <h4 className="mb-2 flex items-center gap-1 text-xl font-semibold text-gray-700 dark:text-gray-300">
              <AiOutlineFileDone />
              Additional Certifications
            </h4>
            <ul className="ml-4 list-inside space-y-2 text-sm text-blue-600 dark:text-blue-200">
              <li>
                <a
                  href="https://www.udemy.com/certificate/UC-3f79918e-c92b-4660-9d92-3da858d92fdd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-800 dark:hover:text-blue-300"
                >
                  Udemy: The Ultimate React Course 2025: React, Next.js, Redux &
                  More
                </a>
              </li>
              <li>
                <a
                  href="https://simpli-web.app.link/e/oL9Vq7yqPSb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-800 dark:hover:text-blue-300"
                >
                  Simplilearn: JavaScript for Beginners
                </a>
              </li>
            </ul>
          </article>
        </motion.section>
        <div className="order-1 m-auto w-[15rem] transition-all duration-300 md:w-[16rem] xl:order-2 xl:ml-30">
          {animationData ? (
            <Lottie animationData={animationData} loop={true} />
          ) : (
            <p className="text-gray-400">Loading animation...</p>
          )}
        </div>
      </div>
    </SectionAnimate>
  );
}

export default Education;

/* 
  Completed the first year of the BIT program with a 3.6 GPA,
                  highlighting strong performance in key subjects.
                  https://simpli-web.app.link/e/oL9Vq7yqPSb

*/
