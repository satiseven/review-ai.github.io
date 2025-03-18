import Layout from "@/components/Layout";

export default function Privacy() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-medium text-chrome-text-primary mb-2">
            Privacy Policy
          </h1>
          <p className="text-chrome-text-secondary mb-8">
            Last updated: March 18, 2025
          </p>

          <div className="space-y-6">
            <p className="text-chrome-text-secondary">
              At Review AI, we take your privacy seriously. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your
              information when you use our Chrome extension.
            </p>

            <div>
              <h2 className="text-xl font-medium text-chrome-text-primary mb-2">
                Information We Collect
              </h2>
              <p className="text-chrome-text-secondary mb-2">
                When you use our Review AI extension, we collect the following
                types of information:
              </p>
              <ul className="list-disc list-inside text-chrome-text-secondary ml-4 space-y-2">
                <li>
                  <span className="font-medium">
                    Authentication information:
                  </span>{" "}
                  When you connect your GitHub, Bitbucket, or GitLab account, we
                  store authentication tokens to enable the extension to access
                  and analyze your code.
                </li>
                <li>
                  <span className="font-medium">Code snippets:</span> When you
                  submit code for review, we temporarily process the code to
                  generate feedback.
                </li>
                <li>
                  <span className="font-medium">Usage data:</span> We collect
                  anonymous data about how you use the extension, such as which
                  features you use most frequently.
                </li>
                <li>
                  <span className="font-medium">Extension settings:</span> We
                  store your preferences for the extension, such as language
                  settings and review types.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-medium text-chrome-text-primary mb-2">
                How We Use Your Information
              </h2>
              <p className="text-chrome-text-secondary mb-2">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc list-inside text-chrome-text-secondary ml-4">
                <li>To provide and maintain our service</li>
                <li>To analyze your code and provide feedback</li>
                <li>To improve our AI models and extension features</li>
                <li>To respond to your requests or inquiries</li>
                <li>To monitor usage of our service</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-medium text-chrome-text-primary mb-2">
                Data Storage and Security
              </h2>
              <p className="text-chrome-text-secondary">
                Your authentication tokens are stored securely in Chrome`s
                storage API, which is encrypted. Code snippets submitted for
                review are processed in memory and are not permanently stored on
                our servers.
              </p>
              <p className="text-chrome-text-secondary mt-2">
                We implement appropriate technical and organizational measures
                to protect your personal information against unauthorized or
                unlawful processing, accidental loss, destruction, or damage.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-chrome-text-primary mb-2">
                Third-Party Services
              </h2>
              <p className="text-chrome-text-secondary">
                Our extension integrates with third-party services such as
                GitHub, Bitbucket, and GitLab. Your use of these services is
                subject to their respective privacy policies, which we encourage
                you to review.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-chrome-text-primary mb-2">
                Your Rights
              </h2>
              <p className="text-chrome-text-secondary mb-2">
                Depending on your location, you may have certain rights
                regarding your personal information, including:
              </p>
              <ul className="list-disc list-inside text-chrome-text-secondary ml-4">
                <li>
                  The right to access the personal information we hold about you
                </li>
                <li>
                  The right to request correction of your personal information
                </li>
                <li>
                  The right to request deletion of your personal information
                </li>
                <li>
                  The right to object to processing of your personal information
                </li>
                <li>The right to data portability</li>
              </ul>
              <p className="text-chrome-text-secondary mt-2">
                To exercise any of these rights, please contact us using the
                information provided in the `Contact Us` section.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-chrome-text-primary mb-2">
                Changes to This Privacy Policy
              </h2>
              <p className="text-chrome-text-secondary">
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the `Last updated` date.
              </p>
              <p className="text-chrome-text-secondary mt-2">
                We recommend that you review this Privacy Policy periodically
                for any changes. Changes to this Privacy Policy are effective
                when they are posted on this page.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-chrome-text-primary mb-2">
                Contact Us
              </h2>
              <p className="text-chrome-text-secondary mb-2">
                If you have any questions about this Privacy Policy, please
                contact us:
              </p>
              <ul className="list-disc list-inside text-chrome-text-secondary ml-4">
                <li>By email: satiseven777@gmail.com</li>
                <li>
                  By visiting our contact page:{" "}
                  <a
                    href="/contact"
                    className="text-chrome-brand-primary hover:underline"
                  >
                    Contact Form
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
