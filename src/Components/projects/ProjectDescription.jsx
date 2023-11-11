export const portfolioDescription = "This is my first project of the website. I build it for CNC company. Site was ment to be easy and kept in minimalistic manner."


export default function ProjectDescription({name, description, imgSrc, imgAlt}) {
  return (
    <>
      <img src={imgSrc} alt={imgAlt} className="mb-8" />

      <div className="mb-8">
        <h3 className="text-base text-green font-medium mb-[0.6rem]">
          {name}
        </h3>

        <p className="text-sm w-[16rem]">
          {description}
        </p>
      </div>
    </>
  );
}
