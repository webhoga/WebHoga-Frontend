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
        <h1 class="text-5xl font-bold text-gray-900">Logo Design Pricing</h1>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Create a memorable brand identity with professional logo design—crafted to make your business stand out and build trust.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Basic Logo Package */}
          <div class="bg-gradient-to-br from-orange-50 to-yellow-100 p-8 rounded-3xl shadow-xl text-left">
            <h3 class="text-2xl font-bold mb-4 text-gray-800">Basic Logo</h3>
            <p class="text-gray-600 mb-4">Perfect for startups and small businesses getting started.</p>
            <ul class="space-y-2 text-sm text-gray-700 mb-6">
              <li>✔ 3 Logo Concepts</li>
              <li>✔ 2 Rounds of Revisions</li>
              <li>✔ Professional Design</li>
              <li>✔ High-Resolution Files</li>
              <li>✔ PNG & JPG Formats</li>
              <li>✔ Basic Style Guide</li>
              <li>✔ Color Variations</li>
              <li>✔ Black & White Version</li>
              <li>✔ Social Media Kit</li>
              <li>✔ Email Support</li>
              <li>✔ Commercial License</li>
              <li>✔ Font Recommendations</li>
              <li>✔ 100% Original Design</li>
              <li>✔ Delivery in 3-5 Days</li>
            </ul>
            <div class="text-3xl font-bold text-orange-600 mb-4">₹9,999</div>
            <button
              onClick$={() => nav("/contact")}
              class="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition-all"
            >
              Get Started
            </button>
          </div>

          {/* Professional Logo Package */}
          <div class="bg-gradient-to-br from-blue-50 to-cyan-100 p-8 rounded-3xl shadow-xl text-left">
            <h3 class="text-2xl font-bold mb-4 text-gray-800">Professional</h3>
            <p class="text-gray-600 mb-4">Complete branding solution for established businesses.</p>
            <ul class="space-y-2 text-sm text-gray-700 mb-6">
              <li>✔ 5 Logo Concepts</li>
              <li>✔ 4 Rounds of Revisions</li>
              <li>✔ Custom Typography</li>
              <li>✔ Vector Files (AI, EPS, SVG)</li>
              <li>✔ All Format Files</li>
              <li>✔ Complete Brand Guidelines</li>
              <li>✔ Color Palette</li>
              <li>✔ Multiple Variations</li>
              <li>✔ Social Media Templates</li>
              <li>✔ Business Card Design</li>
              <li>✔ Letterhead Template</li>
              <li>✔ Favicon Design</li>
              <li>✔ Brand Strategy Consultation</li>
              <li>✔ Delivery in 5-7 Days</li>
            </ul>
            <div class="text-3xl font-bold text-cyan-700 mb-4">₹16,999</div>
            <button
              onClick$={() => nav("/contact")}
              class="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-xl font-semibold transition-all"
            >
              Get Started
            </button>
          </div>

          {/* Premium Brand Package */}
          <div class="bg-gradient-to-br from-purple-50 to-indigo-100 p-8 rounded-3xl shadow-xl text-left">
            <h3 class="text-2xl font-bold mb-4 text-gray-800">Premium</h3>
            <p class="text-gray-600 mb-4">Complete brand identity system for premium businesses.</p>
            <ul class="space-y-2 text-sm text-gray-700 mb-6">
              <li>✔ 8 Logo Concepts</li>
              <li>✔ Unlimited Revisions</li>
              <li>✔ Custom Icon Design</li>
              <li>✔ Master Vector Files</li>
              <li>✔ Complete File Library</li>
              <li>✔ Brand Identity Manual</li>
              <li>✔ Extended Color System</li>
              <li>✔ Logo Animation</li>
              <li>✔ Complete Stationery Set</li>
              <li>✔ Brand Pattern Design</li>
              <li>✔ Packaging Templates</li>
              <li>✔ Website Graphics</li>
              <li>✔ Brand Strategy Session</li>
              <li>✔ Delivery in 7-10 Days</li>
            </ul>
            <div class="text-3xl font-bold text-indigo-600 mb-4">₹24,999</div>
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
