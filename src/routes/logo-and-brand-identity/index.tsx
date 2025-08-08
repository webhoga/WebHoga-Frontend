import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useScrollAnimate } from "~/hooks/useScrollAnimate";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export const head: DocumentHead = {
  title: "Logo Design & Brand Identity Services - WebHoga | Professional Branding Solutions",
  meta: [
    {
      name: "description",
      content: "Professional logo design and brand identity services. Create memorable brands that stand out with WebHoga's premium branding solutions starting from ₹4,999.",
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
      <section class="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50">
        {/* Animated Background Elements */}
        <div class="absolute inset-0 overflow-hidden">
          <div class="absolute top-20 right-20 h-72 w-72 animate-pulse rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 blur-3xl"></div>
          <div class="absolute bottom-20 left-20 h-96 w-96 animate-pulse rounded-full bg-gradient-to-tr from-indigo-400/15 to-purple-400/15 blur-3xl delay-1000"></div>
          <div class="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 transform animate-bounce rounded-full bg-gradient-to-r from-pink-300/10 to-purple-300/10 blur-2xl"></div>
        </div>

        <div class="relative z-10 container mx-auto px-4 py-20">
          <div class="mx-auto flex min-h-[80vh] max-w-4xl flex-col justify-center text-center">

            {/* Main Headline */}
            <div class="fade-in-up mb-8 space-y-6">
              <h1 class="text-5xl leading-tight font-bold lg:text-7xl">
                <span class="text-purple-600">Brands That</span>
                <br />
                <span class="text-orange-500">Captivate &</span>
                <br />
                <span class="text-pink-600">Convert</span>
              </h1>
            </div>

            {/* Subheading */}
            <p class="fade-in-up mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-slate-600 lg:text-2xl">
              From{" "}
              <span class="font-semibold text-purple-600">memorable logos</span>{" "}
              to
              <span class="font-semibold text-pink-600">
                {" "}
                complete brand identities
              </span>{" "}
              — we create
              <span class="font-semibold text-indigo-600">
                {" "}
                visual experiences
              </span>{" "}
              that make your brand unforgettable.
            </p>

            {/* Trust Indicators */}
            <div class="fade-in-up mb-12 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-600">
              <div class="flex items-center gap-2">
                <div class="h-3 w-3 rounded-full bg-purple-500"></div>
                <span>500+ Logos Created</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="h-3 w-3 rounded-full bg-pink-500"></div>
                <span>Brand Identity Experts</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="h-3 w-3 rounded-full bg-indigo-500"></div>
                <span>100% Original Designs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section class="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-purple-50 py-20">
        {/* Background Elements */}
        <div class="absolute inset-0 overflow-hidden">
          <div class="absolute top-20 left-20 h-64 w-64 rounded-full bg-gradient-to-br from-purple-400/10 to-pink-400/10 blur-3xl"></div>
          <div class="absolute right-20 bottom-20 h-80 w-80 rounded-full bg-gradient-to-tr from-indigo-400/10 to-purple-400/10 blur-3xl"></div>
        </div>

        <div class="relative z-10 container mx-auto px-4">
          {/* Section Header */}
          <div class="fade-in-up mx-auto mb-16 max-w-3xl text-center">
            <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-2 text-sm font-medium text-white shadow-lg">
              <span class="h-2 w-2 animate-pulse rounded-full bg-white"></span>
              Choose Your Branding Service
            </div>

            <h2 class="mb-6 text-4xl leading-tight font-bold lg:text-5xl">
              <span class="text-purple-600">Two Powerful Solutions for</span>
              <br />
              <span class="text-orange-500">Your Brand Success</span>
            </h2>

            <p class="text-xl leading-relaxed text-slate-600">
              Whether you need a{" "}
              <span class="font-semibold text-purple-600">
                professional logo
              </span>{" "}
              or a
              <span class="font-semibold text-pink-600">
                {" "}
                complete brand identity
              </span>{" "}
              — we create designs that tell your story.
            </p>
          </div>

          {/* Services Grid */}
          <div class="fade-in-up mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
            {/* Logo Design */}
            <div class="group relative transform overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
              <div class="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              <div class="relative z-10">
                {/* Icon */}
                <div class="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-purple-500 to-pink-500 text-3xl text-white transition-transform duration-300 group-hover:scale-110">
                  ✨
                </div>

                {/* Badge */}
                <div class="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 px-3 py-1 text-sm font-medium text-purple-700">
                  <span class="h-2 w-2 rounded-full bg-purple-500"></span>
                  Quick & Affordable
                </div>

                <h3 class="mb-6 text-3xl font-bold text-slate-800">
                  Logo Design
                </h3>

                <p class="mb-8 text-lg leading-relaxed text-slate-600">
                  Get a professional, memorable logo that represents your brand
                  perfectly and stands out from competitors. Includes multiple
                  concepts, revisions, and all file formats you need.
                </p>

                {/* Features */}
                <div class="mb-8 space-y-4">
                  <div class="flex items-center gap-3">
                    <div class="h-2 w-2 rounded-full bg-purple-500"></div>
                    <span class="text-slate-700">5+ Logo concepts</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="h-2 w-2 rounded-full bg-pink-500"></div>
                    <span class="text-slate-700">Unlimited revisions</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="h-2 w-2 rounded-full bg-purple-500"></div>
                    <span class="text-slate-700">
                      All file formats (PNG, SVG, PDF)
                    </span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="h-2 w-2 rounded-full bg-pink-500"></div>
                    <span class="text-slate-700">Commercial usage rights</span>
                  </div>
                </div>

                {/* Starting Price */}
                <div class="mb-6 rounded-xl border border-purple-100 bg-gradient-to-r from-purple-50 to-pink-50 p-4">
                  <div class="text-center">
                    <div class="text-sm font-medium text-purple-600">
                      Starting from
                    </div>
                    <div class="text-3xl font-bold text-purple-700">₹4,999</div>
                    <div class="text-sm text-slate-600">
                      Professional logo design
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href="/pricing/logo-design"
                  class="group/btn relative block transform overflow-hidden rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-4 text-center text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <span class="relative z-10 flex items-center justify-center gap-2">
                    ✨ View Logo Pricing
                    <svg
                      class="h-5 w-5 transition-transform group-hover/btn:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      ></path>
                    </svg>
                  </span>
                  <div class="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 transition-opacity group-hover/btn:opacity-100"></div>
                </a>
              </div>
            </div>

            {/* Brand Identity */}
            <div class="group relative transform overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
              <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              <div class="relative z-10">
                {/* Icon */}
                <div class="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-500 text-3xl text-white transition-transform duration-300 group-hover:scale-110">
                  🎨
                </div>

                {/* Badge */}
                <div class="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 px-3 py-1 text-sm font-medium text-indigo-700">
                  <span class="h-2 w-2 rounded-full bg-indigo-500"></span>
                  Complete Solution
                </div>

                <h3 class="mb-6 text-3xl font-bold text-slate-800">
                  Brand Identity
                </h3>

                <p class="mb-8 text-lg leading-relaxed text-slate-600">
                  Complete brand identity package including logo, color palette,
                  typography, business cards, and brand guidelines. Everything
                  you need for consistent branding.
                </p>

                {/* Features */}
                <div class="mb-8 space-y-4">
                  <div class="flex items-center gap-3">
                    <div class="h-2 w-2 rounded-full bg-indigo-500"></div>
                    <span class="text-slate-700">Logo + Brand mark</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="h-2 w-2 rounded-full bg-purple-500"></div>
                    <span class="text-slate-700">
                      Color palette & typography
                    </span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="h-2 w-2 rounded-full bg-indigo-500"></div>
                    <span class="text-slate-700">Business card design</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="h-2 w-2 rounded-full bg-purple-500"></div>
                    <span class="text-slate-700">
                      Brand guidelines document
                    </span>
                  </div>
                </div>

                {/* Starting Price */}
                <div class="mb-6 rounded-xl border border-indigo-100 bg-gradient-to-r from-indigo-50 to-purple-50 p-4">
                  <div class="text-center">
                    <div class="text-sm font-medium text-indigo-600">
                      Starting from
                    </div>
                    <div class="text-3xl font-bold text-indigo-700">
                      ₹34,999
                    </div>
                    <div class="text-sm text-slate-600">
                      Complete brand identity
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href="/pricing/brand-identity"
                  class="group/btn relative block transform overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-4 text-center text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <span class="relative z-10 flex items-center justify-center gap-2">
                    🎯 View Brand Identity Pricing
                    <svg
                      class="h-5 w-5 transition-transform group-hover/btn:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      ></path>
                    </svg>
                  </span>
                  <div class="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 transition-opacity group-hover/btn:opacity-100"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section class="relative overflow-hidden bg-gradient-to-br from-slate-100 via-white to-purple-50 py-20">
        <div class="container mx-auto px-4">
          <div class="fade-in-up mx-auto mb-16 max-w-3xl text-center">
            <h2 class="mb-6 text-4xl leading-tight font-bold lg:text-5xl">
              <span class="text-purple-600">Ready to Build Your</span>
              <br />
              <span class="text-orange-500">Brand Story?</span>
            </h2>
            <p class="text-xl leading-relaxed text-slate-600">
              Let our brand experts help you create a visual identity that
              resonates with your audience and drives business growth.
            </p>
          </div>

          <div class="fade-in-up mx-auto max-w-4xl">
            <div class="rounded-3xl border border-slate-100 bg-white p-8 shadow-2xl">
              <div class="grid items-center gap-8 md:grid-cols-2">
                <div>
                  <h3 class="mb-4 text-3xl font-bold text-slate-800">
                    Brand Consultation
                  </h3>
                  <p class="mb-6 leading-relaxed text-slate-600">
                    Schedule a 40-minute consultation with our branding
                    specialists. We'll discuss your vision and recommend the
                    best approach for your brand.
                  </p>
                  <div class="space-y-3">
                    <div class="flex items-center gap-3">
                      <div class="flex h-6 w-6 items-center justify-center rounded-full bg-purple-500 text-sm text-white">
                        ✓
                      </div>
                      <span class="text-slate-700">
                        Brand strategy discussion
                      </span>
                    </div>
                    <div class="flex items-center gap-3">
                      <div class="flex h-6 w-6 items-center justify-center rounded-full bg-purple-500 text-sm text-white">
                        ✓
                      </div>
                      <span class="text-slate-700">
                        Design direction guidance
                      </span>
                    </div>
                    <div class="flex items-center gap-3">
                      <div class="flex h-6 w-6 items-center justify-center rounded-full bg-purple-500 text-sm text-white">
                        ✓
                      </div>
                      <span class="text-slate-700">
                        Custom package recommendation
                      </span>
                    </div>
                  </div>
                </div>
                <div class="text-center">
                  <div
                    class="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-amber-400 text-4xl text-white">
                    🎨
                  </div>
                  <a
                    href="https://bizassist.webhoga.com/business-consultation-2/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 no-underline inline-block">
                    <span class="relative z-10 flex items-center gap-2">
                      📞 Book Consultation
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none"
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