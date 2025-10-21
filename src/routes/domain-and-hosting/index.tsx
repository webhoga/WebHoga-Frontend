import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useScrollAnimate } from "~/hooks/useScrollAnimate";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export const head: DocumentHead = {
  title: "Domain Registration & Web Hosting Services - WebHoga | Premium Hosting Solutions",
  meta: [
    {
      name: "description",
      content: "Professional domain registration and web hosting services. Fast, secure, and reliable hosting solutions included with all web designing and eCommerce plans.",
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
      <section class="relative min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 overflow-hidden">
        {/* Animated Background Elements */}
        <div class="absolute inset-0 overflow-hidden">
          <div
            class="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            class="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-blue-400/15 to-cyan-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-300/10 to-purple-300/10 rounded-full blur-2xl animate-bounce"></div>
        </div>

        <div class="relative z-10 container mx-auto px-4 py-20">
          <div class="text-center max-w-4xl mx-auto min-h-[80vh] flex flex-col justify-center">

            {/* Premium Badge */}
            <div
              class="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg mb-8 mt-12 fade-in-up">
              <span class="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Premium Hosting Solutions
            </div>

            {/* Main Headline */}
            <div class="space-y-6 mb-8 fade-in-up">
              <h1 class="text-5xl lg:text-7xl font-bold leading-tight">
                <span class="text-purple-600">Domain & Hosting</span>
                <br />
                <span class="text-orange-500">Made Simple</span>
                <br />
                <span class="text-indigo-600">& Secure</span>
              </h1>
            </div>

            {/* Subheading */}
            <p class="text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-12 fade-in-up">
              Get your <span class="text-purple-600 font-semibold">perfect domain name</span> and
              <span class="text-indigo-600 font-semibold"> lightning-fast hosting</span> —
              <span class="text-green-600 font-semibold">included FREE</span> with all our web designing packages.
            </p>

            {/* Trust Indicators */}
            <div class="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-600 mb-12 fade-in-up">
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span>99.9% Uptime Guarantee</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-indigo-500 rounded-full"></div>
                <span>Free SSL Certificate</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>24/7 Expert Support</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div class="flex flex-col sm:flex-row gap-4 justify-center fade-in-up">
              <a
                href="https://domain.asianetweb.com/domain-registration/index.php"
                target="_blank"
                rel="noopener noreferrer"
                class="group relative overflow-hidden bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center">
        <span class="relative z-10 flex items-center gap-2">
          Check Domain Availability
          <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor"
               viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </span>
                <div
                  class="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>

              <a
                href="/pricing/wordpress"
                class="group relative overflow-hidden bg-white border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-500 hover:text-white transform hover:-translate-y-1 transition-all duration-300 shadow-lg inline-flex items-center justify-center">
        <span class="flex items-center gap-2">
          View Web Design Plans
          <svg class="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor"
               viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section class="relative py-20 bg-gradient-to-br from-slate-50 via-white to-purple-50 overflow-hidden">
        {/* Background Elements */}
        <div class="absolute inset-0 overflow-hidden">
          <div
            class="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-purple-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
          <div
            class="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tr from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
        </div>

        <div class="relative z-10 container mx-auto px-4">
          {/* Section Header */}
          <div class="text-center max-w-3xl mx-auto mb-16 fade-in-up">
            <div
              class="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg mb-6">
              <span class="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Complete Web Solutions
            </div>

            <h2 class="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              <span class="text-purple-600">Domain Registration &</span>
              <br />
              <span class="text-orange-500">Premium Hosting Services</span>
            </h2>

            <p class="text-xl text-slate-600 leading-relaxed">
              Everything you need to get online - <span class="text-purple-600 font-semibold">domain names</span> and
              <span class="text-indigo-600 font-semibold"> powerful hosting</span> solutions.
            </p>
          </div>

          {/* Services Grid */}
          <div class="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto fade-in-up">

            {/* Domain Registration */}
            <div
              class="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border border-slate-100 overflow-hidden">
              <div
                class="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="relative z-10">

                {/* Badge */}
                <div
                  class="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <span class="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Perfect Domain Names
                </div>

                <h3 class="text-3xl font-bold text-slate-800 mb-6">Domain Registration</h3>

                <p class="text-slate-600 mb-8 leading-relaxed text-lg">
                  Secure your perfect domain name with our comprehensive domain registration service. Choose from hundreds of extensions and get your online identity.
                </p>

                {/* Features */}
                <div class="space-y-4 mb-8">
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span class="text-slate-700">All popular extensions (.com, .in, .org)</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    <span class="text-slate-700">Free domain privacy protection</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span class="text-slate-700">Easy domain management panel</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    <span class="text-slate-700">DNS management included</span>
                  </div>
                </div>

                {/* Pricing */}
                <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl mb-6 border border-green-100">
                  <div class="text-center">
                    <div class="text-lg font-bold text-green-700 mb-2">INCLUDED FREE</div>
                    <div class="text-sm text-slate-600">In all web designing and</div>
                    <div class="text-sm text-slate-600">eCommerce web designing plans</div>
                  </div>
                </div>

                {/* CTA Button */}
                <a href="/pricing/wordpress"
                   class="group/btn relative overflow-hidden bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 block text-center">
                  <span class="relative z-10 flex items-center justify-center gap-2">
                    View Web Design Plans
                    <svg class="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none"
                         stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </span>
                  <div
                    class="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                </a>
              </div>
            </div>

            {/* Web Hosting */}
            <div
              class="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border border-slate-100 overflow-hidden">
              <div
                class="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="relative z-10">

                {/* Badge */}
                <div
                  class="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Lightning Fast Hosting
                </div>

                <h3 class="text-3xl font-bold text-slate-800 mb-6">Premium Web Hosting</h3>

                <p class="text-slate-600 mb-8 leading-relaxed text-lg">
                  High-performance web hosting with SSD storage, 99.9% uptime guarantee, blazing speed, enhanced security, and scalable infrastructure. Perfect for all types of websites and applications.
                </p>

                {/* Features */}
                <div class="space-y-4 mb-8">
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span class="text-slate-700">SSD storage for faster loading</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span class="text-slate-700">Free SSL certificate</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span class="text-slate-700">Daily automatic backups</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span class="text-slate-700">99.9% uptime guarantee</span>
                  </div>
                </div>

                {/* Pricing */}
                <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl mb-6 border border-green-100">
                  <div class="text-center">
                    <div class="text-lg font-bold text-green-700 mb-2">INCLUDED FREE</div>
                    <div class="text-sm text-slate-600">In all web designing and</div>
                    <div class="text-sm text-slate-600">eCommerce web designing plans</div>
                  </div>
                </div>

                {/* CTA Button */}
                <a href="/pricing/woocommerce"
                   class="group/btn relative overflow-hidden bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 block text-center">
                  <span class="relative z-10 flex items-center justify-center gap-2">
                    View eCommerce Plans
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

      {/* Why Choose Us Section */}
      <section class="relative py-20 bg-gradient-to-br from-slate-100 via-white to-purple-50 overflow-hidden">
        <div class="container mx-auto px-4">
          <div class="text-center max-w-3xl mx-auto mb-16 fade-in-up">
            <h2 class="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              <span class="text-purple-600">Why Choose WebHoga for</span>
              <br />
              <span class="text-orange-500">Domain & Hosting?</span>
            </h2>
            <p class="text-xl text-slate-600 leading-relaxed">
              More than just domain and hosting - we provide complete web solutions with ongoing support and optimization.
            </p>
          </div>

          {/* Features Grid */}
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto fade-in-up">

            {/* Feature 1 */}
            <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 class="text-xl font-bold text-slate-800 mb-3">All-Inclusive Packages</h3>
              <p class="text-slate-600 leading-relaxed">
                Domain, hosting, and website design - everything bundled together for maximum convenience and savings.
              </p>
            </div>

            {/* Feature 2 */}
            <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 class="text-xl font-bold text-slate-800 mb-3">Premium Security</h3>
              <p class="text-slate-600 leading-relaxed">
                Free SSL certificates, daily backups, and advanced security monitoring to keep your website protected.
              </p>
            </div>

            {/* Feature 3 */}
            <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 class="text-xl font-bold text-slate-800 mb-3">Lightning Fast Performance</h3>
              <p class="text-slate-600 leading-relaxed">
                SSD storage, CDN integration, and optimized servers ensure your website loads incredibly fast.
              </p>
            </div>

            {/* Feature 4 */}
            <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 class="text-xl font-bold text-slate-800 mb-3">Expert Support</h3>
              <p class="text-slate-600 leading-relaxed">
                24/7 technical support from our experienced team to help you with any hosting or domain issues.
              </p>
            </div>

            {/* Feature 5 */}
            <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 class="text-xl font-bold text-slate-800 mb-3">Easy Management</h3>
              <p class="text-slate-600 leading-relaxed">
                User-friendly control panel and management tools to handle domains, hosting, and email accounts.
              </p>
            </div>

            {/* Feature 6 */}
            <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 class="text-xl font-bold text-slate-800 mb-3">Best Value</h3>
              <p class="text-slate-600 leading-relaxed">
                Premium features at competitive prices - get more value than standalone domain and hosting providers.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="relative py-20 bg-gradient-to-br from-slate-100 via-white to-emerald-50 overflow-hidden">
        <div class="container mx-auto px-4">
          <div class="text-center max-w-3xl mx-auto mb-16 fade-in-up">
            <h2 class="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              <span class="text-purple-600">Ready to Get Your</span>
              <br />
              <span class="text-orange-500">Perfect Domain & Hosting?</span>
            </h2>
            <p class="text-xl text-slate-600 leading-relaxed">
              Start your online journey with our complete web solutions. Domain, hosting, and website design - all in one package.
            </p>
          </div>

          <div class="max-w-4xl mx-auto fade-in-up">
            <div class="bg-white rounded-3xl shadow-2xl p-8 border border-slate-100">
              <div class="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 class="text-3xl font-bold text-slate-800 mb-4">Get Started Today</h3>
                  <p class="text-slate-600 mb-6 leading-relaxed">
                    Choose from our comprehensive web design or eCommerce packages and get your domain and hosting included FREE.
                  </p>
                  <div class="space-y-3">
                    <div class="flex items-center gap-3">
                      <div
                        class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✓
                      </div>
                      <span class="text-slate-700">Domain registration included</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <div
                        class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✓
                      </div>
                      <span class="text-slate-700">Premium hosting included</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <div
                        class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✓
                      </div>
                      <span class="text-slate-700">Professional website design</span>
                    </div>
                  </div>
                </div>
                <div class="text-center">
                  <div class="flex flex-col gap-3">
                    <a href="/pricing/wordpress">
                      <button
                        class="group relative overflow-hidden bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-xl font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                        <span class="relative z-10 flex items-center justify-center gap-2">
                          View Web Design Plans
                          <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                          </svg>
                        </span>
                        <div
                          class="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </button>
                    </a>

                    <a href="/pricing/shopify">
                      <button
                        class="group relative overflow-hidden bg-gradient-to-r from-emerald-500 to-green-500 text-white px-6 py-3 rounded-xl font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                      >
                        <span class="relative z-10 flex items-center justify-center gap-2">
                          🛒 View eCommerce Plans
                          <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                        <div
                          class="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"
                        ></div>
                      </button>
                    </a>
                  </div>
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
