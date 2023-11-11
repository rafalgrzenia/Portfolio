import portfolio from "../../assets/images/projects/projects-portfolio.jpg";
import SocialButton from "./SocialButton";
import TechStackButton from "./TechStackButton";

export default function Projects() {
  return (
    <section className="grid grid-cols-1 place-items-center gap-14 mx-8 ">
      <h2 className="text-[1.75rem]">Projects</h2>

      <div>
        <img src={portfolio} alt="project portfolio image" className="mb-8" />

        <div className="mb-8">
          <h3 className="text-base text-green font-medium mb-[0.6rem]">
            Personal Portfolio
          </h3>

          <p className="text-sm w-[16rem]">
            This is my first project of the website. I build it for CNC company.
            Site was ment to be easy and kept in minimalistic manner.
          </p>
        </div>

        <SocialButton name="Github" />
        <SocialButton name="Website" />

        <div className="grid grid-cols-3  gap-[0.6rem] flex-wrap mt-8">
          <TechStackButton skill="HTML" />
          <TechStackButton skill="SCSS" />
          <TechStackButton skill="React" />
          <TechStackButton skill="Tailwind" />
          <TechStackButton skill="Vite" />
        </div>
      </div>
    </section>
  );
}
