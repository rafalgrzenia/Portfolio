export default function TechStackButton({ skill }) {
  return (
    <button className="py-3 rounded-[0.625rem] text-sm bg-techstackButton">
      {skill}
    </button>
  );
}
