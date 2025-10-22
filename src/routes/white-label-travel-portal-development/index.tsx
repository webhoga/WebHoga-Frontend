import { component$, $ } from '@builder.io/qwik';
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export default component$(() => {
  const scrollToPlans = $(() => {
    const element = document.getElementById('pricing-plans');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  });

  return (
    <>
    <Header />
    
    <div class="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section class="relative min-h-screen overflow-hidden">
        {/* Animated Background Elements */}
        <div class="absolute inset-0 overflow-hidden">
          <div class="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div class="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-purple-400/15 to-indigo-400/15 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-sky-300/10 to-blue-300/10 rounded-full blur-2xl animate-bounce"></div>
        </div>

        <div class="relative z-10 container mx-auto px-4 flex items-center justify-center min-h-screen">
          <div class="text-center max-w-5xl">
            {/* Main Headline */}
            <h1 class="text-5xl lg:text-7xl font-bold leading-tight mb-8">
              <span class="text-blue-600">White-Label</span>
              <br />
              <span class="text-orange-500">Travel Booking Portal</span>
              <br />
              <span class="text-blue-600">Development</span>
            </h1>

            {/* Subheading */}
            <p class="text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-4xl mx-auto mb-12">
              Launch your own <span class="text-blue-600 font-semibold">branded travel agency platform</span> with integrated
              <span class="text-cyan-600 font-semibold"> flight, hotel, and bus booking systems</span>. Powered by industry-leading APIs and built on robust frameworks.
            </p>

            {/* Trust Indicators */}
            <div class="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-600 mb-12">
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>Flight Booking</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-cyan-500 rounded-full"></div>
                <span>Hotel Booking</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-indigo-500 rounded-full"></div>
                <span>Bus Booking</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span>Holiday Packages</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div class="flex flex-wrap gap-4 justify-center">
              <button
                onClick$={scrollToPlans}
                class="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                View Pricing Plans
              </button>
              <a
                href="https://bizassist.webhoga.com/business-consultation-2/"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                📞 Book Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section class="py-20 bg-white">
        <div class="container mx-auto px-4">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <h2 class="text-4xl lg:text-5xl font-bold mb-6">
              <span class="text-blue-600">Everything You Need to</span>
              <br />
              <span class="text-orange-500">Run a Travel Business</span>
            </h2>
            <p class="text-xl text-slate-600">
              Complete white-label solution with all essential features built-in
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              { title: 'Flight Booking', desc: 'Multi-airline search & booking' },
              { title: 'Hotel Booking', desc: '1M+ properties worldwide' },
              { title: 'Bus Booking', desc: 'Pan-India route coverage' },
              { title: 'Holiday Packages', desc: 'Custom package builder' },
              { title: 'Payment Gateway', desc: 'Multiple payment options' },
              { title: 'B2B & B2C', desc: 'Agent & customer portals' },
              { title: 'Analytics', desc: 'Advanced reporting tools' },
              { title: 'Secure', desc: 'SSL & PCI DSS ready' }
            ].map((feature, idx) => (
              <div key={idx} class="bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100">
                <h3 class="text-xl font-bold text-slate-800 mb-2">{feature.title}</h3>
                <p class="text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="pricing-plans" class="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div class="container mx-auto px-4">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <div class="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg mb-6">
              <span class="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Choose Your Perfect Plan
            </div>
            <h2 class="text-4xl lg:text-5xl font-bold mb-6">
              <span class="text-blue-600">Transparent Pricing</span>
              <br />
              <span class="text-orange-500">Built for Every Scale</span>
            </h2>
          </div>

          <div class="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            
            {/* WordPress Plan */}
            <div class="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 transform hover:-translate-y-2 transition-all duration-500">
              <div class="bg-gradient-to-br from-orange-500 to-amber-500 p-6 text-white">
                <div class="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-sm mb-4">
                  <span class="w-2 h-2 bg-white rounded-full"></span>
                  Fastest to Launch
                </div>
                <h3 class="text-3xl font-bold mb-2">WordPress Travel Lite</h3>
                <p class="text-white/90">Perfect for startups and small agencies</p>
              </div>

              <div class="p-8">
                <div class="text-center mb-8">
                  <div class="text-5xl font-bold text-orange-600 mb-2">₹1,50,000</div>
                  <div class="text-slate-600">One-time payment</div>
                </div>

                <div class="space-y-6 mb-8">
                  <div>
                    <h4 class="font-bold text-slate-800 mb-3 text-lg">Platform</h4>
                    <p class="text-slate-600">WordPress with WP Travel Engine</p>
                  </div>

                  <div>
                    <h4 class="font-bold text-slate-800 mb-3 text-lg">Flight Booking</h4>
                    <ul class="space-y-2 text-sm text-slate-600">
                      <li class="flex items-start gap-2">
                  <span class="text-green-500 mt-1">✓</span>
                  <span>PCI DSS Ready Infrastructure</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-green-500 mt-1">✓</span>
                  <span>GDPR Compliance Tools</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-green-500 mt-1">✓</span>
                  <span>Regular Security Audits</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-green-500 mt-1">✓</span>
                  <span>Malware Protection</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-green-500 mt-1">✓</span>
                  <span>Data Encryption</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-green-500 mt-1">✓</span>
                  <span>Secure Payment Processing</span>
                </li>
              </ul>
            </div>

            <div class="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl shadow-lg">
              <h3 class="text-2xl font-bold text-slate-800 mb-4">Design & UX</h3>
              <ul class="space-y-3 text-slate-600">
                <li class="flex items-start gap-2">
                  <span class="text-green-500 mt-1">✓</span>
                  <span>Mobile-First Design</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-green-500 mt-1">✓</span>
                  <span>Cross-browser Compatible</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-green-500 mt-1">✓</span>
                  <span>ADA Accessibility Standards</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-green-500 mt-1">✓</span>
                  <span>Fast Loading Speed</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-green-500 mt-1">✓</span>
                  <span>Intuitive User Interface</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-green-500 mt-1">✓</span>
                  <span>Modern UI/UX Design</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-green-500 mt-1">✓</span>
                  <span>Brand Customization</span>
                </li>
              </ul>
            </div>

            <div class="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl shadow-lg">
              <h3 class="text-2xl font-bold text-slate-800 mb-4">Support & Maintenance</h3>
              <ul class="space-y-3 text-slate-600">
                <li class="flex items-start gap-2">
                  <span class="text-green-500 mt-1">✓</span>
                  <span>Regular Platform Updates by API Provider</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-green-500 mt-1">✓</span>
                  <span>Bug Fixes & Patches by API Provider</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-green-500 mt-1">✓</span>
                  <span>API Monitoring & Support by API Provider</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-green-500 mt-1">✓</span>
                  <span>Performance Optimization by API Provider</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-green-500 mt-1">✓</span>
                  <span>Technical Documentation & API Docs by API Provider</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-green-500 mt-1">✓</span>
                  <span>Knowledge Base Access by API Provider</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-green-500 mt-1">✓</span>
                  <span>Ticket Support System by API Provider</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section class="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div class="container mx-auto px-4">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <h2 class="text-4xl lg:text-5xl font-bold mb-6">
              <span class="text-blue-600">Compare Plans</span>
              <br />
              <span class="text-orange-500">Side by Side</span>
            </h2>
            <p class="text-xl text-slate-600">
              Find the perfect fit for your travel business needs
            </p>
          </div>

          <div class="max-w-6xl mx-auto overflow-x-auto">
            <table class="w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
              <thead class="bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
                <tr>
                  <th class="p-6 text-left text-lg font-bold">Feature</th>
                  <th class="p-6 text-center text-lg font-bold">WordPress Lite</th>
                  <th class="p-6 text-center text-lg font-bold">Drupal Pro</th>
                  <th class="p-6 text-center text-lg font-bold">Laravel Enterprise</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200">
                <tr class="hover:bg-slate-50">
                  <td class="p-6 font-semibold text-slate-800">Platform</td>
                  <td class="p-6 text-center text-slate-600">WordPress</td>
                  <td class="p-6 text-center text-slate-600">Drupal 10</td>
                  <td class="p-6 text-center text-slate-600">Laravel 11 + Vue.js</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-6 font-semibold text-slate-800">Flight Booking API</td>
                  <td class="p-6 text-center text-slate-600">Affiliate</td>
                  <td class="p-6 text-center text-slate-600">Ezulix</td>
                  <td class="p-6 text-center text-slate-600">Ezulix</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-6 font-semibold text-slate-800">Hotel Booking API</td>
                  <td class="p-6 text-center text-slate-600">Booking.com</td>
                  <td class="p-6 text-center text-slate-600">Ezulix</td>
                  <td class="p-6 text-center text-slate-600">Ezulix</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-6 font-semibold text-slate-800">Bus Booking</td>
                  <td class="p-6 text-center"><span class="text-red-500 text-xl">✗</span></td>
                  <td class="p-6 text-center"><span class="text-green-500 text-xl">✓</span></td>
                  <td class="p-6 text-center"><span class="text-green-500 text-xl">✓</span></td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-6 font-semibold text-slate-800">Payment Gateways</td>
                  <td class="p-6 text-center text-slate-600">2</td>
                  <td class="p-6 text-center text-slate-600">4</td>
                  <td class="p-6 text-center text-slate-600">Unlimited</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-6 font-semibold text-slate-800">B2B Portal</td>
                  <td class="p-6 text-center"><span class="text-red-500 text-xl">✗</span></td>
                  <td class="p-6 text-center"><span class="text-green-500 text-xl">✓</span></td>
                  <td class="p-6 text-center"><span class="text-green-500 text-xl">✓</span></td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-6 font-semibold text-slate-800">Mobile Apps</td>
                  <td class="p-6 text-center"><span class="text-red-500 text-xl">✗</span></td>
                  <td class="p-6 text-center"><span class="text-red-500 text-xl">✗</span></td>
                  <td class="p-6 text-center"><span class="text-green-500 text-xl">✓</span></td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-6 font-semibold text-slate-800">AI Features</td>
                  <td class="p-6 text-center"><span class="text-red-500 text-xl">✗</span></td>
                  <td class="p-6 text-center"><span class="text-red-500 text-xl">✗</span></td>
                  <td class="p-6 text-center"><span class="text-green-500 text-xl">✓</span></td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-6 font-semibold text-slate-800">Multi-currency</td>
                  <td class="p-6 text-center"><span class="text-red-500 text-xl">✗</span></td>
                  <td class="p-6 text-center"><span class="text-green-500 text-xl">✓</span></td>
                  <td class="p-6 text-center"><span class="text-green-500 text-xl">✓</span></td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-6 font-semibold text-slate-800">White-label Rights</td>
                  <td class="p-6 text-center"><span class="text-red-500 text-xl">✗</span></td>
                  <td class="p-6 text-center"><span class="text-red-500 text-xl">✗</span></td>
                  <td class="p-6 text-center"><span class="text-green-500 text-xl">✓</span></td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-6 font-semibold text-slate-800">Source Code</td>
                  <td class="p-6 text-center"><span class="text-red-500 text-xl">✗</span></td>
                  <td class="p-6 text-center"><span class="text-red-500 text-xl">✗</span></td>
                  <td class="p-6 text-center"><span class="text-green-500 text-xl">✓</span></td>
                </tr>
                <tr class="hover:bg-slate-50 bg-blue-50">
                  <td class="p-6 font-bold text-slate-800 text-lg">Price</td>
                  <td class="p-6 text-center font-bold text-orange-600 text-2xl">₹1,50,000</td>
                  <td class="p-6 text-center font-bold text-cyan-600 text-2xl">₹2,75,000</td>
                  <td class="p-6 text-center font-bold text-indigo-600 text-2xl">₹4,50,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section class="py-20 bg-white">
        <div class="container mx-auto px-4">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <h2 class="text-4xl lg:text-5xl font-bold mb-6">
              <span class="text-blue-600">Frequently Asked</span>
              <br />
              <span class="text-orange-500">Questions</span>
            </h2>
          </div>

          <div class="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: "What is the difference between the three plans?",
                a: "WordPress Lite uses affiliate APIs (ideal for startups with minimal upfront costs). Drupal Pro includes Ezulix APIs with full booking capabilities for flights, hotels, and buses. Laravel Enterprise adds mobile apps, AI features, white-label rights, and complete source code ownership."
              },
              {
                q: "Are there any recurring costs?",
                a: "Yes. From the 2nd year onwards, you'll need to pay API maintenance charges directly to Ezulix (for Pro and Enterprise plans). You'll also need to renew hosting, domain, and support after the free period ends."
              },
              {
                q: "Can I add more features later?",
                a: "Absolutely! You can add modules like train booking, car rentals, visa processing, travel insurance, and more. These require separate payments and can be integrated as your business grows."
              },
              {
                q: "Do you provide training?",
                a: "Yes! All plans include admin training sessions. The number of sessions varies by plan - 2 sessions for WordPress, comprehensive training for Drupal, and ongoing support for Laravel Enterprise."
              },
              {
                q: "How long does development take?",
                a: "WordPress Lite: 20-25 days, Drupal Pro: 30-40 days, Laravel Enterprise: 60-90 days. Timeline depends on customization requirements and your response time for approvals."
              },
              {
                q: "Can I migrate from one plan to another?",
                a: "Yes, you can upgrade from WordPress to Drupal or Laravel by paying the price difference plus migration costs. However, downgrading is not feasible due to technical architecture differences."
              }
            ].map((faq, idx) => (
              <div key={idx} class="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                <h3 class="text-xl font-bold text-slate-800 mb-4">{faq.q}</h3>
                <p class="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-20 bg-gradient-to-br from-blue-600 via-cyan-500 to-indigo-600 text-white relative overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div class="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div class="relative z-10 container mx-auto px-4 text-center">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-4xl lg:text-6xl font-bold mb-6">
              Ready to Launch Your<br />Travel Business?
            </h2>
            <p class="text-xl lg:text-2xl mb-12 text-white/90">
              Schedule a free consultation with our travel tech experts and get started today
            </p>
            
            <div class="flex flex-wrap gap-6 justify-center">
              <a
                href="https://bizassist.webhoga.com/business-consultation-2/"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 inline-flex items-center gap-3"
              >
                📞 Book Free Consultation
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
              
              <button
                onClick$={scrollToPlans}
                class="bg-transparent border-3 border-white text-white px-10 py-5 rounded-xl font-bold text-xl hover:bg-white hover:text-blue-600 transform hover:-translate-y-2 transition-all duration-300"
              >
                View Pricing Again
              </button>
            </div>

            <div class="mt-12 flex flex-wrap gap-8 justify-center text-sm text-white/90">
              <div class="flex items-center gap-2">
                <span class="text-2xl">✓</span>
                <span>No Hidden Charges</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-2xl">✓</span>
                <span>100% Customizable</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-2xl">✓</span>
                <span>Expert Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
        
    <Footer />
    </>
  );
});start gap-2">
                        <span class="text-green-500 mt-0.5">✓</span>
                        <span>Third-party Affiliate Integration</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-500 mt-0.5">✓</span>
                        <span>Domestic & International Flights</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-500 mt-0.5">✓</span>
                        <span>Real-time Fare Search</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-500 mt-0.5">✓</span>
                        <span>E-ticket Generation</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 class="font-bold text-slate-800 mb-3 text-lg">Hotel Booking</h4>
                    <ul class="space-y-2 text-sm text-slate-600">
                      <li class="flex items-start gap-2">
                        <span class="text-green-500 mt-0.5">✓</span>
                        <span>Booking.com Affiliate API</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-500 mt-0.5">✓</span>
                        <span>500K+ Properties Worldwide</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-500 mt-0.5">✓</span>
                        <span>Commission-based Model</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 class="font-bold text-slate-800 mb-3 text-lg">Core Features</h4>
                    <ul class="space-y-2 text-sm text-slate-600">
                      <li class="flex items-start gap-2">
                        <span class="text-green-500 mt-0.5">✓</span>
                        <span>Custom WordPress Theme</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-500 mt-0.5">✓</span>
                        <span>Responsive Mobile Design</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-500 mt-0.5">✓</span>
                        <span>Payment Gateway (2)</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-500 mt-0.5">✓</span>
                        <span>Basic SEO Setup</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-500 mt-0.5">✓</span>
                        <span>1 Year Free Hosting & Domain</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-500 mt-0.5">✓</span>
                        <span>2 Months Free Support</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="bg-orange-50 border-l-4 border-orange-500 p-4 mb-6 text-sm text-slate-700">
                  <p class="font-semibold mb-1">Note:</p>
                  <p>Uses affiliate integrations. No additional API costs.</p>
                </div>

                <button class="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  Get Started
                </button>
              </div>
            </div>

            {/* Drupal Plan - Featured */}
            <div class="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-cyan-500 transform hover:-translate-y-2 transition-all duration-500 relative">
              <div class="absolute top-0 right-0 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-6 py-2 rounded-bl-2xl font-bold text-sm">
                MOST POPULAR
              </div>
              
              <div class="bg-gradient-to-br from-cyan-600 to-blue-600 p-6 text-white">
                <div class="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-sm mb-4">
                  <span class="w-2 h-2 bg-white rounded-full"></span>
                  Most Comprehensive
                </div>
                <h3 class="text-3xl font-bold mb-2">Drupal Travel Pro</h3>
                <p class="text-white/90">Advanced solution for established agencies</p>
              </div>

              <div class="p-8">
                <div class="text-center mb-8">
                  <div class="text-5xl font-bold text-cyan-600 mb-2">₹2,75,000</div>
                  <div class="text-slate-600">One-time payment</div>
                </div>

                <div class="space-y-6 mb-8">
                  <div>
                    <h4 class="font-bold text-slate-800 mb-3 text-lg">Platform</h4>
                    <p class="text-slate-600">Drupal 10 with Custom Travel Module</p>
                  </div>

                  <div>
                    <h4 class="font-bold text-slate-800 mb-3 text-lg">Flight Booking</h4>
                    <ul class="space-y-2 text-sm text-slate-600">
                      <li class="flex items-start gap-2">
                        <span class="text-green-500 mt-0.5">✓</span>
                        <span>Ezulix Flight API Integration</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-500 mt-0.5">✓</span>
                        <span>Multi-airline Comparison</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-500 mt-0.5">✓</span>
                        <span>Seat Selection & Meal Preferences</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-500 mt-0.5">✓</span>
                        <span>Multi-city Booking</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-500 mt-0.5">✓</span>
                        <span>PNR Management</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 class="font-bold text-slate-800 mb-3 text-lg">Hotel Booking</h4>
                    <ul class="space-y-2 text-sm text-slate-600">
                      <li class="flex items-start gap-2">
                        <span class="text-green-500 mt-0.5">✓</span>
                        <span>Ezulix Hotel API Integration</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-500 mt-0.5">✓</span>
                        <span>1M+ Properties Worldwide</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-500 mt-0.5">✓</span>
                        <span>Instant Confirmation</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-500 mt-0.5">✓</span>
                        <span>Virtual Hotel Tours</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 class="font-bold text-slate-800 mb-3 text-lg">Bus Booking</h4>
                    <ul class="space-y-2 text-sm text-slate-600">
                      <li class="flex items-start gap-2">
                        <span class="text-green-500 mt-0.5">✓</span>
                        <span>Ezulix Bus API Integration</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-500 mt-0.5">✓</span>
                        <span>Interstate & Intercity Routes</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-500 mt-0.5">✓</span>
                        <span>Live Bus Tracking</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 class="font-bold text-slate-800 mb-3 text-lg">Core Features</h4>
                    <ul class="space-y-2 text-sm text-slate-600">
                      <li class="flex items-start gap-2">
                        <span class="text-green-500 mt-0.5">✓</span>
                        <span>Custom Drupal Theme</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-500 mt-0.5">✓</span>
                        <span>Payment Gateway (4)</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-500 mt-0.5">✓</span>
                        <span>B2B & B2C Portal</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-500 mt-0.5">✓</span>
                        <span>Multi-currency Support</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-500 mt-0.5">✓</span>
                        <span>Commission Management</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-500 mt-0.5">✓</span>
                        <span>1 Year Free Premium Hosting</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-500 mt-0.5">✓</span>
                        <span>4 Months Free Support</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="bg-cyan-50 border-l-4 border-cyan-600 p-4 mb-6 text-sm text-slate-700">
                  <p class="font-semibold mb-2">Note:</p>
                  <p>Flight, Hotel & Bus API (Ezulix) included. Additional modules require separate payment. API maintenance from year 2.</p>
                </div>

                <button class="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  Get Started
                </button>
              </div>
            </div>

            {/* Laravel Plan */}
            <div class="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 transform hover:-translate-y-2 transition-all duration-500">
              <div class="bg-gradient-to-br from-indigo-600 to-purple-600 p-6 text-white">
                <div class="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-sm mb-4">
                  <span class="w-2 h-2 bg-white rounded-full"></span>
                  Unlimited Scalability
                </div>
                <h3 class="text-3xl font-bold mb-2">Laravel Travel Enterprise</h3>
                <p class="text-white/90">Complete enterprise solution</p>
              </div>

              <div class="p-8">
                <div class="text-center mb-8">
                  <div class="text-5xl font-bold text-indigo-600 mb-2">₹4,50,000</div>
                  <div class="text-slate-600">One-time payment</div>
                </div>

                <div class="space-y-6 mb-8">
                  <div>
                    <h4 class="font-bold text-slate-800 mb-3 text-lg">Platform</h4>
                    <p class="text-slate-600">Custom Laravel 11 with Vue.js Frontend</p>
                  </div>

                  <div>
                    <h4 class="font-bold text-slate-800 mb-3 text-lg">Flight Booking</h4>
                    <ul class="space-y-2 text-sm text-slate-600">
                      <li class="flex items-start gap-2">
                        <span class="text-green-500 mt-0.5">✓</span>
                        <span>Ezulix Flight API Integration</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-500 mt-0.5">✓</span>
                        <span>Multi-GDS Aggregation</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-500 mt-0.5">✓</span>
                        <span>Group Booking Management</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-500 mt-0.5">✓</span>
                        <span>Corporate Travel Module</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-500 mt-0.5">✓</span>
                        <span>Fare Prediction Engine</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 class="font-bold text-slate-800 mb-3 text-lg">Hotel Booking</h4>
                    <ul class="space-y-2 text-sm text-slate-600">
                      <li class="flex items-start gap-2">
                        <span class="text-green-500 mt-0.5">✓</span>
                        <span>Ezulix Hotel API Integration</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-500 mt-0.5">✓</span>
                        <span>2M+ Properties Worldwide</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-500 mt-0.5">✓</span>
                        <span>Dynamic Pricing Engine</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-500 mt-0.5">✓</span>
                        <span>AI-powered Recommendations</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 class="font-bold text-slate-800 mb-3 text-lg">Bus Booking</h4>
                    <ul class="space-y-2 text-sm text-slate-600">
                      <li class="flex items-start gap-2">
                        <span class="text-green-500 mt-0.5">✓</span>
                        <span>Ezulix Bus API Integration</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-500 mt-0.5">✓</span>
                        <span>GPS-based Bus Tracking</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-500 mt-0.5">✓</span>
                        <span>Dynamic Seat Pricing</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 class="font-bold text-slate-800 mb-3 text-lg">Premium Features</h4>
                    <ul class="space-y-2 text-sm text-slate-600">
                      <li class="flex items-start gap-2">
                        <span class="text-green-500 mt-0.5">✓</span>
                        <span>Native Mobile Apps (iOS & Android)</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-500 mt-0.5">✓</span>
                        <span>AI Chatbot & Virtual Assistant</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-500 mt-0.5">✓</span>
                        <span>White-label Branding</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-500 mt-0.5">✓</span>
                        <span>B2B, B2C, B2E Portals</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-500 mt-0.5">✓</span>
                        <span>CRM & ERP Integration</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-500 mt-0.5">✓</span>
                        <span>24/7 Priority Support</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-500 mt-0.5">✓</span>
                        <span>Source Code Ownership</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="bg-indigo-50 border-l-4 border-indigo-500 p-4 mb-6 text-sm text-slate-700">
                  <p class="font-semibold mb-2">Note:</p>
                  <p>Flight, Hotel & Bus API (Ezulix) included. Additional modules require separate payment. API maintenance from year 2.</p>
                </div>

                <button class="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  Get Started
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section class="py-20 bg-white">
        <div class="container mx-auto px-4">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <h2 class="text-4xl lg:text-5xl font-bold mb-6">
              <span class="text-blue-600">What's Included</span>
              <br />
              <span class="text-orange-500">in All Plans</span>
            </h2>
          </div>

          <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div class="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg">
              <h3 class="text-2xl font-bold text-slate-800 mb-4">Security & Compliance</h3>
              <ul class="space-y-3 text-slate-600">
                <li class="flex items-start gap-2">
                  <span class="text-green-500 mt-1">✓</span>
                  <span>SSL/TLS Encryption</span>
                </li>
                <li class="flex items-
