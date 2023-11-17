export default function TechStackButton({ skill }) {
  return (
    <button className="py-[0.3rem] px-[0.7rem] rounded-[0.625rem] text-sm bg-techstackButton sm:text-base">
      {skill}
    </button>
  );
}
