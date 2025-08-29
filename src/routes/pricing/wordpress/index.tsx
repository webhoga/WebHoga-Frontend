import { component$ } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';

export default component$(() => {
  const nav = useNavigate();

  return (
    <section class="relative min-h-screen bg-white px-6 py-20">
      {/* Close Button */}
      <button
        onClick$={() => nav("/")}
        class="absolute top-6 right-6 text-3xl font-bold text-gray-500 transition-colors hover:text-red-500"
        aria-label="Close and return to homepage"
      >
        ×
      </button>

      <div class="mx-auto max-w-6xl space-y-10 text-center">
        <h1 class="text-5xl font-bold text-gray-900">
          WordPress Website Pricing
        </h1>
        <p class="mx-auto max-w-3xl text-lg text-gray-600">
          Choose from our flexible WordPress design packages built for startups,
          businesses, and enterprises. Fully responsive, SEO-optimized, and
          performance driven.
        </p>

        <div class="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Basic Plan */}
          <div class="rounded-3xl bg-gradient-to-br from-orange-50 to-yellow-100 p-8 text-left shadow-xl">
            <h3 class="mb-4 text-2xl font-bold text-gray-800">Basic</h3>
            <p class="mb-4 text-gray-600">
              Perfect for individuals and small businesses starting out.
            </p>
            <ul class="mb-6 space-y-2 text-sm text-gray-700">
              <li>✔ One-Page Website</li>
              <li>✔ Domain 1 Year</li>
              <li>✔ Hosting 1 Year</li>
              <li>✔ SSL</li>
              <li>✔ GDPR Compliant Cookies</li>
              <li>✔ Google reCAPTCHA</li>
              <li>✘ Security Setup</li>
              <li>✘ Logo</li>
              <li>✘ Image Compression</li>
              <li>✘ Google Analytics</li>
              <li>✘ Google Search Console</li>
              <li>✘ Bing Search</li>
              <li>✘ Google My Business</li>
              <li>✘ Page Speed Optimization</li>
              <li>✔ Mobile-Responsive Design</li>
              <li>✔ Delivery in 72 Working Hours</li>
            </ul>
            <div class="mb-4 text-3xl font-bold text-orange-600">₹8,799</div>
            <button
              onClick$={() => nav("/contact")}
              class="w-full rounded-xl bg-orange-500 py-3 font-semibold text-white transition-all hover:bg-orange-600"
            >
              Get Started
            </button>
          </div>

          {/* Advanced Growth Plan */}
          <div class="rounded-3xl bg-gradient-to-br from-blue-50 to-cyan-100 p-8 text-left shadow-xl">
            <h3 class="mb-4 text-2xl font-bold text-gray-800">Advanced Growth</h3>
            <p class="mb-4 text-gray-600">
              Great for growing businesses with more advanced needs.
            </p>
            <ul class="mb-6 space-y-2 text-sm text-gray-700">
              <li>✔ 2-5 Pages Website</li>
              <li>✔ Domain 1 Year</li>
              <li>✔ Hosting 1 Year</li>
              <li>✔ SSL</li>
              <li>✔ GDPR Compliant Cookies</li>
              <li>✔ Google reCAPTCHA</li>
              <li>✔ Security Setup</li>
              <li>✔ Logo</li>
              <li>✘ Image Compression</li>
              <li>✘ Google Analytics</li>
              <li>✘ Google Search Console</li>
              <li>✘ Bing Search</li>
              <li>✘ Google My Business</li>
              <li>✘ Page Speed Optimization</li>
              <li>✔ Mobile-Responsive Design</li>
              <li>✔ Delivery in 98 Working Hours</li>
            </ul>
            <div class="mb-4 text-3xl font-bold text-blue-600">₹14,860</div>
            <button
              onClick$={() => nav("/contact")}
              class="w-full rounded-xl bg-blue-500 py-3 font-semibold text-white transition-all hover:bg-blue-600"
            >
              Get Started
            </button>
          </div>

          {/* Premium Pro Plan */}
          <div class="rounded-3xl bg-gradient-to-br from-purple-50 to-indigo-100 p-8 text-left shadow-xl">
            <h3 class="mb-4 text-2xl font-bold text-gray-800">Premium Pro</h3>
            <p class="mb-4 text-gray-600">
              For enterprises that need full customization and support.
            </p>
            <ul class="mb-6 space-y-2 text-sm text-gray-700">
              <li>✔ 6-12 Pages Website</li>
              <li>✔ Domain 1 Year</li>
              <li>✔ Hosting 1 Year</li>
              <li>✔ SSL</li>
              <li>✔ GDPR Compliant Cookies</li>
              <li>✔ Google reCAPTCHA</li>
              <li>✔ Security Setup</li>
              <li>✔ Logo</li>
              <li>✔ Image Compression</li>
              <li>✔ Google Analytics</li>
              <li>✔ Google Search Console</li>
              <li>✔ Bing Search</li>
              <li>✔ Google My Business</li>
              <li>✔ Page Speed Optimization</li>
              <li>✔ Mobile-Responsive Design</li>
              <li>✔ Delivery in 15 Working Days</li>
            </ul>
            <div class="mb-4 text-3xl font-bold text-indigo-600">₹23,999</div>
            <button
              onClick$={() => nav("/contact")}
              class="w-full rounded-xl bg-indigo-500 py-3 font-semibold text-white transition-all hover:bg-indigo-600"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});
