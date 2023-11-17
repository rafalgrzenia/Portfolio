import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="mb-[3.75rem] sm:mb-20">
      <div className="container lg:pr-0 pt-6 flex justify-between items-center ">
        <a href="#">
          <h1 className="text-3xl tracking-[0.4375rem]">RG DEV</h1>
        </a>
        <Navbar />
      </div>
    </header>
  );
}
