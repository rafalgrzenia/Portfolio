import projects from "../../projects.json";
import Project from "./Project";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container flex flex-col items-center gap-[5rem] sm:gap-[7rem]">
        <h2 className="text-[1.75rem]">Projects</h2>

        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}

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
  );
}
