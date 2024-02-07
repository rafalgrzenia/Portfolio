import ProjectDescription from "./ProjectDescription";
import SocialButtons from "./SocialButtons";
import TechStackButton from "./TechStackButton";

export default function ProjectContent({title, description, githubUrl, websiteUrl, techStack}) {
  return (
    <div className="project-content ml-2">
      <ProjectDescription title={title} description={description} />

      <SocialButtons githubUrl={githubUrl} websiteUrl={websiteUrl} />

      <div className="flex gap-[0.6rem] sm:gap-3 flex-wrap mt-10  sm:mt-12">
        {techStack.map((skill) => (
          <TechStackButton key={skill} skill={skill} />
        ))}
      </div>
    </div>
  );
}
