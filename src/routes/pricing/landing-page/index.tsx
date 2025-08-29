import { component$ } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';

export default component$(() => {
  const nav = useNavigate();

  return (
    <section class="py-20 px-6 bg-white min-h-screen relative">
      {/* Close Button */}
      <button
        onClick$={() => nav('/')}
        class="absolute top-6 right-6 text-gray-500 hover:text-red-500 transition-colors text-3xl font-bold"
        aria-label="Close and return to homepage"
      >
        ×
      </button>

      <div class="max-w-6xl mx-auto text-center space-y-10">
        <h1 class="text-5xl font-bold text-gray-900">Landing Page Development Pricing</h1>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Create high-converting landing pages that drive results—designed for maximum impact, speed, and conversion optimization.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Basic Landing Page */}
          <div class="bg-gradient-to-br from-orange-50 to-yellow-100 p-8 rounded-3xl shadow-xl text-left">
            <h3 class="text-2xl font-bold mb-4 text-gray-800">Basic Landing</h3>
            <p class="text-gray-600 mb-4">Perfect for small campaigns and quick product launches.</p>
            <ul class="space-y-2 text-sm text-gray-700 mb-6">
              <li>✔ Single Page Design</li>
              <li>✔ Mobile-Responsive Layout</li>
              <li>✔ Professional Template</li>
              <li>✔ Contact Form Integration</li>
              <li>✔ Basic SEO Setup</li>
              <li>✔ Free Domain 1 Year</li>
              <li>✔ Web Hosting 1 Year</li>
              <li>✔ SSL Certificate</li>
              <li>✔ Google Analytics</li>
              <li>✔ Social Media Links</li>
              <li>✔ Basic Speed Optimization</li>
              <li>✔ Email Support</li>
              <li>✔ 2 Rounds of Revisions</li>
              <li>✔ Delivery in 3-5 Days</li>
            </ul>
            <div class="text-3xl font-bold text-orange-600 mb-4">₹8,999</div>
            <button
              onClick$={() => nav("/contact")}
              class="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition-all"
            >
              Get Started
            </button>
          </div>

          {/* Professional Landing Page */}
          <div class="bg-gradient-to-br from-blue-50 to-cyan-100 p-8 rounded-3xl shadow-xl text-left">
            <h3 class="text-2xl font-bold mb-4 text-gray-800">Professional</h3>
            <p class="text-gray-600 mb-4">Complete solution for serious marketing campaigns and lead generation.</p>
            <ul class="space-y-2 text-sm text-gray-700 mb-6">
              <li>✔ Custom Landing Page Design</li>
              <li>✔ Mobile-Responsive Layout</li>
              <li>✔ Advanced Lead Capture Forms</li>
              <li>✔ A/B Testing Setup</li>
              <li>✔ Advanced SEO Optimization</li>
              <li>✔ Premium Domain 1 Year</li>
              <li>✔ Premium Hosting 1 Year</li>
              <li>✔ SSL Certificate</li>
              <li>✔ Google Analytics + Goals</li>
              <li>✔ Social Media Integration</li>
              <li>✔ Advanced Speed Optimization</li>
              <li>✔ Email Marketing Integration</li>
              <li>✔ CRM Integration</li>
              <li>✔ Delivery in 5-7 Days</li>
            </ul>
            <div class="text-3xl font-bold text-cyan-700 mb-4">₹18,999</div>
            <button
              onClick$={() => nav("/contact")}
              class="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-xl font-semibold transition-all"
            >
              Get Started
            </button>
          </div>

          {/* Conversion Catalyst Landing Page */}
          <div class="bg-gradient-to-br from-purple-50 to-indigo-100 p-8 rounded-3xl shadow-xl text-left">
            <h3 class="text-2xl font-bold mb-4 text-gray-800">Conversion Catalyst</h3>
            <p class="text-gray-600 mb-4">Enterprise-grade landing pages with advanced features and automation.</p>
            <ul class="space-y-2 text-sm text-gray-700 mb-6">
              <li>✔ Multi-Page Funnel Design</li>
              <li>✔ Mobile-Responsive + PWA</li>
              <li>✔ Advanced Lead Capture System</li>
              <li>✔ Multi-variant A/B Testing</li>
              <li>✔ Complete SEO Package</li>
              <li>✔ Premium Domain 1 Year</li>
              <li>✔ Premium Hosting 1 Year</li>
              <li>✔ SSL Certificate</li>
              <li>✔ Advanced Analytics Dashboard</li>
              <li>✔ Social Media Automation</li>
              <li>✔ Performance Optimization</li>
              <li>✔ Marketing Automation Setup</li>
              <li>✔ CRM + Payment Integration</li>
              <li>✔ Delivery in 7-10 Days</li>
            </ul>
            <div class="text-3xl font-bold text-indigo-600 mb-4">₹34,999</div>
            <button
              onClick$={() => nav("/contact")}
              class="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-xl font-semibold transition-all"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});
