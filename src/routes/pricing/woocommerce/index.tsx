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
        <h1 class="text-5xl font-bold text-gray-900">WooCommerce Store Pricing</h1>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Build a powerful WordPress eCommerce store with WooCommerce—designed for flexibility, SEO optimization, and unlimited growth potential.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* WooCommerce Starter Shop Plan */}
          <div class="bg-gradient-to-br from-orange-50 to-yellow-100 p-8 rounded-3xl shadow-xl text-left">
            <h3 class="text-2xl font-bold mb-4 text-gray-800">Starter Shop</h3>
            <p class="text-gray-600 mb-4">Perfect for small businesses starting their online journey.</p>
            <ul class="space-y-2 text-sm text-gray-700 mb-6">
              <li>✔ 3-Page Website</li>
              <li>✔ Normal Theme</li>
              <li>✔ Up to 50 Products</li>
              <li>✔ Mobile-Responsive Design</li>
              <li>✔ Payment Gateway Integration</li>
              <li>✔ Domain 1 Year</li>
              <li>✔ Hosting 1 Year</li>
              <li>✔ SSL</li>
              <li>✘ Logo</li>
              <li>✔ Social Media Integration</li>
              <li>✔ Basic SEO Setup (Installation Only)</li>
              <li>✔ Contact Form</li>
              <li>✔ Analytics</li>
              <li>✔ Social Media Integration</li>
              <li>✔ Order Management</li>
              <li>✔ Delivery in 1 Working Week</li>
            </ul>
            <div class="text-3xl font-bold text-orange-600 mb-4">₹18,500</div>
            <button
              onClick$={() => nav("/contact")}
              class="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition-all"
            >
              Get Started
            </button>
          </div>

          {/* WooCommerce Growth Cart Plan */}
          <div class="bg-gradient-to-br from-blue-50 to-cyan-100 p-8 rounded-3xl shadow-xl text-left">
            <h3 class="text-2xl font-bold mb-4 text-gray-800">Growth Cart</h3>
            <p class="text-gray-600 mb-4">Complete solution for growing businesses with advanced features.</p>
            <ul class="space-y-2 text-sm text-gray-700 mb-6">
              <li>✔ 5-7 Page Website</li>
              <li>✔ Normal Theme</li>
              <li>✔ Unlimited Products</li>
              <li>✔ Mobile-Responsive Design</li>
              <li>✔ Payment Gateway Integration</li>
              <li>✔ Domain 1 Year</li>
              <li>✔ Hosting 1 Year</li>
              <li>✔ SSL</li>
              <li>✔ Logo</li>
              <li>✔ Social Media Integration</li>
              <li>✔ Basic SEO Setup</li>
              <li>✔ Analytics</li>
              <li>✔ Newsletter</li>
              <li>✔ Abandoned Cart Recovery</li>
              <li>✔ Inventory Management</li>
              <li>✔ Delivery In 2 Working Weeks</li>
            </ul>
            <div class="text-3xl font-bold text-cyan-700 mb-4">₹34,111</div>
            <button
              onClick$={() => nav("/contact")}
              class="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-xl font-semibold transition-all"
            >
              Get Started
            </button>
          </div>

          {/* Scale Commerce Plan */}
          <div class="bg-gradient-to-br from-purple-50 to-indigo-100 p-8 rounded-3xl shadow-xl text-left">
            <h3 class="text-2xl font-bold mb-4 text-gray-800">Scale Commerce</h3>
            <p class="text-gray-600 mb-4">Advanced eCommerce solution for large businesses and brands.</p>
            <ul class="space-y-2 text-sm text-gray-700 mb-6">
              <li>✔ 8-12 Page Website</li>
              <li>✔ Premium Theme</li>
              <li>✔ Unlimited Products</li>
              <li>✔ Mobile-Responsive Design</li>
              <li>✔ Payment Gateway Integration</li>
              <li>✔ Domain 1 Year</li>
              <li>✔ Hosting 1 Year</li>
              <li>✔ SSL</li>
              <li>✔ Logo</li>
              <li>✔ Social Media Integration</li>
              <li>✔ Advanced Security Setup</li>
              <li>✔ Analytics</li>
              <li>✔ Newsletter</li>
              <li>✔ Abandoned Cart Recovery</li>
              <li>✔ Multi-location Inventory</li>
              <li>✔ Delivery In 3 Working Weeks</li>
            </ul>
            <div class="text-3xl font-bold text-indigo-600 mb-4">₹74,900</div>
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
