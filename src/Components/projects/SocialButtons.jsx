export default function SocialButtons({ githubUrl, websiteUrl }) {
  return (
    <div className="flex gap-4 sm:ml-16 md:ml-0">
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
