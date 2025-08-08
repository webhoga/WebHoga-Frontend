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
        <h1 class="text-5xl font-bold text-gray-900">SEO & Web Optimization Pricing</h1>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Boost your online visibility and website performance with comprehensive SEO strategies and web optimization techniques that drive organic traffic and improve user experience.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Foundation SEO Package */}
          <div class="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-3xl shadow-xl text-left">
            <h3 class="text-2xl font-bold mb-4 text-gray-800">Foundation SEO</h3>
            <p class="text-gray-600 mb-4">Essential SEO foundation for small businesses and new websites.</p>
            <ul class="space-y-2 text-sm text-gray-700 mb-6">
              <li>✔ Technical SEO Audit</li>
              <li>✔ Keyword Research & Strategy</li>
              <li>✔ On-Page SEO Optimization (10 Pages)</li>
              <li>✔ Google My Business Setup</li>
              <li>✔ Local SEO Optimization</li>
              <li>✔ Meta Tags & Schema Markup</li>
              <li>✔ XML Sitemap Creation</li>
              <li>✔ Robots.txt Optimization</li>
              <li>✔ Basic Link Building Strategy</li>
              <li>✔ Google Analytics Setup</li>
              <li>✔ Search Console Configuration</li>
              <li>✔ Mobile-Friendly Optimization</li>
              <li>✔ Content Optimization Guidelines</li>
              <li>✔ Monthly Performance Report</li>
            </ul>
            <div class="text-3xl font-bold text-emerald-600 mb-4">₹18,999</div>
            <button
              onClick$={() => nav("/contact")}
              class="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-xl font-semibold transition-all"
            >
              Get Started
            </button>
          </div>

          {/* Growth SEO Package */}
          <div class="bg-gradient-to-br from-blue-50 to-cyan-100 p-8 rounded-3xl shadow-xl text-left">
            <h3 class="text-2xl font-bold mb-4 text-gray-800">Growth SEO</h3>
            <p class="text-gray-600 mb-4">Comprehensive SEO system for scaling businesses and competitive markets.</p>
            <ul class="space-y-2 text-sm text-gray-700 mb-6">
              <li>✔ Advanced SEO Audit</li>
              <li>✔ Competitor Analysis & Strategy</li>
              <li>✔ On-Page Optimization (25 Pages)</li>
              <li>✔ Content Gap Analysis</li>
              <li>✔ Advanced Local SEO</li>
              <li>✔ Rich Snippets Implementation</li>
              <li>✔ Site Speed Optimization</li>
              <li>✔ Internal Linking Strategy</li>
              <li>✔ Authority Link Building Campaign</li>
              <li>✔ Conversion Rate Optimization</li>
              <li>✔ Advanced Analytics Dashboard</li>
              <li>✔ Core Web Vitals Optimization</li>
              <li>✔ SEO Content Strategy</li>
              <li>✔ Bi-weekly Performance Reports</li>
            </ul>
            <div class="text-3xl font-bold text-cyan-700 mb-4">₹42,999</div>
            <button
              onClick$={() => nav("/contact")}
              class="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-xl font-semibold transition-all"
            >
              Get Started
            </button>
          </div>

          {/* Enterprise SEO Package */}
          <div class="bg-gradient-to-br from-purple-50 to-indigo-100 p-8 rounded-3xl shadow-xl text-left">
            <h3 class="text-2xl font-bold mb-4 text-gray-800">Enterprise SEO</h3>
            <p class="text-gray-600 mb-4">Complete SEO ecosystem for large organizations and premium brands.</p>
            <ul class="space-y-2 text-sm text-gray-700 mb-6">
              <li>✔ Enterprise SEO Audit</li>
              <li>✔ Multi-Market Strategy Development</li>
              <li>✔ Unlimited Page Optimization</li>
              <li>✔ International SEO Setup</li>
              <li>✔ Multi-Location SEO Management</li>
              <li>✔ Advanced Schema Implementation</li>
              <li>✔ Technical SEO Monitoring</li>
              <li>✔ Enterprise Link Building</li>
              <li>✔ Authority Domain Strategy</li>
              <li>✔ Advanced UX/CRO Optimization</li>
              <li>✔ Custom Analytics Integration</li>
              <li>✔ AI-Powered SEO Insights</li>
              <li>✔ Dedicated SEO Team</li>
              <li>✔ Weekly Strategy Sessions</li>
            </ul>
            <div class="text-3xl font-bold text-indigo-600 mb-4">₹94,999</div>
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