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
      content:
        "Professional Google Analytics and tracking setup services. Monitor performance, track conversions, and optimize your website with data-driven insights starting from ₹4,999.",
    },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
};

export default component$(() => {
  useScrollAnimate(".fade-in-up");

  return (
    <>
      <Header />

      {/* Hero */}
      <section class="relative min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <div class="container mx-auto px-4 py-20 min-h-[80vh] flex items-center">
          <div class="text-center max-w-4xl mx-auto">
            <div class="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full mb-8 fade-in-up">
              Data Analytics Solutions
            </div>

            <h1 class="text-5xl lg:text-7xl font-bold mb-8 fade-in-up">
              <span class="text-green-600">Track, Analyze &</span>
              <br />
              <span class="text-orange-500">Optimize</span>
              <br />
              <span class="text-emerald-600">Performance</span>
            </h1>

            <p class="text-xl text-slate-600 mb-12 fade-in-up">
              Google Analytics, conversion tracking & data-driven growth systems.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section class="py-20 bg-white">
        <div class="container mx-auto px-4">
          <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto fade-in-up">
            {/* GA4 */}
            <div class="bg-white rounded-3xl p-8 shadow-xl border">
              <h3 class="text-2xl font-bold mb-4 text-center">
                Google Analytics Setup
              </h3>
              <p class="text-center text-slate-600 mb-6">
                GA4 installation, goals & dashboards.
              </p>
              <div class="text-center text-3xl font-bold text-green-600 mb-6">
                ₹8,920
              </div>
              <a
                href="/pricing/google-analytics-and-tracking"
                class="block text-center bg-green-600 text-white py-3 rounded-xl"
              >
                View Pricing
              </a>
            </div>

            {/* ADVANCED */}
            <div class="bg-white rounded-3xl p-8 shadow-xl border">
              <h3 class="text-2xl font-bold mb-4 text-center">
                Advanced Tracking
              </h3>
              <p class="text-center text-slate-600 mb-6">
                Facebook Pixel, Ads & GTM events.
              </p>
              <div class="text-center text-3xl font-bold text-teal-600 mb-6">
                ₹14,900
              </div>
              <a
                href="/contact"
                class="block text-center bg-teal-600 text-white py-3 rounded-xl"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section class="py-20 bg-slate-50">
        <div class="container mx-auto px-4">
          <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto fade-in-up">
            <div class="text-center">
              <h3 class="text-xl font-bold mb-3">Real-Time Insights</h3>
              <p class="text-slate-600">
                Live dashboards & performance metrics.
              </p>
            </div>
            <div class="text-center">
              <h3 class="text-xl font-bold mb-3">Goal Tracking</h3>
              <p class="text-slate-600">
                Measure conversions & ROI precisely.
              </p>
            </div>
            <div class="text-center">
              <h3 class="text-xl font-bold mb-3">Custom Reports</h3>
              <p class="text-slate-600">
                Metrics aligned with your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation */}
      <section class="py-20 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto fade-in-up">
            <div class="bg-white rounded-3xl shadow-2xl p-8 border">
              <div class="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 class="text-3xl font-bold mb-4">
                    Analytics Audit
                  </h3>
                  <p class="text-slate-600 mb-6">
                    Full audit of your tracking & analytics setup.
                  </p>
                  <ul class="space-y-3 text-slate-700">
                    <li>✓ Tracking assessment</li>
                    <li>✓ Analytics strategy</li>
                    <li>✓ Implementation roadmap</li>
                  </ul>
                </div>

                <div class="text-center">
                  <a
                    href="https://bizassist.webhoga.com/business-consultation-2/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-block bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition"
                  >
                    Book Consultation →
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
