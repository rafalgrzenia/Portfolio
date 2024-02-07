import ProjectDescription from "./ProjectDescription";
import ProjectImage from "./ProjectImage";
import SocialButtons from "./SocialButtons";
import TechStackButton from "./TechStackButton";

export default function Project({
  id,
  title,
  imageUrl,
  description,
  githubUrl,
  websiteUrl,
  techStack,
  priority,
}) {
  return (
    <div className="flex flex-col max-w-[400px] sm:max-w-[450px]">
      <ProjectImage priority={priority} imageUrl={imageUrl} title={title} />
      <div className="project-content ml-2">
        <ProjectDescription title={title} description={description} />

        <SocialButtons githubUrl={githubUrl} websiteUrl={websiteUrl} />

        <div className="flex gap-[0.6rem] sm:gap-3 flex-wrap mt-10  sm:mt-12">
          {techStack.map((skill) => (
            <TechStackButton key={skill} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}
