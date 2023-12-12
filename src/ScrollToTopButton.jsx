import { useEffect, useState } from "react";
import chevronArrow from "/images/assets/chevron-up-arrow.svg";
import { scrollToTop } from "./functions/scrollToTop";

export function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function handleScrollButtonVisibility() {
      window.scrollY > 20 ? setShowButton(true) : setShowButton(false);
    }

    window.addEventListener("scroll", handleScrollButtonVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  }, []);

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className={`shadow-xl fixed bottom-5 right-8 text-2xl rounded-full  w-[3.5rem] h-[3.5rem] px-4 py-4 bg-gray-300 hover:bg-white transition-all`}
        >
          <img src={chevronArrow} alt="arrow" />
        </button>
      )}
    </>
  );
}
