import Layout from "@/components/Layout";
import Button from "@/components/Button";
import FeatureCard from "@/components/FeatureCard";

export default function Features() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl font-medium text-chrome-text-primary mb-4">
            Powerful Features
          </h1>
          <p className="text-lg text-chrome-text-secondary">
            Review AI provides comprehensive code analysis tools to help you
            write better code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <FeatureCard
            title="Best Practices"
            description="Get suggestions based on industry best practices to improve your code quality and maintainability. Learn the optimal way to structure your code for readability and long-term maintenance."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            }
            accentColor="#1a73e8"
            bgColor="#e8f0fe"
          />

          <FeatureCard
            title="Code Optimization"
            description="Identify performance bottlenecks and get suggestions to optimize your code for better efficiency. Learn how to rewrite slower code segments to improve overall application performance."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            }
            accentColor="#137333"
            bgColor="#e6f4ea"
          />

          <FeatureCard
            title="Bug Detection"
            description="Automatically detect potential bugs and security vulnerabilities before they cause issues in production. Find edge cases and runtime errors that might otherwise be missed."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            }
            accentColor="#c5221f"
            bgColor="#fce8e6"
          />

          <FeatureCard
            title="Code Style"
            description="Ensure your code adheres to consistent styling conventions. Get recommendations to improve readability and maintain a uniform codebase across your entire project."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                />
              </svg>
            }
            accentColor="#a142f4"
            bgColor="#f4e6fe"
          />

          <FeatureCard
            title="Documentation Helper"
            description="Get suggestions for improving your code documentation. Review AI helps you write clear, comprehensive comments and documentation that make your code more accessible to other developers."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            }
            accentColor="#f29900"
            bgColor="#fef7e0"
          />

          <FeatureCard
            title="Seamless Integration"
            description="Works directly within popular platforms like GitHub, GitLab, and Bitbucket. No need to switch contexts or learn new interfaces - Review AI works where you already write code."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            }
            accentColor="#1e8e3e"
            bgColor="#e6f4ea"
          />
        </div>

        <div className="bg-chrome-surface rounded-chrome-lg shadow-chrome-sm p-8 mb-16">
          <h2 className="text-2xl font-medium text-chrome-text-primary mb-6 text-center">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-chrome-brand-light text-chrome-brand-primary flex items-center justify-center mx-auto mb-4">
                <span className="text-lg font-medium">1</span>
              </div>
              <h3 className="text-lg font-medium text-chrome-text-primary mb-2">
                Install the Extension
              </h3>
              <p className="text-chrome-text-secondary">
                Add Review AI to Chrome from the Chrome Web Store with just one
                click.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-chrome-brand-light text-chrome-brand-primary flex items-center justify-center mx-auto mb-4">
                <span className="text-lg font-medium">2</span>
              </div>
              <h3 className="text-lg font-medium text-chrome-text-primary mb-2">
                Browse Your Code
              </h3>
              <p className="text-chrome-text-secondary">
                Navigate to your repositories on GitHub, GitLab, or Bitbucket.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-chrome-brand-light text-chrome-brand-primary flex items-center justify-center mx-auto mb-4">
                <span className="text-lg font-medium">3</span>
              </div>
              <h3 className="text-lg font-medium text-chrome-text-primary mb-2">
                Get AI Feedback
              </h3>
              <p className="text-chrome-text-secondary">
                Review AI automatically analyzes your code and provides
                real-time suggestions.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-medium text-chrome-text-primary mb-6">
            Ready to improve your code?
          </h2>
          <Button
            href="https://chrome.google.com/webstore"
            variant="primary"
            size="lg"
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
    </Layout>
  );
}
