import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useScrollAnimate } from "~/hooks/useScrollAnimate";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export const head: DocumentHead = {
  title: "Payment Gateway Integration Services - WebHoga | Secure Payment Solutions",
  meta: [
    {
      name: "description",
      content: "Professional payment gateway integration services. Secure Razorpay, Stripe, PayPal integrations with seamless checkout experiences starting from ₹6,999.",
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
      <section class="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
        {/* Animated Background Elements */}
        <div class="absolute inset-0 overflow-hidden">
          <div
            class="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            class="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-purple-400/15 to-blue-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-300/10 to-blue-300/10 rounded-full blur-2xl animate-bounce"></div>
        </div>

        <div class="relative z-10 container mx-auto px-4 py-20">
          <div class="text-center max-w-4xl mx-auto min-h-[80vh] flex flex-col justify-center">

            {/* Premium Badge */}
            <div
              class="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg mb-8 mt-12 fade-in-up">
              <span class="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Payment Integration Solutions
            </div>

            {/* Main Headline */}
            <div class="space-y-6 mb-8 fade-in-up">
              <h1 class="text-5xl lg:text-7xl font-bold leading-tight">
                <span class="text-blue-600">Secure, Fast &</span>
                <br />
                <span class="text-orange-500">Seamless</span>
                <br />
                <span class="text-indigo-600">Payments</span>
              </h1>
            </div>

            {/* Subheading */}
            <p class="text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-12 fade-in-up">
              From <span class="text-blue-600 font-semibold">Razorpay integration</span> to
              <span class="text-indigo-600 font-semibold"> Stripe checkout</span> — we implement
              <span class="text-purple-600 font-semibold"> secure payment solutions</span> that convert.
            </p>

            {/* Trust Indicators */}
            <div class="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-600 mb-12 fade-in-up">
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>200+ Payment Integrations</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-indigo-500 rounded-full"></div>
                <span>PCI DSS Compliant</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span>Multi-Gateway Support</span>
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
            class="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
          <div
            class="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tr from-purple-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
        </div>

        <div class="relative z-10 container mx-auto px-4">
          {/* Section Header */}
          <div class="text-center max-w-3xl mx-auto mb-16 fade-in-up">
            <div
              class="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg mb-6">
              <span class="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Choose Your Payment Service
            </div>

            <h2 class="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              <span class="text-blue-600">Professional Payment &</span>
              <br />
              <span class="text-orange-500">Gateway Services</span>
            </h2>

            <p class="text-xl text-slate-600 leading-relaxed">
              Comprehensive <span class="text-blue-600 font-semibold">payment integration</span> that
              <span class="text-indigo-600 font-semibold"> ensures secure transactions and smooth checkout</span>.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto fade-in-up">

            {/* Standard Payment Integration */}
            <div
              class="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border border-slate-100 overflow-hidden">
              <div
                class="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="relative z-10">

                {/* Badge */}
                <div
                  class="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-4 mx-auto">
                  <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Most Popular
                </div>

                <h3 class="text-2xl font-bold text-slate-800 mb-4 text-center">Standard Payment Integration</h3>

                <p class="text-slate-600 mb-6 leading-relaxed text-center">
                  Complete payment gateway setup with Razorpay, Stripe, or PayPal integration and secure checkout.
                </p>

                {/* Features */}
                <div class="space-y-3 mb-6">
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span class="text-slate-700">Single gateway integration</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    <span class="text-slate-700">Secure checkout form</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span class="text-slate-700">Payment success/failure handling</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    <span class="text-slate-700">Basic webhook integration</span>
                  </div>
                </div>

                {/* Starting Price */}
                <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl mb-6 border border-blue-100">
                  <div class="text-center">
                    <div class="text-sm text-blue-600 font-medium">Starting from</div>
                    <div class="text-3xl font-bold text-blue-700 mb-1">₹6,999</div>
                    <div class="text-sm text-slate-600">Complete payment setup</div>
                  </div>
                </div>

                {/* CTA Button */}
                <a href="/contact"
                   class="group/btn relative overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 block text-center">
                  <span class="relative z-10 flex items-center justify-center gap-2">
                    View Payment Pricing
                    <svg class="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none"
                         stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </span>
                  <div
                    class="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                </a>
              </div>
            </div>

            {/* Advanced Payment Solutions */}
            <div
              class="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border border-slate-100 overflow-hidden">
              <div
                class="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="relative z-10">

                {/* Badge */}
                <div
                  class="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium mb-4 mx-auto">
                  <span class="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Enterprise
                </div>

                <h3 class="text-2xl font-bold text-slate-800 mb-4 text-center">Advanced Payment Solutions</h3>

                <p class="text-slate-600 mb-6 leading-relaxed text-center">
                  Multi-gateway setup with subscription billing, recurring payments, and advanced fraud protection.
                </p>

                {/* Features */}
                <div class="space-y-3 mb-6">
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span class="text-slate-700">Multiple gateway support</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span class="text-slate-700">Subscription & recurring billing</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span class="text-slate-700">Advanced webhook handling</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span class="text-slate-700">Payment analytics dashboard</span>
                  </div>
                </div>

                {/* Starting Price */}
                <div class="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl mb-6 border border-purple-100">
                  <div class="text-center">
                    <div class="text-sm text-purple-600 font-medium">Starting from</div>
                    <div class="text-3xl font-bold text-purple-700 mb-1">₹12,999</div>
                    <div class="text-sm text-slate-600">Advanced payment setup</div>
                  </div>
                </div>

                {/* CTA Button */}
                <a href="/contact"
                   class="group/btn relative overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 block text-center">
                  <span class="relative z-10 flex items-center justify-center gap-2">
                    View Enterprise Pricing
                    <svg class="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none"
                         stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </span>
                  <div
                    class="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
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
              <span class="text-orange-500">Payment Services?</span>
            </h2>
            <p class="text-xl text-slate-600 leading-relaxed">
              We don't just integrate payment gateways — we create secure, optimized payment experiences that boost conversions.
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto fade-in-up">
            {/* Feature 1 */}
            <div class="text-center p-6">
              <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4">
                🔒
              </div>
              <h3 class="text-xl font-bold text-slate-800 mb-3">Bank-Level Security</h3>
              <p class="text-slate-600">PCI DSS compliant integrations with advanced fraud protection and secure data handling.</p>
            </div>

            {/* Feature 2 */}
            <div class="text-center p-6">
              <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4">
                ⚡
              </div>
              <h3 class="text-xl font-bold text-slate-800 mb-3">Lightning Fast</h3>
              <p class="text-slate-600">Optimized checkout flows that reduce cart abandonment and increase conversion rates.</p>
            </div>

            {/* Feature 3 */}
            <div class="text-center p-6">
              <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4">
                🌍
              </div>
              <h3 class="text-xl font-bold text-slate-800 mb-3">Global Support</h3>
              <p class="text-slate-600">Multi-currency support with international payment methods and local banking integration.</p>
            </div>
          </div>
        </div>
      </section>

{/* Payment Gateway Section */}
<section class="relative py-20 bg-gradient-to-br from-slate-100 via-white to-blue-50 overflow-hidden">
  <div class="container mx-auto px-4">
    <div class="text-center max-w-3xl mx-auto mb-16 fade-in-up">
      <h2 class="text-4xl lg:text-5xl font-bold leading-tight mb-6">
        <span class="text-blue-600">Payment Gateway</span>
        <br />
        <span class="text-orange-500">We Integrate</span>
      </h2>
      <p class="text-xl text-slate-600 leading-relaxed">
        Seamless integration with <strong>Zoho Payments</strong> for secure and reliable transactions.
      </p>
    </div>

    {/* Zoho Payments Card */}
    <div class="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-10 flex flex-col md:flex-row items-center md:items-start gap-8 fade-in-up">
      {/* Left: Logo */}
      <div class="flex-shrink-0">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfA8JRHaiz2HK3XZpsZuIkQlq7CKefUmBnrg&s" 
          alt="Zoho Payments Logo" 
          class="w-32 md:w-40"
        />
      </div>

      {/* Right: Description */}
      <div>
        <h3 class="text-2xl font-bold text-slate-800 mb-3">Zoho Payments</h3>
        <p class="text-slate-600 text-lg leading-relaxed">
          We seamlessly integrate <strong>Zoho Payments</strong> to offer a unified and secure payment experience across your business applications. Manage transactions, invoices, and subscriptions within the Zoho ecosystem with ease and efficiency.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Consultation Section */}
      <section class="relative py-20 bg-gradient-to-br from-slate-100 via-white to-blue-50 overflow-hidden">
        <div class="container mx-auto px-4">
          <div class="text-center max-w-3xl mx-auto mb-16 fade-in-up">
            <h2 class="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              <span class="text-blue-600">Ready to Accept</span>
              <br />
              <span class="text-orange-500">Secure Payments?</span>
            </h2>
            <p class="text-xl text-slate-600 leading-relaxed">
              Let our payment experts help you integrate secure, fast, and reliable payment solutions for your business.
            </p>
          </div>

          <div class="max-w-4xl mx-auto fade-in-up">
            <div class="bg-white rounded-3xl shadow-2xl p-8 border border-slate-100">
              <div class="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 class="text-3xl font-bold text-slate-800 mb-4">Payment Gateway Consultation</h3>
                  <p class="text-slate-600 mb-6 leading-relaxed">
                    Get a   consultation to understand the best payment gateway for your business needs and requirements.
                  </p>
                  <div class="space-y-3">
                    <div class="flex items-center gap-3">
                      <div
                        class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">✓
                      </div>
                      <span class="text-slate-700">Gateway comparison & recommendation</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <div
                        class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">✓
                      </div>
                      <span class="text-slate-700">Security & compliance review</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <div
                        class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">✓
                      </div>
                      <span class="text-slate-700">Integration timeline & pricing</span>
                    </div>
                  </div>
                </div>
                <div class="text-center">
                  <div
                    class="w-32 h-32 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full flex items-center justify-center text-white text-4xl mx-auto mb-6">
                    💳
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
