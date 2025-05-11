import { motion } from "framer-motion";
import { useTheme } from "@/app/_context/ThemeContext";

function ToggleButton() {
  const { isDarkMode, toggleTheme } = useTheme();

  // Detect system theme on initial load

  return (
    <button
      className={`flex h-[25px] w-[42px] cursor-pointer items-center rounded-2xl p-1.5 inset-shadow-sm transition-colors duration-300 sm:h-[30px] sm:w-[55px] ${isDarkMode ? "justify-start bg-sky-900" : "justify-end bg-blue-300"}`}
      title={isDarkMode ? "Dark theme" : "Light theme"}
      onClick={toggleTheme}
    >
      <motion.div
        className="h-[15px] w-[15px] rounded-full bg-blue-200 drop-shadow-sm sm:h-[20px] sm:w-[20px]"
        layout
        transition={{
          type: "spring",
          bounce: 0.2,
          duration: 0.2,
        }}
      />
    </button>
  );
}

export default ToggleButton;
