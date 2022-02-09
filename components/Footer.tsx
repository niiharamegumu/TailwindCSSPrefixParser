import { VFC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

export const Footer: VFC = () => {
  return (
    <footer className="text-white body-font bg-black">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center">
          <span className="ml-3 text-xl">TailwindCSS Prefix Parser</span>
        </a>
        <p className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2  sm:py-2 sm:mt-0 mt-4 text-center">
          © 2022 TailwindCSS Prefix Parser —
          <a
            href="https://twitter.com/knyttneve"
            className="ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            by megumu.
          </a>
        </p>
        <div className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            href="https://github.com/niiharamegumu"
            target={`_blank`}
            className="ml-3 cursor-pointer w-8 h-8"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://twitter.com/lmgm_m"
            target={`_blank`}
            className="ml-3 cursor-pointer text-blue-400 w-8 h-8"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
};
