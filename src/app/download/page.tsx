import Layout from "@/components/Layout";
import Button from "@/components/Button";

export default function Download() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-medium text-chrome-text-primary mb-4">
            Download Review AI
          </h1>
          <p className="text-lg text-chrome-text-secondary mb-8">
            Get started with AI-powered code reviews in just a few clicks.
          </p>

          <div className="bg-chrome-surface p-8 rounded-chrome-lg shadow-chrome-sm border border-chrome-border mb-10">
            <div className="flex items-center justify-center mb-6">
              <img
                src="/images/chrome-logo.png"
                alt="Chrome Logo"
                className="h-16 w-16"
              />
              <div className="ml-6 text-left">
                <h2 className="text-xl font-medium text-chrome-text-primary">
                  Google Chrome
                </h2>
                <p className="text-chrome-text-secondary">
                  Available on Chrome Web Store
                </p>
              </div>
            </div>

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

          <div className="bg-chrome-brand-light p-8 rounded-chrome-lg mb-10">
            <h2 className="text-xl font-medium text-chrome-text-primary mb-4">
              Installation Instructions
            </h2>

            <div className="text-left space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-chrome-brand-primary text-white flex items-center justify-center mr-3">
                  <span>1</span>
                </div>
                <div>
                  <p className="text-chrome-text-primary">
                    Click the `Add to Chrome` button above notify you of any
                    changes by posting the new Privacy Policy on this page and
                    updating the `Last updated` date.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-chrome-brand-primary text-white flex items-center justify-center mr-3">
                  <span>2</span>
                </div>
                <div>
                  <p className="text-chrome-text-primary">
                    In the popup, click `Add extension`
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-chrome-brand-primary text-white flex items-center justify-center mr-3">
                  <span>3</span>
                </div>
                <div>
                  <p className="text-chrome-text-primary">
                    Review AI will appear in your extensions toolbar
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-chrome-brand-primary text-white flex items-center justify-center mr-3">
                  <span>4</span>
                </div>
                <div>
                  <p className="text-chrome-text-primary">
                    Navigate to GitHub, GitLab, or Bitbucket to start using
                    Review AI
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-xl font-medium text-chrome-text-primary mb-4">
              Coming Soon
            </h2>
            <p className="text-chrome-text-secondary mb-6">
              We`re working on versions for other browsers. Sign up to be
              notified when they`re available.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-chrome-surface p-4 rounded-chrome border border-chrome-border flex items-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-[#FF9500]"
                  fill="currentColor"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-5-8c0 2.761 2.239 5 5 5s5-2.239 5-5-2.239-5-5-5-5 2.239-5 5z" />
                </svg>
                <span className="ml-2 text-chrome-text-primary">Firefox</span>
              </div>

              <div className="bg-chrome-surface p-4 rounded-chrome border border-chrome-border flex items-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-[#0078D7]"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-5.83V9.83l5.57 2.17-5.57 2.17z" />
                </svg>
                <span className="ml-2 text-chrome-text-primary">Edge</span>
              </div>

              <div className="bg-chrome-surface p-4 rounded-chrome border border-chrome-border flex items-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-[#FF3E00]"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-5.83V9.83l5.57 2.17-5.57 2.17z" />
                </svg>
                <span className="ml-2 text-chrome-text-primary">Safari</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
