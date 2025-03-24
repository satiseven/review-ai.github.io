// pages/privacy.tsx
import type { NextPage } from "next";
import Layout from "../components/Layout";
import Link from "next/link";

const Privacy: NextPage = () => {
  return (
    <Layout
      title="Privacy Policy - Git Review"
      description="Git Review's privacy policy explains how we collect, use, and protect your data."
    >
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
                Privacy Policy
              </h1>
              <p className="text-gray-600">Last updated: March 15, 2025</p>
            </div>

            {/* Introduction */}
            <div className="bg-violet-50 rounded-lg p-6 border border-violet-100 mb-8">
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-violet-600 mr-3 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">
                    Our Commitment to Privacy
                  </h2>
                  <p className="text-gray-600 text-sm">
                    At Git Review, we take the privacy and security of your data
                    seriously. This policy outlines what information we collect,
                    how we use it, and the choices you have regarding your data.
                  </p>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 mb-8">
              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4 text-gray-800">
                  Information We Collect
                </h2>
                <div className="text-gray-600 text-sm space-y-4">
                  <p>We collect the following types of information:</p>

                  <div className="pl-4 border-l-2 border-violet-200">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Account Information
                    </h3>
                    <p className="mb-1">
                      When you sign up for Git Review, we collect:
                    </p>
                    <ul className="list-disc pl-5 mb-2 space-y-1">
                      <li>Your name and email address</li>
                      <li>Your GitHub, GitLab, or Bitbucket username</li>
                      <li>Payment information (if applicable)</li>
                    </ul>
                  </div>

                  <div className="pl-4 border-l-2 border-violet-200">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Code and Repository Data
                    </h3>
                    <p className="mb-1">
                      To provide code review services, we process:
                    </p>
                    <ul className="list-disc pl-5 mb-2 space-y-1">
                      <li>Code snippets you submit for review</li>
                      <li>Repository metadata (names, descriptions, etc.)</li>
                      <li>Commit information</li>
                      <li>Pull request and issue data</li>
                    </ul>
                    <p className="text-violet-600 text-xs italic">
                      Note: We do not store your code permanently unless
                      explicitly requested for training purposes.
                    </p>
                  </div>

                  <div className="pl-4 border-l-2 border-violet-200">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Usage Information
                    </h3>
                    <p className="mb-1">
                      We collect information about how you use our service:
                    </p>
                    <ul className="list-disc pl-5 mb-2 space-y-1">
                      <li>Features and functions you access</li>
                      <li>Time spent using the extension</li>
                      <li>Error logs and performance data</li>
                      <li>IP address and device information</li>
                    </ul>
                  </div>
                </div>
              </section>

              <div className="h-px bg-gray-100 my-8"></div>

              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4 text-gray-800">
                  How We Use Your Information
                </h2>
                <div className="text-gray-600 text-sm space-y-4">
                  <p>
                    We use the collected information for the following purposes:
                  </p>

                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-violet-500 mr-2 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong className="text-gray-800">
                          To provide our services:
                        </strong>{" "}
                        Analyzing your code, detecting issues, and suggesting
                        improvements.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-violet-500 mr-2 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong className="text-gray-800">
                          To improve our services:
                        </strong>{" "}
                        Understanding how users interact with Git Review to
                        enhance functionality and performance.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-violet-500 mr-2 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong className="text-gray-800">
                          For communication:
                        </strong>{" "}
                        Sending you important notifications, updates, and
                        support information.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-violet-500 mr-2 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong className="text-gray-800">
                          For account management:
                        </strong>{" "}
                        Processing subscriptions, managing access, and
                        maintaining your account.
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              <div className="h-px bg-gray-100 my-8"></div>

              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4 text-gray-800">
                  Data Security
                </h2>
                <div className="text-gray-600 text-sm">
                  <p className="mb-4">
                    We implement industry-standard security measures to protect
                    your data from unauthorized access, disclosure, alteration,
                    and destruction. These include:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-violet-600 mr-2"
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
                        <h3 className="font-semibold text-gray-800">
                          Encryption
                        </h3>
                      </div>
                      <p>
                        All data in transit and at rest is encrypted using
                        industry-standard protocols.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-violet-600 mr-2"
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
                        <h3 className="font-semibold text-gray-800">
                          Access Controls
                        </h3>
                      </div>
                      <p>
                        Strict access controls limit who can access your data
                        within our organization.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-violet-600 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                        <h3 className="font-semibold text-gray-800">
                          Monitoring
                        </h3>
                      </div>
                      <p>
                        Continuous security monitoring for unusual activity or
                        potential breaches.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-violet-600 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          />
                        </svg>
                        <h3 className="font-semibold text-gray-800">
                          Regular Audits
                        </h3>
                      </div>
                      <p>
                        Regular security audits and penetration testing by
                        third-party experts.
                      </p>
                    </div>
                  </div>

                  <p className="text-violet-700 text-xs bg-violet-50 p-3 rounded-lg border border-violet-100">
                    <strong>Important:</strong> While we take extensive measures
                    to protect your data, no method of transmission over the
                    Internet or electronic storage is 100% secure. We cannot
                    guarantee absolute security.
                  </p>
                </div>
              </section>

              <div className="h-px bg-gray-100 my-8"></div>

              <section>
                <h2 className="text-xl font-bold mb-4 text-gray-800">
                  Your Rights
                </h2>
                <div className="text-gray-600 text-sm">
                  <p className="mb-4">
                    You have the following rights regarding your personal data:
                  </p>

                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-violet-500 mr-2 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong className="text-gray-800">Access:</strong> You
                        can request a copy of your personal data that we hold.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-violet-500 mr-2 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong className="text-gray-800">Correction:</strong>{" "}
                        You can ask us to correct any inaccurate data we hold
                        about you.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-violet-500 mr-2 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong className="text-gray-800">Deletion:</strong> You
                        can request the deletion of your personal data in
                        certain circumstances.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-violet-500 mr-2 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong className="text-gray-800">Restriction:</strong>{" "}
                        You can ask us to restrict the processing of your data
                        in certain circumstances.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-violet-500 mr-2 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-violet-500 mr-2 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong className="text-gray-800">Restriction:</strong>{" "}
                        You can ask us to restrict the processing of your data
                        in certain circumstances.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-violet-500 mr-2 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong className="text-gray-800">Portability:</strong>{" "}
                        You can request a machine-readable copy of your data to
                        be transferred to another service.
                      </span>
                    </li>
                  </ul>

                  <p>
                    To exercise any of these rights, please contact us at{" "}
                    <a
                      href="mailto:privacy@gitreview.com"
                      className="text-violet-600 hover:text-violet-700 transition-colors"
                    >
                      privacy@gitreview.com
                    </a>
                    .
                  </p>
                </div>
              </section>
            </div>

            {/* Changes to Privacy Policy */}
            <div className="bg-fuchsia-50 rounded-lg p-6 border border-fuchsia-100 mb-8">
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-fuchsia-600 mr-3 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">
                    Changes to This Privacy Policy
                  </h2>
                  <p className="text-gray-600 text-sm">
                    We may update this privacy policy from time to time to
                    reflect changes in our practices or for legal reasons. We
                    will notify you of any material changes by posting the new
                    privacy policy on this page and updating the "Last updated"
                    date. We encourage you to review this privacy policy
                    periodically.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 text-center">
              <h2 className="text-xl font-bold mb-4 text-gray-800">
                Contact Us
              </h2>
              <p className="text-gray-600 text-sm mb-6">
                If you have any questions or concerns about this privacy policy
                or our data practices, please contact us at:
              </p>
              <div className="inline-block bg-violet-50 rounded-lg p-4 border border-violet-100">
                <p className="text-gray-800 font-medium mb-1">
                  Email:{" "}
                  <a
                    href="mailto:privacy@gitreview.com"
                    className="text-violet-600 hover:text-violet-700 transition-colors"
                  >
                    privacy@gitreview.com
                  </a>
                </p>
                <p className="text-gray-800 font-medium">
                  Address: 123 Tech Street, San Francisco, CA 94107
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 text-white py-2 px-6 rounded-md font-medium inline-block transition-colors shadow-sm"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
