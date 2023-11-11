export default function SocialButtons({ githubUrl, websiteUrl }) {
  return (
    <>
      <a href={githubUrl}>
        <button className="text-green border border-green rounded-full py-[0.3rem] px-[0.9rem] mr-4">
          Github
        </button>
      </a>
      <a href={websiteUrl}>
        <button className="text-green border border-green rounded-full py-[0.3rem] px-[0.9rem] mr-4">
          Website
        </button>
      </a>
    </>
  );
}
