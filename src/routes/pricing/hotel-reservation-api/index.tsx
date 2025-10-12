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

      <div class="max-w-4xl mx-auto text-center space-y-10">
        <h1 class="text-5xl font-bold text-gray-900">Hotel Reservation API Pricing</h1>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Integrate powerful hotel booking functionality into your application with our comprehensive API solution—designed for reliability, scalability, and seamless integration.
        </p>

        {/* Centered pricing plan + note */}
        <div class="flex flex-col items-center mt-12 space-y-4">
          {/* Pricing plan */}
          <div class="bg-gradient-to-br from-emerald-50 to-teal-100 p-10 rounded-3xl shadow-2xl text-left max-w-md w-full">
            <h3 class="text-3xl font-bold mb-4 text-gray-800">Complete API Package</h3>
            <p class="text-gray-600 mb-6">Everything you need to power hotel reservations in your app.</p>
            <ul class="space-y-3 text-sm text-gray-700 mb-8">
              <li>✔ Full API Access</li>
              <li>✔ Real-Time Availability</li>
              <li>✔ Booking Management</li>
              <li>✔ Payment Gateway Integration</li>
              <li>✔ Reservation Analytics</li>
              <li>✔ Email Notifications</li>
              <li>✔ API Documentation</li>
              <li>✔ Technical Support</li>
              <li>✔ SSL Security</li>
              <li>✔ Delivery in 4-6 Working Weeks</li>
            </ul>
            <div class="text-4xl font-bold text-emerald-600 mb-6">49,999</div>
            <button
              onClick$={() => nav("/contact")}
              class="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-semibold transition-all text-lg"
            >
              Get Started
            </button>
          </div>

          {/* Note */}
          <p class="max-w-md text-center text-sm italic text-gray-500 px-4">
            Note: The above mentioned price is the one-time setup fee, annual maintenance charge of INR 20,000 applies every year.
          </p>
        </div>
      </div>
    </section>
  );
});
