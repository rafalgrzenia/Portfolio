import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

export default function Header() {
  return (
    <header className="mb-[3.75rem] sm:mb-20 relative">
      <div className="container lg:pr-0 pt-6 flex justify-between items-center lg:max-w-[1280px] ">
        <a href="https://rafalgrzenia.dev">
          <h1 className="text-3xl tracking-[0.4375rem] lg:ml-10">RG DEV</h1>
        </a>
        <NavDesktop />
        <NavMobile />
      </div>
    </header>
  );
}
