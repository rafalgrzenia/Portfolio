import ProjectContent from "./ProjectContent";
import ProjectThumbnail from "./ProjectThumbnail";

export default function ProjectCard({
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
      <ProjectThumbnail priority={priority} imageUrl={imageUrl} title={title} />
      <ProjectContent
        title={title}
        description={description}
        githubUrl={githubUrl}
        websiteUrl={websiteUrl}
        techStack={techStack}
      />
    </div>
  );
}
