import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useScrollAnimate } from "~/hooks/useScrollAnimate";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export const head: DocumentHead = {
  title: "SEO & Web Optimization Services - WebHoga | Professional SEO Solutions",
  meta: [
    {
      name: "description",
      content: "Professional SEO and web optimization services starting at ₹18,999. Boost your website rankings, increase organic traffic, and improve search visibility with WebHoga's proven SEO strategies.",
    },
    {
      name: "keywords",
      content: "SEO services, web optimization, search engine optimization, website optimization, SEO expert, organic traffic, search rankings, technical SEO, on-page SEO, off-page SEO, SEO consultant",
    },
    {
      name: "author",
      content: "WebHoga",
    },
    {
      name: "robots",
      content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    // Open Graph Tags
    {
      property: "og:title",
      content: "SEO & Web Optimization Services - WebHoga | Professional SEO Solutions",
    },
    {
      property: "og:description",
      content: "Professional SEO and web optimization services starting at ₹18,999. Boost your website rankings and increase organic traffic with proven SEO strategies.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://webhoga.com/seo-web-optimization",
    },
    {
      property: "og:image",
      content: "https://webhoga.com/images/seo-optimization-og-image.jpg",
    },
    {
      property: "og:image:width",
      content: "1200",
    },
    {
      property: "og:image:height",
      content: "630",
    },
    {
      property: "og:image:alt",
      content: "Professional SEO and Web Optimization Services by WebHoga",
    },
    {
      property: "og:site_name",
      content: "WebHoga",
    },
    {
      property: "og:locale",
      content: "en_US",
    },
    // Twitter Card Tags
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "SEO & Web Optimization Services - WebHoga",
    },
    {
      name: "twitter:description",
      content: "Professional SEO and web optimization services starting at ₹18,999. Boost your website rankings and increase organic traffic.",
    },
    {
      name: "twitter:image",
      content: "https://webhoga.com/images/seo-optimization-twitter-image.jpg",
    },
    {
      name: "twitter:image:alt",
      content: "Professional SEO Services by WebHoga",
    },
    {
      name: "twitter:site",
      content: "@WebHoga",
    },
    {
      name: "twitter:creator",
      content: "@WebHoga",
    },
    // Additional SEO Tags
    {
      name: "theme-color",
      content: "#059669",
    },
    {
      name: "msapplication-TileColor",
      content: "#059669",
    },
    {
      name: "apple-mobile-web-app-capable",
      content: "yes",
    },
    {
      name: "apple-mobile-web-app-status-bar-style",
      content: "black-translucent",
    },
    // Geo Tags
    {
      name: "geo.region",
      content: "IN",
    },
    {
      name: "geo.placename",
      content: "India",
    },
    // Business Tags
    {
      name: "business:contact_data:street_address",
      content: "Your Business Address",
    },
    {
      name: "business:contact_data:locality",
      content: "Your City",
    },
    {
      name: "business:contact_data:region",
      content: "Your State",
    },
    {
      name: "business:contact_data:postal_code",
      content: "Your Postal Code",
    },
    {
      name: "business:contact_data:country_name",
      content: "India",
    },
  ],
  links: [
    {
      rel: "stylesheet",
      href: "https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700&f[]=inter@400,500,600&display=swap",
    },
    {
      rel: "canonical",
      href: "https://webhoga.com/seo-web-optimization",
    },
    {
      rel: "alternate",
      href: "https://webhoga.com/seo-web-optimization",
      hreflang: "en",
    },
    {
      rel: "alternate",
      href: "https://webhoga.com/hi/seo-web-optimization",
      hreflang: "hi",
    },
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
    {
      rel: "preconnect",
      href: "https://api.fontshare.com",
    },
    {
      rel: "dns-prefetch",
      href: "https://api.fontshare.com",
    },
  ],
};

export default component$(() => {
  useScrollAnimate('.fade-in-up');

  return (
    <>
      <Header />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "WebHoga SEO & Web Optimization Services",
          "image": "https://webhoga.com/images/seo-optimization-hero-image.jpg",
          "url": "https://webhoga.com/seo-web-optimization",
          "telephone": "+91-XXXXXXXXXX",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Your Business Address",
            "addressLocality": "Your City",
            "addressRegion": "Your State",
            "postalCode": "Your Postal Code",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "YOUR_LATITUDE",
            "longitude": "YOUR_LONGITUDE"
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
          },
          "sameAs": [
            "https://www.facebook.com/webhoga",
            "https://www.instagram.com/webhoga",
            "https://www.linkedin.com/company/webhoga",
            "https://twitter.com/webhoga"
          ],
          "offers": {
            "@type": "Offer",
            "name": "SEO & Web Optimization Service",
            "description": "Complete SEO and web optimization service including keyword research, on-page optimization, technical SEO, and performance monitoring",
            "price": "18999",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "validFrom": "2024-01-01",
            "priceValidUntil": "2024-12-31"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "200"
          },
          "review": [
            {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "Sample Customer"
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "reviewBody": "Excellent SEO service. WebHoga helped us achieve top 3 rankings for our target keywords and increased our organic traffic by 300%."
            }
          ]
        })}
      </script>

      {/* Hero Section */}
      <section class="relative min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 overflow-hidden">
        {/* Animated Background Elements */}
        <div class="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div
            class="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-emerald-400/20 to-green-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            class="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-teal-400/15 to-emerald-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-300/10 to-emerald-300/10 rounded-full blur-2xl animate-bounce"></div>
        </div>

        <div class="relative z-10 container mx-auto px-4 py-20">
          <div class="text-center max-w-4xl mx-auto min-h-[80vh] flex flex-col justify-center">

            {/* Main Headline */}
            <header class="space-y-6 mb-8 fade-in-up">
              <h1 class="text-5xl lg:text-7xl font-bold leading-tight">
                <span class="text-emerald-600">Rankings That</span>
                <br />
                <span class="text-orange-500">Dominate &</span>
                <br />
                <span class="text-green-600">Convert</span>
              </h1>
            </header>

            {/* Subheading */}
            <p class="text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-12 fade-in-up">
              From <span class="text-emerald-600 font-semibold">keyword research</span> to
              <span class="text-green-600 font-semibold"> technical optimization</span> — we create
              <span class="text-teal-600 font-semibold"> SEO strategies</span> that drive organic growth and revenue.
            </p>

            {/* Trust Indicators */}
            <div class="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-600 mb-12 fade-in-up" role="group" aria-label="Trust indicators">
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-emerald-500 rounded-full" aria-hidden="true"></div>
                <span>500+ Websites Optimized</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-green-500 rounded-full" aria-hidden="true"></div>
                <span>SEO & Performance Experts</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-teal-500 rounded-full" aria-hidden="true"></div>
                <span>Proven Results Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section class="relative py-20 bg-gradient-to-br from-slate-50 via-white to-emerald-50 overflow-hidden">
        {/* Background Elements */}
        <div class="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div
            class="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-emerald-400/10 to-green-400/10 rounded-full blur-3xl"></div>
          <div
            class="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tr from-teal-400/10 to-emerald-400/10 rounded-full blur-3xl"></div>
        </div>

        <div class="relative z-10 container mx-auto px-4">
          {/* Section Header */}
          <div class="text-center max-w-3xl mx-auto mb-16 fade-in-up">
            <div
              class="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg mb-6">
              <span class="w-2 h-2 bg-white rounded-full animate-pulse" aria-hidden="true"></span>
              Complete SEO & Web Optimization
            </div>

            <h2 class="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              <span class="text-emerald-600">Everything You Need for</span>
              <br />
              <span class="text-orange-500">Search Success</span>
            </h2>

            <p class="text-xl text-slate-600 leading-relaxed">
              Comprehensive <span class="text-emerald-600 font-semibold">SEO optimization</span> and
              <span class="text-green-600 font-semibold"> web performance</span> services that drive traffic and conversions.
            </p>
          </div>

          {/* Service Package */}
          <div class="max-w-2xl mx-auto fade-in-up">
            <article
              class="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border border-slate-100 overflow-hidden">
              <div
                class="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="relative z-10">
                {/* Service Icon */}
                <div
                  class="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-500 rounded-3xl flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto"
                  aria-hidden="true">
                  <span role="img" aria-label="rocket">🚀</span>
                </div>

                {/* Service Badge */}
                <div class="text-center mb-6">
                  <div
                    class="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                    <span class="w-2 h-2 bg-emerald-500 rounded-full" aria-hidden="true"></span>
                    Complete SEO Solution
                  </div>
                </div>

                <h3 class="text-3xl font-bold text-slate-800 mb-6 text-center">SEO & Web Optimization</h3>

                <p class="text-slate-600 mb-8 leading-relaxed text-lg text-center">
                  Comprehensive SEO and web optimization service that includes keyword research, on-page optimization, technical SEO, performance optimization, and ongoing monitoring to boost your search rankings.
                </p>

                {/* Service Features */}
                <div class="grid md:grid-cols-2 gap-4 mb-8">
                  <ul class="space-y-4" role="list">
                    <li class="flex items-center gap-3">
                      <div class="w-2 h-2 bg-emerald-500 rounded-full" aria-hidden="true"></div>
                      <span class="text-slate-700">Comprehensive SEO audit</span>
                    </li>
                    <li class="flex items-center gap-3">
                      <div class="w-2 h-2 bg-green-500 rounded-full" aria-hidden="true"></div>
                      <span class="text-slate-700">Keyword research & strategy</span>
                    </li>
                    <li class="flex items-center gap-3">
                      <div class="w-2 h-2 bg-emerald-500 rounded-full" aria-hidden="true"></div>
                      <span class="text-slate-700">On-page optimization</span>
                    </li>
                    <li class="flex items-center gap-3">
                      <div class="w-2 h-2 bg-green-500 rounded-full" aria-hidden="true"></div>
                      <span class="text-slate-700">Technical SEO fixes</span>
                    </li>
                  </ul>
                  <ul class="space-y-4" role="list">
                    <li class="flex items-center gap-3">
                      <div class="w-2 h-2 bg-teal-500 rounded-full" aria-hidden="true"></div>
                      <span class="text-slate-700">Performance optimization</span>
                    </li>
                    <li class="flex items-center gap-3">
                      <div class="w-2 h-2 bg-emerald-500 rounded-full" aria-hidden="true"></div>
                      <span class="text-slate-700">Schema markup implementation</span>
                    </li>
                    <li class="flex items-center gap-3">
                      <div class="w-2 h-2 bg-green-500 rounded-full" aria-hidden="true"></div>
                      <span class="text-slate-700">Monthly performance reports</span>
                    </li>
                    <li class="flex items-center gap-3">
                      <div class="w-2 h-2 bg-teal-500 rounded-full" aria-hidden="true"></div>
                      <span class="text-slate-700">Ongoing optimization</span>
                    </li>
                  </ul>
                </div>

                {/* Pricing */}
                <div class="bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-xl mb-8 border border-emerald-100">
                  <div class="text-center">
                    <div class="text-sm text-emerald-600 font-medium">Starting from</div>
                    <div class="text-4xl font-bold text-emerald-700 mb-2">₹18,999</div>
                    <div class="text-sm text-slate-600">SEO & Web Optimization</div>
                    <div class="text-xs text-slate-500 mt-2">One-time setup + Monthly optimization</div>
                  </div>
                </div>

                {/* Service CTA */}
                <a href="/pricing/seo-optimization"
                   class="group/btn relative overflow-hidden bg-gradient-to-r from-emerald-500 to-green-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 block text-center"
                   aria-label="Get started with SEO optimization">
                  <span class="relative z-10 flex items-center justify-center gap-2">
                    <span role="img" aria-label="rocket">🚀</span> Get Started with SEO
                    <svg class="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none"
                         stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </span>
                  <div
                    class="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section class="relative py-20 bg-gradient-to-br from-slate-100 via-white to-emerald-50 overflow-hidden">
        <div class="container mx-auto px-4">
          <div class="text-center max-w-3xl mx-auto mb-16 fade-in-up">
            <h2 class="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              <span class="text-emerald-600">Ready to Dominate</span>
              <br />
              <span class="text-orange-500">Search Results?</span>
            </h2>
            <p class="text-xl text-slate-600 leading-relaxed">
              Let our SEO experts analyze your website and create a custom optimization strategy that drives organic growth and revenue.
            </p>
          </div>

          <div class="max-w-4xl mx-auto fade-in-up">
            <div class="bg-white rounded-3xl shadow-2xl p-8 border border-slate-100">
              <div class="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 class="text-3xl font-bold text-slate-800 mb-4">SEO Audit & Consultation</h3>
                  <p class="text-slate-600 mb-6 leading-relaxed">
                    Get a comprehensive 40-minute SEO audit and consultation. We'll analyze your website and provide actionable recommendations to improve your search rankings.
                  </p>
                  <div class="space-y-3">
                    <div class="flex items-center gap-3">
                      <div
                        class="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm">✓
                      </div>
                      <span class="text-slate-700">Complete website SEO audit</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <div
                        class="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm">✓
                      </div>
                      <span class="text-slate-700">Keyword opportunity analysis</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <div
                        class="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm">✓
                      </div>
                      <span class="text-slate-700">Custom SEO strategy roadmap</span>
                    </div>
                  </div>
                </div>
                <div class="text-center">
                  <div
                    class="w-32 h-32 bg-gradient-to-br from-orange-400 to-amber-400 rounded-full flex items-center justify-center text-white text-4xl mx-auto mb-6">
                    <span role="img" aria-label="magnifying glass">🔍</span>
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