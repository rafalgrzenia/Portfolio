import { useEffect, useState } from "react";
import chevronArrow from "../../assets/images/assets/chevron-up-arrow.svg";
import { scrollToTop } from "../../functions/scrollToTop";

export function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  function handleScrollButtonVisibility() {
    window.scrollY > 20 ? setShowButton(true) : setShowButton(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollButtonVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`shadow-xl fixed bottom-5 right-8 text-2xl rounded-full z-50  w-[3.5rem] h-[3.5rem] px-4 py-4 bg-gray-300 hover:bg-white transition-all cursor-pointer  duration-300 ${
        showButton ? "opacity-100" : "opacity-0"
      }`}
    >
      <img src={chevronArrow} alt="arrow" />
    </button>
  );
}
