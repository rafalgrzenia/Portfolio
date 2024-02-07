export default function ProjectImage({priority, imageUrl, title}) {
  return (
    <img
      width={550}
      height={360}
      fetchpriority={priority}
      src={imageUrl}
      alt={title}
      className="mb-8 max-w-[450px] w-full mx-auto rounded-lg aspect-auto"
    />
  );
}
