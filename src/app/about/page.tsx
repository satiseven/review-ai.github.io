import Layout from "@/components/Layout";
import Button from "@/components/Button";

export default function About() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-medium text-chrome-text-primary mb-6">
            About Review AI
          </h1>

          <div className="space-y-6">
            <p className="text-chrome-text-secondary">
              Review AI is a powerful browser extension that uses artificial
              intelligence to analyze and provide feedback on your code. Our
              mission is to help developers write better, more efficient, and
              more secure code.
            </p>

            <div>
              <h2 className="text-xl font-medium text-chrome-text-primary mb-2">
                Our Story
              </h2>
              <p className="text-chrome-text-secondary">
                The idea for Review AI was born out of the challenges faced by
                our team during code reviews. We noticed that many common issues
                were repeatedly identified, taking up valuable time that could
                be spent on more complex problems.
              </p>
              <p className="text-chrome-text-secondary mt-2">
                We set out to create a tool that could automate the
                identification of these common issues, allowing human reviewers
                to focus on the more nuanced aspects of code review. By
                leveraging the latest advancements in AI and machine learning,
                we`ve developed a solution that provides instant, actionable
                feedback on your code.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-chrome-text-primary mb-2">
                How It Works
              </h2>
              <p className="text-chrome-text-secondary">
                Our extension integrates seamlessly with GitHub, GitLab, and
                Bitbucket. When you browse code on these platforms, Review AI
                analyzes the code and provides suggestions for improvements
                directly within the interface.
              </p>
              <p className="text-chrome-text-secondary mt-2">
                The AI has been trained on millions of lines of code and best
                practices from industry experts. It can identify issues related
                to:
              </p>
              <ul className="list-disc list-inside text-chrome-text-secondary mt-2 ml-4 space-y-1">
                <li>Code quality and maintainability</li>
                <li>Performance optimization</li>
                <li>Security vulnerabilities</li>
                <li>Error handling</li>
                <li>Code style and consistency</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-medium text-chrome-text-primary mb-2">
                Our Team
              </h2>
              <p className="text-chrome-text-secondary">
                We are a team of passionate developers and AI enthusiasts who
                believe in the power of technology to improve the software
                development process. Our diverse backgrounds in software
                engineering, machine learning, and user experience design allow
                us to create a tool that is both powerful and easy to use.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-chrome-text-primary mb-2">
                Our Vision
              </h2>
              <p className="text-chrome-text-secondary">
                We envision a future where AI-assisted code review is a standard
                part of the development process, helping developers write better
                code faster. Our goal is to continuously improve our AI models
                and expand our feature set to provide even more value to our
                users.
              </p>
              <p className="text-chrome-text-secondary mt-2">
                We`re committed to making Review AI the most comprehensive and
                user-friendly code review tool available, and we welcome your
                feedback and suggestions.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-chrome-border">
            <h2 className="text-xl font-medium text-chrome-text-primary mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-chrome-text-primary">
                  Is Review AI free to use?
                </h3>
                <p className="mt-2 text-chrome-text-secondary">
                  Yes, Review AI is currently free to use for all developers. We
                  may introduce premium features in the future, but our core
                  functionality will always remain free.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-chrome-text-primary">
                  Does Review AI work offline?
                </h3>
                <p className="mt-2 text-chrome-text-secondary">
                  No, Review AI requires an internet connection to analyze your
                  code, as the AI processing happens on our secure servers.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-chrome-text-primary">
                  Is my code secure when using Review AI?
                </h3>
                <p className="mt-2 text-chrome-text-secondary">
                  Absolutely. We do not store your code on our servers beyond
                  the time needed for analysis. Your code is transmitted
                  securely and is never shared with third parties.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-chrome-text-primary">
                  Which programming languages are supported?
                </h3>
                <p className="mt-2 text-chrome-text-secondary">
                  Review AI currently supports JavaScript, TypeScript, Python,
                  Java, C++, Go, Ruby, PHP, and many other popular programming
                  languages. We`re constantly adding support for more languages.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button
              href="https://chrome.google.com/webstore"
              variant="primary"
              size="lg"
            >
              Get Started with Review AI
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
