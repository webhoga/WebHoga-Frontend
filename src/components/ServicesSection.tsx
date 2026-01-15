import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div>
      {/* Services Section */}
      <section
        id="services"
        class="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20"
      >
        {/* Background Elements */}
        <div class="absolute inset-0 overflow-hidden">
          <div class="absolute top-20 left-20 h-64 w-64 rounded-full bg-gradient-to-br from-blue-400/10 to-cyan-400/10 blur-3xl"></div>
          <div class="absolute right-20 bottom-20 h-80 w-80 rounded-full bg-gradient-to-tr from-orange-400/10 to-amber-400/10 blur-3xl"></div>
        </div>

        <div class="relative z-10 container mx-auto px-4">
          {/* Section Header */}
          <div class="fade-in-up mx-auto mb-16 max-w-3xl text-center">
            <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2 text-sm font-medium text-white shadow-lg">
              <span class="h-2 w-2 animate-pulse rounded-full bg-white"></span>
              Our Expert Services
            </div>

            <h2 class="mb-6 text-4xl leading-tight font-bold lg:text-5xl">
              <span class="text-slate-800">Everything You Need to</span>
              <br />
              <span class="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 bg-clip-text text-transparent">
                Dominate Online
              </span>
            </h2>

            <p class="text-xl leading-relaxed text-slate-600">
              From stunning web designs to powerful SEO strategies, we provide
              <span class="font-semibold text-blue-600">
                {" "}
                end-to-end digital solutions{" "}
              </span>
              that drive real business growth.
            </p>
          </div>

          {/* Services Grid */}
          <div class="fade-in-up grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Web Designing */}
            <div class="group relative transform overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div class="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div class="relative z-10">
                <h3 class="mb-4 text-2xl font-bold text-slate-800">
                  Web Designing
                </h3>
                <p class="mb-6 leading-relaxed text-slate-600">
                  Custom, responsive websites that captivate visitors and
                  convert them into customers. Modern designs that work
                  perfectly on all devices.
                </p>
                <div class="flex items-center font-semibold text-blue-600 transition-all group-hover:gap-3">
                  <span>
                    <a href="/web-designing">Learn More</a>
                  </span>
                  <svg
                    class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Domain + Hosting */}
            <div class="group relative transform overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div class="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div class="relative z-10">
                <h3 class="mb-4 text-2xl font-bold text-slate-800">
                  Domain + Hosting
                </h3>
                <p class="mb-6 leading-relaxed text-slate-600">
                  Secure, fast hosting solutions with free SSL certificates. We
                  handle domain registration and management so you can focus on
                  your business.
                </p>
                <div class="flex items-center font-semibold text-green-600 transition-all group-hover:gap-3">
                  <span>
                    <a href="/domain-and-hosting">Learn More</a>
                  </span>
                  <svg
                    class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Logo & Brand Identity */}
            <div class="group relative transform overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div class="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-violet-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div class="relative z-10">
                <h3 class="mb-4 text-2xl font-bold text-slate-800">
                  Logo & Brand Identity
                </h3>
                <p class="mb-6 leading-relaxed text-slate-600">
                  Memorable brand identities that stand out from the
                  competition. Professional logos and complete brand guidelines
                  for consistent growth.
                </p>
                <div class="flex items-center font-semibold text-purple-600 transition-all group-hover:gap-3">
                  <span>
                    <a href="/logo-and-brand-identity">Learn More</a>
                  </span>
                  <svg
                    class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* SEO & Web Optimization */}
            <div class="group relative transform overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div class="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div class="relative z-10">
                <h3 class="mb-4 text-2xl font-bold text-slate-800">
                  SEO & Web Optimization
                </h3>
                <p class="mb-6 leading-relaxed text-slate-600">
                  Get found on Google with our proven SEO strategies.
                  Lightning-fast websites that rank higher and convert better
                  than your competitors.
                </p>
                <div class="flex items-center font-semibold text-orange-600 transition-all group-hover:gap-3">
                  <span>
                    <a href="/seo-and-web-optimization">Learn More</a>
                  </span>
                  <svg
                    class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Content & Blog Writing */}
            <div class="group relative transform overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div class="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-rose-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div class="relative z-10">
                <h3 class="mb-4 text-2xl font-bold text-slate-800">
                  Content & Blog Writing
                </h3>
                <p class="mb-6 leading-relaxed text-slate-600">
                  Engaging, SEO-optimized content that attracts your ideal
                  customers. Professional blog posts and website copy that
                  drives conversions.
                </p>
                <div class="flex items-center font-semibold text-pink-600 transition-all group-hover:gap-3">
                  <span>
                    <a href="/content-and-blog-writing">Learn More</a>
                  </span>
                  <svg
                    class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Ecommerce Web Designing */}
            <div class="group relative transform overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-blue-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div class="relative z-10">
                <h3 class="mb-4 text-2xl font-bold text-slate-800">
                  Ecommerce Web Designing
                </h3>
                <p class="mb-6 leading-relaxed text-slate-600">
                  High-converting online stores that maximize sales.
                  User-friendly shopping experiences with secure checkout and
                  inventory management.
                </p>
                <div class="flex items-center font-semibold text-indigo-600 transition-all group-hover:gap-3">
                  <span>
                    <a href="/ecommerce-web-designing">Learn More</a>
                  </span>
                  <svg
                    class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Google Analytics & Tracking */}
            <div class="group relative transform overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div class="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div class="relative z-10">
                <h3 class="mb-4 text-2xl font-bold text-slate-800">
                  Google Analytics & Tracking
                </h3>
                <p class="mb-6 leading-relaxed text-slate-600">
                  Data-driven insights to grow your business. Complete analytics
                  setup with detailed reporting and performance tracking.
                </p>
                <div class="flex items-center font-semibold text-teal-600 transition-all group-hover:gap-3">
                  <span>
                    <a href="/google-analytics-and-tracking/">Learn More</a>
                  </span>
                  <svg
                    class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Landing Page Design */}
            <div class="group relative transform overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div class="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div class="relative z-10">
                <h3 class="mb-4 text-2xl font-bold text-slate-800">
                  Landing Page Design
                </h3>
                <p class="mb-6 leading-relaxed text-slate-600">
                  High-converting landing pages that turn visitors into
                  customers. Optimized for maximum conversions and lead
                  generation.
                </p>
                <div class="flex items-center font-semibold text-yellow-600 transition-all group-hover:gap-3">
                  <span>
                    <a href="/landing-page-development">Learn More</a>
                  </span>
                  <svg
                    class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Payment Gateway Integration */}
            <div class="group relative transform overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div class="absolute inset-0 bg-gradient-to-br from-red-500/5 to-pink-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div class="relative z-10">
                <h3 class="mb-4 text-2xl font-bold text-slate-800">
                  Payment Gateway Integration
                </h3>
                <p class="mb-6 leading-relaxed text-slate-600">
                  Secure payment processing for your online business. Multiple
                  payment options with fraud protection and seamless checkout
                  experience.
                </p>
                <div class="flex items-center font-semibold text-red-600 transition-all group-hover:gap-3">
                  <span>
                    <a href="/payment-gateway-integration">Learn More</a>
                  </span>
                  <svg
                    class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Hotel Booking Engine */}
            <div class="group relative transform overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div class="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-blue-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div class="relative z-10">
                <h3 class="mb-4 text-2xl font-bold text-slate-800">
                  Hotel Booking Engine
                </h3>
                <p class="mb-6 leading-relaxed text-slate-600">
                  Complete hotel booking solutions with real-time availability, 
                  instant confirmations, and seamless payment integration for your 
                  hospitality business.
                </p>
                <div class="flex items-center font-semibold text-sky-600 transition-all group-hover:gap-3">
                  <span>
                    <a href="/hotel-booking-engine">Learn More</a>
                  </span>
                  <svg
                    class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Hotel Reservation API */}
            <div class="group relative transform overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div class="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div class="relative z-10">
                <h3 class="mb-4 text-2xl font-bold text-slate-800">
                  Hotel Reservation API
                </h3>
                <p class="mb-6 leading-relaxed text-slate-600">
                  Powerful API integration connecting your platform to global hotel 
                  inventory. Access millions of properties with competitive rates and 
                  instant booking capabilities.
                </p>
                <div class="flex items-center font-semibold text-violet-600 transition-all group-hover:gap-3">
                  <span>
                    <a href="/hotel-reservation-api">Learn More</a>
                  </span>
                  <svg
                    class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* White-Label Travel Portal Development */}
            <div class="group relative transform overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div class="relative z-10">
                <h3 class="mb-4 text-2xl font-bold text-slate-800">
                  White-Label Travel Portal
                </h3>
                <p class="mb-6 leading-relaxed text-slate-600">
                  Launch your own branded travel portal with complete booking 
                  solutions for flights, hotels, and packages. Fully customizable 
                  platform ready for your business.
                </p>
                <div class="flex items-center font-semibold text-emerald-600 transition-all group-hover:gap-3">
                  <span>
                    <a href="/white-label-travel-portal-development">Learn More</a>
                  </span>
                  <svg
                    class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});
