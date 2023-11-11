import { useState } from "react";
import githublogo from "../../assets/images/header/github-icon.svg";
import linkedinlogo from "../../assets/images/header/linkedin-icon.svg";
import Hamburger from "./Hamburger";

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
          <li className="text-2xl">
            <a to="">Projects</a>
          </li>
          <li className="text-2xl">
            <a to="">Skills</a>
          </li>
          <li className="text-2xl">
            <a to="">Contact</a>
          </li>
          <img
            className="w-[3rem] h-auto m-auto"
            src={githublogo}
            alt="github icon"
          />
          <img
            className="w-[3rem] h-auto mt-[-1.25rem] ml-auto mr-auto"
            src={linkedinlogo}
            alt="linkedin icon"
          />
        </ul>
      </nav>
    </>
  );
}
