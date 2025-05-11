import TypingText from "./TypingText";
import { motion } from "framer-motion";
import { FaChrome, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiVite, SiWebpack } from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
import { useDisplayLottie } from "@/app/_Hooks/useDisplayLottie";
import { RiBox3Fill } from "react-icons/ri";
import SectionAnimate from "@/app/_components/SectionAnimate";

function Skills() {
  const { animationData: skills, Lottie } = useDisplayLottie("skills-2.json");
  const { animationData: tools } = useDisplayLottie("tools.json");
  return (
    <SectionAnimate id="skills">
      <h2 className="mt-15">
        <TypingText text="Skills" />
      </h2>
      <div className="flex flex-col items-center xl:flex-row">
        <div className="w-[15rem] md:w-[20rem] xl:w-auto">
          {skills ? (
            <Lottie animationData={skills} loop={true} />
          ) : (
            <p className="text-gray-400">Loading animation...</p>
          )}
        </div>

        <motion.div
          className="m-auto max-w-2xl rounded-xl border border-blue-400 bg-gradient-to-r from-gray-200 via-blue-200 to-gray-200 bg-[length:200%_200%] p-5 shadow-lg transition-colors duration-300 md:p-10 dark:from-gray-700 dark:via-sky-700 dark:to-gray-700"
          initial={{ backgroundPosition: "0% 50%" }}
          animate={{ backgroundPosition: "100% 50%" }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        >
          <article className="text-base text-gray-800 xl:text-lg dark:text-gray-300">
            <p>
              From building complex web applications with{" "}
              <strong>JavaScript</strong>, <strong>React.js</strong>,{" "}
              <strong>Next.js</strong>, <strong>Redux</strong>,{" "}
              <strong>React Query</strong>, and <strong>React Router</strong> to
              crafting clean, intuitive interfaces using <strong>Figma</strong>{" "}
              and <strong>Tailwind CSS</strong> — I enjoy creating user
              experiences that are smooth, fast, and delightful.
            </p>

            <p>
              I deeply care about performance and maintainability, ensuring
              everything runs efficiently without compromising on design or
              interactivity. With a keen eye for motion and subtle transitions,
              I bring interfaces to life using <strong>Framer Motion</strong>.
            </p>

            <p>
              Also, I have a strong foundation in <strong>Java</strong>,{" "}
              <strong>OOP principles</strong>, <strong>JavaFX</strong> and{" "}
              <strong>MySQL</strong> knowledge, which strengthens my
              problem-solving skills and architectural thinking.
            </p>
          </article>
        </motion.div>
      </div>
      <div className="m-auto my-20 w-xs overflow-hidden rounded-2xl bg-blue-100 transition-colors duration-300 sm:w-md md:w-xl xl:w-4xl dark:bg-sky-200">
        <motion.div className="flex w-max gap-6">
          {[1, 2, 3].map((_, index) => (
            <motion.div
              key={index}
              className="m-4 flex gap-8 sm:gap-10 md:gap-15"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
              {[
                ["/logos/js.png", "Java Script"],
                ["/logos/react.png", "React"],
                ["/logos/nextjs.png", "Next.js"],
                ["/logos/react-query.png", "React Query"],
                ["/logos/redux.png", "Redux"],
                ["/logos/motion.png", "Framer Motion"],
                ["/logos/tailwind.png", "Tailwind CSS"],
                ["/logos/figma.png", "Figma"],
                ["/logos/react-router.svg", "React Router"],
                ["/logos/java.png", "Java/Java FX"],
                ["/logos/MySQL.png", "MySQL"],
              ].map((img, i) => (
                <motion.img
                  key={i}
                  src={img[0]}
                  title={img[1]}
                  className="w-12 cursor-pointer object-cover"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>
      <motion.div
        className="m-auto max-w-lg rounded-xl border border-blue-400 bg-gradient-to-r from-gray-200 via-blue-200 to-gray-200 bg-[length:200%_200%] px-10 py-5 shadow-lg transition-colors duration-300 dark:from-gray-700 dark:via-sky-700 dark:to-gray-700"
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: "100% 50%" }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      >
        <h3 className="font-mono text-gray-900 dark:text-gray-200">
          Tools & Ecosystem
        </h3>
        <div className="flex">
          <div className="flex shrink-0 flex-col text-lg">
            <span className="text-gray-800 dark:text-gray-300">
              {" "}
              <SiVite className="m-2 inline text-gray-600 dark:text-gray-400" />{" "}
              Vite
            </span>
            <span className="text-gray-800 dark:text-gray-300">
              {" "}
              <SiWebpack className="m-2 inline text-gray-600 dark:text-gray-400" />
              Webpack
            </span>
            <span className="text-gray-800 dark:text-gray-300">
              <RiBox3Fill className="m-2 inline text-gray-600 dark:text-gray-400" />
              Turbopack
            </span>
            <span className="text-gray-800 dark:text-gray-300">
              {" "}
              <FaGitAlt className="m-2 inline text-gray-600 dark:text-gray-400" />
              Git
            </span>
            <span className="text-gray-800 dark:text-gray-300">
              {" "}
              <FaGithub className="m-2 inline text-gray-600 dark:text-gray-400" />{" "}
              GitHub
            </span>
            <span className="text-gray-800 dark:text-gray-300">
              {" "}
              <VscVscodeInsiders className="m-2 inline text-gray-600 dark:text-gray-400" />{" "}
              VS Code
            </span>
            <span className="text-gray-800 dark:text-gray-300">
              {" "}
              <FaChrome className="m-2 inline text-gray-600 dark:text-gray-400" />
              Chrome DevTools
            </span>
          </div>
          <div className="w-[8rem] sm:ml-10 sm:w-[10rem]">
            {tools ? (
              <Lottie animationData={tools} loop={true} />
            ) : (
              <p className="text-gray-400">Loading animation...</p>
            )}
          </div>
        </div>
      </motion.div>
    </SectionAnimate>
  );
}

export default Skills;
