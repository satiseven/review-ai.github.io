import Link from "next/link";
import Button from "./Button";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <div className="bg-blue-500 text-white p-2 rounded-lg mr-2 shadow-md transform rotate-3">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.214 8.69l6.715-1.679A12.027 12.027 0 0011.907 2C6.277 2 1.523 6.116.386 11.54L7.101 8.69l4.556 4.556 4.557-4.556zm-4.556 4.556L7.1 8.69l-6.715 2.85A12.031 12.031 0 007.1 19.31l4.556-4.557-4.556-4.556zm9.113-4.556l-4.556 4.556 4.556 4.556 6.715-2.85A12.03 12.03 0 0022.143 2l-6.716 2.85zM7.1 19.31L11.907 22l4.807-2.69L11.908 14.754 7.1 19.31z" />
                </svg>
              </div>
              <span className="text-xl font-medium text-gray-800">
                Review AI
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-1">
            <Link
              href="/"
              className="text-gray-600 hover:text-blue-500 hover:bg-blue-50 px-3 py-2 rounded-lg font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/features"
              className="text-gray-600 hover:text-blue-500 hover:bg-blue-50 px-3 py-2 rounded-lg font-medium transition-colors"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-gray-600 hover:text-blue-500 hover:bg-blue-50 px-3 py-2 rounded-lg font-medium transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/docs"
              className="text-gray-600 hover:text-blue-500 hover:bg-blue-50 px-3 py-2 rounded-lg font-medium transition-colors"
            >
              Documentation
            </Link>
          </nav>

          <div className="hidden md:flex items-center">
            <Button
              variant="secondary"
              className="mr-4 rounded-full shadow-sm"
              href="/login"
            >
              Sign In
            </Button>
            <Button
              href="https://chrome.google.com/webstore"
              className="rounded-full"
              size="md"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M16.214 8.69l6.715-1.679A12.027 12.027 0 0011.907 2C6.277 2 1.523 6.116.386 11.54L7.101 8.69l4.556 4.556 4.557-4.556zm-4.556 4.556L7.1 8.69l-6.715 2.85A12.031 12.031 0 007.1 19.31l4.556-4.557-4.556-4.556zm9.113-4.556l-4.556 4.556 4.556 4.556 6.715-2.85A12.03 12.03 0 0022.143 2l-6.716 2.85zM7.1 19.31L11.907 22l4.807-2.69L11.908 14.754 7.1 19.31z" />
              </svg>
              Add to Chrome
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-600 rounded-lg p-2 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-2">
          <div className="container mx-auto px-4 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-500 font-medium"
            >
              Home
            </Link>
            <Link
              href="/features"
              className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-500 font-medium"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-500 font-medium"
            >
              Pricing
            </Link>
            <Link
              href="/docs"
              className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-500 font-medium"
            >
              Documentation
            </Link>
            <div className="pt-4 flex flex-col space-y-2">
              <Button
                variant="secondary"
                href="/login"
                className="rounded-full"
              >
                Sign In
              </Button>
              <Button
                href="https://chrome.google.com/webstore"
                className="rounded-full"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.214 8.69l6.715-1.679A12.027 12.027 0 0011.907 2C6.277 2 1.523 6.116.386 11.54L7.101 8.69l4.556 4.556 4.557-4.556zm-4.556 4.556L7.1 8.69l-6.715 2.85A12.031 12.031 0 007.1 19.31l4.556-4.557-4.556-4.556zm9.113-4.556l-4.556 4.556 4.556 4.556 6.715-2.85A12.03 12.03 0 0022.143 2l-6.716 2.85zM7.1 19.31L11.907 22l4.807-2.69L11.908 14.754 7.1 19.31z" />
                </svg>
                Add to Chrome
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
