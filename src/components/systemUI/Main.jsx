import React from "react";
import useTheme from "../../contexts/Theme";
import { Link } from "react-router-dom";

const Main = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
    <div className="sm:hidden mt-16 h-screen p-4 items-center justify-center  bg-slate-100 text-black dark:bg-neutral-950 dark:text-white transition-all duration-500 ease-in-out">
        <div className="text-center">
          <span className="sm:text-6xl text-2xl font-bold">auraui</span>
          <p className="mt-6 text-base sm:text-lg leading-relaxed mx-auto dark:text-gray-400 text-black">
            Please view on large screen device.
          </p>
          <p className="my-4 text-sm dark:text-gray-600 text-black">
            a{" "}
            <b className="text-sm dark:text-gray-400 text-black font-bold">
              Harsh Sanket
            </b>{" "}
            production —
            <a
              className="text-blue-500 font-semibold"
              href="https://www.github.com/harshsanket"
            >
              @Harshsanket
            </a>
          </p>
        </div>
      </div>
      <div className="h-screen p-4 hidden sm:flex items-center justify-center  bg-slate-100 text-black dark:bg-neutral-950 dark:text-white transition-all duration-500 ease-in-out">
        <div className="text-center">
          <span className="sm:text-6xl text-2xl font-bold">auraui</span>
          <p className="mt-6 text-base sm:text-lg leading-relaxed mx-auto dark:text-gray-400 text-black">
            Front end components and templates designed to enhance your
            productivity.
          </p>

          <p className="my-4 text-base font-semibold ">Free — Simple — Fast</p>

          <button className="p-2 mx-2 w-32 dark:bg-slate-100 bg-neutral-800 hover:underline  rounded-lg dark:text-black text-white font-bold">
            <Link to={"getting-started/overview"}>Browse</Link>
          </button>
          <p className="my-4 text-sm dark:text-gray-600 text-black">
            a{" "}
            <b className="text-sm dark:text-gray-400 text-black font-bold">
              Harsh Sanket
            </b>{" "}
            production —
            <a
              className="text-blue-500 font-semibold"
              href="https://www.github.com/harshsanket"
            >
              @Harshsanket
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Main;
