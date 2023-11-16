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
}) {
  return (
    <div>
      <ProjectDescription
        title={title}
        description={description}
        imageUrl={imageUrl}
      />
      <SocialButtons githubUrl={githubUrl} websiteUrl={websiteUrl} />
      <div className="flex gap-[0.6rem] flex-wrap mt-8">
        {techStack.map((skill) => (
          <TechStackButton key={skill} skill={skill} />
        ))}
      </div>
    </div>
  );
}
