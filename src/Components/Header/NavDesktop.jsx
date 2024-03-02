import githublogo from "../../assets/images/header/github-icon.svg";
import linkedinlogo from "../../assets/images/header/linkedin-icon.svg";
import { scrollToView } from "../../functions/scrollToView";

export default function NavDesktop() {
  return (
    <nav className={`hidden lg:block   pr-8`}>
      <ul className={`flex gap-[3.75rem] items-center `}>
        <li
          onClick={() => scrollToView("projects")}
          className="text-xl  transition-all duration-300 hover:scale-[1.1] hover:text-green cursor-pointer  "
        >
          Projects
        </li>
        <li
          onClick={() => scrollToView("skills")}
          className="text-xl transition-all duration-300 hover:scale-[1.1] hover:text-green cursor-pointer "
        >
          Skills
        </li>
        <li
          onClick={() => scrollToView("contact")}
          className="text-xl transition-all duration-300 hover:scale-[1.1] hover:text-green cursor-pointer "
        >
          Contact
        </li>
        <li>
          <a href="https://github.com/rafalgrzenia" target="_blank">
            <img
              className="w-10 h-10 transition-all duration-300 hover:scale-[1.2]"
              src={githublogo}
              alt="github icon"
            />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/rafalgrzenia/" target="_blank">
            <img
              className="w-10 h-10 transition-all duration-300 hover:scale-[1.2]"
              src={linkedinlogo}
              alt="linkedin icon"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}
