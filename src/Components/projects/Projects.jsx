import projects from "./projects.json";
import Project from "./Project";
import Separator from "../global/Separator";

export default function Projects() {
  return (
    <>
      <section id="projects">
        <div className="container flex flex-col items-center gap-[5rem] sm:gap-[7rem]">
          <h2 className="text-[2rem] md:text-[2.5rem]">Projects</h2>

          <div className="grid grid-cols-1  lg:grid-cols-2 gap-12 lg:gap-20">
            {projects.map((project) => (
              <Project key={project.id} {...project} />
            ))}
          </div>

          <a
            href="https://github.com/rafalgrzenia?tab=repositories"
            target="_blank"
          >
            <button className="border border-green text-green text-lg sm:text-xl py-[1rem] px-5 rounded-full transition-all duration-300 hover:text-black hover:bg-green font-medium">
              More Projects
            </button>
          </a>
        </div>
      </section>
      <Separator />
    </>
  );
}
