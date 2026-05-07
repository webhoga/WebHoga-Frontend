import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useScrollAnimate } from "~/hooks/useScrollAnimate";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import ServicesSection from "~/components/ServicesSection";
import BeforeAfterSlider from "~/components/BeforeAfterSlider";
import PricingSection from "~/components/PricingSection";
import { AdsCta } from "~/components/AdsCta";

export const head: DocumentHead = {
  title: "WebHoga – Premium Web Design & AI Solutions Agency in India",
  meta: [
    {
      name: "description",
      content:
        "WebHoga delivers cutting-edge AI solutions and SEO-optimized, high-performance websites for Indian and global businesses — including custom-coded platforms, WordPress sites, AI consulting, and eCommerce solutions.",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      property: "og:title",
      content: "WebHoga – Premium Web Design & AI Solutions Agency in India",
    },
    {
      property: "og:description",
      content:
        "AI-powered, SEO-ready, high-performance websites — custom-coded, WordPress, eCommerce, and custom AI agents — for Indian and global businesses.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://www.webhoga.com",
    },
    {
      property: "og:image",
      content: "https://webhoga.com/assets/DuEqx7Yt-WebHoga%20Logo.png",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "WebHoga – Premium Web Design & AI Solutions Agency in India",
    },
    {
      name: "twitter:description",
      content:
        "AI-powered websites and custom AI consulting — fast, SEO-optimized solutions for Indian and global businesses.",
    },
    {
      name: "twitter:image",
      content: "https://webhoga.com/assets/DuEqx7Yt-WebHoga%20Logo.png",
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
      role: "CEO",
      initials: "RS",
      color: "from-blue-500 to-indigo-500",
      quote: "WebHoga completely transformed our online presence. Our website went from looking outdated to absolutely stunning, and our conversions increased by 300% within the first month!"
    },
    {
      name: "Priya Patel",
      role: "Founder",
      initials: "PP",
      color: "from-pink-500 to-rose-500",
      quote: "The team at WebHoga delivered beyond our expectations. Our e-commerce site is not only beautiful but also incredibly fast. Sales have doubled since the redesign!"
    },
    {
      name: "Amit Kumar",
      role: "Director",
      initials: "AK",
      color: "from-green-500 to-emerald-500",
      quote: "Best decision we made was hiring WebHoga. Their SEO expertise got us ranking #1 for our main keywords within 3 months. Highly professional and results-driven team!"
    },
    {
      name: "Sneha Reddy",
      role: "Owner",
      initials: "SR",
      color: "from-orange-500 to-amber-500",
      quote: "WebHoga understood our vision perfectly. They created a website that truly represents our brand values. The ongoing support has been exceptional. Couldn't ask for better partners!"
    },
    {
      name: "Vikram Singh",
      role: "Managing Partner",
      initials: "VS",
      color: "from-purple-500 to-violet-500",
      quote: "Professional, punctual, and precise. WebHoga delivered our law firm's website on time and within budget. The mobile responsiveness is flawless and we're getting more client inquiries daily."
    },
    {
      name: "Anjali Mehta",
      role: "Marketing Head",
      initials: "AM",
      color: "from-teal-500 to-cyan-500",
      quote: "Working with WebHoga was a game-changer. They revamped our landing pages and our ad campaigns started converting like never before. Their UX insights are spot on!"
    },
    {
      name: "Rohan Desai",
      role: "CTO",
      initials: "RD",
      color: "from-red-500 to-rose-600",
      quote: "The technical expertise WebHoga brought to the table was impressive. Our site's performance metrics improved across the board, and load times are now under 2 seconds."
    },
    {
      name: "Neha Kapoor",
      role: "Product Manager",
      initials: "NK",
      color: "from-yellow-500 to-lime-500",
      quote: "WebHoga's team worked like an extension of ours. They were collaborative, transparent, and always ready with creative solutions. Our product launch went smoother thanks to them!"
    },
    {
      name: "Siddharth Iyer",
      role: "COO",
      initials: "SI",
      color: "from-sky-500 to-blue-600",
      quote: "From wireframes to deployment, WebHoga handled everything with professionalism and attention to detail. We've had zero downtime since launch and the feedback has been phenomenal."
    },
    {
      name: "Antony Rossario",
      role: "Head of Design",
      initials: "AR",
      color: "from-indigo-500 to-purple-600",
      quote: "Creative, communicative, and committed. WebHoga didn't just build us a website — they built a digital experience that aligns perfectly with our brand."
    }
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
          <div class="flex min-h-[80vh] items-center justify-center">
            {/* Centered Content Block */}
            <div class="fade-in-up space-y-8 max-w-3xl text-center">
              {/* Premium Badge */}
              <div class="mt-12 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-2 text-sm font-medium text-white shadow-lg justify-center mx-auto">
                <span class="h-2 w-2 animate-pulse rounded-full bg-white"></span>
                India's Premium Web Design & AI Solutions Agency
              </div>

              {/* Main Headline */}
              <div class="space-y-4">
                <h1 class="text-5xl leading-tight font-bold lg:text-7xl">
                  <span class="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 bg-clip-text text-transparent">
                    WebHoga
                  </span>
                  <br />
                  <span class="text-slate-800">AI-Powered Web Design &</span>
                  <br />
                  <span class="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Custom AI Solutions
                  </span>
                </h1>
              </div>

              {/* Subheading */}
              <p class="max-w-2xl text-xl leading-relaxed text-slate-600 lg:text-2xl mx-auto">
                We craft{" "}
                <span class="font-semibold text-orange-600">blazing-fast</span>,
                <span class="font-semibold text-blue-600"> mobile-first</span>,
                <span class="font-semibold text-amber-600"> SEO-optimized</span>{" "}
                websites and implement{" "}
                <span class="font-semibold text-emerald-600">custom AI solutions</span> that deliver measurable ROI through increased
                <span class="font-semibold text-green-600">
                  {" "}
                  traffic, leads, sales, and automation
                </span>
                .
              </p>

              {/* Trust Indicators */}
              <div class="flex flex-col items-center gap-4 text-sm text-slate-600 justify-center">
                <div class="flex items-center gap-2">
                  <div class="h-3 w-3 rounded-full bg-green-500"></div>
                  <span>Trusted by 100+ Growing Indian Businesses</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="h-3 w-3 rounded-full bg-blue-500"></div>
                  <span>99% Client Retention Rate</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div class="flex flex-col gap-4 pt-4 sm:flex-row justify-center">
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
              <div class="grid grid-cols-3 gap-6 border-t border-slate-200 pt-8 mx-auto max-w-2xl">
                <div class="text-center">
                  <div class="text-3xl font-bold text-orange-600">100+</div>
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
          </div>
        </div>
      </section>

      <ServicesSection />
      
      {/* Bottom CTA */}
      <div class="fade-in-up mt-16 mb-20 text-center">
        <div class="inline-flex flex-col gap-4 sm:flex-row">
          
          <a href="/services" class="group relative inline-block transform overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
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
          
          <a href="/contact" class="group relative inline-block transform overflow-hidden rounded-xl border-2 border-orange-500 bg-white px-8 py-4 text-lg font-semibold text-orange-600 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500 hover:text-white">
            <span class="flex items-center gap-2">
              Get Custom Quote
            </span>
          </a>
        </div>
        
        <p class="mt-4 mb-8 text-sm text-slate-500">
          Consultation Available • No hidden fees • 100% satisfaction guarantee
        </p>
      </div>
      
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
                  100+ Happy Clients
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
                        <span class="text-2xl text-yellow-400">⭐</span>
                        <span class="text-2xl text-yellow-400">⭐</span>
                        <span class="text-2xl text-yellow-400">⭐</span>
                        <span class="text-2xl text-yellow-400">⭐</span>
                        <span class="text-2xl text-yellow-400">⭐</span>
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
