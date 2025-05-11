import Button from "@/app/_components/Button";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { IoMailOutline } from "react-icons/io5";

function SocialLinks() {
  return (
    <ul className="flex gap-2 sm:gap-3">
      <li>
        <Button
          link="https://www.linkedin.com/in/hiruna-thulhid-09886b35b/"
          title="LinkedIn"
        >
          <AiOutlineLinkedin className="cursor-pointer text-blue-700 dark:text-sky-200" />
        </Button>
      </li>
      <li>
        <Button link="https://github.com/Thulhid" title="GitHub">
          <AiOutlineGithub className="cursor-pointer dark:text-gray-200" />
        </Button>
      </li>
      <li>
        <Button
          link="https://mail.google.com/mail/?view=cm&to=thulhid@gmail.com
"
          title="Gmail"
        >
          <IoMailOutline
            className="cursor-pointer text-red-700 dark:text-red-200"
            title="Gmail"
          />
        </Button>
      </li>
    </ul>
  );
}

export default SocialLinks;
