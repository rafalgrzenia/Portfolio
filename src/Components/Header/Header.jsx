import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="mx-6 mt-6 mb-[3.75rem] flex justify-between items-center">
      <h1 className="text-3xl tracking-[0.4375rem]">RG DEV</h1>
      <Navbar />
    </header>
  );
}
