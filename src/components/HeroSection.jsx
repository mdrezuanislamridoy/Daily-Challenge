import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import React from "react";

export default function HeroSection() {
  const { openSignIn } = useClerk();
  const { user, isSignedIn } = useUser();
  return (
    <div className="bg-gradient-to-br from-cyan-400 to-white h-[580px] md:min-h-[80vh] flex justify-center">
      <div className="w-full flex-col md:md:flex-row lg:min-w-7xl p-2">
        <div className="left w-full md:w-1/2 flex flex-col items-center md:items-start justify-center h-full">
          <h1 className="text-2xl font-semibold text-center md:text-left">
            Welcome to <br />
            <span className="text-3xl md:text-5xl text-violet-700 font-bold">
              RR Programming Kingdom
            </span>
          </h1>
          {!user ? (
            <button
              onClick={() => openSignIn()}
              className="w-40 my-4 py-2 px-4 bg-blue-700 rounded-full text-white font-medium"
            >
              Sign In
            </button>
          ) : (
            <UserButton />
          )}
        </div>
        <div className="right w-full md:w-1/2"></div>
      </div>
    </div>
  );
}
