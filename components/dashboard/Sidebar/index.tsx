import React from "react";
import Header from "./Header";
import Nav from "./Nav"

const Sidebar = (): JSX.Element => {
  return (
    <>
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex flex-col h-0 flex-1">
            <Header />
            <Nav />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
