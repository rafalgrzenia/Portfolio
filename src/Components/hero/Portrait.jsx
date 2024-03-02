import portraitLarge from "../../assets/images/hero/portrait-large.webp";
import portraitMedium from "../../assets/images/hero/portrait-medium.webp";
import portraitSmall from "../../assets/images/hero/portrait-small.webp";

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
