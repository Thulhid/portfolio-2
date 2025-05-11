import Button from "@/app/_components/Button";
import { FaPlay } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import Image from "next/image";

function Project({ image, title, description, icons, demoLink, gitHubLink }) {
  return (
    <li className="flex flex-col items-center gap-8 xl:flex-row">
      <Image
        src={image}
        alt={image}
        className="w-md"
        width={500}
        height={300}
      />
      <div className="justify-items-center rounded-2xl bg-blue-100 p-3 text-base shadow-md transition-colors duration-300 md:p-6 dark:bg-sky-800">
        <h3 className="text-lg font-semibold text-gray-900 uppercase dark:text-gray-200">
          {title}
        </h3>

        <p className="py-5 text-sm text-gray-800 md:text-base dark:text-gray-300">
          {description}
        </p>
        <div className="mt-5 flex gap-5">
          {demoLink && (
            <Button link={demoLink} variant="primary">
              Live Demo <FaPlay className="inline" />
            </Button>
          )}
          {gitHubLink && (
            <Button link={gitHubLink} variant="primary">
              Github Repo <VscGithub className="inline" size={25} />
            </Button>
          )}
        </div>
        <div className="flex gap-5 pt-5">{icons.map((icon) => icon)}</div>
      </div>
    </li>
  );
}

export default Project;
