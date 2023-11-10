import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="mx-6 my-6 flex justify-between items-center">
      <h1 className="text-3xl tracking-[0.4375rem]">RG DEV</h1>
      <Navbar />
    </header>
  );
}
