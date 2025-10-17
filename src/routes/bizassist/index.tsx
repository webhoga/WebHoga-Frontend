import { component$ } from '@builder.io/qwik';
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <Header />

      <section class="relative pt-32 pb-20 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 overflow-hidden">
        {/* Background Elements */}
        <div class="absolute inset-0 overflow-hidden">
          <div
            class="absolute top-10 right-10 w-80 h-80 bg-gradient-to-br from-emerald-400/10 to-green-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            class="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-tr from-teal-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Geometric Pattern Overlay */}
        <div class="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" viewBox="0 0 100 100">
            <defs>
              <pattern id="bizassist-pattern" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
                <circle cx="7.5" cy="7.5" r="1.5" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#bizassist-pattern)" />
          </svg>
        </div>

        <div class="relative z-10 container mx-auto px-4">
          <div class="max-w-6xl mx-auto">

            {/* Section Header */}
            <div class="text-center mb-16 fade-in-up">
              <div
                class="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg mb-6">
                <span class="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                Business Solutions Division
              </div>

              <h2 class="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                <span class="text-slate-800">Empowering Small Businesses with</span>
                <br />
                <span class="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent">
                  BizAssist
                </span>
                <span class="text-slate-600"> – Powered by WebHoga</span>
              </h2>

              <p class="text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
                Your trusted partner for <span
                class="text-emerald-600 font-semibold">hassle-free business setup</span> and
                <span class="text-teal-600 font-semibold"> comprehensive SME solutions</span>
              </p>
            </div>

            <div class="grid lg:grid-cols-2 gap-12 items-center">

              {/* Left Content */}
              <div class="space-y-8 fade-in-up">
                <div class="space-y-6">
                  <p class="text-lg text-slate-700 leading-relaxed">
                    <strong class="text-emerald-600">BizAssist</strong>, a specialized division of WebHoga, is dedicated
                    to empowering small businesses and SMEs with
                    <span class="text-teal-600 font-semibold"> affordable, end-to-end business solutions</span>. Whether
                    you're launching your first venture or optimizing existing operations, we eliminate the complexity of
                    business setup and management.
                  </p>

                  <p class="text-lg text-slate-700 leading-relaxed">
                    From <span class="text-emerald-600 font-semibold">GST registration and UDYAM certification</span> to
                    business current account opening and strategic consultation, we transform complicated processes into
                    <span class="text-teal-600 font-semibold"> seamless, stress-free experiences</span>.
                  </p>

                  <div class="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-100">
                    <h3 class="text-xl font-bold text-emerald-800 mb-3 flex items-center gap-2">
                      <span class="text-2xl">🎯</span>
                      Our Fully Managed Approach
                    </h3>
                    <p class="text-slate-700 leading-relaxed">
                      For entrepreneurs who want to focus purely on business growth, BizAssist offers a
                      <span class="text-emerald-600 font-semibold"> completely hands-off service</span>.
                      No need to navigate complex regulations or handle paperwork – we manage everything so you can
                      concentrate on what matters most: building your business.
                    </p>
                  </div>

                  <p class="text-lg text-slate-700 leading-relaxed">
                    With BizAssist handling all formalities, businesses can
                    <span class="text-teal-600 font-semibold"> launch faster, operate efficiently, and maintain compliance effortlessly</span>.
                    It's the smart, reliable pathway to building your business with complete confidence and clarity.
                  </p>
                </div>

                {/* Key Benefits */}
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div class="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-emerald-100">
                    <div
                      class="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center text-white">
                      ⚡
                    </div>
                    <div>
                      <div class="font-semibold text-slate-800">Faster Launch</div>
                      <div class="text-sm text-slate-600">Quick business setup</div>
                    </div>
                  </div>

                  <div class="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-teal-100">
                    <div
                      class="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-white">
                      🛡️
                    </div>
                    <div>
                      <div class="font-semibold text-slate-800">Stay Compliant</div>
                      <div class="text-sm text-slate-600">Zero compliance worries</div>
                    </div>
                  </div>

                  <div class="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-emerald-100">
                    <div
                      class="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white">
                      💼
                    </div>
                    <div>
                      <div class="font-semibold text-slate-800">Focus on Growth</div>
                      <div class="text-sm text-slate-600">We handle the paperwork</div>
                    </div>
                  </div>

                  <div class="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-teal-100">
                    <div
                      class="w-10 h-10 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center text-white">
                      🎯
                    </div>
                    <div>
                      <div class="font-semibold text-slate-800">Expert Guidance</div>
                      <div class="text-sm text-slate-600">Professional consultation</div>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div class="flex flex-col sm:flex-row gap-4 pt-4">
                  <a
                    href="https://bizassist.webhoga.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="group relative overflow-hidden bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 no-underline">
                    <span class="relative z-10 flex items-center gap-2">
                      Start Your Business Journey
                      <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </span>
                    <div
                      class="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </a>
                  <a
                    href="https://bizassist.webhoga.com/business-consultation-2/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="group relative overflow-hidden bg-white border-2 border-emerald-500 text-emerald-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-emerald-500 hover:text-white transform hover:-translate-y-1 transition-all duration-300 shadow-lg no-underline">
                    <span class="flex items-center gap-2">
                      Get Consultation
                    </span>
                  </a>
                </div>
              </div>

              {/* Right Visual */}
              <div class="relative fade-in-up">
                <div class="relative z-10">
                  <div class="bg-white rounded-3xl shadow-2xl p-8 border border-emerald-100">

                    {/* Services Grid */}
                    <div class="space-y-6">
                      <div class="text-center mb-8">
                        <h3 class="text-2xl font-bold text-slate-800 mb-2">BizAssist Services</h3>
                        <p class="text-slate-600">Everything you need to start & grow your business</p>
                      </div>

                      <div class="grid grid-cols-2 gap-4">
                        <div
                          class="bg-gradient-to-br from-emerald-50 to-green-50 p-4 rounded-lg border border-emerald-100">
                          <div class="text-center">
                            <div class="text-2xl mb-2">📋</div>
                            <div class="font-semibold text-sm text-slate-800">GST Registration</div>
                            <div class="text-xs text-slate-600">Complete setup</div>
                          </div>
                        </div>

                        <div class="bg-gradient-to-br from-teal-50 to-cyan-50 p-4 rounded-lg border border-teal-100">
                          <div class="text-center">
                            <div class="text-2xl mb-2">🏭</div>
                            <div class="font-semibold text-sm text-slate-800">UDYAM Registration</div>
                            <div class="text-xs text-slate-600">MSME certification</div>
                          </div>
                        </div>

                        <div
                          class="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg border border-green-100">
                          <div class="text-center">
                            <div class="text-2xl mb-2">🏦</div>
                            <div class="font-semibold text-sm text-slate-800">Current Account</div>
                            <div class="text-xs text-slate-600">Business banking</div>
                          </div>
                        </div>

                        <div class="bg-gradient-to-br from-cyan-50 to-teal-50 p-4 rounded-lg border border-cyan-100">
                          <div class="text-center">
                            <div class="text-2xl mb-2">💡</div>
                            <div class="font-semibold text-sm text-slate-800">Expert Consultation</div>
                            <div class="text-xs text-slate-600">Strategic guidance</div>
                          </div>
                        </div>
                      </div>

                      {/* Process Flow */}
                      <div class="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-100">
                        <h4 class="font-bold text-emerald-800 mb-4 text-center">Our Simple Process</h4>
                        <div class="space-y-3">
                          <div class="flex items-center gap-3">
                            <div
                              class="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-bold">1
                            </div>
                            <div class="text-sm text-slate-700">Submit your requirements</div>
                          </div>
                          <div class="flex items-center gap-3">
                            <div
                              class="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white text-sm font-bold">2
                            </div>
                            <div class="text-sm text-slate-700">We handle all paperwork</div>
                          </div>
                          <div class="flex items-center gap-3">
                            <div
                              class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">3
                            </div>
                            <div class="text-sm text-slate-700">Your business is ready!</div>
                          </div>
                        </div>
                      </div>

                      {/* Trust Indicators */}
                      <div class="text-center border-t border-slate-200 pt-6">
                        <div class="flex items-center justify-center gap-6 text-sm text-slate-600">
                          <div class="flex items-center gap-2">
                            <div class="w-3 h-3 bg-emerald-500 rounded-full"></div>
                            <span>50+ Businesses Setup</span>
                          </div>
                          <div class="flex items-center gap-2">
                            <div class="w-3 h-3 bg-teal-500 rounded-full"></div>
                            <span>100% Compliance</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div
                  class="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-emerald-400 to-green-400 rounded-full flex items-center justify-center text-white text-2xl animate-bounce shadow-lg">
                  📈
                </div>
                <div
                  class="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full flex items-center justify-center text-white text-xl animate-pulse shadow-lg">
                  🎯
                </div>

                {/* Background Decorative Elements */}
                <div
                  class="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-emerald-300/30 to-green-300/30 rounded-full blur-xl"></div>
                <div
                  class="absolute -bottom-8 -left-8 w-28 h-28 bg-gradient-to-br from-teal-300/30 to-cyan-300/30 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
});


export const head: DocumentHead = {
  title: 'BizAssist – Business Setup & SME Solutions by WebHoga',
  meta: [
    {
      name: 'description',
      content:
        'BizAssist by WebHoga offers end-to-end SME solutions – GST, UDYAM, Current Account setup, and expert consultation. Hassle-free, fully managed business services.',
    },
    {
      name: 'keywords',
      content:
        'BizAssist, Business setup, GST registration, UDYAM, SME solutions, Business current account, WebHoga, MSME support, Startup consultation',
    },
    {
      property: 'og:title',
      content: 'BizAssist – Hassle-Free Business Setup | WebHoga',
    },
    {
      property: 'og:description',
      content:
        'BizAssist by WebHoga empowers small businesses with expert-led services: GST, UDYAM registration, banking, and more. Get started today!',
    },
    {
      property: 'og:image',
      content: 'https://bizassist.webhoga.com/og-image.jpg',
    },
    {
      property: 'og:url',
      content: 'https://bizassist.webhoga.com/',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
  ],
  scripts: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "BizAssist by WebHoga",
        "url": "https://bizassist.webhoga.com",
        "logo": "https://bizassist.webhoga.com/logo.png",
        "sameAs": [],
        "description":
          "BizAssist provides affordable and comprehensive business setup services for SMEs and startups.",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-9061156535",
          "contactType": "Customer Service",
          "areaServed": "IN",
          "availableLanguage": ["English"]
        }
      }),
    } as any,
  ],
};
