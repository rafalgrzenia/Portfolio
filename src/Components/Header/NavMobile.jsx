import { useState } from "react";
import githublogo from "../../assets/images/header/github-icon.svg";
import linkedinlogo from "../../assets/images/header/linkedin-icon.svg";
import Hamburger from "./Hamburger";
import { scrollToView } from "../../functions/scrollToView";

export default function NavMobile() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  // document.addEventListener("click", (e) => {
  //   if (e.target.closest("nav")) return;
  //   setIsHamburgerOpen(false);
  // });

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
            : "invisible opacity-0 translate-x-full"
        } flex flex-col  items-end  absolute top-0 right-0  transition-all duration-700 lg:hidden`}
      >
        <ul
          className={`nav-ul flex flex-col  gap-[3.75rem] items-center ml-auto px-14 pt-28  bg-black/90 h-screen  transition-all duration-700`}
        >
          <li
            onClick={() => {
              toggleHamburger();
              scrollToView("projects");
            }}
            className="text-2xl  transition-all duration-300 hover:scale-[1.1] hover:text-green cursor-pointer  "
          >
            Projects
          </li>
          <li
            onClick={() => {
              toggleHamburger();
              scrollToView("skills");
            }}
            className="text-2xl transition-all duration-300 hover:scale-[1.1] hover:text-green cursor-pointer "
          >
            Skills
          </li>
          <li
            onClick={() => {
              toggleHamburger();
              scrollToView("contact");
            }}
            className="text-2xl transition-all duration-300 hover:scale-[1.1] hover:text-green cursor-pointer "
          >
            Contact
          </li>
          <li>
            <a href="https://github.com/rafalgrzenia" target="_blank">
              <img
                className="w-[3.5rem] h-[3.5rem] m-auto transition-all duration-300 hover:scale-[1.2]"
                src={githublogo}
                alt="github icon"
              />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/rafalgrzenia/" target="_blank">
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
