import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useScrollAnimate } from "~/hooks/useScrollAnimate";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export const head: DocumentHead = {
  title: "AI Tool & Agent Consultation - Expert AI Solutions | WebHoga",
  meta: [
    {
      name: "description",
      content: "Expert AI tool and custom AI agent consultation for your organization. We identify the best AI solutions, implement custom agents, and optimize your business processes. Free consultation available.",
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
            class="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-blue-400/15 to-indigo-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-300/10 to-pink-300/10 rounded-full blur-2xl animate-bounce"></div>
        </div>

        <div class="relative z-10 container mx-auto px-4 py-20">
          <div class="text-center max-w-4xl mx-auto min-h-[80vh] flex flex-col justify-center">

            {/* Main Headline */}
            <div class="space-y-6 mb-8 fade-in-up">
              <h1 class="text-5xl lg:text-7xl font-bold leading-tight">
                <span class="text-purple-600">Transform Your Business</span>
                <br />
                <span class="text-orange-500">With Intelligent</span>
                <br />
                <span class="text-purple-600">AI Solutions</span>
              </h1>
            </div>

            {/* Subheading */}
            <p class="text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-12 fade-in-up">
              Expert consultation to identify and implement the <span class="text-purple-600 font-semibold">best AI tools</span> for your organization.
              We recommend tailored solutions and build <span class="text-pink-600 font-semibold">custom AI agents</span> that automate your workflows and drive growth.
            </p>

            {/* Trust Indicators */}
            <div class="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-600 mb-12 fade-in-up">
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span>50+ AI Solutions Deployed</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-pink-500 rounded-full"></div>
                <span>Free Initial Consultation</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-indigo-500 rounded-full"></div>
                <span>Custom Implementation</span>
              </div>
            </div>

            {/* CTA Button */}
            <div class="fade-in-up">
              <a href="/contact"
                 class="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-block">
                <span class="relative z-10 flex items-center justify-center gap-2">
                  Book Free Consultation
                  <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none"
                       stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </span>
                <div
                  class="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section class="relative py-20 bg-gradient-to-br from-slate-50 via-white to-purple-50 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div
            class="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
          <div
            class="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tr from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
        </div>

        <div class="relative z-10 container mx-auto px-4">
          <div class="text-center max-w-3xl mx-auto mb-16 fade-in-up">
            <div
              class="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg mb-6">
              <span class="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Our Consultation Process
            </div>

            <h2 class="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              <span class="text-purple-600">Four-Step AI</span>
              <br />
              <span class="text-orange-500">Transformation Journey</span>
            </h2>

            <p class="text-xl text-slate-600 leading-relaxed">
              From discovery to deployment, we guide you through every step of your AI implementation.
            </p>
          </div>

          {/* Process Steps */}
          <div class="grid lg:grid-cols-4 gap-6 max-w-6xl mx-auto fade-in-up">
            {/* Step 1 */}
            <div class="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-slate-100 overflow-hidden">
              <div
                class="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="relative z-10">
                <div
                  class="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 text-white text-xl font-bold rounded-xl mb-4">
                  1
                </div>
                <h3 class="text-2xl font-bold text-slate-800 mb-3">Discovery</h3>
                <p class="text-slate-600 leading-relaxed">
                  In-depth analysis of your business goals, current workflows, challenges, and opportunities for AI automation.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div class="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-slate-100 overflow-hidden">
              <div
                class="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="relative z-10">
                <div
                  class="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 text-white text-xl font-bold rounded-xl mb-4">
                  2
                </div>
                <h3 class="text-2xl font-bold text-slate-800 mb-3">Analysis</h3>
                <p class="text-slate-600 leading-relaxed">
                  Comprehensive evaluation of available AI tools, platforms, and technologies suited for your specific needs.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div class="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-slate-100 overflow-hidden">
              <div
                class="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="relative z-10">
                <div
                  class="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 text-white text-xl font-bold rounded-xl mb-4">
                  3
                </div>
                <h3 class="text-2xl font-bold text-slate-800 mb-3">Recommendation</h3>
                <p class="text-slate-600 leading-relaxed">
                  Detailed proposal of best-fit AI solutions with ROI analysis, implementation timeline, and investment breakdown.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div class="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-slate-100 overflow-hidden">
              <div
                class="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-rose-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="relative z-10">
                <div
                  class="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-500 text-white text-xl font-bold rounded-xl mb-4">
                  4
                </div>
                <h3 class="text-2xl font-bold text-slate-800 mb-3">Implementation</h3>
                <p class="text-slate-600 leading-relaxed">
                  Custom development, deployment, team training, and ongoing support to ensure AI success and maximum ROI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section class="relative py-20 bg-gradient-to-br from-slate-100 via-white to-purple-50 overflow-hidden">
        <div class="container mx-auto px-4">
          <div class="text-center max-w-3xl mx-auto mb-16 fade-in-up">
            <div
              class="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg mb-6">
              <span class="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              What's Included
            </div>

            <h2 class="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              <span class="text-purple-600">Comprehensive AI</span>
              <br />
              <span class="text-orange-500">Consultation Services</span>
            </h2>
          </div>

          {/* Services Grid */}
          <div class="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto fade-in-up">

            {/* AI Audit Service */}
            <div
              class="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border border-slate-100 overflow-hidden">
              <div
                class="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="relative z-10">

                {/* Icon */}
                <div
                  class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white text-3xl mb-6">
                  🔍
                </div>

                <h3 class="text-2xl font-bold text-slate-800 mb-4">AI Tools Audit</h3>

                <p class="text-slate-600 mb-6 leading-relaxed">
                  Complete assessment of AI platforms and tools available for your business needs. We evaluate functionality, pricing, and integration possibilities.
                </p>

                {/* Features */}
                <div class="space-y-3">
                  <div class="flex items-start gap-3">
                    <div class="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <span class="text-slate-700">Market landscape analysis</span>
                  </div>
                  <div class="flex items-start gap-3">
                    <div class="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                    <span class="text-slate-700">ROI & cost evaluation</span>
                  </div>
                  <div class="flex items-start gap-3">
                    <div class="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <span class="text-slate-700">Integration feasibility</span>
                  </div>
                  <div class="flex items-start gap-3">
                    <div class="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                    <span class="text-slate-700">Risk assessment</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom AI Agent Service */}
            <div
              class="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border border-slate-100 overflow-hidden">
              <div
                class="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="relative z-10">

                {/* Icon */}
                <div
                  class="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-white text-3xl mb-6">
                  🤖
                </div>

                <h3 class="text-2xl font-bold text-slate-800 mb-4">Custom AI Agents</h3>

                <p class="text-slate-600 mb-6 leading-relaxed">
                  Design and build intelligent agents tailored to your specific workflows. Automate complex tasks, improve customer service, and streamline operations.
                </p>

                {/* Features */}
                <div class="space-y-3">
                  <div class="flex items-start gap-3">
                    <div class="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                    <span class="text-slate-700">Custom architecture design</span>
                  </div>
                  <div class="flex items-start gap-3">
                    <div class="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <span class="text-slate-700">Workflow automation</span>
                  </div>
                  <div class="flex items-start gap-3">
                    <div class="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                    <span class="text-slate-700">Multi-tool integration</span>
                  </div>
                  <div class="flex items-start gap-3">
                    <div class="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <span class="text-slate-700">Performance optimization</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Implementation Service */}
            <div
              class="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border border-slate-100 overflow-hidden">
              <div
                class="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="relative z-10">

                {/* Icon */}
                <div
                  class="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center text-white text-3xl mb-6">
                  🚀
                </div>

                <h3 class="text-2xl font-bold text-slate-800 mb-4">Implementation & Training</h3>

                <p class="text-slate-600 mb-6 leading-relaxed">
                  Professional deployment of your AI solutions with comprehensive team training and ongoing support to maximize adoption and results.
                </p>

                {/* Features */}
                <div class="space-y-3">
                  <div class="flex items-start gap-3">
                    <div class="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <span class="text-slate-700">System setup & deployment</span>
                  </div>
                  <div class="flex items-start gap-3">
                    <div class="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                    <span class="text-slate-700">Team training sessions</span>
                  </div>
                  <div class="flex items-start gap-3">
                    <div class="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <span class="text-slate-700">Documentation & guides</span>
                  </div>
                  <div class="flex items-start gap-3">
                    <div class="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                    <span class="text-slate-700">Ongoing support & optimization</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section class="relative py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div
            class="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
          <div
            class="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tr from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
        </div>

        <div class="relative z-10 container mx-auto px-4">
          <div class="text-center max-w-3xl mx-auto mb-16 fade-in-up">
            <h2 class="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              <span class="text-purple-600">Why Partner With</span>
              <br />
              <span class="text-orange-500">WebHoga for AI?</span>
            </h2>
            <p class="text-xl text-slate-600 leading-relaxed">
              We bring expertise, experience, and a proven methodology to your AI transformation.
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto fade-in-up">
            {/* Reason 1 */}
            <div class="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <div class="flex items-start gap-4">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h3 class="text-xl font-bold text-slate-800 mb-2">Expert Consultants</h3>
                  <p class="text-slate-600">Experienced AI specialists who understand your business and industry-specific challenges.</p>
                </div>
              </div>
            </div>

            {/* Reason 2 */}
            <div class="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <div class="flex items-start gap-4">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h3 class="text-xl font-bold text-slate-800 mb-2">Proven Methodology</h3>
                  <p class="text-slate-600">Battle-tested approach with 50+ successful AI implementations across diverse industries.</p>
                </div>
              </div>
            </div>

            {/* Reason 3 */}
            <div class="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <div class="flex items-start gap-4">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h3 class="text-xl font-bold text-slate-800 mb-2">Custom Solutions</h3>
                  <p class="text-slate-600">Tailored AI implementations designed specifically for your organization's unique needs.</p>
                </div>
              </div>
            </div>

            {/* Reason 4 */}
            <div class="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <div class="flex items-start gap-4">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h3 class="text-xl font-bold text-slate-800 mb-2">Ongoing Support</h3>
                  <p class="text-slate-600">Complete support from deployment through optimization, ensuring long-term success.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section class="relative py-20 bg-gradient-to-br from-slate-50 via-white to-purple-50 overflow-hidden">
        <div class="container mx-auto px-4">
          <div class="text-center max-w-3xl mx-auto mb-16 fade-in-up">
            <h2 class="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              <span class="text-purple-600">Frequently Asked</span>
              <br />
              <span class="text-orange-500">Questions</span>
            </h2>
          </div>

          <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto fade-in-up">
            {/* FAQ 1 */}
            <div class="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <h3 class="text-xl font-bold text-slate-800 mb-3">Is the consultation really free?</h3>
              <p class="text-slate-600 leading-relaxed">
                Yes! Our initial consultation is completely free. We invest time upfront to understand your needs and propose the best AI solutions for your organization.
              </p>
            </div>

            {/* FAQ 2 */}
            <div class="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <h3 class="text-xl font-bold text-slate-800 mb-3">How long is a consultation?</h3>
              <p class="text-slate-600 leading-relaxed">
                Initial consultations typically take 1-2 hours. We discuss your business goals, current workflows, challenges, and desired outcomes.
              </p>
            </div>

            {/* FAQ 3 */}
            <div class="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <h3 class="text-xl font-bold text-slate-800 mb-3">Do you build custom AI agents?</h3>
              <p class="text-slate-600 leading-relaxed">
                Absolutely! If custom development is needed, we provide a separate proposal with detailed timeline, deliverables, and investment details after understanding your requirements.
              </p>
            </div>

            {/* FAQ 4 */}
            <div class="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <h3 class="text-xl font-bold text-slate-800 mb-3">What if I already use AI tools?</h3>
              <p class="text-slate-600 leading-relaxed">
                We can audit your existing AI setup, identify optimization opportunities, and recommend enhancements or additional tools to maximize your ROI.
              </p>
            </div>

            {/* FAQ 5 */}
            <div class="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <h3 class="text-xl font-bold text-slate-800 mb-3">How do you ensure adoption?</h3>
              <p class="text-slate-600 leading-relaxed">
                We provide comprehensive team training, detailed documentation, and ongoing support. Our goal is ensuring your team fully leverages the AI solutions.
              </p>
            </div>

            {/* FAQ 6 */}
            <div class="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <h3 class="text-xl font-bold text-slate-800 mb-3">What's the next step?</h3>
              <p class="text-slate-600 leading-relaxed">
                Click the "Book Consultation" button, fill out the form with your details and business goals, and we'll schedule your free consultation session.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="relative py-20 bg-gradient-to-r from-purple-600 to-pink-600 overflow-hidden">
        {/* Animated Background */}
        <div class="absolute inset-0 overflow-hidden">
          <div
            class="absolute top-20 right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            class="absolute bottom-20 left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div class="relative z-10 container mx-auto px-4">
          <div class="text-center max-w-3xl mx-auto fade-in-up">
            <h2 class="text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white">
              Ready to Transform Your Organization?
            </h2>
            <p class="text-xl text-white/90 leading-relaxed mb-8">
              Book a free consultation with our AI experts today. Let's discuss how intelligent automation can drive growth and efficiency in your business.
            </p>
            <a href="/contact"
               class="group relative overflow-hidden bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-block">
              <span class="relative z-10 flex items-center justify-center gap-2">
                Book Your Free Consultation
                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none"
                     stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
});