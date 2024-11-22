import React from "react";
const About = () => {
  return (
    <div className="m-8 text-black dark:text-white  transition-all duration-500 ease-in-out">
      <div className="mb-6">
        <p className="text-5xl font-bold mb-2">About</p>
        <p className="text-lg">
          Let’s face it — designing components can be tedious and exhausting.
          Some days, things just don’t work as expected, especially when
          adjusting for smaller screens. For those frustrating moments (when the
          code gods seem to be against us), I’ve taken care of the hard parts.
          Now, you can enjoy fast, easy, and fully ready-made components
          designed to simplify your work.
        </p>
        <br />
        <p className="text-lg">
          This is for developers who don’t want to waste time on minor UI
          details or prefer focusing on the app’s core logic. It’s a perfect
          starting point for building applications, offering straightforward,
          no-fuss components. It’s not a library or framework — just copy,
          paste, tweak a little, and you’re good to go. With this, you can skip
          the tedious UI work and dive straight into the heart of your app.
        </p>
        <br />
        <p className="text-lg">
          The best part? It’s open source! You can use it however you want. It’s
          also easy to use and customize to fit your needs. Plus, contributions
          are welcome — let’s build something amazing together!
        </p>
      </div>
      <p className="my-4 text-sm dark:text-gray-600">
        a <b className="text-sm dark:text-gray-400 font-bold">Harsh Sanket</b>{" "}
        production —
        <a className="text-blue-500" href="https://www.github.com/harshsanket">
          @Harshsanket
        </a>
      </p>
      <div className="flex items-center space-x-4">
        <button className="p-2 space-x-2 border dark:border-white border-black bg-white rounded-lg">
          <img
            src="https://github.githubassets.com/assets/GitHub-Logo-ee398b662d42.png"
            alt="GitHub Logo"
            className="h-5"
          />
        </button>
        <button>
          <a
            href="https://www.buymeacoffee.com/Harshsanket"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
              alt="Buy Me A Coffee"
              className="h-10"
            />
          </a>
        </button>
      </div>
    </div>
  );
};

export default About;
