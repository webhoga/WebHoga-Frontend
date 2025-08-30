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
        <h1 class="text-5xl font-bold text-gray-900">Shopify Store Pricing</h1>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Launch and scale your eCommerce business with our Shopify development packages—crafted for performance, usability, and conversion.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Shopify Basic Starter Plan */}
          <div class="bg-gradient-to-br from-orange-50 to-yellow-100 p-8 rounded-3xl shadow-xl text-left">
            <h3 class="text-2xl font-bold mb-4 text-gray-800">Basic Starter</h3>
            <p class="text-gray-600 mb-4">Get started with a beautiful online store for your brand.</p>
            <ul class="space-y-2 text-sm text-gray-700 mb-6">
              <li>✔ One-Page Website</li>
              <li>✔ World-Class Checkout</li>
              <li>✔ Limited Products</li>
              <li>✔ Domain 1 Year</li>
              <li>✔ Hosting 1 Year</li>
              <li>✔ SSL</li>
              <li>✘ Logo</li>
              <li>✔ Instagram Integration</li>
              <li>✔ Monetization</li>
              <li>✔ Analytics</li>
              <li>✔ Bio Link Creation</li>
              <li>✔ Order Management</li>
              <li>✔ WhatsApp Integration</li>
              <li>✔ Delivery in 1 Working Week</li>
            </ul>
            <div class="text-3xl font-bold text-orange-600 mb-4">₹15,999</div>
            <button
              onClick$={() => nav("/contact")}
              class="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition-all"
            >
              Get Started
            </button>
          </div>

          {/* Shopify Essentials Plan */}
          <div class="bg-gradient-to-br from-blue-50 to-cyan-100 p-8 rounded-3xl shadow-xl text-left">
            <h3 class="text-2xl font-bold mb-4 text-gray-800">Essentials</h3>
            <p class="text-gray-600 mb-4">Ideal for growing businesses that need customization.</p>
            <ul class="space-y-2 text-sm text-gray-700 mb-6">
              <li>✔ 3-5 Page Website</li>
              <li>✔ World-Class Checkout</li>
              <li>✔ Unlimited Products</li>
              <li>✔ Domain 1 Year</li>
              <li>✔ Hosting 1 Year</li>
              <li>✔ SSL</li>
              <li>✔ Logo</li>
              <li>✔ Social Media Integration</li>
              <li>✔ Security Setup</li>
              <li>✔ Analytics</li>
              <li>✔ Newsletter</li>
              <li>✔ Abandoned Checkout Recovery</li>
              <li>✔ 10 Inventory Locations</li>
              <li>✔ Delivery In 2 Working Weeks</li>
            </ul>
            <div class="text-3xl font-bold text-cyan-700 mb-4">₹29,749</div>
            <button
              onClick$={() => nav("/contact")}
              class="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-xl font-semibold transition-all"
            >
              Get Started
            </button>
          </div>

          {/* Scale-Up Plan */}
          <div class="bg-gradient-to-br from-purple-50 to-indigo-100 p-8 rounded-3xl shadow-xl text-left">
            <h3 class="text-2xl font-bold mb-4 text-gray-800">Scale-Up</h3>
            <p class="text-gray-600 mb-4">Complete eCommerce setup for enterprise-level stores.</p>
            <ul class="space-y-2 text-sm text-gray-700 mb-6">
              <li>✔ 6-10 Page Website</li>
              <li>✔ World-Class Checkout</li>
              <li>✔ Unlimited Products</li>
              <li>✔ Domain 1 Year</li>
              <li>✔ Hosting 1 Year</li>
              <li>✔ SSL</li>
              <li>✔ Logo</li>
              <li>✔ Social Media Integration</li>
              <li>✔ Security Setup</li>
              <li>✔ Analytics</li>
              <li>✔ Newsletter</li>
              <li>✔ Abandoned Checkout Recovery</li>
              <li>✔ 5 Staff Accounts</li>
              <li>✔ Delivery In 3 Working Weeks</li>
            </ul>
            <div class="text-3xl font-bold text-indigo-600 mb-4">₹89,999</div>
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
