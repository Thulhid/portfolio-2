import { ThemeProvider } from "@/app/_context/ThemeContext";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Hiruna Thulhid",
  description:
    "Frontend developer skilled in React, Redux, and Next.js, building scalable and user-centered web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-blue-50 transition-colors duration-300 dark:bg-sky-950 ${poppins.className}`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
