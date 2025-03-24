// components/layout/Header.tsx
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 flex items-center justify-center shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M6.5 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-1-5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1zm1-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <Link href="/" className="no-underline">
            <div>
              <h1 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
                Git Review
              </h1>
              <p className="text-xs text-gray-400">AI-Powered Code Review</p>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/#features"
            className={`text-sm ${router.asPath === "/#features" ? "text-violet-600" : "text-gray-600 hover:text-violet-600"} transition-colors`}
          >
            Features
          </Link>
          <Link
            href="/#how-it-works"
            className={`text-sm ${router.asPath === "/#how-it-works" ? "text-violet-600" : "text-gray-600 hover:text-violet-600"} transition-colors`}
          >
            How It Works
          </Link>
          <Link
            href="/#pricing"
            className={`text-sm ${router.asPath === "/#pricing" ? "text-violet-600" : "text-gray-600 hover:text-violet-600"} transition-colors`}
          >
            Pricing
          </Link>
          <Link
            href="/about"
            className={`text-sm ${router.pathname === "/about" ? "text-violet-600" : "text-gray-600 hover:text-violet-600"} transition-colors`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`text-sm ${router.pathname === "/contact" ? "text-violet-600" : "text-gray-600 hover:text-violet-600"} transition-colors`}
          >
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-3">
          <Link
            href="#"
            className="text-sm text-violet-600 hover:text-violet-700 font-medium transition-colors"
          >
            Log In
          </Link>
          <Link
            href="#"
            className="text-sm bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 text-white py-2 px-4 rounded-md shadow-sm transition-colors font-medium"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-gray-500 hover:text-violet-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-2">
          <nav className="flex flex-col space-y-3 py-3">
            <Link
              href="/#features"
              className="text-sm text-gray-600 hover:text-violet-600 transition-colors py-1"
            >
              Features
            </Link>
            <Link
              href="/#how-it-works"
              className="text-sm text-gray-600 hover:text-violet-600 transition-colors py-1"
            >
              How It Works
            </Link>
            <Link
              href="/#pricing"
              className="text-sm text-gray-600 hover:text-violet-600 transition-colors py-1"
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="text-sm text-gray-600 hover:text-violet-600 transition-colors py-1"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm text-gray-600 hover:text-violet-600 transition-colors py-1"
            >
              Contact
            </Link>
            <div className="pt-2 flex flex-col space-y-2">
              <Link
                href="#"
                className="text-sm text-center text-violet-600 hover:text-violet-700 font-medium transition-colors py-2"
              >
                Log In
              </Link>
              <Link
                href="#"
                className="text-sm text-center bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 text-white py-2 px-4 rounded-md shadow-sm transition-colors font-medium"
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
