import React from "react";
import { Outlet } from "react-router-dom";

const ViewLayout = () => {
  return (
    <div className="h-auto mt-16 p-8 bg-slate-100 text-black dark:bg-neutral-800 dark:text-white ">
      <Outlet />
    </div>
  );
};

export default ViewLayout;
