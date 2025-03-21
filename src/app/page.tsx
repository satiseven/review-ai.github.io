import Layout from "@/components/Layout";
import Button from "@/components/Button";
import FeatureCard from "@/components/FeatureCard";

export default function Home() {
  const text = "Add to Chrome -- It's Free";
  const description = `"As a team lead, I appreciate how Review AI helps maintain
                consistent code quality across our projects. It's like having an
                extra team member."`;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                Chrome Extension
              </div>
              <h1 className="text-3xl sm:text-4xl font-medium text-gray-800 mb-4 leading-tight">
                Intelligent Code Review,{" "}
                <span className="text-blue-500">Powered by AI</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Get instant feedback on your code quality, discover bugs, and
                learn best practices with our AI-powered Chrome extension.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  href="https://chrome.google.com/webstore"
                  variant="primary"
                  size="lg"
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
                <Button
                  href="/features"
                  variant="secondary"
                  size="lg"
                  className="rounded-full"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative shadow-lg rounded-3xl overflow-hidden border-2 border-gray-200 transform hover:rotate-1 transition-transform duration-300">
                <img
                  src="/images/extension-screenshot.png"
                  alt="Review AI Extension Screenshot"
                  className="w-full max-w-md"
                />
                <div className="absolute -bottom-3 -right-3 bg-yellow-400 text-white p-3 rounded-full shadow-md transform rotate-12">
                  <span className="font-bold">New!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
              Awesome Features
            </span>
            <h2 className="text-2xl sm:text-3xl font-medium text-gray-800 mt-4 mb-2">
              What makes Review AI special?
            </h2>
            <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
              Review AI analyzes your code to provide intelligent suggestions
              and improvements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Best Practices"
              description="Get suggestions based on industry best practices to improve your code quality."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
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
              accentColor="#4285f4"
              bgColor="#e8f0fe"
            />

            <FeatureCard
              title="Code Optimization"
              description="Identify performance bottlenecks and get suggestions to optimize your code."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
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
              accentColor="#34a853"
              bgColor="#e6f4ea"
            />

            <FeatureCard
              title="Bug Detection"
              description="Automatically detect potential bugs and security vulnerabilities before they cause issues."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
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
              accentColor="#ea4335"
              bgColor="#fce8e6"
            />
          </div>

          <div className="text-center mt-12">
            <Button href="/features" variant="outline" className="rounded-full">
              View All Features
            </Button>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
              Seamless Integration
            </span>
            <h2 className="text-2xl sm:text-3xl font-medium text-gray-800 mt-4 mb-2">
              Works With Your Favorite Platforms
            </h2>
            <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
              Review AI integrates seamlessly with popular code repositories and
              platforms.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-10 items-center">
            <div className="text-center transform hover:scale-110 transition-transform duration-200">
              <div className="flex items-center justify-center h-20 w-20 mx-auto bg-[#24292e] text-white rounded-2xl shadow-md">
                <svg
                  className="h-12 w-12"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="mt-4 font-medium text-gray-800">GitHub</p>
            </div>

            <div className="text-center transform hover:scale-110 transition-transform duration-200">
              <div className="flex items-center justify-center h-20 w-20 mx-auto bg-[#0052cc] text-white rounded-2xl shadow-md">
                <svg
                  className="h-12 w-12"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M2.65 0L0 2.65v18.7L2.65 24h18.7L24 21.35V2.65L21.35 0H2.65zM14.4 17.5l-1.05-1.05 3.1-3.1-3.1-3.1 1.05-1.05 4.15 4.15-4.15 4.15zM7.55 17.5L3.4 13.35l4.15-4.15 1.05 1.05-3.1 3.1 3.1 3.1-1.05 1.05z" />
                </svg>
              </div>
              <p className="mt-4 font-medium text-gray-800">Bitbucket</p>
            </div>

            <div className="text-center transform hover:scale-110 transition-transform duration-200">
              <div className="flex items-center justify-center h-20 w-20 mx-auto bg-[#fc6d26] text-white rounded-2xl shadow-md">
                <svg
                  className="h-12 w-12"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.6 11.36L13.12.88a2.16 2.16 0 00-2.8 0L8.49 2.7l3.46 3.46a2.09 2.09 0 012.69 2.7l3.33 3.32a2.09 2.09 0 12.7-2.69L15.76 6.6l6.38 6.37a1.58 1.58 0 010 2.22l-8.38 8.38a1.58 1.58 0 01-2.23 0l-8.38-8.38a1.58 1.58 0 010-2.22l1.9-1.9-1.9-1.9L.55 11.86a2.1 2.1 0 000 3L9.89 24.2a2.16 2.16 0 002.8 0l10.92-10.92a2.1 2.1 0 000-2.93" />
                </svg>
              </div>
              <p className="mt-4 font-medium text-gray-800">GitLab</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
              Developer Love
            </span>
            <h2 className="text-2xl sm:text-3xl font-medium text-gray-800 mt-4 mb-2">
              What Developers Say
            </h2>
            <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
              {
                " Don't just take our word for it--see what other developers think about Review AI."
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-4">
                <svg
                  className="text-yellow-400 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="text-yellow-400 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="text-yellow-400 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="text-yellow-400 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="text-yellow-400 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div className="bg-blue-50 rounded-xl p-4 mb-4 relative">
                <div className="absolute -top-2 -left-2 transform rotate-45 w-4 h-4 bg-blue-50"></div>
                <p className="text-gray-600 italic">
                  Review AI has transformed my code review process. It catches
                  issues I might have missed and has helped me become a better
                  programmer.
                </p>
              </div>
              <div className="font-medium text-gray-800">Sarah L.</div>
              <div className="text-sm text-gray-600">Senior Developer</div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-4">
                <svg
                  className="text-yellow-400 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="text-yellow-400 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="text-yellow-400 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="text-yellow-400 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="text-yellow-400 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div className="bg-green-50 rounded-xl p-4 mb-4 relative">
                <div className="absolute -top-2 -left-2 transform rotate-45 w-4 h-4 bg-green-50"></div>
                <p className="text-gray-600 italic">
                  The performance optimization suggestions have made a
                  significant difference in our application's speed. Love how it
                  integrates with GitHub!
                </p>
              </div>
              <div className="font-medium text-gray-800">Michael R.</div>
              <div className="text-sm text-gray-600">
                Lead Developer at TechCorp
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-4">
                <svg
                  className="text-yellow-400 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="text-yellow-400 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="text-yellow-400 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="text-yellow-400 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="text-yellow-400 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div className="bg-purple-50 rounded-xl p-4 mb-4 relative">
                <div className="absolute -top-2 -left-2 transform rotate-45 w-4 h-4 bg-purple-50"></div>
                <p className="text-gray-600 italic">{description}</p>
              </div>
              <div className="font-medium text-gray-800">Alex K.</div>
              <div className="text-sm text-gray-600">Tech Team Lead</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block animate-bounce bg-yellow-100 text-yellow-600 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Limited Time Offer!
          </span>
          <h2 className="text-2xl sm:text-3xl font-medium text-gray-800 mb-4">
            Start Writing Better Code Today
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who use Review AI to improve their
            coding skills and deliver better software.
          </p>
          <Button
            href="https://chrome.google.com/webstore"
            variant="primary"
            size="lg"
            className="rounded-full"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M16.214 8.69l6.715-1.679A12.027 12.027 0 0011.907 2C6.277 2 1.523 6.116.386 11.54L7.101 8.69l4.556 4.556 4.557-4.556zm-4.556 4.556L7.1 8.69l-6.715 2.85A12.031 12.031 0 007.1 19.31l4.556-4.557-4.556-4.556zm9.113-4.556l-4.556 4.556 4.556 4.556 6.715-2.85A12.03 12.03 0 0022.143 2l-6.716 2.85zM7.1 19.31L11.907 22l4.807-2.69L11.908 14.754 7.1 19.31z" />
            </svg>
            {text}
          </Button>
        </div>
      </section>
    </Layout>
  );
}
