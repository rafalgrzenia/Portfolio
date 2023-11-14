import { useState } from "react";
import githublogo from "../../assets/images/header/github-icon.svg";
import linkedinlogo from "../../assets/images/header/linkedin-icon.svg";
import Hamburger from "./Hamburger";
import { scrollToView } from "../../functions/scrollToView";



export default function Navbar() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  function toggleHamburger() {
    setIsHamburgerOpen(!isHamburgerOpen);
  }

  return (
    <>
      <Hamburger
        toggleHamburger={toggleHamburger}
        isHamburgerOpen={isHamburgerOpen}
      />
      <nav
        className={`flex ${
          isHamburgerOpen ? "right-0" : "right-[-147px]"
        } justify-center items-center px-6 py-6 text-center absolute top-20 transition-all duration-700  bg-[rgba(0,0,0,0.8)] `}
      >
        <ul className={`flex flex-col gap-[3.75rem] `}>
          <li onClick={() => scrollToView("projects")} className="text-2xl transition-all duration-300 hover:scale-[1.1] hover:text-green cursor-pointer ">
           Projects
          </li>
          <li onClick={() => scrollToView("skills")} className="text-2xl transition-all duration-300 hover:scale-[1.1] hover:text-green cursor-pointer">
           Skills
          </li>
          <li onClick={() => scrollToView("contact")} className="text-2xl transition-all duration-300 hover:scale-[1.1] hover:text-green cursor-pointer">
           Contact
          </li>
          <a href="https://github.com/rafalgrzenia">
            <img
              className="w-[3rem] h-auto m-auto transition-all duration-300 hover:scale-[1.2]"
              src={githublogo}
              alt="github icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/rafalgrzenia/">
            <img
              className="w-[3rem] h-auto mt-[-1.25rem] ml-auto mr-auto transition-all duration-300 hover:scale-[1.2]"
              src={linkedinlogo}
              alt="linkedin icon"
            />
          </a>
        </ul>
      </nav>
    </>
  );
}
