import Project from "@/app/_components/Project";
import TypingText from "@/app/_components/TypingText";
import SectionAnimate from "@/app/_components/SectionAnimate";
import { FaCss3Alt, FaHtml5, FaJs, FaNode, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";

import {
  SiCssmodules,
  SiExpress,
  SiFramer,
  SiJson,
  SiLeaflet,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiPug,
  SiReactquery,
  SiReactrouter,
  SiRedux,
} from "react-icons/si";
import { AiOutlineJava } from "react-icons/ai";

function Projects() {
  return (
    <SectionAnimate id="projects">
      <h2 className="mt-15">
        <TypingText text="Projects" />
      </h2>
      <ul className="flex flex-col items-center gap-20 py-5 md:p-10 xl:gap-35">
        <Project
          demoLink="https://farmbuddy.com.au"
          image="/projects/project-9.png"
          title="Farm Buddy"
          description="Farm Buddy is a full-stack e-commerce platform built for an Australian animal-feed business. Developed with Next.js (App Router), TypeScript, Prisma and PostgreSQL, it provides a product catalogue for grains and feeds, filtering by animal type and weight, a cart and checkout flow with Stripe payments, and AWS S3 for product image storage. Designed as a production-ready MVP, it reflects real-world business logic for local delivery and postal shipping in the Australian market."
          icons={[
            <RiNextjsFill
              size={25}
              className="text-gray-600 dark:text-gray-400"
              key="FaReact"
              title="Next.js"
            />,
            <RiTailwindCssFill
              size={22}
              className="text-gray-600 dark:text-gray-400"
              key="SiReactquery"
              title="Tailwind CSS"
            />,
            <SiFramer
              size={22}
              className="text-gray-600 dark:text-gray-400"
              key="RiTailwindCssFill"
              title="Framer Motion"
            />,
            <BiLogoPostgresql
              size={22}
              className="text-gray-600 dark:text-gray-400"
              key="BiLogoPostgresql"
              title="PostgreSQL"
            />,
          ]}
        />
        <Project
          demoLink="https://i-pro-mart.vercel.app"
          image="/projects/project-8.png"
          title="IproMart"
          description="A full-featured e-commerce platform built for a real-world computer shop. This responsive web application is developed using Next.js (App Router), Tailwind CSS, Pug (send emails) and Framer Motion on the frontend, and a secure Node.js + Express + MongoDB backend. It includes user authentication, role-based access control. Customers can add items to their cart and place online purchase orders using a fully integrated PayHere payment system. Orders are securely created and tracked with real-time status updates. Built with SSR and SEO best practices, the project is currently ongoing and reflects real-world business logic in production-ready architecture."
          icons={[
            <RiNextjsFill
              size={25}
              className="text-gray-600 dark:text-gray-400"
              key="FaReact"
              title="Next.js"
            />,
            <RiTailwindCssFill
              size={22}
              className="text-gray-600 dark:text-gray-400"
              key="SiReactquery"
              title="Tailwind CSS"
            />,
            <SiFramer
              size={22}
              className="text-gray-600 dark:text-gray-400"
              key="RiTailwindCssFill"
              title="Framer Motion"
            />,
            <SiPug
              size={22}
              className="text-gray-600 dark:text-gray-400"
              key="SiPug"
              title="Pug"
            />,
            <SiMongoose
              size={30}
              className="text-gray-600 dark:text-gray-400"
              key="SiMongoose"
              title="Mongoose"
            />,
            <SiMongodb
              size={25}
              className="text-gray-600 dark:text-gray-400"
              key="SiMongodb"
              title="MongoDB"
            />,
          ]}
        />
        <Project
          gitHubLink="https://github.com/Thulhid/portfolio"
          image="/projects/project-1.png"
          title="Nextjs Portfolio"
          description="Fully responsive personal portfolio website built using Next.js with Server-Side Rendering (SSR) to enhance performance and Search Engine Optimization (SEO).
          Styled with Tailwind CSS. It features smooth animations powered by Framer Motion to enhance the user experience."
          icons={[
            <RiNextjsFill
              size={25}
              className="text-gray-600 dark:text-gray-400"
              key="FaReact"
              title="Next.js"
            />,
            <RiTailwindCssFill
              size={22}
              className="text-gray-600 dark:text-gray-400"
              key="SiReactquery"
              title="Tailwind CSS"
            />,
            <SiFramer
              size={22}
              className="text-gray-600 dark:text-gray-400"
              key="RiTailwindCssFill"
              title="Framer Motion"
            />,
          ]}
        />

        <Project
          demoLink="https://etechzone.netlify.app/"
          gitHubLink="https://github.com/Thulhid/e-tech-zone"
          image="/projects/project-2.png"
          title="e-tech-zone"
          description="A responsive e-commerce web application built for a computer shop.
                Developed with React and styled using Tailwind CSS, it offers a
                clean, user-friendly UI. Key features include browsing, sorting,
                filtering, order management, and configurable shipping settings. The
                app also uses react-hot-toast for real-time notifications,
                delivering a smooth and interactive user experience."
          icons={[
            <FaReact
              size={22}
              className="text-gray-600 dark:text-gray-400"
              key="FaReact"
              title="React"
            />,
            <RiTailwindCssFill
              size={22}
              className="text-gray-600 dark:text-gray-400"
              key="RiTailwindCssFill"
              title="Tailwind CSS"
            />,
            <SiReactquery
              size={22}
              className="text-gray-600 dark:text-gray-400"
              key="SiReactquery"
              title="React Query"
            />,
            <SiReactrouter
              size={22}
              className="text-gray-600 dark:text-gray-400"
              key="SiReactrouter"
              title="React Router"
            />,
          ]}
        />
        <Project
          demoLink="https://documenter.getpostman.com/view/44962175/2sB2qgeJZW"
          gitHubLink="https://github.com/Thulhid/pearl-ceylon"
          image="/projects/project-3.png"
          title="Pearl Ceylon"
          description="A full-stack web application built for a travel company offering tour services in Sri Lanka. It includes a custom REST API and a server-side rendered (SSR) website. The platform handles tours, user accounts, reviews, and bookings to support a complete tour booking workflow.

"
          icons={[
            <FaNode
              size={30}
              className="text-gray-600 dark:text-gray-400"
              key="FaNode"
              title="Node.js"
            />,
            <SiExpress
              size={22}
              className="text-gray-600 dark:text-gray-400"
              key="SiExpress"
              title="Express.js"
            />,
            <SiPug
              size={22}
              className="text-gray-600 dark:text-gray-400"
              key="SiPug"
              title="Pug"
            />,
            <SiLeaflet
              size={22}
              className="text-gray-600 dark:text-gray-400"
              key="SiLeaflet"
              title="Leaflet"
            />,
            <SiMongoose
              size={30}
              className="text-gray-600 dark:text-gray-400"
              key="SiMongoose"
              title="Mongoose"
            />,
            <SiMongodb
              size={25}
              className="text-gray-600 dark:text-gray-400"
              key="SiMongodb"
              title="MongoDB"
            />,
          ]}
        />

        <Project
          demoLink="https://popcornvibe.netlify.app/"
          gitHubLink="https://github.com/Thulhid/popcorn-vibe"
          image="/projects/project-4.png"
          title="popcorn Vibe"
          description="React.js web application that allows users to search for movies via the OMDb API, view movie details, manage a personal watchlist, and rate films. It uses Redux for global state management, React Router for client-side navigation, and CSS Modules for modular, scoped styling."
          icons={[
            <FaReact
              size={22}
              className="text-gray-600 dark:text-gray-400"
              key="FaReact"
              title="React"
            />,
            <SiCssmodules
              size={25}
              className="text-gray-700 dark:text-gray-400"
              key="RiTailwindCssFill"
              style={{ strokeWidth: 0.4 }}
              title="CSS Modules"
            />,

            <SiRedux
              size={22}
              className="text-gray-600 dark:text-gray-400"
              key="SiRedux"
              title="Redux"
            />,
            <SiReactrouter
              size={22}
              className="text-gray-600 dark:text-gray-400"
              key="SiReactrouter"
              title="React Router"
            />,
          ]}
        />
        <Project
          demoLink="https://traveler-map.netlify.app/"
          gitHubLink="https://github.com/Thulhid/traveler"
          image="/projects/project-5.png"
          title="Traveler"
          description="Traveler helps save memorable places visited around the world. With a simple tap on the Leaflet map, it creates logs of travels by country, along with thoughts and experiences, exactly where and when they happen. The app uses json-server to handle data storage."
          icons={[
            <FaReact
              size={22}
              className="text-gray-600 dark:text-gray-400"
              key="FaReact"
              title="React"
            />,
            <SiCssmodules
              size={25}
              className="text-gray-700 dark:text-gray-400"
              key="RiTailwindCssFill"
              style={{ strokeWidth: 0.4 }}
              title="CSS Modules"
            />,

            <SiJson
              size={22}
              className="text-gray-600 dark:text-gray-400"
              key="SiRedux"
              title="Redux"
            />,
            <SiLeaflet
              size={22}
              className="text-gray-600 dark:text-gray-400"
              key="SiLeaflet"
              title="Leaflet"
            />,
          ]}
        />
        <Project
          demoLink="https://map-mate.netlify.app/"
          gitHubLink="https://github.com/Thulhid/map-mate"
          image="/projects/project-6.png"
          title="Map Mate"
          description="Map Mate helps you log your day-to-day tasks and running workouts on the leaflet map, based on your current location. Built using OOP principles, it allows you to add, view, and store location-based tasks with ease. Your data is saved locally using LocalStorage."
          icons={[
            <FaJs
              size={22}
              className="text-gray-600 dark:text-gray-400"
              key="FaJs"
              title="Java Script"
            />,
            <FaHtml5
              size={25}
              className="text-gray-600 dark:text-gray-400"
              key="FaHtml5"
              title="HTML5"
            />,
            <FaCss3Alt
              size={25}
              className="text-gray-600 dark:text-gray-400"
              key="FaCss3Alt"
              title="Global CSS"
            />,

            <SiLeaflet
              size={22}
              className="text-gray-600 dark:text-gray-400"
              key="SiLeaflet"
              title="Leaflet"
            />,
          ]}
        />
        <Project
          gitHubLink="https://github.com/Thulhid/salon-management-system"
          image="/projects/project-7.png"
          title="Salon Management System"
          description="Desktop application using JavaFX and MySQL following the MVC architecture. The system allows salon staff to register clients, schedule appointments, list clients and appointments, update and remove client information, and sort or filter clients."
          icons={[
            <SiMysql
              size={40}
              className="text-gray-600 dark:text-gray-400"
              key="SiMysql"
              title="MySQL"
            />,
            <AiOutlineJava
              size={35}
              className="text-gray-600 dark:text-gray-400"
              key="AiOutlineJava"
              title="Java/JavaFX"
            />,
          ]}
        />
      </ul>
    </SectionAnimate>
  );
}

export default Projects;
