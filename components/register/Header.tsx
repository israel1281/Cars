import Link from "next/link";
import React from "react";
import { Logo } from "../../assets/";

const Header = (): JSX.Element => {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 className="mt-6 text-center text-3xl font-extrabold text-blue-400">
        ADVANS MOTORS
      </h2>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Create an Account
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600 max-w">
        Already registered?
        <a
          href="/"
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          Signin
        </a>
      </p>
    </div>
  );
};

export default Header;
