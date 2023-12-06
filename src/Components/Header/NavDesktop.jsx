import githublogo from "/images/header/github-icon.svg";
import linkedinlogo from "/images/header/linkedin-icon.svg";
import { scrollToView } from "../../functions/scrollToView";

export default function NavDesktop() {
  return (
    <nav className={`hidden lg:block bg-background  pr-8`}>
      <ul className={`flex gap-[3.75rem] items-center `}>
        <li
          onClick={() => scrollToView("projects")}
          className="text-2xl  transition-all duration-300 hover:scale-[1.1] hover:text-green cursor-pointer  "
        >
          Projects
        </li>
        <li
          onClick={() => scrollToView("skills")}
          className="text-2xl transition-all duration-300 hover:scale-[1.1] hover:text-green cursor-pointer "
        >
          Skills
        </li>
        <li
          onClick={() => scrollToView("contact")}
          className="text-2xl transition-all duration-300 hover:scale-[1.1] hover:text-green cursor-pointer "
        >
          Contact
        </li>
        <li>
          <a href="https://github.com/rafalgrzenia" target="_blank">
            <img
              className="w-12 h-12 transition-all duration-300 hover:scale-[1.2]"
              src={githublogo}
              alt="github icon"
            />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/rafalgrzenia/" target="_blank">
            <img
              className="w-12 h-12 transition-all duration-300 hover:scale-[1.2]"
              src={linkedinlogo}
              alt="linkedin icon"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}
