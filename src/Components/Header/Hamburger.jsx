export default function Hamburger({ toggleHamburger, isHamburgerOpen }) {
  return (
    <div
      className="w-8 h-8 flex justify-around flex-col   flex-nowrap z-10  lg:hidden  mr-4"
      onClick={toggleHamburger}
    >
      <div
        className={`${
          isHamburgerOpen ? "rotate-45" : "rotate-0"
        }  w-8 h-1 rounded-lg bg-slate-50 origin-[1px] transition-all  ease-linear duration-150`}
      ></div>
      <div
        className={`${
          isHamburgerOpen
            ? "invisible translate-x-full opacity-0"
            : "visible translate-x-0 opacity-100"
        }  w-8 h-1 rounded-lg bg-slate-50 origin-[1px] `}
      ></div>
      <div
        className={`${
          isHamburgerOpen ? "-rotate-45" : "rotate-0"
        }  w-8 h-1 rounded-lg bg-slate-50 origin-[1px] transition-all  ease-linear duration-150 `}
      ></div>
    </div>
  );
}
