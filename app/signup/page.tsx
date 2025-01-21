import React from "react";
import SignupForm from "../appComponents/SignupForm";
import Link from "next/link";

const SignupPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center signup-pattern">
      <div className="w-10/12 lg:w-1/3 bg-white rounded-xl p-10">
        <h1 className="font-bold text-4xl">Sign up</h1>
        <p className="text-xs mb-5">
          Create an account or{" "}
          <Link className="text-blue-400 underline" href="/">
            Sign in
          </Link>
        </p>
        <SignupForm />
      </div>
    </div>
  );
};

export default SignupPage;
