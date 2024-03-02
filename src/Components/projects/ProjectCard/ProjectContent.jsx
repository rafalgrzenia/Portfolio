export default function ProjectContent({title, description, githubUrl, websiteUrl, techStack}) {

  function ProjectDescription({ title, description }) {
    return (
      <>
        <div className="mb-8 sm:mb-10  md:ml-0">
          <h3 className="text-[1.4rem] text-green font-medium mb-[1rem] sm:text-2xl">
            {title}
          </h3>
          <p className="text-base sm:text-lg">{description}</p>
        </div>
      </>
    );
  }

  function SocialButtons({ githubUrl, websiteUrl }) {
    return (
      <div className="flex gap-4 ">
        <a href={githubUrl} target="_blank">
          <button className="text-green border sm:text-xl border-green rounded-full py-[0.4rem] px-[1.2rem]  transition-all duration-300 hover:text-black hover:bg-green font-medium">
            Github
          </button>
        </a>
        <a href={websiteUrl} target="_blank">
          <button className="text-green border sm:text-xl border-green rounded-full py-[0.4rem] px-[1.2rem]  transition-all duration-300 hover:text-black hover:bg-green font-medium">
            Website
          </button>
        </a>
      </div>
    );
  }

  function TechStackButton({ skill }) {
    return (
      <div className="py-[0.3rem] px-[0.7rem] rounded-[0.625rem] text-sm bg-techstackButton sm:text-base">
        {skill}
      </div>
    );
  }
  

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
