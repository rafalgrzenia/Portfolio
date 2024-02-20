import { useEffect, useState } from "react";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <header
      className={`mb-[3.75rem] sm:mb-20 sticky top-0 transition-colors duration-200 ${
        scrolled ? "bg-gray-900/95" : "bg-[#060606]"
      }`}
    >
      <div className="container  p-6 flex justify-between items-center lg:max-w-[1280px] ">
        <a href="https://rafalgrzenia.dev">
          <h1 className="text-3xl tracking-[0.4375rem] lg:ml-10">RG DEV</h1>
        </a>
        <NavDesktop />
        <NavMobile />
      </div>
    </header>
  );
}
