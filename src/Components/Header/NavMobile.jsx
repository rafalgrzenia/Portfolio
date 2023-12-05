import { useState } from "react";
import githublogo from "/images/header/github-icon.svg";
import linkedinlogo from "/images/header/linkedin-icon.svg";
import Hamburger from "./Hamburger";
import { scrollToView } from "../../functions/scrollToView";

export default function NavMobile() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  function toggleHamburger() {
    setIsHamburgerOpen((prev) => !prev);
  }

  return (
    <>
      <Hamburger
        toggleHamburger={toggleHamburger}
        isHamburgerOpen={isHamburgerOpen}
      />

      <nav
        className={`${
          isHamburgerOpen
            ? "visible opacity-100 translate-x-0 "
            : " invisible opacity-0 translate-x-full "
        } bg-black/90 h-full flex-col  gap-12 items-center  absolute top-0 right-0 px-14 py-14 md:px-20 md:py-20 text-center transition-all duration-700 lg:hidden`}
      >
        <ul
          className={`flex flex-col  gap-[3.75rem] items-center ml-auto mt-20 `}
        >
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
            <a href="https://github.com/rafalgrzenia">
              <img
                className="w-[3.5rem] h-[3.5rem] m-auto transition-all duration-300 hover:scale-[1.2]"
                src={githublogo}
                alt="github icon"
              />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/rafalgrzenia/">
              <img
                className="w-[3.5rem] h-[3.5rem] mt-[-1.25rem] ml-auto mr-auto transition-all duration-300 hover:scale-[1.2]"
                src={linkedinlogo}
                alt="linkedin icon"
              />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
