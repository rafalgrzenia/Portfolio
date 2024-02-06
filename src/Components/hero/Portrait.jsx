import portraitLarge from "/images/hero/portrait-large.webp";
import portraitMedium from "/images/hero/portrait-medium.webp";
import portraitSmall from "/images/hero/portrait-small.webp";

export default function Portrait() {
  return (
    <img
      src={portraitLarge}
      alt="Portrait"
      srcSet={`${portraitLarge} 450w, ${portraitMedium} 340w, ${portraitSmall} 250w`}
      className="block w-full max-w-[250px] md:max-w-[280px] lg:max-w-[350px] aspect-square"
    />
  );
}
