import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white px-4">
      <div className="text-center">
        <h1 className="text-8xl font-extrabold drop-shadow-lg">404</h1>

        <p className="text-xl mt-4 opacity-90">
          Oops! The page you are looking for does not exist.
        </p>

        <div className="mt-8">
          <Link
            href="/"
            className="px-6 py-3 rounded-full bg-white text-purple-700 font-semibold shadow-lg hover:scale-105 transition-transform duration-200"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
