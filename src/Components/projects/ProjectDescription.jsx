export default function ProjectDescription({ title, description, imageUrl }) {
  return (
    <div>
      <img src={imageUrl} alt={title} className="mb-8 max-w-[550px] w-full" />

      <div className="mb-8">
        <h3 className="text-[1.2rem] text-green font-medium mb-[0.6rem]">
          {title}
        </h3>

        <p className="text-base max-w-[90%]">{description}</p>
      </div>
    </div>
  );
}
