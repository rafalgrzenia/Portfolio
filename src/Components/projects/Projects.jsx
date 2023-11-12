import projects from "../../projects.json";
import Project from "./Project";

export default function Projects() {
  return (
    <section className="grid grid-cols-1 place-items-center gap-14 mx-8 ">
      <h2 className="text-[1.75rem]">Projects</h2>
      {projects.map((project) => (
        <Project key={project.id} {...project} />
      ))}
      <a href="https://github.com/rafalgrzenia?tab=repositories">
        <button className="border border-green text-green py-[0.6rem] px-5 rounded-full">
          More Projects
        </button>
      </a>
    </section>
  );
}
