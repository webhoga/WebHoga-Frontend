import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useScrollAnimate } from "~/hooks/useScrollAnimate";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export const head: DocumentHead = {
  title: "Landing Page Development Services - WebHoga | High-Converting Web Pages",
  meta: [
    {
      name: "description",
      content: "Professional landing page development services that convert visitors into customers. Custom responsive designs starting from ₹8,999 with WebHoga.",
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
      <section class="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden">
        {/* Animated Background Elements */}
        <div class="absolute inset-0 overflow-hidden">
          <div
            class="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            class="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-indigo-400/15 to-blue-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-300/10 to-blue-300/10 rounded-full blur-2xl animate-bounce"></div>
        </div>

        <div class="relative z-10 container mx-auto px-4 py-20">
          <div class="text-center max-w-4xl mx-auto min-h-[80vh] flex flex-col justify-center">

            {/* Premium Badge */}
            <div
              class="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg mb-8 mt-12 fade-in-up">
              <span class="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Professional Development Solutions
            </div>

            {/* Main Headline */}
            <div class="space-y-6 mb-8 fade-in-up">
              <h1 class="text-5xl lg:text-7xl font-bold leading-tight">
                <span class="text-blue-600">Landing Pages That</span>
                <br />
                <span class="text-orange-500">Convert &</span>
                <br />
                <span class="text-cyan-600">Captivate</span>
              </h1>
            </div>

            {/* Subheading */}
            <p class="text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-12 fade-in-up">
              From <span class="text-blue-600 font-semibold">high-converting landing pages</span> to
              <span class="text-cyan-600 font-semibold"> responsive web experiences</span> — we develop
              <span class="text-indigo-600 font-semibold"> digital solutions</span> that drive results.
            </p>

            {/* Trust Indicators */}
            <div class="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-600 mb-12 fade-in-up">
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>200+ Pages Delivered</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-cyan-500 rounded-full"></div>
                <span>Mobile-First Development</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-indigo-500 rounded-full"></div>
                <span>SEO Optimized Code</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section class="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
        {/* Background Elements */}
        <div class="absolute inset-0 overflow-hidden">
          <div
            class="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
          <div
            class="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tr from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
        </div>

        <div class="relative z-10 container mx-auto px-4">
          {/* Section Header */}
          <div class="text-center max-w-3xl mx-auto mb-16 fade-in-up">
            <div
              class="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg mb-6">
              <span class="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Choose Your Development Service
            </div>

            <h2 class="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              <span class="text-blue-600">Professional Landing Page</span>
              <br />
              <span class="text-orange-500">Development Service</span>
            </h2>

            <p class="text-xl text-slate-600 leading-relaxed">
              High-converting, mobile-first <span class="text-blue-600 font-semibold">landing pages</span> that
              <span class="text-cyan-600 font-semibold"> capture leads and drive conversions</span>.
            </p>
          </div>

          {/* Service Card */}
          <div class="max-w-2xl mx-auto fade-in-up">

            {/* Landing Page Development */}
            <div
              class="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border border-slate-100 overflow-hidden">
              <div
                class="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="relative z-10">
                {/* Icon */}
                <div
                  class="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto">
                  📱
                </div>

                {/* Badge */}
                <div
                  class="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-4 mx-auto">
                  <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Fast & Responsive
                </div>

                <h3 class="text-3xl font-bold text-slate-800 mb-6 text-center">Landing Page Development</h3>

                <p class="text-slate-600 mb-8 leading-relaxed text-lg text-center">
                  High-converting, mobile-first landing pages that capture leads and drive conversions. Optimized for speed, SEO, and user experience.
                </p>

                {/* Features */}
                <div class="grid md:grid-cols-2 gap-4 mb-8">
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span class="text-slate-700">Responsive design (mobile-first)</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span class="text-slate-700">SEO optimized code</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span class="text-slate-700">Fast loading (90+ PageSpeed)</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span class="text-slate-700">Contact forms & integrations</span>
                  </div>
                </div>

                {/* Starting Price */}
                <div class="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl mb-8 border border-blue-100">
                  <div class="text-center">
                    <div class="text-sm text-blue-600 font-medium">Starting from</div>
                    <div class="text-4xl font-bold text-blue-700 mb-2">₹8,999</div>
                    <div class="text-sm text-slate-600">Professional landing page development</div>
                  </div>
                </div>

                {/* CTA Button */}
                <a href="/pricing/landing-page"
                   class="group/btn relative overflow-hidden bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 block text-center">
                  <span class="relative z-10 flex items-center justify-center gap-2">
                    💻 View Development Pricing
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

      {/* Features Section */}
      <section class="relative py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50 overflow-hidden">
        <div class="container mx-auto px-4">
          <div class="text-center max-w-3xl mx-auto mb-16 fade-in-up">
            <h2 class="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              <span class="text-blue-600">Why Choose Our</span>
              <br />
              <span class="text-orange-500">Development Services?</span>
            </h2>
            <p class="text-xl text-slate-600 leading-relaxed">
              We don't just build websites — we create digital experiences that convert visitors into customers.
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto fade-in-up">
            {/* Feature 1 */}
            <div class="text-center p-6">
              <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4">
                ⚡
              </div>
              <h3 class="text-xl font-bold text-slate-800 mb-3">Lightning Fast</h3>
              <p class="text-slate-600">Optimized for speed with 90+ PageSpeed scores, ensuring your visitors stay engaged.</p>
            </div>

            {/* Feature 2 */}
            <div class="text-center p-6">
              <div class="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4">
                📱
              </div>
              <h3 class="text-xl font-bold text-slate-800 mb-3">Mobile First</h3>
              <p class="text-slate-600">Responsive designs that look perfect on all devices, from phones to desktops.</p>
            </div>

            {/* Feature 3 */}
            <div class="text-center p-6">
              <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4">
                🎯
              </div>
              <h3 class="text-xl font-bold text-slate-800 mb-3">Conversion Focused</h3>
              <p class="text-slate-600">Built with conversion optimization in mind to turn visitors into customers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section class="relative py-20 bg-gradient-to-br from-slate-100 via-white to-blue-50 overflow-hidden">
        <div class="container mx-auto px-4">
          <div class="text-center max-w-3xl mx-auto mb-16 fade-in-up">
            <h2 class="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              <span class="text-blue-600">Ready to Launch Your</span>
              <br />
              <span class="text-orange-500">High-Converting Website?</span>
            </h2>
            <p class="text-xl text-slate-600 leading-relaxed">
              Let our development experts help you create a website that not only looks great but drives real business results.
            </p>
          </div>

          <div class="max-w-4xl mx-auto fade-in-up">
            <div class="bg-white rounded-3xl shadow-2xl p-8 border border-slate-100">
              <div class="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 class="text-3xl font-bold text-slate-800 mb-4">Landing Page Development Consultation</h3>
                  <p class="text-slate-600 mb-6 leading-relaxed">
                    Schedule a 40-minute consultation with our development team. We'll discuss your requirements and provide a custom solution.
                  </p>
                  <div class="space-y-3">
                    <div class="flex items-center gap-3">
                      <div
                        class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">✓
                      </div>
                      <span class="text-slate-700">Technical requirements analysis</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <div
                        class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">✓
                      </div>
                      <span class="text-slate-700">Custom development roadmap</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <div
                        class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">✓
                      </div>
                      <span class="text-slate-700">Timeline & budget estimation</span>
                    </div>
                  </div>
                </div>
                <div class="text-center">
                  <div
                    class="w-32 h-32 bg-gradient-to-br from-orange-400 to-red-400 rounded-full flex items-center justify-center text-white text-4xl mx-auto mb-6">
                    🚀
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