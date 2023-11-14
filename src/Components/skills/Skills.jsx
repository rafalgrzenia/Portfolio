import htmlIcon from "../../assets/images/skills/skills-html.svg";
import cssIcon from "../../assets/images/skills/skills-css.svg";
import jsIcon from "../../assets/images/skills/skills-js.svg";
import reactIcon from "../../assets/images/skills/skills-react.svg";
import figmaIcon from "../../assets/images/skills/skills-figma.svg";
import tailwindIcon from "../../assets/images/skills/skills-tailwind.svg";
import sassIcon from "../../assets/images/skills/skills-sass.svg";
import viteIcon from "../../assets/images/skills/skills-vite.svg";
import gitIcon from "../../assets/images/skills/skills-git.svg";
import jiraIcon from "../../assets/images/skills/skills-jira.svg";

export default function Skills() {
  return (
    <section id="skills" className="flex flex-col items-center mx-8">
      <h2 className="text-[1.75rem] mb-8 font-medium">Skills</h2>
      <div className="grid grid-cols-3 gap-8 items-center justify-items-center">
        <img className="transition-all duration-300 hover:scale-125" src={htmlIcon} alt="html icon" title="HTML" />

        <img className="transition-all duration-300 hover:scale-125" src={cssIcon} alt="css icon" title="CSS" />

        <img className="transition-all duration-300 hover:scale-125" src={jsIcon} alt="javascript icon" title="JavaScript" />

        <img className="transition-all duration-300 hover:scale-125" src={reactIcon} alt="react icon" title="React" />

        <img className="transition-all duration-300 hover:scale-125" src={figmaIcon} alt="figma icon" title="Figma" />

        <img className="transition-all duration-300 hover:scale-125" src={viteIcon} alt="vite icon" title="Vite" />

        <img className="transition-all duration-300 hover:scale-125" src={sassIcon} alt="sass icon" title="Sass" />

        <img className="transition-all duration-300 hover:scale-125" src={tailwindIcon} alt="tailwind icon" title="Tailwind" />

        <img className="transition-all duration-300 hover:scale-125" src={gitIcon} alt="git icon" title="GIT" />

        <img className="transition-all duration-300 hover:scale-125" src={jiraIcon} alt="jira icon" title="Jira" />
      </div>
    </section>
  );
}
