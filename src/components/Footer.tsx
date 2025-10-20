import { component$ } from "@builder.io/qwik";
import WebHogaFooterLogo from "./WebHoga Footer Logo.png";

export default component$(() => {
  return (
    <footer class="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Main Footer Content */}
      <div class="container mx-auto px-4 py-16">
        <div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div class="lg:col-span-1">
            <div class="mb-6 flex items-center gap-3">
              <img
                src={WebHogaFooterLogo}
                alt="WebHoga Logo"
                width="120"
                height="48"
                onError$={(e) => {
                  console.error('Footer logo failed to load:', e);
                }}
              />
            </div>
            <p class="mb-6 leading-relaxed text-slate-300">
              Innovative web solutions designed to elevate your business online.
            </p>
            <p class="mb-6 text-sm text-slate-400">
              Crafted in India, Loved Globally
            </p>

            {/* Contact Info */}
            <div class="space-y-3">
              <div class="text-sm">
                <span class="text-slate-400">For Assistance & Support:</span>
              </div>
              <div class="flex items-center gap-2 text-sm">
                <span class="text-slate-400">Phone Number:</span>
                <span class="text-orange-400">+91 9061156535</span>
              </div>
              <div class="flex items-center gap-2 text-sm">
                <span class="text-slate-400">WhatsApp Number:</span>
                <span class="text-orange-400">+91 9061156535</span>
              </div>
              <div class="flex items-center gap-2 text-sm">
                <span class="text-slate-400">Email:</span>
                <span class="text-orange-400">contact@webhoga.com</span>
              </div>
              <div class="flex items-center gap-2 text-sm">
                <span class="text-slate-400">Support Ticket:</span>
                <span class="text-orange-400">support.webhoga.com</span>
              </div>
            </div>

            {/* Support Channels */}
            <div class="mt-6 space-y-2">
              <div class="text-sm text-slate-400">Support Channels:</div>
              <div class="text-sm">
                <span class="text-slate-400">Skype ID: </span>
                <span class="text-orange-400">webhoga</span>
              </div>
              <div class="text-sm">
                <span class="text-slate-400">Support Email: </span>
                <span class="text-orange-400">help@support.webhoga.com</span>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 class="mb-6 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-xl font-bold text-transparent">
              Resources
            </h3>
            <div class="space-y-4">
              <a href="https://blog.webhoga.com/" class="block text-slate-300 transition-colors hover:text-orange-400">Blog</a>
              <a href="/contact" class="block text-slate-300 transition-colors hover:text-orange-400">Contact</a>
              <a href="/careers" class="block text-slate-300 transition-colors hover:text-orange-400">Careers</a>
              <a href="/terms-and-conditions" class="block text-slate-300 transition-colors hover:text-orange-400">Terms of Use</a>
              <a href="/privacy-policy" class="block text-slate-300 transition-colors hover:text-orange-400">Privacy Policy</a>
              <a href="/refund-policy" class="block text-slate-300 transition-colors hover:text-orange-400">Refund Policy</a>
              <a href="/bizassist" class="block font-medium text-emerald-400 transition-colors hover:text-emerald-300">BizAssist</a>
            </div>
          </div>

          {/* Products Section */}
          <div>
            <h3 class="mb-6 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-xl font-bold text-transparent">
              Products
            </h3>
            <div class="space-y-4">
              <a href="/seo-and-web-optimization" class="block text-slate-300 transition-colors hover:text-orange-400">SEO & Web Optimization</a>
              <a href="/web-designing" class="block text-slate-300 transition-colors hover:text-orange-400">Website Designing</a>
              <a href="/logo-and-brand-identity" class="block text-slate-300 transition-colors hover:text-orange-400">Logo & Brand Identity</a>
              <a href="/landing-page-development" class="block text-slate-300 transition-colors hover:text-orange-400">Landing Page Design</a>
              <a href="/content-and-blog-writing" class="block text-slate-300 transition-colors hover:text-orange-400">Content & Blog Writing</a>
              <a href="/google-analytics-and-tracking" class="block text-slate-300 transition-colors hover:text-orange-400">Google Analytics</a>
              <a href="/ecommerce-web-designing" class="block text-slate-300 transition-colors hover:text-orange-400">eCommerce Design</a>
              <a href="/domain-and-hosting" class="block text-slate-300 transition-colors hover:text-orange-400">Domain & Hosting</a>
              <a href="/payment-gateway-integration" class="block text-slate-300 transition-colors hover:text-orange-400">Payment Gateway Integration</a>
              <a href="/hotel-booking-engine" class="block text-slate-300 transition-colors hover:text-orange-400">Hotel Booking Engine</a>
              <a href="/hotel-reservation-api" class="block text-slate-300 transition-colors hover:text-orange-400">Hotel Reservation API</a>
              <a href="/white-label-travel-portal" class="block text-slate-300 transition-colors hover:text-orange-400">White Label Travel Portal</a>
            </div>
          </div>

          {/* Payment & Security Section */}
          <div>
            <h3 class="mb-6 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-xl font-bold text-transparent">
              We Accept All Major Bank Cards for Fast and Easy Payment
            </h3>

            {/* Payment Cards */}
            <div class="mb-6 grid grid-cols-3 gap-3">
              <div class="flex items-center justify-center rounded-lg bg-white p-2">
                <span class="text-xs font-bold text-blue-600">VISA</span>
              </div>
              <div class="flex items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-red-500 p-2">
                <span class="text-xs font-bold text-white">Mastercard</span>
              </div>
              <div class="flex items-center justify-center rounded-lg bg-blue-600 p-2">
                <span class="text-xs font-bold text-white">PayPal</span>
              </div>
              <div class="flex items-center justify-center rounded-lg bg-blue-700 p-2">
                <span class="text-xs font-bold text-white">AMEX</span>
              </div>
              <div class="flex items-center justify-center rounded-lg bg-slate-700 p-2">
                <span class="text-xs font-bold text-white">RuPay</span>
              </div>
              <div class="flex items-center justify-center rounded-lg bg-red-600 p-2">
                <span class="text-xs font-bold text-white">UPI</span>
              </div>
            </div>

            {/* Powered By */}
            <div class="mb-6">
              <div class="mb-2 text-sm font-medium text-slate-300">Powered By</div>
              <div class="flex items-center justify-center rounded-lg bg-white p-3">
                <span class="font-bold text-green-600">Cashfree Payments</span>
              </div>
              <div class="mt-2 flex items-center justify-center rounded-lg bg-blue-600 p-3">
                <span class="font-bold text-white">Razorpay</span>
              </div>
            </div>

            {/* Security Badges */}
            <div class="mb-6 grid grid-cols-2 gap-3">
              <div class="rounded-lg bg-orange-500 p-2 text-center">
                <div class="text-xs font-bold text-white">🔒 SECURE</div>
                <div class="text-xs text-white">SSL Encrypted</div>
              </div>
              <div class="rounded-lg bg-blue-600 p-2 text-center">
                                <div class="text-xs font-bold text-white">✓</div>
                <div class="text-xs text-white">Let's Encrypt</div>
              </div>
            </div>

            {/* GSTIN */}
            <div class="text-sm">
              <span class="text-slate-400">GSTIN Number:</span>
              <div class="font-mono text-orange-400">32GOTPS2983P1ZP</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div class="border-t border-slate-700">
        <div class="container mx-auto px-4 py-6">
          <div class="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div class="text-sm text-slate-400">
              © 2025 WebHoga Digital Services
            </div>
            <div class="flex items-center gap-4">
              {/* YouTube */}
              <a
                href="https://www.youtube.com/@WebHoga"
                class="text-slate-400 transition-colors hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/people/WebHoga/61576908121524/"
                class="text-slate-400 transition-colors hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Pinterest */}
              <a
                href="https://in.pinterest.com/webhogaindia/"
                class="text-slate-400 transition-colors hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.135-1.507-.703-2.448-2.909-2.448-4.68 0-3.123 2.498-8.766 8.998-8.766C17.92 2.587 21.17 6.024 21.17 10.532c0 5.405-3.409 9.747-8.148 9.747-1.587 0-3.081-.828-3.593-1.814l-.978 3.726c-.353 1.372-1.31 3.086-1.95 4.144 1.462.213 2.99.32 4.546.32 6.624 0 11.99-5.367 11.99-11.99C24.007 5.367 18.641.001 12.017.001z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});
