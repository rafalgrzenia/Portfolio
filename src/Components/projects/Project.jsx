import ProjectContent from "./ProjectContent";
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
      <ProjectContent
        description={description}
        githubUrl={githubUrl}
        websiteUrl={websiteUrl}
        techStack={techStack}
      />
    </div>
  );
}
