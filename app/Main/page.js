"use client";
import Education from "@/app/_components/Education";
import Experience from "@/app/_components/Experience";
import Header from "@/app/_components/Header";
import Intro from "@/app/_components/Intro";
import Projects from "@/app/_components/Projects";
import SideBar from "@/app/_components/SideBar";
import Skills from "@/app/_components/Skills";
import { useScrollAnimation } from "@/app/_Hooks/useScrollAnimation";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Main() {
  const { homeRef, headerMotion } = useScrollAnimation();
  const [isToggleMenu, setIsToggleMenu] = useState(false);

  return (
    <div ref={homeRef} className="flex flex-col gap-15 overflow-auto">
      <Header headerMotion={headerMotion} onIsToggleMenu={setIsToggleMenu} />
      <AnimatePresence>
        {isToggleMenu && <SideBar onIsToggleMenu={setIsToggleMenu} />}
      </AnimatePresence>

      <Intro />
      <Projects isToggleMenu={isToggleMenu} />
      <Skills isToggleMenu={isToggleMenu} />
      <Experience isToggleMenu={isToggleMenu} />
      <Education isToggleMenu={isToggleMenu} />
    </div>
  );
}
