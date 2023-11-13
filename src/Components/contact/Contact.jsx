export default function Contact() {
  return (
    <section className="flex flex-col items-center gap-10 mx-8">
      <h2 className="text-[1.75rem] font-medium w-[11rem]">
        Feel free to contact me!
      </h2>
      <div className="flex flex-col gap-8">
        <button className="text-green border border-green py-4 px-10 rounded-full text-lg transition-all duration-300 hover:text-black hover:bg-green hover:font-medium">
          <a href="">Discord</a>
        </button>
        <button className="text-green border border-green py-4 px-10 rounded-full text-lg transition-all duration-300 hover:text-black hover:bg-green hover:font-medium">
          <a href="">Linkedin</a>
        </button>
        <button className="text-green border border-green py-4 px-10 rounded-full text-lg transition-all duration-300 hover:text-black hover:bg-green hover:font-medium">
          <a href="">Email</a>
        </button>
        
      </div>
    </section>
  );
}
