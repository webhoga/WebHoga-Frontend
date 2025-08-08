import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useScrollAnimate } from "~/hooks/useScrollAnimate";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export const head: DocumentHead = {
  title: "Web Designing Services - WebHoga | Custom & WordPress Development",
  meta: [
    {
      name: "description",
      content: "Professional web designing services including custom-coded websites and WordPress development. Transform your online presence with WebHoga's premium web design services.",
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
      <section class="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        {/* Animated Background Elements */}
        <div class="absolute inset-0 overflow-hidden">
          <div
            class="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            class="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-purple-400/15 to-violet-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-300/10 to-blue-300/10 rounded-full blur-2xl animate-bounce"></div>
        </div>

        <div class="relative z-10 container mx-auto px-4 py-20">
          <div class="text-center max-w-4xl mx-auto min-h-[80vh] flex flex-col justify-center">

            {/* Main Headline */}
            <div class="space-y-6 mb-8 fade-in-up">
              <h1 class="text-5xl lg:text-7xl font-bold leading-tight">
                <span class="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">
                  Web Designing
                </span>
                <br />
                <span class="text-slate-800">
                  That Converts
                </span>
                <br />
                <span class="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                  & Captivates
                </span>
              </h1>
            </div>

            {/* Subheading */}
            <p class="text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-12 fade-in-up">
              From <span class="text-blue-600 font-semibold">custom-coded masterpieces</span> to
              <span class="text-purple-600 font-semibold"> WordPress solutions</span> — we create
              <span class="text-green-600 font-semibold"> stunning websites</span> that drive real results.
            </p>

            {/* Trust Indicators */}
            <div class="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-600 mb-12 fade-in-up">
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>500+ Websites Designed</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>48hr Quick Delivery</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span>99% Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section class="relative py-20 bg-gradient-to-br from-slate-50 via-white to-cyan-50 overflow-hidden">
        {/* Background Elements */}
        <div class="absolute inset-0 overflow-hidden">
          <div
            class="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
          <div
            class="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tr from-purple-400/10 to-violet-400/10 rounded-full blur-3xl"></div>
        </div>

        <div class="relative z-10 container mx-auto px-4">
          {/* Section Header */}
          <div class="text-center max-w-3xl mx-auto mb-16 fade-in-up">
            <div
              class="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-violet-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg mb-6">
              <span class="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Choose Your Perfect Solution
            </div>

            <h2 class="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              <span class="text-slate-800">Two Powerful Ways to</span>
              <br />
              <span class="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">
                Build Your Website
              </span>
            </h2>

            <p class="text-xl text-slate-600 leading-relaxed">
              Whether you need a <span class="text-blue-600 font-semibold">custom-coded solution</span> or
              <span class="text-purple-600 font-semibold"> WordPress flexibility</span> — we've got you covered.
            </p>
          </div>

          {/* Services Grid */}
          <div class="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto fade-in-up">

            {/* Custom Coded Websites */}
            <div
              class="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border border-slate-100 overflow-hidden">
              <div
                class="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="relative z-10">
                {/* Icon */}
                <div
                  class="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  ⚡
                </div>

                {/* Badge */}
                <div
                  class="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Most Flexible
                </div>

                <h3 class="text-3xl font-bold text-slate-800 mb-6">Custom Coded Websites</h3>

                <p class="text-slate-600 mb-8 leading-relaxed text-lg">
                  Bespoke websites built from scratch with cutting-edge technology. Perfect for unique business
                  requirements and maximum performance.
                </p>

                {/* Features */}
                <div class="space-y-4 mb-8">
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span class="text-slate-700">Lightning-fast loading speeds</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span class="text-slate-700">100% custom functionality</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span class="text-slate-700">Advanced SEO optimization</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span class="text-slate-700">Scalable architecture</span>
                  </div>
                </div>

                {/* Starting Price */}
                <div class="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl mb-6 border border-blue-100">
                  <div class="text-center">
                    <div class="text-sm text-blue-600 font-medium">Starting from</div>
                    <div class="text-3xl font-bold text-blue-700">₹35,000</div>
                    <div class="text-sm text-slate-600">Complete custom solution</div>
                  </div>
                </div>

                {/* CTA Button */}
                <a href="/pricing/custom-apps"
                   class="group/btn relative overflow-hidden bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 block text-center">
                  <span class="relative z-10 flex items-center justify-center gap-2">
                    💼 View Pricing
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

            {/* WordPress Development */}
            <div
              class="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border border-slate-100 overflow-hidden">
              <div
                class="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="relative z-10">
                {/* Icon */}
                <div
                  class="w-20 h-20 bg-gradient-to-br from-purple-500 to-violet-500 rounded-3xl flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  📝
                </div>

                {/* Badge */}
                <div
                  class="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-violet-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <span class="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Most Popular
                </div>

                <h3 class="text-3xl font-bold text-slate-800 mb-6">WordPress Development</h3>

                <p class="text-slate-600 mb-8 leading-relaxed text-lg">
                  Professional WordPress websites with custom themes and plugins. Easy to manage with powerful content
                  management capabilities.
                </p>

                {/* Features */}
                <div class="space-y-4 mb-8">
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span class="text-slate-700">Custom theme development</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-violet-500 rounded-full"></div>
                    <span class="text-slate-700">Easy content management</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span class="text-slate-700">Plugin integration</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-violet-500 rounded-full"></div>
                    <span class="text-slate-700">SEO-friendly structure</span>
                  </div>
                </div>

                {/* Starting Price */}
                <div class="bg-gradient-to-r from-purple-50 to-violet-50 p-4 rounded-xl mb-6 border border-purple-100">
                  <div class="text-center">
                    <div class="text-sm text-purple-600 font-medium">Starting from</div>
                    <div class="text-3xl font-bold text-purple-700">₹8,799</div>
                    <div class="text-sm text-slate-600">Complete WordPress solution</div>
                  </div>
                </div>

                {/* CTA Button */}
                <a href="/pricing/wordpress"
                   class="group/btn relative overflow-hidden bg-gradient-to-r from-purple-500 to-violet-500 text-white px-6 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 block text-center">
                  <span class="relative z-10 flex items-center justify-center gap-2">
                    💎 View Pricing
                    <svg class="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none"
                         stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </span>
                  <div
                    class="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-500 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section class="relative py-20 bg-gradient-to-br from-slate-100 via-white to-blue-50 overflow-hidden">
        <div class="container mx-auto px-4">
          <div class="text-center max-w-3xl mx-auto mb-16 fade-in-up">
            <h2 class="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              <span class="text-slate-800">Not Sure Which</span>
              <br />
              <span class="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 bg-clip-text text-transparent">
                Solution is Right?
              </span>
            </h2>
            <p class="text-xl text-slate-600 leading-relaxed">
              Let our experts help you choose the perfect web solution for your business needs and budget.
            </p>
          </div>

          <div class="max-w-4xl mx-auto fade-in-up">
            <div class="bg-white rounded-3xl shadow-2xl p-8 border border-slate-100">
              <div class="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 class="text-3xl font-bold text-slate-800 mb-4">Web Design Consultation</h3>
                  <p class="text-slate-600 mb-6 leading-relaxed">
                    Schedule a 40-minute consultation with our web design experts. We'll analyze your requirements
                    and recommend the best solution.
                  </p>
                  <div class="space-y-3">
                    <div class="flex items-center gap-3">
                      <div
                        class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✓
                      </div>
                      <span class="text-slate-700">Detailed requirement analysis</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <div
                        class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✓
                      </div>
                      <span class="text-slate-700">Technology recommendation</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <div
                        class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✓
                      </div>
                      <span class="text-slate-700">Custom quote and timeline</span>
                    </div>
                  </div>
                </div>
                <div class="text-center">
                  <div
                    class="w-32 h-32 bg-gradient-to-br from-orange-400 to-amber-400 rounded-full flex items-center justify-center text-white text-4xl mx-auto mb-6">
                    💬
                  </div>
                  <a
                    href="https://bizassist.webhoga.com/business-consultation-2/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 no-underline inline-block">
                    <span class="relative z-10 flex items-center gap-2">
                      📞 Book Consultation
                      <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
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

      < Footer />
    </>
  );
});