import portraitLarge from "../../assets/images/hero/portrait-large.png";
import portraitMedium from "../../assets/images/hero/portrait-medium.png";
import portraitSmall from "../../assets/images/hero/portrait-small.png";
import handEmoji from "../../assets/images/hero/hand-emoji.svg";
import codingEmoji from "../../assets/images/hero/coding-emoji.svg";
import { scrollToView } from "../../functions/scrollToView";

export default function Hero() {
  return (
    <section>
      <div className="container flex flex-col items-center gap-10">
        <img
          src={portraitLarge}
          alt="Portrait"
          srcSet={`${portraitLarge} 450w, ${portraitMedium} 340w, ${portraitSmall} 250w`}
          className="block w-full max-w-[250px]"
        />
        <div className="flex flex-col gap-2">
          <div className="flex gap-3">
            <h2 className="text-white text-[1.75rem] font-medium">Hi</h2>
            <img src={handEmoji} alt="hand-emoji" />
          </div>
          <div className="flex gap-3">
            <h2 className="text-white text-[1.75rem] font-medium">I'm Rafal</h2>
            <img src={codingEmoji} alt="coding emoji" />
          </div>
          <h2 className="text-green text-xl font-medium">
            Front-End Developer
          </h2>{" "}
          <p className="w-[90%]">
            I design and develop responsive, optimized and efficient websites.
            Currently available for work opportunities.
          </p>
        </div>
        <div className="flex gap-6 ">
          <button
            onClick={() => scrollToView("contact")}
            className="font-medium border text-lg border-green rounded-full text-green px-4 py-[0.6rem] transition-all duration-300 hover:text-black hover:bg-green hover:font-medium "
          >
            Contact
          </button>
          <a href="">
            <button className="font-medium border text-lg border-green rounded-full text-green px-7 py-[0.6rem] transition-all duration-300 hover:text-black hover:bg-green hover:font-medium">
              CV
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
