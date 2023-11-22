import portraitLarge from "../../assets/images/hero/portrait-large.png";
import portraitMedium from "../../assets/images/hero/portrait-medium.png";
import portraitSmall from "../../assets/images/hero/portrait-small.png";
import handEmoji from "../../assets/images/hero/hand-emoji.svg";
import codingEmoji from "../../assets/images/hero/coding-emoji.png";
import { scrollToView } from "../../functions/scrollToView";

export default function Hero() {
  return (
    <section className="lg:pt-[3rem]">
      <div className="container flex flex-col items-center gap-10 sm:flex-row sm:gap-0 lg:justify-evenly lg:pr-0">
        <img
          src={portraitLarge}
          alt="Portrait"
          srcSet={`${portraitLarge} 450w, ${portraitMedium} 340w, ${portraitSmall} 250w`}
          className="block w-full max-w-[250px] sm:hidden"
        />
        <div className="hero-text-content  flex flex-col gap-2 ml-4 md:ml-0 ">
          <div>
            <div className="flex gap-3 items-center">
              <h2 className="text-white text-[1.75rem] font-medium lg:text-[2.5rem]">
                Hi
              </h2>
              <img
                src={handEmoji}
                alt="hand-emoji"
                className="h-[32px] lg:h-[40px] "
              />
            </div>
            <div className="flex gap-3 items-center">
              <h2 className="text-white text-[1.75rem] font-medium lg:text-[2.5rem]">
                I'm Rafal
              </h2>
              <img
                src={codingEmoji}
                alt="coding emoji"
                className=" h-[32px] lg:h-[40px] "
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
              className="font-medium border text-lg border-green rounded-full text-green px-4 xs:px-9 py-[0.6rem] transition-all duration-300 hover:text-black hover:bg-green hover:font-medium "
            >
              Contact
            </button>
            <a href="">
              <button className="font-medium border text-lg border-green rounded-full text-green px-7 xs:px-12 py-[0.6rem]  transition-all duration-300 hover:text-black hover:bg-green hover:font-medium">
                CV
              </button>
            </a>
          </div>
        </div>

        <img
          src={portraitLarge}
          alt="Portrait"
          srcSet={`${portraitLarge} 450w, ${portraitMedium} 340w, ${portraitSmall} 250w`}
          className="hidden w-full max-w-[250px] sm:max-w-[300px] lg:max-w-[350px]   sm:block"
        />
      </div>
    </section>
  );
}
