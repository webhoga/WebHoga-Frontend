import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export const head: DocumentHead = {
  title: "Thank You - WebHoga | Your Message Has Been Received",
  meta: [
    {
      name: "description",
      content: "Thank you for contacting WebHoga! Your message has been received and our team will get back to you within 24 hours regarding your branding and design needs.",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      name: "robots",
      content: "noindex, nofollow",
    },
    {
      property: "og:title",
      content: "Thank You - WebHoga | Your Message Has Been Received",
    },
    {
      property: "og:description",
      content: "Thank you for contacting WebHoga! We'll be in touch soon.",
    },
    {
      property: "og:type",
      content: "website",
    },
  ],
  links: [
    {
      rel: "stylesheet",
      href: "https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700&f[]=inter@400,500,600&display=swap",
    },
  ],
};

export default component$(() => {
  return (
    <>
      <Header />

      <main class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
        <div class="max-w-2xl mx-auto text-center bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Success Icon */}
          <div class="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <svg
              class="w-10 h-10 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          {/* Main Heading */}
          <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-satoshi">
            Thank You for Your Submission!
          </h1>

          {/* Subheading */}
          <p class="text-lg text-gray-600 mb-6 font-inter">
            We've received your message and really appreciate you taking the time to reach out to us.
          </p>

          {/* Details */}
          <div class="bg-blue-50 rounded-lg p-6 mb-8">
            <h2 class="text-xl font-semibold text-blue-900 mb-3 font-satoshi">
              What happens next?
            </h2>
            <ul class="text-left space-y-2 text-blue-800">
              <li class="flex items-start">
                <span class="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Our team will review your requirements within 2-4 hours
              </li>
              <li class="flex items-start">
                <span class="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                We'll get back to you within 24 hours with next steps
              </li>
              <li class="flex items-start">
                <span class="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Expect a personalized proposal tailored to your branding needs
              </li>
            </ul>
          </div>

          {/* CTA Buttons */}
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              Return to Home
            </a>
          </div>

          {/* Contact Info */}
          <div class="mt-8 pt-6 border-t border-gray-200">
            <p class="text-sm text-gray-500">
              Need immediate assistance? Email us at{" "}
              <a
                href="mailto:contact@webhoga.com"
                class="text-blue-600 hover:text-blue-800 font-medium"
              >
                contact@webhoga.com
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
});