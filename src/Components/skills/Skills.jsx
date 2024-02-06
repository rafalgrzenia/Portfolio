import htmlIcon from "/images/skills/skills-html.svg";
import cssIcon from "/images/skills/skills-css.svg";
import jsIcon from "/images/skills/skills-js.svg";
import reactIcon from "/images/skills/skills-react.svg";
import figmaIcon from "/images/skills/skills-figma.svg";
import tailwindIcon from "/images/skills/skills-tailwind.svg";
import sassIcon from "/images/skills/skills-sass.svg";
import viteIcon from "/images/skills/skills-vite.svg";
import gitIcon from "/images/skills/skills-git.svg";
import jiraIcon from "/images/skills/skills-jira.svg";
import Separator from "../global/Separator";

export default function Skills() {
  return (
    <>
      <section id="skills" className="md:pt-4">
        <div className="container flex flex-col items-center">
          <h2 className="text-[1.75rem] mb-8 sm:mb-12 lg:mb-16 sm:text-[2rem] lg:text-[2.5rem] font-medium">
            Skills
          </h2>
          <div className="grid grid-cols-3 gap-8 sm:gap-10 md:gap-14 items-center justify-items-center sm:grid-cols-5">
            <img
              className="transition-all duration-300 hover:scale-125 w-[60px] h-[60px] md:h-[70px] md:w-[70px]  "
              src={htmlIcon}
              alt="html icon"
              title="HTML"
            />

            <img
              className="transition-all duration-300 hover:scale-125 w-[60px] h-[60px] md:h-[70px] md:w-[70px] "
              src={cssIcon}
              alt="css icon"
              title="CSS"
            />

            <img
              className="transition-all duration-300 hover:scale-125 w-[60px] h-[60px] md:h-[70px] md:w-[70px] "
              src={jsIcon}
              alt="javascript icon"
              title="JavaScript"
            />

            <img
              className="transition-all duration-300 hover:scale-125 w-[60px] h-[60px] md:h-[70px] md:w-[70px] "
              src={reactIcon}
              alt="react icon"
              title="React"
            />

            <img
              className="transition-all duration-300 hover:scale-125 w-[60px] h-[60px] md:h-[70px] md:w-[70px] "
              src={figmaIcon}
              alt="figma icon"
              title="Figma"
            />

            <img
              className="transition-all duration-300 hover:scale-125 w-[60px] h-[60px] md:h-[70px] md:w-[70px] "
              src={viteIcon}
              alt="vite icon"
              title="Vite"
            />

            <img
              className="transition-all duration-300 hover:scale-125 w-[60px] h-[60px] md:h-[70px] md:w-[70px] "
              src={sassIcon}
              alt="sass icon"
              title="Sass"
            />

            <img
              className="transition-all duration-300 hover:scale-125 w-[60px] h-[60px] md:h-[70px] md:w-[70px] "
              src={tailwindIcon}
              alt="tailwind icon"
              title="Tailwind"
            />

            <img
              width={56}
              height={56}
              className="transition-all duration-300 hover:scale-125 md:h-[70px] md:w-[70px]  "
              src={gitIcon}
              alt="git icon"
              title="GIT"
            />

            <img
              width={56}
              height={56}
              className="transition-all duration-300 hover:scale-125 md:h-[70px] md:w-[70px] "
              src={jiraIcon}
              alt="jira icon"
              title="Jira"
            />
          </div>
        </div>
      </section>
      <Separator />
    </>
  );
}
