export default function ProjectDescription({ title, description }) {
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
