import { useOutsideClick } from "@/app/_Hooks/useOutsideClick";
import { motion } from "framer-motion";

function SideBar({ onIsToggleMenu }) {
  const { ref: outsideRef } = useOutsideClick(() =>
    onIsToggleMenu((cur) => !cur),
  );

  const sidebarVariants = {
    open: {
      width: "200px",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 50,
        when: "beforeChildren",
        staggerChildren: 0.2, //  This creates the waterfall effect
      },
    },
    closed: {
      width: "0px",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 60,
        when: "afterChildren",
        // staggerChildren: 0.05,
        staggerDirection: -1, // reverse the animation on close
      },
    },
  };

  const itemVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -20 },
  };

  return (
    <div className="fixed top-0 left-0 z-[1003] h-screen w-full overflow-auto bg-gray-700/40">
      <motion.ul
        className="flex h-full flex-col rounded-tr-xl rounded-br-xl bg-blue-100 p-4 dark:bg-sky-700"
        ref={outsideRef}
        initial="closed"
        animate="open"
        exit="closed"
        variants={sidebarVariants}
      >
        <motion.li
          className="p-4 text-gray-600 dark:text-gray-200"
          variants={itemVariants}
        >
          <a href="#intro" onClick={() => onIsToggleMenu(false)}>
            Home
          </a>
        </motion.li>
        <motion.li
          className="p-4 text-gray-600 dark:text-gray-200"
          variants={itemVariants}
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            className="text-gray-600 dark:text-gray-200"
            href="#projects"
            onClick={() => onIsToggleMenu(false)}
          >
            Projects
          </motion.a>
        </motion.li>
        <motion.li
          className="p-4 text-gray-600 dark:text-gray-200"
          variants={itemVariants}
        >
          <a href="#skills" onClick={() => onIsToggleMenu(false)}>
            Skills
          </a>
        </motion.li>
        <motion.li
          className="p-4 text-gray-600 dark:text-gray-200"
          variants={itemVariants}
        >
          <a href="#experience" onClick={() => onIsToggleMenu(false)}>
            Experience
          </a>
        </motion.li>

        <motion.li
          className="p-4 text-gray-600 dark:text-gray-200"
          variants={itemVariants}
        >
          <a href="#education" onClick={() => onIsToggleMenu(false)}>
            Education
          </a>
        </motion.li>
      </motion.ul>
    </div>
  );
}

export default SideBar;
