import { useDisplayLottie } from "@/app/_Hooks/useDisplayLottie";
import SectionAnimate from "@/app/_components/SectionAnimate";
import Button from "@/app/_components/Button";
import { useTheme } from "@/app/_context/ThemeContext";
import TypingText from "./TypingText";

export default function Intro() {
  const { isDarkMode } = useTheme();

  const { animationData, Lottie } = useDisplayLottie(
    isDarkMode ? "dev-night.json" : "dev-light.json",
  );

  return (
    <SectionAnimate id="intro">
      <h1 className="mt-18 md:mt-28">
        <TypingText text="Hi, I am Hiruna Thulhid" />
      </h1>
      <div className="flex w-fit flex-col items-center md:flex-row xl:ml-15">
        <div className="order-2 mt-5 flex flex-col items-center md:order-1">
          <p className="mx-3 my-5 max-w-xl space-y-3 text-base text-gray-800 md:mt-10 md:mb-15 xl:text-lg dark:text-gray-300">
            I&apos;m a full-stack developer with experience building dynamic and
            scalable web applications across both frontend and backend. I focus
            on creating clean, user-friendly interfaces and reliable server-side
            systems. I&apos;m always learning and improving, motivated by
            solving real problems and building useful applications.
          </p>
          <Button
            variant="primary"
            link="/cv-hiruna-thulhid.pdf"
            isDownload={true}
          >
            Download CV
          </Button>
        </div>
        <div className="order-1 w-[20rem] rounded-2xl transition-all duration-300 md:order-2 md:w-[25rem] xl:w-lg dark:w-[15rem] dark:md:w-[20rem] dark:xl:ml-30 dark:xl:w-xs">
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
