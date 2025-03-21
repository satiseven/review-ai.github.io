"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path
      ? "text-chrome-brand-primary"
      : "text-chrome-text-secondary hover:text-chrome-text-primary";
  };

  return (
    <div className="min-h-screen flex flex-col bg-chrome-background">
      <header className="bg-chrome-surface border-b border-chrome-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/icon128.png"
                  alt="Review AI Logo"
                  width={60}
                  height={60}
                  className="mr-3"
                />
                <div>
                  <h1 className="text-lg font-medium text-chrome-text-primary">
                    Review AI
                  </h1>
                  <p className="text-xs text-chrome-text-secondary">
                    AI-powered code reviews
                  </p>
                </div>
              </Link>
            </div>

            <nav className="hidden md:flex space-x-6">
              <Link
                href="/"
                className={`px-2 py-1 rounded-chrome transition-colors ${isActive("/")}`}
              >
                Home
              </Link>
              <Link
                href="/features"
                className={`px-2 py-1 rounded-chrome transition-colors ${isActive("/features")}`}
              >
                Features
              </Link>
              <Link
                href="/about"
                className={`px-2 py-1 rounded-chrome transition-colors ${isActive("/about")}`}
              >
                About
              </Link>
              <Link
                href="/privacy"
                className={`px-2 py-1 rounded-chrome transition-colors ${isActive("/privacy")}`}
              >
                Privacy
              </Link>
              <Link
                href="/contact"
                className={`px-2 py-1 rounded-chrome transition-colors ${isActive("/contact")}`}
              >
                Contact
              </Link>
            </nav>

            <div className="hidden md:flex">
              <a
                href="/download"
                className="inline-flex items-center px-4 py-2 rounded-chrome text-white bg-chrome-brand-primary hover:bg-chrome-brand-hover transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.214 8.69l6.715-1.679A12.027 12.027 0 0011.907 2C6.277 2 1.523 6.116.386 11.54L7.101 8.69l4.556 4.556 4.557-4.556zm-4.556 4.556L7.1 8.69l-6.715 2.85A12.031 12.031 0 007.1 19.31l4.556-4.557-4.556-4.556zm9.113-4.556l-4.556 4.556 4.556 4.556 6.715-2.85A12.03 12.03 0 0022.143 2l-6.716 2.85zM7.1 19.31L11.907 22l4.807-2.69L11.908 14.754 7.1 19.31z" />
                </svg>
                Add to Chrome
              </a>
            </div>

            <div className="md:hidden">
              <button className="text-chrome-text-secondary hover:text-chrome-text-primary p-1 rounded-chrome focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="bg-chrome-surface border-t border-chrome-border py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-medium text-chrome-text-primary mb-4">
                Review AI
              </h3>
              <p className="text-sm text-chrome-text-secondary">
                Intelligent code analysis powered by AI to help you write better
                code.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-chrome-text-primary mb-4">
                Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-sm text-chrome-text-secondary hover:text-chrome-brand-primary"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/features"
                    className="text-sm text-chrome-text-secondary hover:text-chrome-brand-primary"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-sm text-chrome-text-secondary hover:text-chrome-brand-primary"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-sm text-chrome-text-secondary hover:text-chrome-brand-primary"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-chrome-text-secondary hover:text-chrome-brand-primary"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium text-chrome-text-primary mb-4">
                Resources
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://chrome.google.com/webstore"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-chrome-text-secondary hover:text-chrome-brand-primary"
                  >
                    Chrome Web Store
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-chrome-text-secondary hover:text-chrome-brand-primary"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-chrome-text-secondary hover:text-chrome-brand-primary"
                  >
                    Github Repository
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium text-chrome-text-primary mb-4">
                Connect
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-chrome-text-secondary hover:text-chrome-brand-primary"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-chrome-text-secondary hover:text-chrome-brand-primary"
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-chrome-border pt-6">
            <p className="text-sm text-center text-chrome-text-secondary">
              &copy; {new Date().getFullYear()} Review AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
