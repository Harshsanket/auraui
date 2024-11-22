import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./contexts/Theme.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/systemUI/Main.jsx";
import ErrorPage from "./components/systemUI/Error.jsx";
import Layout from "./components/systemUI/Layout.jsx";
import Signin from "./components/public/components/form/sign-in/Index.jsx";
import ViewLayout from "./components/systemUI/ViewLayout.jsx";
import SignInForm from "./components/public/components/form/sign-in/SignInDefault.jsx";
import SignInFormRight from "./components/public/components/form/sign-in/SigninRight.jsx";
import SignInFormLeft from "./components/public/components/form/sign-in/SigninLeft.jsx";
import Overview from "./components/public/gettingstarted/Overview.jsx";
import Installation from "./components/public/gettingstarted/Installation.jsx";
import SignUpForm from "./components/public/components/form/sign-up/SignupDefault.jsx";
import SignupRight from "./components/public/components/form/sign-up/SignupRight.jsx";
import SignupLeft from "./components/public/components/form/sign-up/SignupLeft.jsx";
import Signup from "./components/public/components/form/sign-up/Index.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "components",
        element: <Layout />,
        children: [
          {
            path: "form/signin",
            element: <Signin />,
          },
          {
            path: "form/signup",
            element: <Signup />,
            },
        ],
      },
      {
        path: "getting-started",
        element: <Layout />,
        children: [
          {
            path: "overview",
            element: <Overview />,
          },
          {
            path: "installation",
            element: <Installation />,
          },
         
        ],
      },
      {
        path: "view",
        element: <ViewLayout />,
        children: [
          {
            path: "form/signin/default",
            element: <SignInForm />,
          },
          {
            path: "form/signin/rightside",
            element: <SignInFormRight/>,
          },
          {
            path: "form/signin/leftside",
            element: <SignInFormLeft/>,
          },
          {
            path: "form/signup/default",
            element: <SignUpForm />,
          },
          {
            path: "form/signup/rightside",
            element: <SignupRight/>,
          },
          {
            path: "form/signup/leftside",
            element: <SignupLeft/>,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
