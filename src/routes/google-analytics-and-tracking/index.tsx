import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useScrollAnimate } from "~/hooks/useScrollAnimate";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export const head: DocumentHead = {
  title: "Google Analytics & Tracking Setup Services - WebHoga | Data-Driven Growth",
  meta: [
    {
      name: "description",
      content: "Professional Google Analytics and tracking setup services. Monitor performance, track conversions, and optimize your website with data-driven insights starting from ₹4,999.",
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
      <section class="relative min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 overflow-hidden">
        {/* Animated Background Elements */}
        <div class="absolute inset-0 overflow-hidden">
          <div
            class="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            class="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-teal-400/15 to-green-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-300/10 to-green-300/10 rounded-full blur-2xl animate-bounce"></div>
        </div>

        <div class="relative z-10 container mx-auto px-4 py-20">
          <div class="text-center max-w-4xl mx-auto min-h-[80vh] flex flex-col justify-center">

            {/* Premium Badge */}
            <div
              class="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg mb-8 mt-12 fade-in-up">
              <span class="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Data Analytics Solutions
            </div>

            {/* Main Headline */}
            <div class="space-y-6 mb-8 fade-in-up">
              <h1 class="text-5xl lg:text-7xl font-bold leading-tight">
                <span class="text-green-600">Track, Analyze &</span>
                <br />
                <span class="text-orange-500">Optimize</span>
                <br />
                <span class="text-emerald-600">Performance</span>
              </h1>
            </div>

            {/* Subheading */}
            <p class="text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-12 fade-in-up">
              From <span class="text-green-600 font-semibold">Google Analytics setup</span> to
              <span class="text-emerald-600 font-semibold"> conversion tracking</span> — we implement
              <span class="text-teal-600 font-semibold"> data-driven solutions</span> that drive growth.
            </p>

            {/* Trust Indicators */}
            <div class="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-600 mb-12 fade-in-up">
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>150+ Analytics Setups</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-emerald-500 rounded-full"></div>
                <span>Real-Time Tracking</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-teal-500 rounded-full"></div>
                <span>Custom Dashboards</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section class="relative py-20 bg-gradient-to-br from-slate-50 via-white to-green-50 overflow-hidden">
        {/* Background Elements */}
        <div class="absolute inset-0 overflow-hidden">
          <div
            class="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-full blur-3xl"></div>
          <div
            class="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tr from-teal-400/10 to-green-400/10 rounded-full blur-3xl"></div>
        </div>

        <div class="relative z-10 container mx-auto px-4">
          {/* Section Header */}
          <div class="text-center max-w-3xl mx-auto mb-16 fade-in-up">
            <div
              class="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-green-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg mb-6">
              <span class="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Choose Your Analytics Service
            </div>

            <h2 class="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              <span class="text-green-600">Professional Analytics &</span>
              <br />
              <span class="text-orange-500">Tracking Services</span>
            </h2>

            <p class="text-xl text-slate-600 leading-relaxed">
              Comprehensive <span class="text-green-600 font-semibold">analytics setup</span> that
              <span class="text-emerald-600 font-semibold"> tracks performance and drives optimization</span>.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto fade-in-up">

            {/* Google Analytics Setup */}
            <div
              class="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border border-slate-100 overflow-hidden">
              <div
                class="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="relative z-10">
                {/* Icon */}
                <div
                  class="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto">
                  📊
                </div>

                {/* Badge */}
                <div
                  class="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-4 mx-auto">
                  <span class="w-2 h-2 bg-green-500 rounded-full"></span>
                  Most Popular
                </div>

                <h3 class="text-2xl font-bold text-slate-800 mb-4 text-center">Google Analytics Setup</h3>

                <p class="text-slate-600 mb-6 leading-relaxed text-center">
                  Complete Google Analytics 4 setup with goal tracking, audience insights, and custom reports.
                </p>

                {/* Features */}
                <div class="space-y-3 mb-6">
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span class="text-slate-700">GA4 installation & configuration</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span class="text-slate-700">Goal & conversion tracking</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span class="text-slate-700">Custom dashboard setup</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span class="text-slate-700">Search Console integration</span>
                  </div>
                </div>

                {/* Starting Price */}
                <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl mb-6 border border-green-100">
                  <div class="text-center">
                    <div class="text-sm text-green-600 font-medium">Starting from</div>
                    <div class="text-3xl font-bold text-green-700 mb-1">₹8,999</div>
                    <div class="text-sm text-slate-600">Complete analytics setup</div>
                  </div>
                </div>

                {/* CTA Button */}
                <a href="/pricing/google-analytics-and-tracking"
                   class="group/btn relative overflow-hidden bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 block text-center">
                  <span class="relative z-10 flex items-center justify-center gap-2">
                    📊 View Analytics Pricing
                    <svg class="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none"
                         stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </span>
                  <div
                    class="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                </a>
              </div>
            </div>

            {/* Advanced Tracking */}
            <div
              class="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border border-slate-100 overflow-hidden">
              <div
                class="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="relative z-10">
                {/* Icon */}
                <div
                  class="w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-3xl flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto">
                  🎯
                </div>

                {/* Badge */}
                <div
                  class="inline-flex items-center gap-2 bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium mb-4 mx-auto">
                  <span class="w-2 h-2 bg-teal-500 rounded-full"></span>
                  Advanced
                </div>

                <h3 class="text-2xl font-bold text-slate-800 mb-4 text-center">Advanced Tracking Setup</h3>

                <p class="text-slate-600 mb-6 leading-relaxed text-center">
                  Comprehensive tracking with Facebook Pixel, Google Ads, and custom event monitoring.
                </p>

                {/* Features */}
                <div class="space-y-3 mb-6">
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <span class="text-slate-700">Facebook Pixel installation</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span class="text-slate-700">Google Ads conversion tracking</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <span class="text-slate-700">Custom event tracking</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span class="text-slate-700">Tag Manager implementation</span>
                  </div>
                </div>

                {/* Starting Price */}
                <div class="bg-gradient-to-r from-teal-50 to-cyan-50 p-4 rounded-xl mb-6 border border-teal-100">
                  <div class="text-center">
                    <div class="text-sm text-teal-600 font-medium">Starting from</div>
                    <div class="text-3xl font-bold text-teal-700 mb-1">₹14,999</div>
                    <div class="text-sm text-slate-600">Advanced tracking setup</div>
                  </div>
                </div>

                {/* CTA Button */}
                <a href="/contact"
                   class="group/btn relative overflow-hidden bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 block text-center">
                  <span class="relative z-10 flex items-center justify-center gap-2">
                    🎯 View Tracking Pricing
                    <svg class="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none"
                         stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </span>
                  <div
                    class="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section class="relative py-20 bg-gradient-to-br from-white via-slate-50 to-green-50 overflow-hidden">
        <div class="container mx-auto px-4">
          <div class="text-center max-w-3xl mx-auto mb-16 fade-in-up">
            <h2 class="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              <span class="text-green-600">Why Choose Our</span>
              <br />
              <span class="text-orange-500">Analytics Services?</span>
            </h2>
            <p class="text-xl text-slate-600 leading-relaxed">
              We don't just install tracking codes — we create comprehensive analytics systems that provide actionable insights.
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto fade-in-up">
            {/* Feature 1 */}
            <div class="text-center p-6">
              <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4">
                📈
              </div>
              <h3 class="text-xl font-bold text-slate-800 mb-3">Real-Time Insights</h3>
              <p class="text-slate-600">Monitor your website performance, user behavior, and conversions in real-time with custom dashboards.</p>
            </div>

            {/* Feature 2 */}
            <div class="text-center p-6">
              <div class="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4">
                🎯
              </div>
              <h3 class="text-xl font-bold text-slate-800 mb-3">Goal Tracking</h3>
              <p class="text-slate-600">Track important business goals, conversions, and ROI with precise measurement and reporting.</p>
            </div>

            {/* Feature 3 */}
            <div class="text-center p-6">
              <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4">
                🔍
              </div>
              <h3 class="text-xl font-bold text-slate-800 mb-3">Custom Reports</h3>
              <p class="text-slate-600">Get customized analytics reports that focus on metrics that matter most to your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Tools Section */}
      <section class="relative py-20 bg-gradient-to-br from-slate-100 via-white to-green-50 overflow-hidden">
        <div class="container mx-auto px-4">
          <div class="text-center max-w-3xl mx-auto mb-16 fade-in-up">
            <h2 class="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              <span class="text-green-600">Analytics Tools</span>
              <br />
              <span class="text-orange-500">We Work With</span>
            </h2>
            <p class="text-xl text-slate-600 leading-relaxed">
              Comprehensive tracking solutions using industry-leading analytics and marketing platforms.
            </p>
          </div>

          <div class="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto fade-in-up">
            {/* Google Analytics */}
            <div class="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div class="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white text-xl mx-auto mb-4">
                📊
              </div>
              <h4 class="font-bold text-slate-800 mb-2">Google Analytics</h4>
              <p class="text-sm text-slate-600">GA4 & Universal Analytics</p>
            </div>

            {/* Google Tag Manager */}
            <div class="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center text-white text-xl mx-auto mb-4">
                🏷️
              </div>
              <h4 class="font-bold text-slate-800 mb-2">Tag Manager</h4>
              <p class="text-sm text-slate-600">Advanced tag management</p>
            </div>

            {/* Facebook Pixel */}
            <div class="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white text-xl mx-auto mb-4">
                📘
              </div>
              <h4 class="font-bold text-slate-800 mb-2">Facebook Pixel</h4>
              <p class="text-sm text-slate-600">Social media tracking</p>
            </div>

            {/* Google Ads */}
            <div class="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white text-xl mx-auto mb-4">
                🎯
              </div>
              <h4 class="font-bold text-slate-800 mb-2">Google Ads</h4>
              <p class="text-sm text-slate-600">Conversion tracking</p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section class="relative py-20 bg-gradient-to-br from-slate-100 via-white to-green-50 overflow-hidden">
        <div class="container mx-auto px-4">
          <div class="text-center max-w-3xl mx-auto mb-16 fade-in-up">
            <h2 class="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              <span class="text-green-600">Ready to Track Your</span>
              <br />
              <span class="text-orange-500">Website Performance?</span>
            </h2>
            <p class="text-xl text-slate-600 leading-relaxed">
              Let our analytics experts help you set up comprehensive tracking that provides actionable insights for growth.
            </p>
          </div>

          <div class="max-w-4xl mx-auto fade-in-up">
            <div class="bg-white rounded-3xl shadow-2xl p-8 border border-slate-100">
              <div class="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 class="text-3xl font-bold text-slate-800 mb-4">Analytics Audit</h3>
                  <p class="text-slate-600 mb-6 leading-relaxed">
                    Get a comprehensive audit of your current analytics setup. We'll identify gaps and provide recommendations.
                  </p>
                  <div class="space-y-3">
                    <div class="flex items-center gap-3">
                      <div
                        class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✓
                      </div>
                      <span class="text-slate-700">Current tracking assessment</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <div
                        class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✓
                      </div>
                      <span class="text-slate-700">Custom analytics strategy</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <div
                        class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✓
                      </div>
                      <span class="text-slate-700">Implementation roadmap</span>
                    </div>
                  </div>
                </div>
                <div class="text-center">
                  <div
                    class="w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center text-white text-4xl mx-auto mb-6">
                    📊
                  </div>
                  <a
                    href="https://bizassist.webhoga.com/business-consultation-2/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 no-underline inline-block">
                    <span class="relative z-10 flex items-center gap-2">
                      📞 Book Consultation
                      <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none"
                           stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </span>
                    <div
                      class="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
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
