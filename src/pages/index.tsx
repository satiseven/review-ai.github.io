// pages/index.tsx
import type { NextPage } from "next";
import Layout from "../components/Layout";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
                  AI-Powered
                </span>{" "}
                Code Review at Your Fingertips
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Get comprehensive code reviews instantly. Improve quality, catch
                bugs, and follow best practices with our AI-powered tool.
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <Link
                  href="#"
                  className="bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 text-white py-3 px-8 rounded-md font-medium flex items-center justify-center shadow-sm transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Install Extension
                </Link>
                <Link
                  href="#"
                  className="border border-violet-200 bg-white hover:bg-violet-50 text-violet-600 py-3 px-8 rounded-md font-medium flex items-center justify-center transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Watch Demo
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-10">
              <div className="relative">
                {/* Chrome extension mockup */}
                <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                  {/* Extension header */}
                  <div className="bg-gray-100 px-4 py-2 flex items-center border-b border-gray-200">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <div className="ml-2 text-xs text-gray-500">
                      Git Review Extension
                    </div>
                  </div>
                  {/* Extension content */}
                  <div className="p-4">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 flex items-center justify-center mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-white"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-800">
                          Code Review Complete
                        </h3>
                        <p className="text-xs text-gray-500">
                          2 issues found, 3 suggestions
                        </p>
                      </div>
                    </div>
                    <div className="bg-violet-50 border border-violet-100 rounded-md p-3 mb-3">
                      <div className="flex items-center mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-violet-600 mr-1.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-xs font-semibold text-violet-700">
                          Performance Issue
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Array is being filtered multiple times unnecessarily.
                        Consider using a single filter operation.
                      </p>
                      <div className="mt-2 bg-white rounded p-2 border border-violet-100">
                        <code className="text-xs font-mono text-gray-800">
                          // Suggested Change
                          <br />
                          const filteredItems = items.filter(i =&gt; i.active &&
                          i.visible);
                        </code>
                      </div>
                    </div>
                    <div className="bg-fuchsia-50 border border-fuchsia-100 rounded-md p-3">
                      <div className="flex items-center mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-fuchsia-600 mr-1.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-xs font-semibold text-fuchsia-700">
                          Security Warning
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">
                        User input is directly used in SQL query. This could
                        lead to SQL injection attacks.
                      </p>
                    </div>
                    {/* Action buttons */}
                    <div className="mt-4 flex items-center justify-between">
                      <button className="text-xs bg-violet-100 hover:bg-violet-200 text-violet-700 px-3 py-1.5 rounded flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5 mr-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                        </svg>
                        Apply Fixes
                      </button>
                      <button className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5 mr-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clipRule="evenodd"
                          />
                        </svg>
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-violet-200 to-fuchsia-200 rounded-full opacity-50 -z-10"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-violet-200 to-fuchsia-200 rounded-full opacity-50 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-sm font-medium text-gray-500 uppercase tracking-wider mb-6">
            Works with your favorite platforms
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="flex items-center space-x-2">
              <svg
                className="w-6 h-6 text-gray-700"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span className="text-gray-700 font-medium">GitHub</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                className="w-6 h-6 text-gray-700"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M4.845.904c-.435 0-.82.28-.975.7-.154.42-.077.88.242 1.204l.03.03 1.284 1.284-3.04 3.04 1.522 1.522c-.192.49-.166 1.05.07 1.52.234.46.643.77 1.122.83v5.433c-.11.047-.214.11-.31.194l-3.04 3.04 1.284 1.284.033.033c.323.323.78.398 1.203.244.42-.154.7-.54.7-.976v-1.522h3.04v3.04l-1.522 1.523c-.194.195-.194.513 0 .707.195.194.513.194.707 0l3.04-3.04h5.438c.058.47.142.903.292 1.317l-3.043 3.046 1.284 1.284.03.03c.323.32.782.396 1.203.242.42-.154.7-.54.7-.975v-1.522h3.04v1.522c0 .434.28.82.7.975.42.154.88.078 1.203-.242l.03-.03 1.284-1.284-3.042-3.042c.295-.89.502-1.86.586-2.876l4.33-4.33v3.04c0 .276.224.5.5.5s.5-.224.5-.5V9.95l1.523-1.522c.195-.195.195-.513 0-.707-.196-.195-.513-.195-.708 0l-1.523 1.522h-3.04v-3.04l1.522-1.522c.195-.195.195-.513 0-.707-.195-.195-.512-.195-.707 0l-3.04 3.04H9.95v-3.04l1.522-1.523c.195-.196.195-.513 0-.708-.195-.195-.513-.195-.707 0l-3.04 3.04V4.846L9.242 3.33c.323-.324.4-.782.245-1.204-.155-.42-.54-.7-.975-.7H4.846v.478z" />
              </svg>
              <span className="text-gray-700 font-medium">GitLab</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                className="w-6 h-6 text-gray-700"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm1.436 16.962v-1.852c0-.628-.234-1.129-.468-1.357.878-.1 1.807-.284 1.807-1.414 0-.568-.202-1.039-.535-1.404.052-.13.231-.65-.056-1.358 0 0-.437-.142-1.4.524a4.947 4.947 0 0 0-2.556 0c-.967-.666-1.401-.524-1.401-.524-.284.709-.106 1.229-.053 1.358-.331.365-.534.837-.534 1.404 0 1.126.924 1.316 1.803 1.414-.088.078-.167.18-.231.295-.202.067-.42.033-.583-.098-.16-.13-.314-.317-.406-.524 0 0-.345-.439-1-.47 0 0-.638-.008-.044.399 0 0 .426.201.725.952 0 0 .361.951 2.077.634v1.421C4.56 15.64 1 12.152 1 8c0-4.418 3.582-8 8-8s8 3.582 8 8c0 4.151-3.56 7.64-7.564 7.962z" />
              </svg>
              <span className="text-gray-700 font-medium">Bitbucket</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                className="w-6 h-6 text-gray-700"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M23.976 8.517c0-.3-.126-.533-.376-.69a.972.972 0 0 0-.834-.146c-.243.06-.445.193-.607.398-.16.205-.243.441-.243.709v14.25c0 .273.081.51.244.71.163.202.368.334.618.397.97.233.67.028 1.02-.618.186-.386.334-.97.446-1.758.112-.787.168-1.636.168-2.547V8.517h-.436zM8.292 17.27l.435-.05.298-.075.334-.132.314-.295.227-.467.103-.75-.05-.709-.2-.63-.349-.498-.435-.374-.498-.248-.537-.173-.514-.087-.463-.05v4.684l.333-.05.398-.095.285-.101.32-.2zM.594 15.27c.195-.66.485-1.2.867-1.62.383-.42.883-.744 1.5-.974.62-.23 1.328-.346 2.126-.346.195 0 .37.007.523.024l.463.05v-5.09c-.112-.023-.239-.04-.382-.05a4.491 4.491 0 0 0-.404-.025c-.765 0-1.456.146-2.075.44a4.602 4.602 0 0 0-1.597 1.193c-.437.502-.77 1.08-1.002 1.732-.233.653-.349 1.34-.349 2.063 0 .765.152 1.404.457 1.92.304.51.704.765 1.19.765.147 0 .21-.024.19-.075l-.507-.007zm21.6-3.006c.394.608.706 1.313.936 2.114.23.8.346 1.626.346 2.474 0 .923-.123 1.782-.371 2.574-.246.794-.606 1.484-1.077 2.077-.473.589-1.039 1.052-1.699 1.384-.66.334-1.423.5-2.286.5-.83 0-1.593-.152-2.286-.456a5.206 5.206 0 0 1-1.833-1.293 6.09 6.09 0 0 1-1.215-2.001c-.293-.787-.44-1.652-.44-2.6 0-.876.14-1.722.424-2.538.282-.815.686-1.53 1.213-2.15.53-.622 1.153-1.12 1.872-1.498.718-.377 1.534-.566 2.447-.566.839 0 1.608.166 2.311.498.703.332 1.303.79 1.8 1.368.497.58.866 1.246 1.107 2.001l-3.534 1.458a2.6 2.6 0 0 0-.607-.974c-.277-.28-.573-.498-.886-.66-.315-.158-.637-.238-.97-.238-.43 0-.833.117-1.213.348-.382.233-.71.537-.986.913-.276.377-.493.81-.65 1.299-.156.487-.234.983-.234 1.483 0 .6.088 1.134.267 1.599.177.465.4.853.669 1.162.27.31.584.548.943.71.357.164.714.248 1.068.248.27 0 .543-.05.82-.15.28-.1.539-.24.778-.424.24-.181.443-.405.608-.67.167-.266.293-.569.383-.907l3.905 1.118z" />
              </svg>
              <span className="text-gray-700 font-medium">VS Code</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                className="w-6 h-6 text-gray-700"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7.833 6.666v-.055c0-1-.667-1.5-1.778-1.5H4.389v3h1.723c1.11 0 1.721-.666 1.721-1.445zM20.389 19.611v-5h2.611v-.555h-2.611v-2.5h-1.722v8.055h1.722zm-7.277 0v-2.834c0-.944-.555-1.666-1.834-1.666-1.277 0-1.832.722-1.832 1.666v2.834h1.721v-2.444c0-.445.278-.778.723-.778.444 0 .61.278.61.778v2.444h1.612zm-5.557-4.5v-.945c0-1.889-1.5-2.833-3.499-2.833-2 0-3.5.944-3.5 2.833v.945c0 1.944 1.5 2.833 3.5 2.833 2 0 3.499-.889 3.499-2.833zm-1.721-.056c0 .971-.777 1.333-1.778 1.333-1 0-1.777-.362-1.777-1.333v-.833c0-.917.777-1.334 1.777-1.334 1.001 0 1.778.417 1.778 1.334v.833zm12.446-3.777c-2 0-3.5.944-3.5 2.833v.889c0 2 1.5 2.833 3.5 2.833 2 0 3.5-.833 3.5-2.833v-.889c0-1.889-1.5-2.833-3.5-2.833zm1.779 3.61c0 .971-.778 1.334-1.779 1.334s-1.777-.363-1.777-1.334v-.777c0-.917.776-1.334 1.777-1.334s1.779.417 1.779 1.334v.777zM3.611 19.611V11h1.945c2.5 0 3.555 1.112 3.555 2.892v.222c0 1.833-1.222 2.944-3.555 2.944H5.333v2.553H3.61z" />
              </svg>
              <span className="text-gray-700 font-medium">IntelliJ</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
              Key Features
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Git Review offers powerful features to enhance your code quality
              and development workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
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
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Real-Time Code Analysis
              </h3>
              <p className="text-gray-600 mb-4">
                Our AI instantly analyzes your code for bugs, security
                vulnerabilities, and performance issues as you write.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-violet-500 mt-0.5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-gray-600">
                    Instant feedback during development
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-violet-500 mt-0.5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-gray-600">
                    Multi-language support
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-violet-500 mt-0.5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-gray-600">
                    Smart context awareness
                  </span>
                </li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
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
                    strokeWidth="2"
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Code Quality Improvements
              </h3>
              <p className="text-gray-600 mb-4">
                Get actionable suggestions for refactoring, optimization, and
                best practices tailored to your codebase.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-fuchsia-500 mt-0.5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-gray-600">
                    Smart refactoring suggestions
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-fuchsia-500 mt-0.5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-gray-600">
                    Performance optimization
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-fuchsia-500 mt-0.5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-gray-600">One-click fixes</span>
                </li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
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
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Team Collaboration
              </h3>
              <p className="text-gray-600 mb-4">
                Enhance team reviews with AI assistance, ensure code
                consistency, and maintain high standards.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-pink-500 mt-0.5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-gray-600">
                    Code review automation
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-pink-500 mt-0.5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-gray-600">
                    Style guide enforcement
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-pink-500 mt-0.5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-gray-600">
                    PR summary generation
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
              How It Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get started with Git Review in just a few simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto">
                1
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center h-full">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Install Extension
                </h3>
                <p className="text-gray-600">
                  Install our extension from your preferred marketplace in
                  seconds.
                </p>
              </div>
              <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 transform -translate-x-4"></div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto">
                2
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center h-full">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Connect Repository
                </h3>
                <p className="text-gray-600">
                  Link to your GitHub, GitLab, or Bitbucket repositories.
                </p>
              </div>
              <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 transform -translate-x-4"></div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto">
                3
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center h-full">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Customize Settings
                </h3>
                <p className="text-gray-600">
                  Configure analysis types and response preferences.
                </p>
              </div>
              <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 transform -translate-x-4"></div>
            </div>

            {/* Step 4 */}
            <div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto">
                4
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center h-full">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Start Reviewing
                </h3>
                <p className="text-gray-600">
                  Get instant AI-powered code reviews while you work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
              Simple Pricing
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your needs.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row justify-center gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 lg:w-1/3">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Free</h3>
                <p className="text-gray-600 text-sm mb-4">
                  For individual developers
                </p>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold text-gray-800">$0</span>
                  <span className="text-gray-500 ml-1">/month</span>
                </div>
                <Link
                  href="#"
                  className="block w-full py-2 px-4 rounded-md bg-gray-100 hover:bg-gray-200 text-center text-gray-800 font-medium transition-colors"
                >
                  Get Started
                </Link>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-gray-600">
                      Basic code analysis
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-gray-600">
                      Public repositories only
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-gray-600">
                      Limited API requests
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-gray-600">
                      Community support
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="bg-white rounded-lg shadow-md border border-violet-200 lg:w-1/3 transform lg:scale-105 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-xs font-semibold py-1 px-4 rounded-full">
                Most Popular
              </div>
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Pro</h3>
                <p className="text-gray-600 text-sm mb-4">
                  For professional developers
                </p>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
                    $12
                  </span>
                  <span className="text-gray-500 ml-1">/month</span>
                </div>
                <Link
                  href="#"
                  className="block w-full py-2 px-4 rounded-md bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 text-center text-white font-medium transition-colors shadow-sm"
                >
                  Try Free for 14 Days
                </Link>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-violet-500 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-gray-600">
                      Advanced code analysis
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-violet-500 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-gray-600">
                      Private & public repositories
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-violet-500 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-gray-600">
                      Unlimited API requests
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-violet-500 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-gray-600">
                      Priority email support
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-violet-500 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-gray-600">
                      Custom analysis rules
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Team Plan */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 lg:w-1/3">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Team</h3>
                <p className="text-gray-600 text-sm mb-4">
                  For development teams
                </p>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold text-gray-800">$29</span>
                  <span className="text-gray-500 ml-1">/month</span>
                </div>
                <a
                  href="mailto:satiseven777@gmail.com"
                  className="block w-full py-2 px-4 rounded-md bg-white border border-violet-500 hover:bg-violet-50 text-center text-violet-600 font-medium transition-colors"
                >
                  Contact Sales
                </a>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-gray-600">
                      Everything in Pro
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-gray-600">
                      Unlimited team members
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-gray-600">
                      Team analytics dashboard
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-gray-600">
                      Dedicated support
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-gray-600">
                      SSO & advanced security
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8">
                <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
                  Ready to elevate your code?
                </h2>
                <p className="text-gray-600 mb-6">
                  Join thousands of developers using Git Review to write better
                  code, ship fewer bugs, and build great software.
                </p>
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <Link
                    href="#"
                    className="bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 text-white py-3 px-6 rounded-md font-medium flex items-center justify-center transition-colors shadow-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Install Extension
                  </Link>
                  <Link
                    href="/contact"
                    className="border border-violet-200 bg-white hover:bg-violet-50 text-violet-600 py-3 px-6 rounded-md font-medium flex items-center justify-center transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    Contact Sales
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-90"></div>
                <div className="relative h-full flex items-center justify-center p-8">
                  <div className="text-white text-center">
                    <h3 className="text-xl font-semibold mb-3">
                      Join our community
                    </h3>
                    <p className="mb-4 text-white/80">
                      Get tips, resources, and support from fellow developers.
                    </p>
                    <div className="flex justify-center space-x-4">
                      <a
                        href="#"
                        className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
                      >
                        <svg
                          className="w-6 h-6 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
                      >
                        <svg
                          className="w-6 h-6 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
                      >
                        <svg
                          className="w-6 h-6 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
