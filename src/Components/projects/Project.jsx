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
  priority
}) {
  return (
    <div>
      <ProjectDescription
        title={title}
        description={description}
        imageUrl={imageUrl}
        priority={priority}
      />
      <SocialButtons githubUrl={githubUrl} websiteUrl={websiteUrl} />
      <div className="flex gap-[0.6rem] sm:gap-3 flex-wrap mt-10  sm:mt-12 sm:ml-16 md:ml-0">
        {techStack.map((skill) => (
          <TechStackButton key={skill} skill={skill} />
        ))}
      </div>
    </div>
  );
}
