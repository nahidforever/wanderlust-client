"use client";
import Link from "next/link";
import React from "react";

const ErrorPage = ({ error, reset }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f0f1a] text-white px-4 relative overflow-hidden">

      {/* glowing background blobs */}
      <div className="absolute w-[400px] h-[400px] bg-red-500/30 rounded-full blur-3xl top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-purple-500/30 rounded-full blur-3xl bottom-[-120px] right-[-120px]" />

      <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-10 max-w-md text-center z-10">

        {/* icon */}
        <div className="text-5xl mb-4">⚠️</div>

        <h1 className="text-3xl font-bold">
          Something went wrong
        </h1>

        <p className="mt-3 text-sm text-gray-300">
          An unexpected error occurred. Try again or go back home.
        </p>

        {error && (
          <div className="mt-4 text-xs text-red-300 bg-red-500/10 p-2 rounded-lg break-words">
            {error.message}
          </div>
        )}

        <div className="mt-6 flex gap-3 justify-center">
          <button
            onClick={() => reset()}
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 hover:scale-105 transition font-medium"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="px-5 py-2 rounded-lg border border-white/30 hover:bg-white hover:text-black transition font-medium"
          >
            Home
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ErrorPage;