import portrait from "../../assets/images/hero/hero-image.png";
import handEmoji from "../../assets/images/hero/hand-emoji.svg";
import codingEmoji from "../../assets/images/hero/coding-emoji.svg";

export default function Hero() {
  return (
    <section className="mx-6 flex flex-col items-center  gap-6">
      <img src={portrait} alt="Portrait" className="w-[250px] h-[250px]" />
      <div className="flex flex-col gap-2">
        <div className="flex gap-3">
          <h2 className="text-white text-[1.75rem] font-medium">Hi</h2>
          <img src={handEmoji} alt="hand-emoji" />
        </div>
        <div className="flex gap-3">
          <h2 className="text-white text-[1.75rem] font-medium">I'm Rafal</h2>
          <img src={codingEmoji} alt="coding emoji" />
        </div>
        <h2 className="text-green text-xl font-medium">Front-End Developer</h2>{" "}
        <p className="max-w-[95%]">
          I design and develop responsive, optimized and efficient websites.
          Currently available for work opportunities.
        </p>
      </div>

      <div className="flex gap-8">
        <button className="font-medium border border-green rounded-full text-green px-4 py-[0.6rem] ">
          Contact me
        </button>
        <button className="font-medium border border-green rounded-full text-green px-10 py-[0.6rem]">
          CV
        </button>
      </div>
    </section>
  );
}
