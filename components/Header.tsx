import { VFC } from "react";

export const Header: VFC = () => {
  return (
    <header className="body-font bg-black text-white">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center  mb-4 md:mb-0">
          <span className="ml-3 text-xl">TailwindCSS Prefix Parser</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a
            href="https://github.com/niiharamegumu/tailwindcssPrefixTranspiler"
            target={`_blank`}
            className="mr-5 cursor-pointer"
          >
            Github Repository
          </a>
        </nav>
        <a
          href="https://megumu.me/"
          target={`_blank`}
          className="inline-flex items-center cursor-pointer bg-gray-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-400 hover:text-white rounded text-base mt-4 md:mt-0"
        >
          About Author
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </header>
  );
};
