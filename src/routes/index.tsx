.import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useScrollAnimate } from "~/hooks/useScrollAnimate";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import BeforeAfterSlider from "~/components/BeforeAfterSlider";
import PricingSection from "~/components/PricingSection";
import { AdsCta } from "~/components/AdsCta";

export const head: DocumentHead = {
  title: "WebHoga – Premium Web Design Agency in India",
  meta: [
    {
      name: "description",
      content:
      "WebHoga builds SEO-ready, high-performance websites — custom-coded, WordPress, and eCommerce — for Indian and global businesses.",
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

  const currentSlide = useSignal(0);
  const testimonials = [
    {
      name: "Rajesh Sharma",
      role: "CEO, TechStart India",
      initials: "RS",
      color: "from-blue-500 to-indigo-500",
      quote: "WebHoga completely transformed our online presence. Our website went from looking outdated to absolutely stunning, and our conversions increased by 300% within the first month!",
    },
    {
      name: "Priya Patel",
      role: "Founder, StyleHub Fashion",
      initials: "PP",
      color: "from-pink-500 to-rose-500",
      quote: "The team at WebHoga delivered beyond our expectations. Our e-commerce site is not only beautiful but also incredibly fast. Sales have doubled since the redesign!",
    },
    {
      name: "Amit Kumar",
      role: "Director, EduTech Solutions",
      initials: "AK",
      color: "from-green-500 to-emerald-500",
      quote: "Best decision we made was hiring WebHoga. Their SEO expertise got us ranking #1 for our main keywords within 3 months. Highly professional and results-driven team!",
    },
    {
      name: "Sneha Reddy",
      role: "Owner, Organic Foods Co.",
      initials: "SR",
      color: "from-orange-500 to-amber-500",
      quote: "WebHoga understood our vision perfectly. They created a website that truly represents our brand values. The ongoing support has been exceptional. Couldn't ask for better partners!",
    },
    {
      name: "Vikram Singh",
      role: "Managing Partner, Legal Associates",
      initials: "VS",
      color: "from-purple-500 to-violet-500",
      quote: "Professional, punctual, and precise. WebHoga delivered our law firm's website on time and within budget. The mobile responsiveness is flawless and we're getting more client inquiries daily.",
    },
  ];

  useVisibleTask$(() => {
    const interval = setInterval(() => {
      currentSlide.value = (currentSlide.value + 1) % testimonials.length;
    }, 5000);

    return () => clearInterval(interval);
  });

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section class="relative min-h-screen overflow-hidden bg-gradient-to-br from-orange-50 via-white to-blue-50">
        {/* Animated Background Elements */}
        <div class="absolute inset-0 overflow-hidden">
          <div class="absolute top-20 right-20 h-72 w-72 animate-pulse rounded-full bg-gradient-to-br from-orange-400/20 to-amber-400/20 blur-3xl"></div>
          <div class="absolute bottom-20 left-20 h-96 w-96 animate-pulse rounded-full bg-gradient-to-tr from-blue-400/15 to-cyan-400/15 blur-3xl delay-1000"></div>
          <div class="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 transform animate-bounce rounded-full bg-gradient-to-r from-amber-300/10 to-orange-300/10 blur-2xl"></div>
        </div>

        {/* Geometric Pattern Overlay */}
        <div class="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" viewBox="0 0 100 100">
            <defs>
              <pattern
                id="geometric"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <polygon
                  points="10,2 18,7 18,13 10,18 2,13 2,7"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#geometric)" />
          </svg>
        </div>

        <div class="relative z-10 container mx-auto px-4 py-20">
          <div class="grid min-h-[80vh] items-center gap-12 lg:grid-cols-2">
            {/* Left Content Block */}
            <div class="fade-in-up space-y-8">
              {/* Premium Badge */}
              <div class="mt-12 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-2 text-sm font-medium text-white shadow-lg">
                <span class="h-2 w-2 animate-pulse rounded-full bg-white"></span>
                India's Premium Web Design Agency
              </div>

              {/* Main Headline */}
              <div class="space-y-4">
                <h1 class="text-5xl leading-tight font-bold lg:text-7xl">
                  <span class="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 bg-clip-text text-transparent">
                    WebHoga
                  </span>
                  <br />
                  <span class="text-slate-800">Designs That</span>
                  <br />
                  <span class="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Win Clients
                  </span>
                </h1>
              </div>

              {/* Subheading */}
              <p class="max-w-2xl text-xl leading-relaxed text-slate-600 lg:text-2xl">
                We craft{" "}
                <span class="font-semibold text-orange-600">blazing-fast</span>,
                <span class="font-semibold text-blue-600"> mobile-first</span>,
                <span class="font-semibold text-amber-600"> SEO-optimized</span>{" "}
                websites that deliver measurable ROI through increased
                <span class="font-semibold text-green-600">
                  {" "}
                  traffic, leads, and sales
                </span>
                .
              </p>

              {/* Trust Indicators */}
              <div class="flex items-center gap-6 text-sm text-slate-600">
                <div class="flex items-center gap-2">
                  <div class="h-3 w-3 rounded-full bg-green-500"></div>
                  <span>Trusted by 500+ Growing Indian Businesses</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="h-3 w-3 rounded-full bg-blue-500"></div>
                  <span>99% Client Retention Rate</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div class="flex flex-col gap-4 pt-4 sm:flex-row">
                <a
                  href="/contact"
                  class="group relative inline-block transform overflow-hidden rounded-xl border-2 border-blue-500 bg-white px-8 py-4 text-lg font-semibold text-blue-600 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:text-white"
                >
                  <span class="flex items-center gap-2">
                    Get Free Proposal
                    <svg
                      class="h-5 w-5 transition-transform group-hover:rotate-12"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                  </span>
                </a>
              </div>

              {/* Quick Stats */}
              <div class="grid grid-cols-3 gap-6 border-t border-slate-200 pt-8">
                <div class="text-center">
                  <div class="text-3xl font-bold text-orange-600">500+</div>
                  <div class="text-sm text-slate-600">Projects Delivered</div>
                </div>
                <div class="text-center">
                  <div class="text-3xl font-bold text-blue-600">48hr</div>
                  <div class="text-sm text-slate-600">Quick Turnaround</div>
                </div>
                <div class="text-center">
                  <div class="text-3xl font-bold text-amber-600">24/7</div>
                  <div class="text-sm text-slate-600">Support Available</div>
                </div>
              </div>
            </div>

            {/* Right Visual Block - Enhanced Dynamic Mockup */}
            <div class="fade-in-up relative">
              {/* Main Image Container */}
              <div class="relative z-10">
                <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-gray-50 p-6 shadow-2xl">
                  {/* Mock Website Preview - Enhanced Iyers Academy */}
                  <div class="space-y-4">
                    {/* Browser Bar */}
                    <div class="flex items-center gap-2 rounded-lg bg-gray-100 p-3">
                      <div class="flex gap-2">
                        <div class="h-3 w-3 rounded-full bg-red-400"></div>
                        <div class="h-3 w-3 rounded-full bg-yellow-400"></div>
                        <div class="h-3 w-3 rounded-full bg-green-400"></div>
                      </div>
                      <div class="flex-1 rounded bg-white px-3 py-1 text-sm text-gray-500">
                        🔒 iyersacademy.in
                      </div>
                      <div class="text-gray-400">
                        <svg
                          class="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <circle cx="5" cy="12" r="2" />
                          <circle cx="12" cy="12" r="2" />
                          <circle cx="19" cy="12" r="2" />
                        </svg>
                      </div>
                    </div>

                    {/* Website Content - Enhanced with Images */}
                    <div class="custom-scrollbar max-h-96 space-y-4 overflow-hidden overflow-y-auto rounded-lg bg-white">
                      {/* Header with Hero Image */}
                      <div class="relative">
                        {/* Background Hero Image */}
                        <div class="relative h-32 overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900">
                          {/* Overlay pattern */}
                          <div class="absolute inset-0 bg-black/20"></div>
                          <div class="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-indigo-700/90"></div>
                          {/* Abstract education pattern */}
                          <div class="absolute inset-0 opacity-10">
                            <svg class="h-full w-full" viewBox="0 0 100 100">
                              <circle cx="20" cy="20" r="2" fill="white" />
                              <circle cx="80" cy="30" r="1.5" fill="white" />
                              <circle cx="60" cy="70" r="1" fill="white" />
                              <circle cx="30" cy="80" r="2.5" fill="white" />
                              <circle cx="90" cy="60" r="1" fill="white" />
                              <circle cx="10" cy="60" r="1.5" fill="white" />
                            </svg>
                          </div>
                        </div>

                        {/* Header Content */}
                        <div class="absolute inset-0 flex items-center justify-between p-4 text-white">
                          <div class="flex items-center gap-3">
                            <div class="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/20 text-lg font-bold backdrop-blur-sm">
                              <span class="text-orange-300">🎓</span>
                            </div>
                            <div>
                              <div class="text-xl font-bold">Iyers Academy</div>
                              <div class="text-sm text-blue-100">
                                Excellence in Medical & Engineering Education
                              </div>
                            </div>
                          </div>
                          <div class="rounded-full border border-orange-400/50 bg-orange-500/90 px-3 py-2 text-sm backdrop-blur-sm">
                            📞 Contact Now
                          </div>
                        </div>
                      </div>

                      {/* Navigation */}
                      <div class="flex gap-4 border-b border-gray-100 px-4 pb-2 text-sm">
                        <div class="border-b-2 border-blue-600 pb-2 font-semibold text-blue-600">
                          🏠 Home
                        </div>
                        <div class="pb-2 text-gray-600 hover:text-blue-600">
                          📚 Courses
                        </div>
                        <div class="pb-2 text-gray-600 hover:text-blue-600">
                          👨‍🏫 Faculty
                        </div>
                        <div class="pb-2 text-gray-600 hover:text-blue-600">
                          🏆 Results
                        </div>
                        <div class="pb-2 text-gray-600 hover:text-blue-600">
                          ℹ️ About
                        </div>
                      </div>

                      {/* Announcement Banner */}
                      <div class="px-4">
                        <div class="relative overflow-hidden rounded-lg bg-gradient-to-r from-red-500 to-pink-600 p-4 text-white">
                          <div class="absolute inset-0 bg-gradient-to-r from-red-600/50 to-pink-700/50"></div>
                          <div class="relative z-10">
                            <div class="flex items-center gap-2 text-lg font-bold">
                              <span class="animate-pulse">🎯</span>
                              <span>NEET 2024 Results Out!</span>
                              <span class="animate-bounce">🎉</span>
                            </div>
                            <div class="mt-1 text-sm text-red-100">
                              89% Students Cleared with Top Ranks • View Results
                              →
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Hero Section with Student Image */}
                      <div class="space-y-3 px-4">
                        <div class="rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
                          <div class="flex items-center gap-4">
                            {/* Student Success Image Placeholder */}
                            <div class="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-500 text-2xl text-white">
                              👨‍🎓
                            </div>
                            <div class="flex-1">
                              <div class="text-lg font-bold text-blue-900">
                                Join 5000+ Successful Students
                              </div>
                              <div class="text-sm text-blue-700">
                                NEET • JEE • Foundation Courses
                              </div>
                              <div class="mt-1 flex gap-1">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <span key={i} class="text-sm text-yellow-400">
                                    ⭐
                                  </span>
                                ))}
                                <span class="ml-1 text-sm text-gray-600">
                                  (4.9/5)
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Live Stats Cards */}
                      <div class="grid grid-cols-3 gap-2 px-4">
                        <div class="rounded-lg border border-green-100 bg-gradient-to-br from-green-50 to-emerald-50 p-3 text-center">
                          <div class="flex items-center justify-center gap-1 text-xl font-bold text-green-600">
                            <span class="animate-pulse">📈</span>
                            <span>98%</span>
                          </div>
                          <div class="text-xs font-medium text-green-700">
                            Success Rate
                          </div>
                        </div>
                        <div class="rounded-lg border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 p-3 text-center">
                          <div class="flex items-center justify-center gap-1 text-xl font-bold text-blue-600">
                            <span>🎯</span>
                            <span>AIR 1</span>
                          </div>
                          <div class="text-xs font-medium text-blue-700">
                            Top Rank
                          </div>
                        </div>
                        <div class="rounded-lg border border-purple-100 bg-gradient-to-br from-purple-50 to-violet-50 p-3 text-center">
                          <div class="flex items-center justify-center gap-1 text-xl font-bold text-purple-600">
                            <span>👥</span>
                            <span>5000+</span>
                          </div>
                          <div class="text-xs font-medium text-purple-700">
                            Alumni
                          </div>
                        </div>
                      </div>

                      {/* Faculty Section with Images */}
                      <div class="space-y-3 px-4">
                        <div class="flex items-center justify-between">
                          <div class="flex items-center gap-2 font-semibold text-gray-800">
                            <span>👨‍🏫</span>
                            <span>Expert Faculty</span>
                          </div>
                          <div class="text-sm text-blue-600">View All →</div>
                        </div>
                        <div class="flex gap-3 overflow-x-auto">
                          {/* Faculty Cards */}
                          <div class="w-32 flex-shrink-0 rounded-lg border border-gray-200 bg-white p-3">
                            <div class="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-xl text-white">
                              👨‍🔬
                            </div>
                            <div class="text-center">
                              <div class="text-xs font-medium">Dr. Sharma</div>
                              <div class="text-xs text-gray-500">
                                Physics • 15 yrs
                              </div>
                              <div class="mt-1 flex justify-center gap-1">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <span key={i} class="text-xs text-yellow-400">
                                    ⭐
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div class="w-32 flex-shrink-0 rounded-lg border border-gray-200 bg-white p-3">
                            <div class="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-xl text-white">
                              🧬
                            </div>
                            <div class="text-center">
                              <div class="text-xs font-medium">Dr. Priya</div>
                              <div class="text-xs text-gray-500">
                                Biology • 12 yrs
                              </div>
                              <div class="mt-1 flex justify-center gap-1">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <span key={i} class="text-xs text-yellow-400">
                                    ⭐
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div class="w-32 flex-shrink-0 rounded-lg border border-gray-200 bg-white p-3">
                            <div class="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-violet-600 text-xl text-white">
                              🧮
                            </div>
                            <div class="text-center">
                              <div class="text-xs font-medium">Prof. Kumar</div>
                              <div class="text-xs text-gray-500">
                                Math • 18 yrs
                              </div>
                              <div class="mt-1 flex justify-center gap-1">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <span key={i} class="text-xs text-yellow-400">
                                    ⭐
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Courses Section Enhanced */}
                      <div class="space-y-3 px-4">
                        <div class="flex items-center gap-2 font-semibold text-gray-800">
                          <span>📚</span>
                          <span>Popular Courses</span>
                          <span class="ml-auto animate-pulse text-xs text-red-500">
                            🔥 Hot
                          </span>
                        </div>
                        <div class="space-y-2">
                          <div class="flex items-center gap-3 rounded-lg border border-blue-100 bg-gradient-to-r from-blue-50 to-cyan-50 p-3 transition-shadow hover:shadow-md">
                            <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-lg text-white">
                              🏥
                            </div>
                            <div class="flex-1">
                              <div class="flex items-center gap-2 text-sm font-medium">
                                <span>NEET Foundation</span>
                                <span class="rounded-full bg-green-100 px-2 py-1 text-xs text-green-700">
                                  98% Success
                                </span>
                              </div>
                              <div class="text-xs text-gray-500">
                                Class 11-12 • Medical Entrance • Live Classes
                              </div>
                              <div class="text-xs font-medium text-blue-600">
                                ₹15,000/year • EMI Available
                              </div>
                            </div>
                            <div class="text-sm text-blue-600">→</div>
                          </div>
                          <div class="flex items-center gap-3 rounded-lg border border-green-100 bg-gradient-to-r from-green-50 to-emerald-50 p-3 transition-shadow hover:shadow-md">
                            <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-500 text-lg text-white">
                              ⚙️
                            </div>
                            <div class="flex-1">
                              <div class="flex items-center gap-2 text-sm font-medium">
                                <span>JEE Advanced</span>
                                <span class="rounded-full bg-orange-100 px-2 py-1 text-xs text-orange-700">
                                  AIR 1 Record
                                </span>
                              </div>
                              <div class="text-xs text-gray-500">
                                Engineering • IIT Preparation • Doubt Solving
                              </div>
                              <div class="text-xs font-medium text-green-600">
                                ₹18,000/year • Scholarship Available
                              </div>
                            </div>
                            <div class="text-sm text-green-600">→</div>
                          </div>
                        </div>
                      </div>

                      {/* Student Testimonials */}
                      <div class="space-y-3 px-4">
                        <div class="flex items-center gap-2 font-semibold text-gray-800">
                          <span>💬</span>
                          <span>Student Reviews</span>
                        </div>
                        <div class="rounded-lg border border-yellow-100 bg-gradient-to-r from-yellow-50 to-orange-50 p-3">
                          <div class="flex items-start gap-3">
                            <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 text-sm text-white">
                              👨‍🎓
                            </div>
                            <div class="flex-1">
                              <div class="mb-1 flex items-center gap-2">
                                <div class="text-sm font-medium">
                                  Arjun Patel
                                </div>
                                <div class="rounded-full bg-green-100 px-2 py-1 text-xs text-green-700">
                                  NEET AIR 47
                                </div>
                              </div>
                              <div class="text-xs text-gray-600 italic">
                                "Best coaching in Kerala! Faculty is amazing and
                                study material is top-notch."
                              </div>
                              <div class="mt-2 flex gap-1">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <span key={i} class="text-xs text-yellow-400">
                                    ⭐
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* CTA Section Enhanced */}
                      <div class="px-4 pb-4">
                        <div class="relative overflow-hidden rounded-xl bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 p-4 text-center text-white">
                          <div class="absolute inset-0 bg-gradient-to-r from-orange-600/50 to-pink-600/50"></div>
                          <div class="relative z-10">
                            <div class="mb-2 flex items-center justify-center gap-2 text-lg font-bold">
                              <span class="animate-bounce">🚀</span>
                              <span>Start Your Dream Journey</span>
                              <span class="animate-bounce">🎯</span>
                            </div>
                            <div class="text-sm text-orange-100">
                              Free Demo Class • Career Counseling • Study
                              Material
                            </div>
                            <div class="mt-3 inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                              📞 Call Now: +91-9876543210
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Footer Credit */}
                      <div class="px-4 pb-4">
                        <div class="border-t border-gray-100 pt-3 text-center text-xs text-gray-400">
                          <div class="flex items-center justify-center gap-2">
                            <span>Designed with</span>
                            <span class="animate-pulse text-red-500">❤️</span>
                            <span>by</span>
                            <span class="font-semibold text-orange-500">
                              WebHoga
                            </span>
                            <span class="text-green-500">✨</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Achievement Badges */}
                  <div class="absolute -top-4 -right-4 flex h-20 w-20 animate-bounce items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-amber-400 text-2xl text-white shadow-lg">
                    🏆
                  </div>
                  <div class="absolute -bottom-4 -left-4 flex h-16 w-16 animate-pulse items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 text-xl text-white shadow-lg">
                    ⚡
                  </div>
                </div>

                {/* Background Decorative Elements */}
                <div class="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-gradient-to-br from-orange-300/30 to-amber-300/30 blur-xl"></div>
                <div class="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-gradient-to-br from-blue-300/30 to-cyan-300/30 blur-xl"></div>
              </div>

              {/* Enhanced Side Floating Cards */}
              <div class="animate-float absolute top-10 -left-10 rounded-xl border border-green-100 bg-white p-4 shadow-lg">
                <div class="flex items-center gap-3">
                  <div class="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-500 text-white">
                    🎯
                  </div>
                  <div>
                    <div class="text-sm font-semibold">SEO Optimized</div>
                    <div class="text-xs text-gray-500">Rank #1 on Google</div>
                    <div class="text-xs font-medium text-green-600">
                      +300% Traffic
                    </div>
                  </div>
                </div>
              </div>

              <div class="animate-float absolute -right-10 bottom-10 rounded-xl border border-blue-100 bg-white p-4 shadow-lg delay-500">
                <div class="flex items-center gap-3">
                  <div class="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
                    📱
                  </div>
                  <div>
                    <div class="text-sm font-semibold">Mobile First</div>
                    <div class="text-xs text-gray-500">
                      Perfect on all devices
                    </div>
                    <div class="text-xs font-medium text-blue-600">
                      100% Responsive
                    </div>
                  </div>
                </div>
              </div>

              <div class="animate-float absolute top-1/2 -right-16 rounded-xl border border-purple-100 bg-white p-3 shadow-lg delay-1000">
                <div class="flex items-center gap-2">
                  <div class="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-violet-500 text-sm text-white">
                    ⚡
                  </div>
                  <div>
                    <div class="text-xs font-semibold">Lightning Fast</div>
                    <div class="text-xs text-gray-500">0.8s Load Time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        class="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20"
      >
        {/* Background Elements */}
        <div class="absolute inset-0 overflow-hidden">
          <div class="absolute top-20 left-20 h-64 w-64 rounded-full bg-gradient-to-br from-blue-400/10 to-cyan-400/10 blur-3xl"></div>
          <div class="absolute right-20 bottom-20 h-80 w-80 rounded-full bg-gradient-to-tr from-orange-400/10 to-amber-400/10 blur-3xl"></div>
        </div>

        <div class="relative z-10 container mx-auto px-4">
          {/* Section Header */}
          <div class="fade-in-up mx-auto mb-16 max-w-3xl text-center">
            <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2 text-sm font-medium text-white shadow-lg">
              <span class="h-2 w-2 animate-pulse rounded-full bg-white"></span>
              Our Expert Services
            </div>

            <h2 class="mb-6 text-4xl leading-tight font-bold lg:text-5xl">
              <span class="text-slate-800">Everything You Need to</span>
              <br />
              <span class="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 bg-clip-text text-transparent">
                Dominate Online
              </span>
            </h2>

            <p class="text-xl leading-relaxed text-slate-600">
              From stunning web designs to powerful SEO strategies, we provide
              <span class="font-semibold text-blue-600">
                {" "}
                end-to-end digital solutions{" "}
              </span>
              that drive real business growth.
            </p>
          </div>

          {/* Services Grid */}
          <div class="fade-in-up grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Web Designing */}
            <div class="group relative transform overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div class="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div class="relative z-10">
                <div class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-2xl text-white transition-transform group-hover:scale-110">
                  🎨
                </div>
                <h3 class="mb-4 text-2xl font-bold text-slate-800">
                  Web Designing
                </h3>
                <p class="mb-6 leading-relaxed text-slate-600">
                  Custom, responsive websites that captivate visitors and
                  convert them into customers. Modern designs that work
                  perfectly on all devices.
                </p>
                <div class="flex items-center font-semibold text-blue-600 transition-all group-hover:gap-3">
                  <span>
                    <a href="/web-designing">Learn More</a>
                  </span>
                  <svg
                    class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
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
                </div>
              </div>
            </div>

            {/* Domain + Hosting */}
            <div class="group relative transform overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div class="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div class="relative z-10">
                <div class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 text-2xl text-white transition-transform group-hover:scale-110">
                  🌐
                </div>
                <h3 class="mb-4 text-2xl font-bold text-slate-800">
                  Domain + Hosting
                </h3>
                <p class="mb-6 leading-relaxed text-slate-600">
                  Secure, fast hosting solutions with free SSL certificates. We
                  handle domain registration and management so you can focus on
                  your business.
                </p>
                <div class="flex items-center font-semibold text-green-600 transition-all group-hover:gap-3">
                  <span>
                    <a href="/domain-and-hosting">Learn More</a>
                  </span>
                  <svg
                    class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
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
                </div>
              </div>
            </div>

            {/* Logo & Brand Identity */}
            <div class="group relative transform overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div class="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-violet-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div class="relative z-10">
                <div class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-violet-500 text-2xl text-white transition-transform group-hover:scale-110">
                  🎯
                </div>
                <h3 class="mb-4 text-2xl font-bold text-slate-800">
                  Logo & Brand Identity
                </h3>
                <p class="mb-6 leading-relaxed text-slate-600">
                  Memorable brand identities that stand out from the
                  competition. Professional logos and complete brand guidelines
                  for consistent growth.
                </p>
                <div class="flex items-center font-semibold text-purple-600 transition-all group-hover:gap-3">
                  <span>
                    <a href="/logo-and-brand-identity">Learn More</a>
                  </span>
                  <svg
                    class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
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
                </div>
              </div>
            </div>

            {/* SEO & Web Optimization */}
            <div class="group relative transform overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div class="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div class="relative z-10">
                <div class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 text-2xl text-white transition-transform group-hover:scale-110">
                  📈
                </div>
                <h3 class="mb-4 text-2xl font-bold text-slate-800">
                  SEO & Web Optimization
                </h3>
                <p class="mb-6 leading-relaxed text-slate-600">
                  Get found on Google with our proven SEO strategies.
                  Lightning-fast websites that rank higher and convert better
                  than your competitors.
                </p>
                <div class="flex items-center font-semibold text-orange-600 transition-all group-hover:gap-3">
                  <span>
                    <a href="/seo-and-web-optimization">Learn More</a>
                  </span>
                  <svg
                    class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
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
                </div>
              </div>
            </div>

            {/* Content & Blog Writing */}
            <div class="group relative transform overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div class="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-rose-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div class="relative z-10">
                <div class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 text-2xl text-white transition-transform group-hover:scale-110">
                  ✍️
                </div>
                <h3 class="mb-4 text-2xl font-bold text-slate-800">
                  Content & Blog Writing
                </h3>
                <p class="mb-6 leading-relaxed text-slate-600">
                  Engaging, SEO-optimized content that attracts your ideal
                  customers. Professional blog posts and website copy that
                  drives conversions.
                </p>
                <div class="flex items-center font-semibold text-pink-600 transition-all group-hover:gap-3">
                  <span>
                    <a href="/content-and-blog-writing">Learn More</a>
                  </span>
                  <svg
                    class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
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
                </div>
              </div>
            </div>

            {/* Ecommerce Web Designing */}
            <div class="group relative transform overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-blue-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div class="relative z-10">
                <div class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 text-2xl text-white transition-transform group-hover:scale-110">
                  🛒
                </div>
                <h3 class="mb-4 text-2xl font-bold text-slate-800">
                  Ecommerce Web Designing
                </h3>
                <p class="mb-6 leading-relaxed text-slate-600">
                  High-converting online stores that maximize sales.
                  User-friendly shopping experiences with secure checkout and
                  inventory management.
                </p>
                <div class="flex items-center font-semibold text-indigo-600 transition-all group-hover:gap-3">
                  <span>
                    <a href="/ecommerce-web-designing">Learn More</a>
                  </span>
                  <svg
                    class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
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
                </div>
              </div>
            </div>

            {/* Google Analytics & Tracking */}
            <div class="group relative transform overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div class="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div class="relative z-10">
                <div class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 text-2xl text-white transition-transform group-hover:scale-110">
                  📊
                </div>
                <h3 class="mb-4 text-2xl font-bold text-slate-800">
                  Google Analytics & Tracking
                </h3>
                <p class="mb-6 leading-relaxed text-slate-600">
                  Data-driven insights to grow your business. Complete analytics
                  setup with detailed reporting and performance tracking.
                </p>
                <div class="flex items-center font-semibold text-teal-600 transition-all group-hover:gap-3">
                  <span>
                    <a href="/google-analytics-and-tracking/">Learn More</a>
                  </span>
                  <svg
                    class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
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
                </div>
              </div>
            </div>

            {/* Landing Page Design */}
            <div class="group relative transform overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div class="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div class="relative z-10">
                <div class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-500 text-2xl text-white transition-transform group-hover:scale-110">
                  🎯
                </div>
                <h3 class="mb-4 text-2xl font-bold text-slate-800">
                  Landing Page Design
                </h3>
                <p class="mb-6 leading-relaxed text-slate-600">
                  High-converting landing pages that turn visitors into
                  customers. Optimized for maximum conversions and lead
                  generation.
                </p>
                <div class="flex items-center font-semibold text-yellow-600 transition-all group-hover:gap-3">
                  <span>
                    <a href="/landing-page-development">Learn More</a>
                  </span>
                  <svg
                    class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
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
                </div>
              </div>
            </div>

            {/* Payment Gateway Integration */}
            <div class="group relative transform overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div class="absolute inset-0 bg-gradient-to-br from-red-500/5 to-pink-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div class="relative z-10">
                <div class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-pink-500 text-2xl text-white transition-transform group-hover:scale-110">
                  💳
                </div>
                <h3 class="mb-4 text-2xl font-bold text-slate-800">
                  Payment Gateway Integration
                </h3>
                <p class="mb-6 leading-relaxed text-slate-600">
                  Secure payment processing for your online business. Multiple
                  payment options with fraud protection and seamless checkout
                  experience.
                </p>
                <div class="flex items-center font-semibold text-red-600 transition-all group-hover:gap-3">
                  <span>
                    <a href="payment-gateway-integration">Learn More</a>
                  </span>
                  <svg
                    class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
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
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div class="fade-in-up mt-16 text-center">
            <div class="inline-flex flex-col gap-4 sm:flex-row">
              <a
                href="/services"
                class="group relative inline-block transform overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <span class="relative z-10 flex items-center gap-2">
                  See All Services
                  <svg
                    class="h-5 w-5 transition-transform group-hover:translate-x-1"
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
                <div class="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 transition-opacity group-hover:opacity-100"></div>
              </a>

              <a
                href="/contact"
                class="group relative inline-block transform overflow-hidden rounded-xl border-2 border-orange-500 bg-white px-8 py-4 text-lg font-semibold text-orange-600 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500 hover:text-white"
              >
                <span class="flex items-center gap-2">
                  Get Custom Quote
                </span>
              </a>
            </div>

            <p class="mt-4 text-sm text-slate-500">
              Consultation Available • No hidden fees • 100% satisfaction
              guarantee
            </p>
          </div>
        </div>
      </section>

      {/* Before/After Slider */}
      <BeforeAfterSlider />

     {/* Client Testimonials */}
      <div class="fade-in-up py-20">
        <div class="container mx-auto px-4">
          <div class="mx-auto max-w-4xl">
            {/* Testimonials Header */}
            <div class="mb-8 text-center">
              <div class="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-2 text-sm font-medium text-white shadow-lg">
                <span class="h-2 w-2 animate-pulse rounded-full bg-white"></span>
                What Our Clients Say
              </div>
              <h3 class="text-3xl font-bold text-slate-800 lg:text-4xl">
                Trusted by{" "}
                <span class="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  500+ Happy Clients
                </span>
              </h3>
            </div>

            {/* Testimonial Slider */}
            <div class="relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 shadow-2xl lg:p-12">
              {/* Testimonials Container */}
              <div class="relative min-h-[280px]">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    class={`absolute inset-0 transition-all duration-500 ease-in-out ${
                      index === currentSlide.value
                        ? "opacity-100 translate-x-0 z-10"
                        : index < currentSlide.value
                        ? "opacity-0 -translate-x-full z-0"
                        : "opacity-0 translate-x-full z-0"
                    }`}
                    style={{ pointerEvents: index === currentSlide.value ? 'auto' : 'none' }}
                  >
                    <div class="flex h-full flex-col items-center justify-center text-center">
                      {/* Stars */}
                      <div class="mb-6 flex items-center justify-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} class="text-2xl text-yellow-400">
                            ⭐
                          </span>
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote class="mb-8 text-xl leading-relaxed text-slate-700 italic lg:text-2xl">
                        "{testimonial.quote}"
                      </blockquote>

                      {/* Author */}
                      <div class="flex items-center justify-center gap-4">
                        <div
                          class={`flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${testimonial.color} text-xl font-bold text-white shadow-lg`}
                        >
                          {testimonial.initials}
                        </div>
                        <div class="text-left">
                          <div class="text-lg font-semibold text-slate-800">
                            {testimonial.name}
                          </div>
                          <div class="text-sm text-slate-600">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Dots */}
              <div class="mt-8 flex items-center justify-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick$={() => (currentSlide.value = index)}
                    class={`h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide.value
                        ? "w-8 bg-gradient-to-r from-orange-500 to-amber-500"
                        : "w-3 bg-slate-300 hover:bg-slate-400"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick$={() =>
                  (currentSlide.value =
                    (currentSlide.value - 1 + testimonials.length) %
                    testimonials.length)
                }
                class="absolute left-2 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-3 shadow-lg transition-all hover:scale-110 hover:bg-slate-50 lg:left-4"
                aria-label="Previous testimonial"
              >
                <svg
                  class="h-6 w-6 text-slate-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick$={() =>
                  (currentSlide.value =
                    (currentSlide.value + 1) % testimonials.length)
                }
                class="absolute right-2 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-3 shadow-lg transition-all hover:scale-110 hover:bg-slate-50 lg:right-4"
                aria-label="Next testimonial"
              >
                <svg
                  class="h-6 w-6 text-slate-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Decorative Elements */}
              <div class="absolute -top-4 -left-4 h-24 w-24 rounded-full bg-gradient-to-br from-orange-300/20 to-amber-300/20 blur-2xl"></div>
              <div class="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-gradient-to-br from-blue-300/20 to-cyan-300/20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <PricingSection />

      {/* WebHoga Ads CTA */}
      <AdsCta />

      <Footer />
    </>
  );
});
