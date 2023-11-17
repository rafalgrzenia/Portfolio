export default function ProjectDescription({ title, description, imageUrl }) {
  return (
    <div>
      <img
        src={imageUrl}
        alt={title}
        className="mb-8 max-w-[450px]   w-full mx-auto"
      />

      <div className="mb-8 sm:mb-10  sm:ml-16 md:ml-0">
        <h3 className="text-[1.2rem] text-green font-medium mb-[0.6rem] sm:mb-[1rem] sm:text-2xl">
          {title}
        </h3>

        <p className="text-base max-w-[90%] sm:text-lg sm:max-w-[70%] md:max-w-[23rem]">
          {description}
        </p>
      </div>
    </div>
  );
}
