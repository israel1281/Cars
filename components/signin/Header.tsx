import React from "react";

const Header = (): JSX.Element => {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <img
        className="mx-auto h-12 w-auto"
        src="https://drive.google.com/file/d/1Ku35Mm5bdrCCTKhg7q-DsJQPaBiBgKVR/view"
        alt="Workflow"
      />
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Sign in to your account
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600 max-w">
        Or
        <a
          href="https://tailwindui.com/components/application-ui/forms/sign-in-forms#"
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          start your 14-day free trial
        </a>
      </p>
    </div>
  );
};

export default Header;
