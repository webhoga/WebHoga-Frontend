import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useScrollAnimate } from "~/hooks/useScrollAnimate";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export const head: DocumentHead = {
  title: "Content & Blog Writing Services - WebHoga | Professional SEO Content Creation",
  meta: [
    {
      name: "description",
      content: "Professional content and blog writing services that engage readers and boost SEO rankings. Custom content creation starting from ₹999 with WebHoga.",
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
      <section class="relative min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 overflow-hidden">
        {/* Animated Background Elements */}
        <div class="absolute inset-0 overflow-hidden">
          <div
            class="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            class="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-indigo-400/15 to-purple-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-pink-300/10 to-purple-300/10 rounded-full blur-2xl animate-bounce"></div>
        </div>

        <div class="relative z-10 container mx-auto px-4 py-20">
          <div class="text-center max-w-4xl mx-auto min-h-[80vh] flex flex-col justify-center">

            {/* Premium Badge */}
            <div
              class="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg mb-8 mt-12 fade-in-up">
              <span class="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Professional Content Creation
            </div>

            {/* Main Headline */}
            <div class="space-y-6 mb-8 fade-in-up">
              <h1 class="text-5xl lg:text-7xl font-bold leading-tight">
                <span class="text-purple-600">Content That</span>
                <br />
                <span class="text-orange-500">Engages &</span>
                <br />
                <span class="text-pink-600">Converts</span>
              </h1>
            </div>

            {/* Subheading */}
            <p class="text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-12 fade-in-up">
              From <span class="text-purple-600 font-semibold">SEO-optimized blog posts</span> to
              <span class="text-pink-600 font-semibold"> engaging web content</span> — we create
              <span class="text-indigo-600 font-semibold"> compelling narratives</span> that drive results.
            </p>

            {/* Trust Indicators */}
            <div class="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-600 mb-12 fade-in-up">
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span>500+ Articles Written</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-pink-500 rounded-full"></div>
                <span>SEO-Optimized Content</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-indigo-500 rounded-full"></div>
                <span>Research-Backed Writing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section class="relative py-20 bg-gradient-to-br from-slate-50 via-white to-purple-50 overflow-hidden">
        {/* Background Elements */}
        <div class="absolute inset-0 overflow-hidden">
          <div
            class="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
          <div
            class="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tr from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        </div>

        <div class="relative z-10 container mx-auto px-4">
          {/* Section Header */}
          <div class="text-center max-w-3xl mx-auto mb-16 fade-in-up">
            <div
              class="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg mb-6">
              <span class="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Choose Your Writing Service
            </div>

            <h2 class="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              <span class="text-purple-600">Professional Content &</span>
              <br />
              <span class="text-orange-500">Blog Writing Services</span>
            </h2>

            <p class="text-xl text-slate-600 leading-relaxed">
              High-quality, SEO-optimized <span class="text-purple-600 font-semibold">content and blogs</span> that
              <span class="text-pink-600 font-semibold"> engage readers and boost rankings</span>.
            </p>
          </div>

          {/* Service Card */}
          <div class="max-w-2xl mx-auto fade-in-up">

            {/* Content Writing Service */}
            <div
              class="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border border-slate-100 overflow-hidden">
              <div
                class="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="relative z-10">

                {/* Badge */}
                <div
                  class="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium mb-4 mx-auto">
                  <span class="w-2 h-2 bg-purple-500 rounded-full"></span>
                  SEO & Research-Backed
                </div>

                <h3 class="text-3xl font-bold text-slate-800 mb-6 text-center">Content & Blog Writing</h3>

                <p class="text-slate-600 mb-8 leading-relaxed text-lg text-center">
                  Engaging, SEO-optimized content and blog posts that capture attention and drive organic traffic. Research-backed writing that converts readers into customers.
                </p>

                {/* Features */}
                <div class="grid md:grid-cols-2 gap-4 mb-8">
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span class="text-slate-700">SEO keyword optimization</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span class="text-slate-700">Research-backed content</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span class="text-slate-700">Engaging & readable style</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span class="text-slate-700">Meta descriptions & titles</span>
                  </div>
                </div>

                {/* Starting Price */}
                <div class="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl mb-8 border border-purple-100">
                  <div class="text-center">
                    <div class="text-sm text-purple-600 font-medium">Starting from</div>
                    <div class="text-4xl font-bold text-purple-700 mb-2">₹2499</div>
                    <div class="text-sm text-slate-600">Per 1000-word article</div>
                  </div>
                </div>

                {/* CTA Button */}
                <a href="/pricing/content-and-blog-writing"
                   class="group/btn relative overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 block text-center">
                  <span class="relative z-10 flex items-center justify-center gap-2">
                    View Writing Packages
                    <svg class="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none"
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
      <section class="relative py-20 bg-gradient-to-br from-white via-slate-50 to-purple-50 overflow-hidden">
        <div class="container mx-auto px-4">
          <div class="text-center max-w-3xl mx-auto mb-16 fade-in-up">
            <h2 class="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              <span class="text-purple-600">Why Choose Our</span>
              <br />
              <span class="text-orange-500">Content Writing Services?</span>
            </h2>
            <p class="text-xl text-slate-600 leading-relaxed">
              We don't just write content — we craft compelling stories that resonate with your audience and drive action.
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto fade-in-up">
            {/* Feature 1 */}
            <div class="text-center p-6">
              <h3 class="text-xl font-bold text-slate-800 mb-3">SEO Optimized</h3>
              <p class="text-slate-600">Research-driven keyword optimization to boost your search engine rankings and organic traffic.</p>
            </div>

            {/* Feature 2 */}
            <div class="text-center p-6">
              <h3 class="text-xl font-bold text-slate-800 mb-3">Research-Backed</h3>
              <p class="text-slate-600">Thoroughly researched content that provides real value and establishes your authority in your niche.</p>
            </div>

            {/* Feature 3 */}
            <div class="text-center p-6">
              <h3 class="text-xl font-bold text-slate-800 mb-3">Engaging Style</h3>
              <p class="text-slate-600">Compelling writing that keeps readers engaged and encourages them to take action on your content.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section class="relative py-20 bg-gradient-to-br from-slate-50 via-white to-purple-50 overflow-hidden">
        <div class="container mx-auto px-4">
          <div class="text-center max-w-3xl mx-auto mb-16 fade-in-up">
            <h2 class="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              <span class="text-purple-600">Content Types</span>
              <br />
              <span class="text-orange-500">We Specialize In</span>
            </h2>
            <p class="text-xl text-slate-600 leading-relaxed">
              From blog posts to web copy, we create content that drives results across all formats.
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto fade-in-up">
            {/* Content Type 1 */}
            <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
              <h3 class="text-lg font-bold text-slate-800 mb-2">Blog Posts</h3>
              <p class="text-slate-600 text-sm">SEO-optimized blog articles that drive organic traffic and engage your audience.</p>
            </div>

            {/* Content Type 2 */}
            <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
              <h3 class="text-lg font-bold text-slate-800 mb-2">Web Copy</h3>
              <p class="text-slate-600 text-sm">Compelling website copy that converts visitors into customers and clients.</p>
            </div>

            {/* Content Type 3 */}
            <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
              <h3 class="text-lg font-bold text-slate-800 mb-2">Email Content</h3>
              <p class="text-slate-600 text-sm">Engaging email newsletters and marketing campaigns that drive conversions.</p>
            </div>

            {/* Content Type 4 */}
            <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
              <h3 class="text-lg font-bold text-slate-800 mb-2">Social Media</h3>
              <p class="text-slate-600 text-sm">Social media content that builds brand awareness and drives engagement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section class="relative py-20 bg-gradient-to-br from-slate-100 via-white to-purple-50 overflow-hidden">
        <div class="container mx-auto px-4">
          <div class="text-center max-w-3xl mx-auto mb-16 fade-in-up">
            <h2 class="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              <span class="text-purple-600">Ready to Create</span>
              <br />
              <span class="text-orange-500">Compelling Content?</span>
            </h2>
            <p class="text-xl text-slate-600 leading-relaxed">
              Let our content experts help you create engaging, SEO-optimized content that drives traffic and conversions.
            </p>
          </div>

          <div class="max-w-4xl mx-auto fade-in-up">
            <div class="bg-white rounded-3xl shadow-2xl p-8 border border-slate-100">
              <div class="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 class="text-3xl font-bold text-slate-800 mb-4">Content Strategy Consultation</h3>
                  <p class="text-slate-600 mb-6 leading-relaxed">
                    Schedule a 40-minute consultation with our content team. We'll discuss your content needs and create a custom strategy.
                  </p>
                  <div class="space-y-3">
                    <div class="flex items-center gap-3">
                      <div
                        class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm">✓
                      </div>
                      <span class="text-slate-700">Content audit & analysis</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <div
                        class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm">✓
                      </div>
                      <span class="text-slate-700">SEO keyword research</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <div
                        class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm">✓
                      </div>
                      <span class="text-slate-700">Content calendar & strategy</span>
                    </div>
                  </div>
                </div>
                <div class="text-center">
                  <div
                    class="w-32 h-32 bg-gradient-to-br from-orange-400 to-red-400 rounded-full flex items-center justify-center text-white text-4xl mx-auto mb-6">
                    📝
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
