import projects from "../../projects.json";
import Project from "./Project";

export default function Projects() {
  return (
    <section className="grid grid-cols-1 place-items-center gap-14 mx-8 ">
      <h2 className="text-[1.75rem]">Projects</h2>
      {projects.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </section>
  );
}
