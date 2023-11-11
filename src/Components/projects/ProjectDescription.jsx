export default function ProjectDescription({ title, description, imageUrl }) {
  return (
    <>
      <img src={imageUrl} alt={title} className="mb-8" />

      <div className="mb-8">
        <h3 className="text-base text-green font-medium mb-[0.6rem]">
          {title}
        </h3>

        <p className="text-sm w-[16rem]">{description}</p>
      </div>
    </>
  );
}
