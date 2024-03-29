import handEmoji from "../../assets/images/hero/hand-emoji.webp";
import codingEmoji from "../../assets/images/hero/coding-emoji.webp";
import { scrollToView } from "../../functions/scrollToView";
import cv from "../../assets/Rafal_Grzenia_CV.pdf";

export default function HeroContent() {
  return (
    <div className="hero-text-content  flex flex-col gap-2 ml-4 md:ml-0 ">
      <div>
        <div className="flex gap-3 items-center ">
          <h2 className="text-white text-[1.75rem] font-medium lg:text-[2.5rem]">
            Hi
          </h2>
          <img src={handEmoji} alt="hand-emoji" className="h-[40px] w-[40px] aspect-square" />
        </div>
        <div className="flex gap-3 items-center">
          <h2 className="text-white text-[1.75rem] font-medium lg:text-[2.5rem]">
            I'm Rafal
          </h2>
          <img
            src={codingEmoji}
            alt="coding emoji"
            className="h-[40px] w-[40px]"
          />
        </div>
        <h2 className="text-green text-xl font-medium sm:mt-2 lg:text-[2rem]">
          Front-End Developer
        </h2>

        <p className="mt-4  max-w-[40ch] lg:text-lg">
          I design and develop responsive, optimized and efficient websites.
          Currently available for work opportunities.
        </p>
      </div>

      <div className="flex gap-6 mt-4">
        <button
          onClick={() => scrollToView("contact")}
          className="font-medium border text-lg border-green rounded-full text-green px-6 xs:px-9 py-[0.6rem] transition-all duration-300 hover:text-black hover:bg-green hover:font-medium "
        >
          Contact
        </button>
        <a href={cv} target="_blank" download="Rafal_Grzenia_CV">
          <button className="font-medium border text-lg border-green rounded-full text-green px-9 xs:px-12 py-[0.6rem]  transition-all duration-300 hover:text-black hover:bg-green hover:font-medium">
            CV
          </button>
        </a>
      </div>
    </div>
  );
}
