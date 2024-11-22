import React, { useState, useRef } from "react";
import Grid from "@mui/material/Grid2";
import SignUpForm from "./SignupDefault.jsx";
import SignUpFormRight from "./SignupRight.jsx";
import SignUpFormLeft from "./SignupLeft.jsx";
import { Link } from "react-router-dom";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import code from "./SignupDefault.jsx?raw";
import code2 from "./SignupRight.jsx?raw";
import code3 from "./SignupLeft.jsx?raw";
import {
  materialLight,
  materialDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { FiCopy, FiCheck } from "react-icons/fi";
import { LuAlertCircle, LuCode, LuEye, LuMonitor } from "react-icons/lu";
import useTheme from "../../../../../contexts/Theme.jsx";
const Signup = () => {
  const { theme } = useTheme();
  const [copied, setCopied] = useState(false);
  const [copied2, setCopied2] = useState(false);
  const [copied3, setCopied3] = useState(false);
  const [view, setView] = useState("preview");
  const [view2, setView2] = useState("preview");
  const [view3, setView3] = useState("preview");
  const aboutSectionRef = useRef(null);
  const defaultSectionRef = useRef(null);
  const rightSideSectionRef = useRef(null);
  const leftSideSectionRef = useRef(null);

  const handleCopyCode = async (index) => {
    try {
      const codeToCopy = [code, code2, code3][index];
      await navigator.clipboard.writeText(codeToCopy);
      if (index === 0) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } else if (index === 1) {
        setCopied2(true);
        setTimeout(() => setCopied2(false), 2000);
      } else if (index === 2) {
        setCopied3(true);
        setTimeout(() => setCopied3(false), 2000);
      }
    } catch (error) {
      console.error("Failed to copy code:", error);
    }
  };

  return (
    <Grid container spacing={4}>
      <Grid size={{ xs: 10, md: 10 }}>
        <div className="m-8 text-black dark:text-white ">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">Sign Up</h1>
            <p className="text-lg">
              A responsive, user-friendly sign-in form designed with accessible
              and clean styling for both light and dark themes.
            </p>
          </div>
          <div className="my-6 border-4 rounded-lg p-2 border-blue-700">
            <div className="flex items-center mb-4 ">
              <div className="mr-3 text-xl text-yellow-500">
                <LuAlertCircle />
              </div>
              <div className="text-lg font-semibold">Requirements</div>
            </div>

            <ul className="list-inside list-disc pl-5 space-y-2">
              <li>
                <span className="font-medium">Tailwind</span>
              </li>
            </ul>
          </div>
          <div className=" mb-6 " ref={aboutSectionRef}>
            <div className="flex items-center mb-4">
              <div className="text-xl font-semibold">About this component</div>
            </div>

            <ul className="list-inside list-disc pl-5 space-y-2">
              <li>
                <span className="font-medium">Responsive Design:</span> Ensures
                the component adapts well to various screen sizes.
              </li>
              <li>
                <span className="font-medium">Regex Validation:</span> Validates
                input fields using regular expressions to ensure correct format.
              </li>
              <li>
                <span className="font-medium">Dark Mode Support:</span> Switches
                between light and dark themes based on user preference.
              </li>
              <li>
                <span className="font-medium">Error Handling:</span> The form
                includes error handling for both email and password fields. If
                there's an error (e.g., invalid email format), a red error
                message appears under the respective field.
              </li>
              <li>
                <span className="font-medium">Conditional Button State:</span>{" "}
                The submit button is enabled only when the form is completely
                and correctly filled out. If there are validation errors or if
                any required field is empty, the button remains disabled.
              </li>
            </ul>
          </div>

          {/* Default Sign In Page */}
          <div
            className="border border-neutral-500 p-4 rounded-xl my-16 "
            ref={defaultSectionRef}
          >
            <div className="flex justify-between items-center w-full ">
              <div className="flex">
                <span className="text-xl">Default</span>
              </div>
              <div className="ml-auto flex space-x-2">
                <button
                  onClick={() => handleCopyCode(0)}
                  className="p-2 border border-neutral-500 dark:text-white rounded flex items-center"
                >
                  {copied ? <FiCheck /> : <FiCopy />}
                </button>

                {view === "preview" ? (
                  <button
                    onClick={() => setView("desktop")}
                    className="p-2 border border-neutral-500 dark:text-white rounded flex items-center"
                  >
                    <LuCode />
                  </button>
                ) : (
                  <button
                    onClick={() => setView("preview")}
                    className="p-2 border border-neutral-500 dark:text-white rounded flex items-center"
                  >
                    <LuMonitor />
                  </button>
                )}
                <Link to={"/view/form/signup/default"}>
                  <button className="p-2 border border-neutral-500 dark:text-white rounded flex items-center">
                    <LuEye />
                  </button>
                </Link>
              </div>
            </div>
            {view === "preview" ? (
              <div className="border border-black rounded-lg p-4 bg-slate-100 dark:bg-neutral-700 mt-4 overflow-auto">
                <SignUpForm />
              </div>
            ) : (
              <div className="border border-black rounded-lg p-4 bg-slate-100 dark:bg-neutral-700 mt-4">
                <SyntaxHighlighter
                  language="javascript"
                  style={theme === "light" ? materialLight : materialDark}
                  customStyle={{
                    borderRadius: "0.375rem",
                    maxHeight: "400px",
                    overflowY: "auto",
                  }}
                >
                  {code}
                </SyntaxHighlighter>
              </div>
            )}
          </div>
          {/* Right Side Sign In Page */}
          {/* <div
            className="border border-neutral-500 p-4 rounded-xl my-16"
            ref={rightSideSectionRef}
          >
            <div className="flex justify-between items-center w-full">
              <div className="flex-1">
                <span className="text-xl">Right Side</span>
              </div>
              <div className="ml-auto flex space-x-2">
                <button
                  onClick={() => handleCopyCode(1)}
                  className="p-2 border border-neutral-500 dark:text-white rounded flex items-center"
                >
                  {copied2 ? <FiCheck /> : <FiCopy />}
                </button>

                {view2 === "preview" ? (
                  <button
                    onClick={() => setView2("desktop")}
                    className="p-2 border border-neutral-500 dark:text-white rounded flex items-center"
                  >
                    <LuCode />
                  </button>
                ) : (
                  <button
                    onClick={() => setView2("preview")}
                    className="p-2 border border-neutral-500 dark:text-white rounded flex items-center"
                  >
                    <LuMonitor />
                  </button>
                )}
                <Link to={"/view/form/signup/rightside"}>
                  <button className="p-2 border border-neutral-500 dark:text-white rounded flex items-center">
                    <LuEye />
                  </button>
                </Link>
              </div>
            </div>

            {view2 === "preview" ? (
              <div className="rounded-lg p-4 bg-slate-100 dark:bg-neutral-700 mt-4">
                <SignUpFormRight />
              </div>
            ) : (
              <div className="border rounded-lg p-4 bg-slate-100 dark:bg-neutral-700 mt-4">
                <SyntaxHighlighter
                  language="javascript"
                  style={theme === "light" ? materialLight : materialDark}
                  customStyle={{
                    borderRadius: "0.375rem",
                    maxHeight: "400px",
                    overflowY: "auto",
                  }}
                >
                  {code2}
                </SyntaxHighlighter>
              </div>
            )}
          </div> */}
          {/* Left Side Sign In Page */}
          {/* <div
            className="border  border-neutral-500 p-4 rounded-xl my-16"
            ref={leftSideSectionRef}
          >
            <div className="flex justify-between items-center w-full dark:bg-neutral-800">
              <div className="flex-1">
                <span className="text-xl">Left Side</span>
              </div>
              <div className="ml-auto flex space-x-2">
                <button
                  onClick={() => handleCopyCode(2)}
                  className="p-2 border border-neutral-500 dark:text-white rounded flex items-center"
                >
                  {copied3 ? <FiCheck /> : <FiCopy />}
                </button>

                {view3 === "preview" ? (
                  <button
                    onClick={() => setView3("desktop")}
                    className="p-2 border border-neutral-500 dark:text-white rounded flex items-center"
                  >
                    <LuCode />
                  </button>
                ) : (
                  <button
                    onClick={() => setView3("preview")}
                    className="p-2 border border-neutral-500 dark:text-white rounded flex items-center"
                  >
                    <LuMonitor />
                  </button>
                )}
                <Link to={"/view/form/signin/leftside"}>
                  <button className="p-2 border border-neutral-500 dark:text-white rounded flex items-center">
                    <LuEye />
                  </button>
                </Link>
              </div>
            </div>
            {view3 === "preview" ? (
              <div className="rounded-lg p-4 bg-slate-100 dark:bg-neutral-700 mt-4">
                <SignUpFormLeft />
              </div>
            ) : (
              <div className="border rounded-lg p-4 bg-slate-100 dark:bg-neutral-700 mt-4">
                <SyntaxHighlighter
                  language="javascript"
                  style={theme === "light" ? materialLight : materialDark}
                  customStyle={{
                    borderRadius: "0.375rem",
                    maxHeight: "400px",
                    overflowY: "auto",
                  }}
                >
                  {code3}
                </SyntaxHighlighter>
              </div>
            )}
          </div> */}
        </div>
      </Grid>

      <Grid
        size={{ xs: 2, md: 2 }}
        className="border-l border-gray-200 dark:border-gray-700"
      >
        <div className="fixed m-4 w-48">
          <SimpleTreeView>
            <TreeItem
              itemId="about"
              label={
                <div
                  onClick={() =>
                    aboutSectionRef.current.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                >
                  About
                </div>
              }
            />
            <TreeItem
              itemId="default"
              label={
                <div
                  onClick={() =>
                    defaultSectionRef.current.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                >
                  Default
                </div>
              }
            />
            {/* <TreeItem
              itemId="right-side"
              label={
                <div
                  onClick={() =>
                    rightSideSectionRef.current.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                >
                  Right Side
                </div>
              }
            /> */}
            {/* <TreeItem
              itemId="left-side"
              label={
                <div
                  onClick={() =>
                    leftSideSectionRef.current.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                >
                  Left Side
                </div>
              }
            /> */}
          </SimpleTreeView>
        </div>
      </Grid>
    </Grid>
  );
};

export default Signup;
