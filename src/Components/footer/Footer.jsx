import githublogo from "../../assets/images/header/github-icon.svg";
import linkedinlogo from "../../assets/images/header/linkedin-icon.svg";

export default function Footer() {
  return (
    <footer className="mb-20">
      <div className="container flex flex-col items-center gap-5">
        <div className="w-[14rem]">
          <h2 className="text-lg mb-2">Made by Rafal Grzenia ©</h2>
          <h2 className="text-lg">Powered by React & Tailwind CSS</h2>
        </div>

        <div className="flex gap-10 mt-5">
          <a href="https://github.com/rafalgrzenia" target="_blank">
            <button className="transition-all duration-300 hover:scale-[1.2]">
              <img
                src={githublogo}
                alt="github repository"
                className="w-[60px] h-[60px]"
              />
            </button>
          </a>
          <a href="https://www.linkedin.com/in/rafalgrzenia/" target="_blank">
            <button className="transition-all duration-300 hover:scale-[1.2]">
              <img
                src={linkedinlogo}
                alt="linkedin"
                className="w-[60px] h-[60px]"
              />
            </button>
          </a>
        </div>
      </div>
    </footer>
  );
}
