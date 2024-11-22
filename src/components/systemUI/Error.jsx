import { Link, useRouteError } from "react-router-dom";
import useTheme from "../../contexts/Theme";

export default function ErrorPage() {
  const error = useRouteError();
  const { theme } = useTheme();
  return (
    <div className={`flex items-center justify-center h-screen ${theme === "light" ? "bg-slate-50 text-black" : "bg-neutral-800 text-white"}`}>
      <div id="error-page" className="text-center">
        <h1 className="text-2xl font-bold">Oops!</h1>
        <p className="mt-2">
          looks like you lost your way.{" "}
          <Link to={"/"} className="underline">home</Link>?
        </p>
        {/* <p>
      <i>{error.statusText || error.message}</i>
    </p> */}
      </div>
    </div>
  );
}
