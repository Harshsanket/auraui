import React from "react";
import Grid from "@mui/material/Grid2";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
const Layout = () => {
  return (
    <div className="h-auto bg-slate-100 text-black dark:bg-neutral-950 dark:text-white mt-16 duration-500 ease-in-out">
      {/* Main container with fixed height */}
      <div className="h-[calc(100vh-4rem)] ">
        {/* Hidden on mobile, visible on sm breakpoint and up */}
        <div className="hidden sm:flex h-full">
          {/* Left sidebar - fixed */}
          <div className="w-1/6 min-w-[250px] h-full overflow-y-auto p-4 border-r-4 border-blue-700">
            <Box>
              <SimpleTreeView>
                <TreeItem itemId="grid" label="Getting started">
                <Link to="/getting-started/overview">
                  <TreeItem itemId="overview" label="Overview" />
                  </Link>
                  <Link to="/getting-started/installation">
                  <TreeItem itemId="grid-pro" label="Installation" />
                  </Link>
                </TreeItem>
                <TreeItem itemId="components" label="Components">
                  <TreeItem itemId="form" label="Form">
                    <Link to={"/components/form/signin"}>
                      <TreeItem itemId="signin" label="Sign-in" />
                    </Link>
                    <Link to={"/components/form/signup"}>
                    <TreeItem itemId="signup" label="Sign-up" />
                    </Link>
                  </TreeItem>
                </TreeItem>
                <TreeItem itemId="templates" label="Templates">
                  <TreeItem itemId="templates1" label="coming soon" />
                </TreeItem>
              </SimpleTreeView>
            </Box>
          </div>

          {/* Main content area - scrollable */}
          <div className="flex-1 h-full overflow-y-auto scrollbar-hide">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};


export default Layout;
