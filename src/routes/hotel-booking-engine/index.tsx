import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useScrollAnimate } from "~/hooks/useScrollAnimate";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export const head: DocumentHead = {
  title: "Hotel Booking Engine Development - WebHoga | Zoho Sites & Drupal Solutions",
  meta: [
    {
      name: "description",
      content: "Professional hotel booking engine development with integrated reservation systems. Build your hotel website with WebHoga's Zoho Sites and Drupal booking solutions.",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ],
  links: [
    {
      rel: "stylesheet",
      href: "https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700&f[]=inter@400,500,600&display=swap",
    },
  ],
};

export default component$(() => {
  useScrollAnimate('.fade-in-up');

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section class="relative min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 overflow-hidden">
        {/* Animated Background Elements */}
        <div class="absolute inset-0 overflow-hidden">
          <div
            class="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-orange-400/20 to-amber-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            class="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-blue-400/15 to-cyan-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-orange-300/10 to-yellow-300/10 rounded-full blur-2xl animate-bounce"></div>
        </div>

        <div class="relative z-10 container mx-auto px-4 py-20">
          <div class="text-center max-w-4xl mx-auto min-h-[80vh] flex flex-col justify-center">

            {/* Main Headline */}
            <div class="space-y-6 mb-8 fade-in-up">
              <h1 class="text-5xl lg:text-7xl font-bold leading-tight">
                <span class="text-orange-600">Hotel Booking Systems</span>
                <br />
                <span class="text-blue-600">That Drive</span>
                <br />
                <span class="text-orange-600">Reservations & Revenue</span>
              </h1>
            </div>

            {/* Subheading */}
            <p class="text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-12 fade-in-up">
              From <span class="text-orange-600 font-semibold">quick-launch Zoho Sites</span> to
              <span class="text-blue-600 font-semibold"> powerful Drupal platforms</span> — we create
              <span class="text-orange-600 font-semibold"> seamless booking experiences</span> that maximize your occupancy.
            </p>

            {/* Trust Indicators */}
            <div class="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-600 mb-12 fade-in-up">
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span>50+ Hotels Powered</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-amber-500 rounded-full"></div>
                <span>Secure Booking Engine</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>24/7 Reservation System</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section class="relative py-20 bg-gradient-to-br from-slate-50 via-white to-orange-50 overflow-hidden">
        {/* Background Elements */}
        <div class="absolute inset-0 overflow-hidden">
          <div
            class="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-orange-400/10 to-amber-400/10 rounded-full blur-3xl"></div>
          <div
            class="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tr from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
        </div>

        <div class="relative z-10 container mx-auto px-4">
          {/* Section Header */}
          <div class="text-center max-w-3xl mx-auto mb-16 fade-in-up">
            <div
              class="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg mb-6">
              <span class="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Choose Your Hotel Booking Platform
            </div>

            <h2 class="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              <span class="text-orange-600">Two Powerful Platforms to</span>
              <br />
              <span class="text-blue-600">Launch Your Hotel Booking Site</span>
            </h2>

            <p class="text-xl text-slate-600 leading-relaxed">
              Whether you need <span class="text-orange-600 font-semibold">Zoho Sites' simplicity</span> or
              <span class="text-blue-600 font-semibold"> Drupal's advanced features</span> — we build booking systems that convert.
            </p>
          </div>

          {/* Services Grid */}
          <div class="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto fade-in-up">

            {/* Zoho Sites Hotel Express */}
            <div
              class="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border border-slate-100 overflow-hidden">
              <div
                class="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="relative z-10">

                {/* Badge */}
                <div
                  class="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <span class="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Quick to Launch
                </div>

                <h3 class="text-3xl font-bold text-slate-800 mb-6">Zoho Sites Hotel Express</h3>

                <p class="text-slate-600 mb-8 leading-relaxed text-lg">
                  Perfect for small hotels and guesthouses starting their online booking journey. Get online fast with an easy-to-manage booking system.
                </p>

                {/* Features */}
                <div class="space-y-4 mb-8">
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span class="text-slate-700">Zoho Sites customization</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span class="text-slate-700">Room listings & booking forms</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span class="text-slate-700">200 photo gallery</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span class="text-slate-700">1 year hosting & domain</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span class="text-slate-700">Mobile-friendly design</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span class="text-slate-700">Security & firewall protection</span>
                  </div>
                </div>

                {/* Starting Price */}
                <div class="bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-xl mb-6 border border-orange-100">
                  <div class="text-center">
                    <div class="text-sm text-orange-600 font-medium">Complete Package</div>
                    <div class="text-3xl font-bold text-orange-700">₹75,000</div>
                    <div class="text-sm text-slate-600">All-inclusive hotel booking site</div>
                  </div>
                </div>

                {/* CTA Button */}
                <a href="/pricing/hotel-booking-engine"
                   class="group/btn relative overflow-hidden bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 block text-center">
                  <span class="relative z-10 flex items-center justify-center gap-2">
                    View Full Details
                    <svg class="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none"
                         stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </span>
                  <div
                    class="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                </a>
              </div>
            </div>

            {/* Drupal Hotel Pro */}
            <div
              class="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border border-slate-100 overflow-hidden">
              <div
                class="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="relative z-10">

                {/* Badge */}
                <div
                  class="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Enterprise Solution
                </div>

                <h3 class="text-3xl font-bold text-slate-800 mb-6">Drupal Hotel Pro</h3>

                <p class="text-slate-600 mb-8 leading-relaxed text-lg">
                  Advanced solution for hotels requiring comprehensive booking management and custom features. Complete control and unlimited possibilities.
                </p>

                {/* Features */}
                <div class="space-y-4 mb-8">
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span class="text-slate-700">Custom Drupal development</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span class="text-slate-700">Integrated booking engine</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span class="text-slate-700">Room management system</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span class="text-slate-700">Advanced SEO optimization</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span class="text-slate-700">Full CMS capabilities</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span class="text-slate-700">Custom user access levels</span>
                  </div>
                </div>

                {/* Starting Price */}
                <div class="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl mb-6 border border-blue-100">
                  <div class="text-center">
                    <div class="text-sm text-blue-600 font-medium">Complete Package</div>
                    <div class="text-3xl font-bold text-blue-700">₹1,23,000</div>
                    <div class="text-sm text-slate-600">Enterprise booking platform</div>
                  </div>
                </div>

                {/* CTA Button */}
                <a href="/pricing/hotel-booking-engine"
                   class="group/btn relative overflow-hidden bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 block text-center">
                  <span class="relative z-10 flex items-center justify-center gap-2">
                    View Full Details
                    <svg class="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none"
                         stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </span>
                  <div
                    class="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section class="relative py-20 bg-gradient-to-br from-slate-100 via-white to-orange-50 overflow-hidden">
        <div class="container mx-auto px-4">
          <div class="text-center max-w-3xl mx-auto mb-16 fade-in-up">
            <h2 class="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              <span class="text-orange-600">Not Sure Which Platform</span>
              <br />
              <span class="text-blue-600">Fits Your Hotel?</span>
            </h2>
            <p class="text-xl text-slate-600 leading-relaxed">
              Let our hotel technology experts help you choose the perfect booking system for your property and guest experience goals.
            </p>
          </div>

          <div class="max-w-4xl mx-auto fade-in-up">
            <div class="bg-white rounded-3xl shadow-2xl p-8 border border-slate-100">
              <div class="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 class="text-3xl font-bold text-slate-800 mb-4">Hotel Tech Consultation</h3>
                  <p class="text-slate-600 mb-6 leading-relaxed">
                    Schedule a 40-minute consultation with our hospitality technology specialists. We'll analyze your property needs and recommend the best booking solution.
                  </p>
                  <div class="space-y-3">
                    <div class="flex items-center gap-3">
                      <div
                        class="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm">✓
                      </div>
                      <span class="text-slate-700">Property requirements analysis</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <div
                        class="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm">✓
                      </div>
                      <span class="text-slate-700">Platform recommendation</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <div
                        class="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm">✓
                      </div>
                      <span class="text-slate-700">Booking optimization strategy</span>
                    </div>
                  </div>
                </div>
                <div class="text-center">
                  <a
                    href="https://bizassist.webhoga.com/business-consultation-2/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 no-underline inline-block">
                    <span class="relative z-10 flex items-center gap-2">
                      Book Consultation
                      <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none"
                           stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </span>
                    <div
                      class="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
});
