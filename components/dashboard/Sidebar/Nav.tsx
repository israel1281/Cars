import React from "react";
import { NavData } from "./NavData";

const Nav = (): JSX.Element => {
  return (
    <div className="flex-1 flex flex-col overflow-y-auto">
      <nav className="flex-1 px-2 py-4 bg-blue-400 space-y-1">
        {NavData.map((data: any, index: any) => {
          return (
            <div
              key={index}
              className="bg-blue-400 cursor-pointer hover:bg-blue-500 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md active"
            >
              {data.text}
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default Nav;
