import React from "react";
import LoginForm from "./components/LoginForm";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="grid grid-cols-2 w-full h-full">
      <div className="flex justify-between flex-col just h-full w-full p-20">
        <h1 className="text-4xl font-bold">THE APP</h1>
        <div className="w-full flex flex-col items-center">
          <div className="w-1/2">
            <h3 className="text-md text-black/50">Start your journey</h3>
            <h2 className="text-xl font-bold mb-5">Sign In To The App</h2>
            <LoginForm />
          </div>
        </div>
        <div>
          <p>
            Don&apos;t have an account?
            <Link href="/signup" className="text-blue-400 ml-1 underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
      <div className="h-full w-full pattern"></div>
    </div>
  );
};

export default LoginPage;
