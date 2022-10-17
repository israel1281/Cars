import React from "react";
import OpenSider from "./OpenSider";

const Header = (): JSX.Element => {
  return (
    <div className="flex flex-col w-0 flex-1 overflow-hidden">
      <div className="relative z-10 flex-shrink-0 flex h-16 bg-white text-white shadow">
        <OpenSider />
      </div>
    </div>
  );
};

export default Header;
