import Header from "@/app/_components/Header";
import { useScrollAnimation } from "@/app/_Hooks/useScrollAnimation";
import Main from "@/app/Main/page";
import "@/app/_styles/globals.css";

export default function Home() {
  return (
    <div className="flex h-dvh flex-col p-5 text-2xl">
      <Main />
    </div>
  );
}
