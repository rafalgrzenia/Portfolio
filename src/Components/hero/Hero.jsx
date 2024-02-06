import HeroContent from "./HeroContent";
import Portrait from "./Portrait";

export default function Hero() {
  return (
    <section className="lg:pt-[3rem]">
      <div className="container flex flex-col items-center gap-10 sm:flex-row-reverse sm:gap-0 lg:justify-evenly lg:pr-0">
        <Portrait />
        <HeroContent />
      </div>
    </section>
  );
}
