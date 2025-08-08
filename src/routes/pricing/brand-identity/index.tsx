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
        <h1 class="text-5xl font-bold text-gray-900">Brand Identity Design Pricing</h1>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Build a cohesive brand presence that resonates with your audience—comprehensive identity systems that tell your story across all touchpoints.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Essential Brand Package */}
          <div class="bg-gradient-to-br from-orange-50 to-yellow-100 p-8 rounded-3xl shadow-xl text-left">
            <h3 class="text-2xl font-bold mb-4 text-gray-800">Essential Brand</h3>
            <p class="text-gray-600 mb-4">Complete visual identity foundation for growing businesses.</p>
            <ul class="space-y-2 text-sm text-gray-700 mb-6">
              <li>✔ Brand Strategy Workshop</li>
              <li>✔ Brand Guidelines Manual</li>
              <li>✔ Color Palette System</li>
              <li>✔ Typography Selection</li>
              <li>✔ Visual Style Guide</li>
              <li>✔ Business Card Design</li>
              <li>✔ Letterhead Template</li>
              <li>✔ Email Signature Design</li>
              <li>✔ Social Media Templates</li>
              <li>✔ Brand Pattern Library</li>
              <li>✔ Icon Set Creation</li>
              <li>✔ Photography Guidelines</li>
              <li>✔ Brand Voice Guidelines</li>
              <li>✔ Delivery in 10-14 Days</li>
            </ul>
            <div class="text-3xl font-bold text-orange-600 mb-4">₹34,999</div>
            <button
              onClick$={() => nav('/contact')}
              class="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition-all"
            >
              Get Started
            </button>
          </div>

          {/* Professional Brand Package */}
          <div class="bg-gradient-to-br from-blue-50 to-cyan-100 p-8 rounded-3xl shadow-xl text-left">
            <h3 class="text-2xl font-bold mb-4 text-gray-800">Professional</h3>
            <p class="text-gray-600 mb-4">Comprehensive brand system for established businesses.</p>
            <ul class="space-y-2 text-sm text-gray-700 mb-6">
              <li>✔ In-Depth Brand Strategy</li>
              <li>✔ Complete Brand Manual</li>
              <li>✔ Extended Color System</li>
              <li>✔ Custom Typography Pairing</li>
              <li>✔ Visual Identity System</li>
              <li>✔ Complete Stationery Suite</li>
              <li>✔ Marketing Collateral Templates</li>
              <li>✔ Digital Asset Library</li>
              <li>✔ Social Media Brand Kit</li>
              <li>✔ Brand Illustration Style</li>
              <li>✔ Custom Icon Library</li>
              <li>✔ Brand Photography Direction</li>
              <li>✔ Messaging Framework</li>
              <li>✔ Delivery in 14-21 Days</li>
            </ul>
            <div class="text-3xl font-bold text-cyan-700 mb-4">₹64,999</div>
            <button
              onClick$={() => nav('/contact')}
              class="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-xl font-semibold transition-all"
            >
              Get Started
            </button>
          </div>

          {/* Enterprise Brand Package */}
          <div class="bg-gradient-to-br from-purple-50 to-indigo-100 p-8 rounded-3xl shadow-xl text-left">
            <h3 class="text-2xl font-bold mb-4 text-gray-800">Enterprise</h3>
            <p class="text-gray-600 mb-4">Complete brand ecosystem for large organizations and premium brands.</p>
            <ul class="space-y-2 text-sm text-gray-700 mb-6">
              <li>✔ Strategic Brand Positioning</li>
              <li>✔ Master Brand Guidelines</li>
              <li>✔ Multi-Brand Color Systems</li>
              <li>✔ Custom Font Development</li>
              <li>✔ Complete Visual Language</li>
              <li>✔ Corporate Identity Suite</li>
              <li>✔ Marketing Campaign Templates</li>
              <li>✔ Digital Brand Portal</li>
              <li>✔ Multi-Platform Brand Kit</li>
              <li>✔ Brand Illustration System</li>
              <li>✔ Comprehensive Icon System</li>
              <li>✔ Brand Content Strategy</li>
              <li>✔ Implementation Support</li>
              <li>✔ Delivery in 21-28 Days</li>
            </ul>
            <div class="text-3xl font-bold text-indigo-600 mb-4">₹1,24,999</div>
            <button
              onClick$={() => nav('/contact')}
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