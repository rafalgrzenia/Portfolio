import { useEffect, useState } from "react";
import { copyToClipBoard } from "../../functions/copyToClipBoard";
import { delay } from "../../functions/delay";

export default function Contact() {
  const [isCopied, setisCopied] = useState(false);
  const [disabled, setDisabled] = useState(false);

  async function handleCopyOnClick(e) {
    copyToClipBoard(e);
    setisCopied(true);
    setDisabled(true);
    await delay(2000);
    setisCopied(false);
    await delay(400);
    setDisabled(false);
  }

  return (
    <section id="contact" >
      <div className="container flex flex-col items-center gap-12 ">
        <h2 className="text-[1.75rem] font-medium w-[11rem]">
          Contact me!
        </h2>
        <div className="flex flex-col gap-8">
          <button
            disabled={disabled}
            onClick={(e) => handleCopyOnClick(e)}
            value={"rafalgrzenia"}
            className="text-green border border-green py-4  w-[11rem] rounded-full text-lg transition-all duration-300 hover:text-black hover:bg-green hover:font-medium"
          >
            Discord
          </button>
          <a href="https://www.linkedin.com/in/rafalgrzenia/" target="_blank">
            <button className="text-green border border-green py-4 w-[11rem] rounded-full text-lg transition-all duration-300 hover:text-black hover:bg-green hover:font-medium">
              Linkedin
            </button>
          </a>
          <button
            disabled={disabled}
            onClick={(e) => handleCopyOnClick(e)}
            value={"rafalgrzenia@gmail.com"}
            className="text-green border border-green py-4 w-[11rem] rounded-full text-lg transition-all duration-300 hover:text-black hover:bg-green hover:font-medium"
          >
            Email
          </button>
          {isCopied ? (
            <div className="copy-alert">Copied to Clipboard!</div>
          ) : (
            <div className="copy-alert hide">Copied to Clipboard!</div>
          )}
        </div>
      </div>
    </section>
  );
}
