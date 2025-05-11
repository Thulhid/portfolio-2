import NavBar from "@/app/_components/NavBar";
import Signature from "@/app/_components/Signature";
import SocialLinks from "@/app/_components/SocialLinks";
import ToggleButton from "@/app/_components/ToggleButton";
import { motion } from "framer-motion";

function Header({ headerMotion, onIsToggleMenu }) {
  const { headerWidth, headerPadding } = headerMotion;
  return (
    <motion.div
      style={{
        width: headerWidth,
        paddingTop: headerPadding,
        paddingBottom: headerPadding,
      }}
      className="fixed top-4 left-1/2 z-1000 flex -translate-x-1/2 items-center justify-between rounded-2xl bg-blue-200 px-5 shadow-lg transition-colors duration-300 dark:bg-sky-700"
    >
      <div className="flex items-center gap-3">
        <Signature />
        <SocialLinks />
      </div>

      <div className="flex items-center gap-3 sm:gap-4">
        <NavBar onIsToggleMenu={onIsToggleMenu} />
        <ToggleButton />
      </div>
    </motion.div>
  );
}

export default Header;
