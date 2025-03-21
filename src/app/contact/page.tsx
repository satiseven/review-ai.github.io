"use client";

import Layout from "@/components/Layout";
import Button from "@/components/Button";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill out all required fields.");
      return;
    }

    // This would normally send the form data to your server
    // For static site demo, we'll just simulate success
    setSubmitted(true);
    setError("");
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-medium text-chrome-text-primary mb-6">
            Contact Us
          </h1>

          <p className="text-chrome-text-secondary mb-8">
            Have questions, feedback, or need support? We`d love to hear from
            you. Fill out the form below and we`ll get back to you as soon as
            possible.
          </p>

          {submitted ? (
            <div className="bg-chrome-success-light border-l-4 border-chrome-success-base p-4 mb-6 rounded-chrome">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-chrome-success-base"
                    xmlns="http://www.w3.org/2000/svg"
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
                <div className="ml-3">
                  <p className="text-sm text-chrome-success-base">
                    Thank you for your message! We`ll get back to you as soon as
                    possible.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-chrome-surface p-6 rounded-chrome-lg shadow-chrome-sm border border-chrome-border"
            >
              {error && (
                <div className="bg-chrome-error-light border-l-4 border-chrome-error-base p-4 mb-6 rounded-chrome">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-chrome-error-base"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-chrome-error-base">{error}</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-chrome-text-primary mb-1"
                  >
                    Name <span className="text-chrome-error-base">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="shadow-sm focus:ring-chrome-brand-primary focus:border-chrome-brand-primary block w-full sm:text-sm border border-chrome-border rounded-chrome"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-chrome-text-primary mb-1"
                  >
                    Email <span className="text-chrome-error-base">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="shadow-sm focus:ring-chrome-brand-primary focus:border-chrome-brand-primary block w-full sm:text-sm border border-chrome-border rounded-chrome"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-chrome-text-primary mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="shadow-sm focus:ring-chrome-brand-primary focus:border-chrome-brand-primary block w-full sm:text-sm border border-chrome-border rounded-chrome"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-chrome-text-primary mb-1"
                >
                  Message <span className="text-chrome-error-base">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="shadow-sm focus:ring-chrome-brand-primary focus:border-chrome-brand-primary block w-full sm:text-sm border border-chrome-border rounded-chrome"
                  required
                />
              </div>

              <div>
                <Button variant="primary">Send Message</Button>
              </div>
            </form>
          )}

          <div className="mt-12 bg-chrome-surface p-6 rounded-chrome-lg shadow-chrome-sm border border-chrome-border">
            <h2 className="text-xl font-medium text-chrome-text-primary mb-4">
              Other Ways to Reach Us
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-chrome-text-primary mb-2">
                  Email
                </h3>
                <p className="text-chrome-text-secondary">
                  <a
                    href="mailto:satiseven777@gmail.com"
                    className="text-chrome-brand-primary hover:underline"
                  >
                    satiseven777@gmail.com
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-chrome-text-primary mb-2">
                  GitHub
                </h3>
                <p className="text-chrome-text-secondary">
                  <a
                    href="https://github.com/satiseven/review-seven"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-chrome-brand-primary hover:underline"
                  >
                    https://github.com/satiseven/review-seven
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
