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
        <h1 class="text-5xl font-bold text-gray-900">Analytics Setup Pricing</h1>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Transform your data into actionable insights with professional Google Analytics implementation and ongoing
          optimization services.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Essential Package */}
          <div class="bg-gradient-to-br from-emerald-50 to-green-100 p-8 rounded-3xl shadow-xl text-left">
            <h3 class="text-2xl font-bold mb-4 text-gray-800">Essential</h3>
            <p class="text-gray-600 mb-4">Perfect for small businesses & startups getting started.</p>
            <ul class="space-y-2 text-sm text-gray-700 mb-6">
              <li>✔ Google Analytics 4 Setup</li>
              <li>✔ Basic Goal Tracking</li>
              <li>✔ E-commerce Tracking</li>
              <li>✔ Custom Dimensions (5)</li>
              <li>✔ Basic Conversion Tracking</li>
              <li>✔ Dashboard Configuration</li>
              <li>✔ Mobile App Tracking</li>
              <li>✔ Basic Attribution Model</li>
              <li>✔ 1 Website Integration</li>
              <li>✔ Basic Audience Insights</li>
              <li>✔ Setup Training Session</li>
              <li>✔ Standard Event Tracking</li>
              <li>✔ Basic Reporting Templates</li>
            </ul>
            <div class="text-3xl font-bold text-emerald-600 mb-4">₹8,999</div>
            <button
              onClick$={() => nav("/contact")}
              class="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-xl font-semibold transition-all">
              Get Started
            </button>
          </div>

          {/* Professional Package */}
          <div class="bg-gradient-to-br from-blue-50 to-cyan-100 p-8 rounded-3xl shadow-xl text-left">
            <h3 class="text-2xl font-bold mb-4 text-gray-800">Professional</h3>
            <p class="text-gray-600 mb-4">Complete analytics solution for growing businesses.</p>
            <ul class="space-y-2 text-sm text-gray-700 mb-6">
              <li>✔ Google Analytics 4 Setup</li>
              <li>✔ Advanced Goal Tracking</li>
              <li>✔ Enhanced E-commerce Setup</li>
              <li>✔ Custom Dimensions (20)</li>
              <li>✔ Cross-Domain Tracking</li>
              <li>✔ Weekly Automated Reports</li>
              <li>✔ Custom Dashboard Creation</li>
              <li>✔ Multi-Platform Tracking</li>
              <li>✔ Advanced Attribution Models</li>
              <li>✔ Audience Segmentation</li>
              <li>✔ Up to 5 Website Integration</li>
              <li>✔ A/B Testing Integration</li>
              <li>✔ Advanced Event Tracking</li>
            </ul>
            <div class="text-3xl font-bold text-cyan-700 mb-4">₹18,999</div>
            <button
              onClick$={() => nav("/contact")}
              class="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-xl font-semibold transition-all">
              Get Started
            </button>
          </div>

          {/* Enterprise Package */}
          <div class="bg-gradient-to-br from-purple-50 to-indigo-100 p-8 rounded-3xl shadow-xl text-left">
            <h3 class="text-2xl font-bold mb-4 text-gray-800">Enterprise</h3>
            <p class="text-gray-600 mb-4">Advanced analytics & insights for large organizations.</p>
            <ul class="space-y-2 text-sm text-gray-700 mb-6">
              <li>✔ Google Analytics 4 Setup</li>
              <li>✔ Advanced Custom Events</li>
              <li>✔ Unlimited Custom Dimensions</li>
              <li>✔ Advanced E-commerce Tracking</li>
              <li>✔ Multi-Channel Attribution</li>
              <li>✔ Real-time Data Streaming</li>
              <li>✔ Custom Report Builder</li>
              <li>✔ Advanced Audience Analysis</li>
              <li>✔ Predictive Analytics Setup</li>
              <li>✔ BigQuery Integration</li>
              <li>✔ Data Studio Dashboards</li>
              <li>✔ Unlimited Website Integration</li>
              <li>✔ Advanced Conversion Modeling</li>
            </ul>
            <div class="text-3xl font-bold text-indigo-600 mb-4">₹35,999</div>
            <button
              onClick$={() => nav("/contact")}
              class="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-xl font-semibold transition-all">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});