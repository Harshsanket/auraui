import React, { useEffect, useState } from "react";
import { LuGithub, LuMoonStar, LuSunMedium } from "react-icons/lu";
import useTheme from "../../contexts/Theme";
import { Link, useNavigate } from "react-router-dom";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(theme);
  }, [theme]);
  const handleThemeChange = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const items = [
    {
      id: 1,
      name: "signin",
      link: "/components/form/signin",
    },
    {
      id: 2,
      name: "signup",
      link: "/components/form/signup",
    },
  ];
  const handleOnSelect = (item) => {
    navigate(item.link);
  };
  const formatResult = (item) => {
    return (
      <>
        <Link to={item.link}>
          <span style={{ display: "block", textAlign: "left" }}>
            {item.name}
          </span>
        </Link>
      </>
    );
  };
  const styling = {
    height: "36px",
    border: "1px solid #3b82f6",
    borderRadius: "10px",
    backgroundColor: "transparent",
    boxShadow: "rgba(32, 33, 36, 0.28) 0px 1px 6px 0px",
    hoverBackgroundColor: "#3b82f6",
    color: "black",
    fontSize: "16px",
    fontFamily: "Arial",
    iconColor: "grey",
    lineColor: "#3b82f6",
    placeholderColor: "grey",
    clearIconMargin: "3px 14px 0 0",
    searchIconMargin: "0 0 0 16px",
  };

  const stylingdark = {
    height: "36px",
    border: "1px solid #3b82f6",
    borderRadius: "10px",
    backgroundColor: "transparent",
    boxShadow: "rgba(32, 33, 36, 0.28) 0px 1px 6px 0px",
    hoverBackgroundColor: "#3b82f6",
    color: "white",
    fontSize: "16px",
    fontFamily: "Arial",
    iconColor: "grey",
    lineColor: "#3b82f6",
    placeholderColor: "grey",
    clearIconMargin: "3px 14px 0 0",
    searchIconMargin: "0 0 0 16px",
  };
  return (
    <>
      <div
        className={`fixed top-0 h-16 w-full text-xl flex justify-between items-center px-10 z-10 
   ${
     theme === "light" ? "bg-slate-50 text-black" : "bg-neutral-900 text-white"
   }`}
      >
        <div className="flex-1 text-left">
          <Link to={"/"} className="cursor-pointer font-bold">
            auraui
          </Link>
        </div>
        <div className="sm:flex flex-1 gap-4 text-right items-center justify-end hidden">
          <div className="flex items-center p-2 h-8">
            {
              theme == 'dark'? (
                <ReactSearchAutocomplete
              items={items}
              onSelect={handleOnSelect}
              autoFocus
              formatResult={formatResult}
              styling={stylingdark}
              className="w-48"
            />
              ) : (
                <ReactSearchAutocomplete
              items={items}
              onSelect={handleOnSelect}
              autoFocus
              formatResult={formatResult}
              styling={styling}
              className="w-48"
            />
              )
            }
          </div>
          <a href="">
          <LuGithub className="hover:text-blue-500" />
          </a>
          {theme === "dark" ? (
            <LuSunMedium
              className="hover:text-blue-500"
              onClick={handleThemeChange}
            />
          ) : (
            <LuMoonStar
              className="hover:text-slate-400"
              onClick={handleThemeChange}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
