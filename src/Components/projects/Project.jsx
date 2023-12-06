import ProjectDescription from "./ProjectDescription";
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
      <img
        width={550}
        height={360}
        fetchpriority={priority}
        src={imageUrl}
        alt={title}
        className="mb-8 max-w-[450px] w-full mx-auto rounded-lg aspect-auto"
      />
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
