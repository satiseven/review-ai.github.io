// pages/about.tsx
import type { NextPage } from "next";
import Layout from "../components/Layout";
import Link from "next/link";

const About: NextPage = () => {
  return (
    <Layout
      title="About Git Review - Our Mission and Team"
      description="Learn about Git Review's mission to improve code quality with AI-powered code reviews, and meet the team behind the innovation."
    >
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
              About Git Review
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We're on a mission to revolutionize how developers review and
              improve their code.
            </p>
          </div>

          {/* Our Story */}
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm border border-gray-100 p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Story</h2>
            <div className="prose prose-sm text-gray-600">
              <p className="mb-4">
                Git Review was founded in 2023 by a team of developers who were
                frustrated with the traditional code review process. We believed
                that AI could transform how developers write and review code,
                saving time while improving quality.
              </p>
              <p className="mb-4">
                Our team spent over a year developing a sophisticated AI system
                that could not only detect bugs and security vulnerabilities but
                also suggest contextually appropriate improvements based on
                modern best practices and patterns.
              </p>
              <p>
                Today, Git Review is used by thousands of developers worldwide,
                from independent programmers to enterprise development teams.
                We're proud to be at the forefront of AI-assisted development,
                and we're just getting started.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-violet-50 rounded-lg p-6 border border-violet-100">
                <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-violet-600"
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
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Innovation
                </h3>
                <p className="text-gray-600 text-sm">
                  We're constantly pushing the boundaries of what's possible
                  with AI-powered code analysis.
                </p>
              </div>

              <div className="bg-fuchsia-50 rounded-lg p-6 border border-fuchsia-100">
                <div className="w-12 h-12 rounded-full bg-fuchsia-100 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-fuchsia-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Privacy
                </h3>
                <p className="text-gray-600 text-sm">
                  We respect your code's confidentiality with secure,
                  privacy-focused design principles.
                </p>
              </div>

              <div className="bg-pink-50 rounded-lg p-6 border border-pink-100">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-pink-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Community
                </h3>
                <p className="text-gray-600 text-sm">
                  We believe in fostering a supportive developer community for
                  shared growth and learning.
                </p>
              </div>
            </div>
          </div>

          {/* Team */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-400 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">SJ</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Sarah Johnson
                </h3>
                <p className="text-sm text-violet-600 mb-2">Co-Founder & CEO</p>
                <p className="text-xs text-gray-600">
                  Former engineering lead at Google with 12+ years of experience
                  in developer tools.
                </p>
              </div>

              {/* Team Member 2 */}
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-400 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">DP</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  David Park
                </h3>
                <p className="text-sm text-violet-600 mb-2">Co-Founder & CTO</p>
                <p className="text-xs text-gray-600">
                  ML specialist with expertise in code analysis and natural
                  language processing.
                </p>
              </div>

              {/* Team Member 3 */}
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-400 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">MR</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Maria Rodriguez
                </h3>
                <p className="text-sm text-violet-600 mb-2">Head of Product</p>
                <p className="text-xs text-gray-600">
                  Product leader with a passion for creating developer-friendly
                  tools and experiences.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="max-w-4xl mx-auto mt-16 text-center">
            <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg p-8 shadow-md text-white">
              <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
              <p className="mb-6">
                We're always looking for talented individuals who are passionate
                about improving the developer experience.
              </p>
              <Link
                href="/contact"
                className="bg-white text-violet-600 hover:bg-gray-100 py-2 px-6 rounded-md font-medium inline-block transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
