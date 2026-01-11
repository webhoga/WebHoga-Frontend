import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useScrollAnimate } from "~/hooks/useScrollAnimate";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export const head: DocumentHead = {
  title: "Hotel Reservation API Development - WebHoga | Hotelbeds Integration",
  meta: [
    {
      name: "description",
      content: "Professional hotel reservation API development with Hotelbeds integration. Build powerful booking applications with WebHoga's REST API solutions.",
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
      <section class="relative min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 overflow-hidden">
        {/* Animated Background Elements */}
        <div class="absolute inset-0 overflow-hidden">
          <div
            class="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            class="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-cyan-400/15 to-blue-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-300/10 to-teal-300/10 rounded-full blur-2xl animate-bounce"></div>
        </div>

        <div class="relative z-10 container mx-auto px-4 py-20">
          <div class="text-center max-w-4xl mx-auto min-h-[80vh] flex flex-col justify-center">

            {/* Main Headline */}
            <div class="space-y-6 mb-8 fade-in-up">
              <h1 class="text-5xl lg:text-7xl font-bold leading-tight">
                <span class="text-emerald-600">Hotel Reservation API</span>
                <br />
                <span class="text-teal-600">Power Your Booking</span>
                <br />
                <span class="text-emerald-600">Applications</span>
              </h1>
            </div>

            {/* Subheading */}
            <p class="text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-12 fade-in-up">
              Integrate <span class="text-emerald-600 font-semibold">Hotelbeds API</span> into your platform with
              <span class="text-teal-600 font-semibold"> professional development support</span> — we create
              <span class="text-emerald-600 font-semibold"> seamless API integrations</span> that drive bookings.
            </p>

            {/* Trust Indicators */}
            <div class="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-600 mb-12 fade-in-up">
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-emerald-500 rounded-full"></div>
                <span>RESTful API</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-teal-500 rounded-full"></div>
                <span>Real-Time Availability</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-cyan-500 rounded-full"></div>
                <span>Secure Integration</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Features Section */}
      <section class="relative py-20 bg-gradient-to-br from-slate-50 via-white to-emerald-50 overflow-hidden">
        {/* Background Elements */}
        <div class="absolute inset-0 overflow-hidden">
          <div
            class="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
          <div
            class="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tr from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
        </div>

        <div class="relative z-10 container mx-auto px-4">
          {/* Section Header */}
          <div class="text-center max-w-3xl mx-auto mb-16 fade-in-up">
            <div
              class="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg mb-6">
              <span class="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Enterprise-Grade API Solution
            </div>

            <h2 class="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              <span class="text-emerald-600">Complete API Package</span>
              <br />
              <span class="text-teal-600">Ready to Integrate</span>
            </h2>

            <p class="text-xl text-slate-600 leading-relaxed">
              Get <span class="text-emerald-600 font-semibold">Hotelbeds API access</span> with
              <span class="text-teal-600 font-semibold"> full technical implementation</span> and ongoing support.
            </p>
          </div>

          {/* Main API Package */}
          <div class="max-w-4xl mx-auto fade-in-up">
            <div
              class="group relative bg-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-500 border border-slate-100 overflow-hidden">
              <div
                class="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="relative z-10">

                {/* Badge */}
                <div
                  class="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <span class="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  Professional Integration
                </div>

                <h3 class="text-4xl font-bold text-slate-800 mb-6">Hotel Reservation API</h3>

                <p class="text-slate-600 mb-8 leading-relaxed text-lg">
                  Complete API solution with Hotelbeds integration, custom development, and technical support. Everything you need to power hotel reservations in your application.
                </p>

                <div class="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Core Features */}
                  <div>
                    <h4 class="text-xl font-bold text-slate-800 mb-4">Core Features</h4>
                    <div class="space-y-3">
                      <div class="flex items-start gap-3">
                        <div class="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 mt-0.5">✓</div>
                        <span class="text-slate-700">Full Hotelbeds API Access</span>
                      </div>
                      <div class="flex items-start gap-3">
                        <div class="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 mt-0.5">✓</div>
                        <span class="text-slate-700">Real-Time Hotel Availability</span>
                      </div>
                      <div class="flex items-start gap-3">
                        <div class="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 mt-0.5">✓</div>
                        <span class="text-slate-700">Booking Management System</span>
                      </div>
                      <div class="flex items-start gap-3">
                        <div class="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 mt-0.5">✓</div>
                        <span class="text-slate-700">Cancellation Handling</span>
                      </div>
                      <div class="flex items-start gap-3">
                        <div class="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 mt-0.5">✓</div>
                        <span class="text-slate-700">Payment Gateway Integration</span>
                      </div>
                    </div>
                  </div>

                  {/* Technical Features */}
                  <div>
                    <h4 class="text-xl font-bold text-slate-800 mb-4">Technical Support</h4>
                    <div class="space-y-3">
                      <div class="flex items-start gap-3">
                        <div class="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 mt-0.5">✓</div>
                        <span class="text-slate-700">Complete API Documentation</span>
                      </div>
                      <div class="flex items-start gap-3">
                        <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 mt-0.5">✓</div>
                        <span class="text-slate-700">Staging Environment Access</span>
                      </div>
                      <div class="flex items-start gap-3">
                        <div class="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 mt-0.5">✓</div>
                        <span class="text-slate-700">SSL Security Setup</span>
                      </div>
                      <div class="flex items-start gap-3">
                        <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 mt-0.5">✓</div>
                        <span class="text-slate-700">Email Notification System</span>
                      </div>
                      <div class="flex items-start gap-3">
                        <div class="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 mt-0.5">✓</div>
                        <span class="text-slate-700">Technical Support</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technical Specifications Alert */}
                <div class="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-xl mb-8">
                  <h4 class="text-lg font-bold text-amber-800 mb-3 flex items-center gap-2">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                    </svg>
                    Important Technical Notes
                  </h4>
                  <p class="text-amber-800 mb-3">
                    We provide the <strong>basic version of the Hotelbeds API</strong>, which includes essential features with standard rate limits.
                  </p>
                  <div class="grid md:grid-cols-2 gap-4 text-sm text-amber-900">
                    <div>
                      <div class="font-semibold mb-1">API Specifications:</div>
                      <ul class="space-y-1 ml-4">
                        <li>• Rate Limit: 4 requests per 8 seconds</li>
                        <li>• RESTful API with JSON format</li>
                        <li>• HTTPS secure connection</li>
                        <li>• SHA-256 authentication</li>
                      </ul>
                    </div>
                    <div>
                      <div class="font-semibold mb-1">Available Endpoints:</div>
                      <ul class="space-y-1 ml-4">
                        <li>• Hotel availability search</li>
                        <li>• Booking creation</li>
                        <li>• Booking cancellation</li>
                        <li>• Reservation management</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Pricing Section */}
                <div class="bg-gradient-to-r from-emerald-50 to-teal-50 p-8 rounded-2xl mb-6 border border-emerald-100">
                  <div class="text-center">
                    <div class="text-sm text-emerald-600 font-medium mb-2">One-Time Setup Fee</div>
                    <div class="text-5xl font-bold text-emerald-700 mb-2">₹49,100</div>
                    <div class="text-base text-slate-600 mb-4">Complete API Integration Package</div>
                    <div class="inline-block bg-white px-4 py-2 rounded-lg border border-emerald-200">
                      <div class="text-sm text-slate-600">Delivery Timeline</div>
                      <div class="text-lg font-bold text-emerald-700">4-6 Working Weeks</div>
                    </div>
                  </div>
                </div>

                {/* Annual Maintenance Note */}
                <div class="bg-slate-50 p-4 rounded-xl mb-8 border border-slate-200">
                  <p class="text-center text-sm text-slate-600">
                    <span class="font-semibold">Annual Maintenance:</span> ₹10,000/year (includes updates, support, and monitoring)
                  </p>
                </div>

                {/* CTA Button */}
                <a href="/pricing/hotel-reservation-api"
                   class="group/btn relative overflow-hidden bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-5 rounded-xl font-semibold text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 block text-center">
                  <span class="relative z-10 flex items-center justify-center gap-2">
                    View Complete Pricing Details
                    <svg class="w-6 h-6 group-hover/btn:translate-x-1 transition-transform" fill="none"
                         stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </span>
                  <div
                    class="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section class="relative py-20 bg-gradient-to-br from-slate-100 via-white to-emerald-50 overflow-hidden">
        <div class="container mx-auto px-4">
          <div class="text-center max-w-3xl mx-auto mb-16 fade-in-up">
            <h2 class="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              <span class="text-emerald-600">Ready to Integrate</span>
              <br />
              <span class="text-teal-600">Hotel Reservation API?</span>
            </h2>
            <p class="text-xl text-slate-600 leading-relaxed">
              Let our API integration specialists help you implement the perfect booking solution for your application.
            </p>
          </div>

          <div class="max-w-4xl mx-auto fade-in-up">
            <div class="bg-white rounded-3xl shadow-2xl p-8 border border-slate-100">
              <div class="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 class="text-3xl font-bold text-slate-800 mb-4">API Integration Consultation</h3>
                  <p class="text-slate-600 mb-6 leading-relaxed">
                    Schedule a 40-minute consultation with our technical team. We'll discuss your requirements and plan the perfect API integration strategy.
                  </p>
                  <div class="space-y-3">
                    <div class="flex items-center gap-3">
                      <div
                        class="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm">✓
                      </div>
                      <span class="text-slate-700">Technical requirements analysis</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <div
                        class="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm">✓
                      </div>
                      <span class="text-slate-700">Integration architecture planning</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <div
                        class="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm">✓
                      </div>
                      <span class="text-slate-700">Timeline and deliverables review</span>
                    </div>
                  </div>
                </div>
                <div class="text-center">
                  <div
                    class="w-32 h-32 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full flex items-center justify-center text-white text-4xl mx-auto mb-6">
                    
                  </div>
                  <a
                    href="https://bizassist.webhoga.com/business-consultation-2/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="group relative overflow-hidden bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 no-underline inline-block">
                    <span class="relative z-10 flex items-center gap-2">
                      Book Consultation
                      <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none"
                           stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </span>
                    <div
                      class="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
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
