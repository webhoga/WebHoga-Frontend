import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useScrollAnimate } from "~/hooks/useScrollAnimate";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export const head: DocumentHead = {
  title: "Partner Program – Join WebHoga's Affiliate Network | Earn 5.5% Commission",
  meta: [
    {
      name: "description",
      content: "Become a WebHoga affiliate partner and earn 5.5% commission on every referral. Join India's premium web design agency affiliate program with recurring commissions and dedicated support.",
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
  const showForm = useSignal(false);
  const selectedPartnerType = useSignal<'affiliate' | null>(null);

  return (
    <>
      <Header />

      {/* Thrive Loyalty Script */}
      <script type="text/javascript" dangerouslySetInnerHTML={`
        var ztUserData = {};
        ztUserData['za_email_id'] = '';
        ztUserData['user_unique_id'] = '';
        ztUserData['thrive_digest'] = '';
        ztUserData['signUpPage'] = 'https://webhoga.com/partner/signup';
        ztUserData['signInPage'] = 'https://webhoga.com/partner/login';
      `} />

      {/* Hero Section */}
      <section class="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div class="absolute inset-0 overflow-hidden">
          <div class="absolute top-20 right-20 h-72 w-72 animate-pulse rounded-full bg-gradient-to-br from-purple-400/20 to-violet-400/20 blur-3xl"></div>
          <div class="absolute bottom-20 left-20 h-96 w-96 animate-pulse rounded-full bg-gradient-to-tr from-blue-400/15 to-cyan-400/15 blur-3xl delay-1000"></div>
          <div class="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 transform animate-bounce rounded-full bg-gradient-to-r from-violet-300/10 to-purple-300/10 blur-2xl"></div>
        </div>

        <div class="relative z-10 container mx-auto px-4 py-20">
          <div class="mx-auto flex min-h-[80vh] max-w-4xl flex-col justify-center text-center">
            {/* Premium Badge */}
            <div class="fade-in-up mx-auto mt-8 mb-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-violet-500 px-4 py-2 text-sm font-medium text-white shadow-lg">
              <span class="h-2 w-2 animate-pulse rounded-full bg-white"></span>
              Join India's #1 Web Design Affiliate Program
            </div>

            {/* Main Headline */}
            <div class="fade-in-up space-y-6">
              <h1 class="text-5xl leading-tight font-bold lg:text-7xl">
                <span class="bg-gradient-to-r from-purple-600 via-violet-600 to-purple-700 bg-clip-text text-transparent">
                  Partner With
                </span>
                <br />
                <span class="text-slate-800">WebHoga & Earn</span>
                <br />
                <span class="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                  Premium Commissions
                </span>
              </h1>
            </div>

            {/* Subheading */}
            <p class="fade-in-up mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-slate-600 lg:text-2xl">
              Become an{" "}
              <span class="font-semibold text-purple-600">
                affiliate partner
              </span>{" "}
              and earn{" "}
              <span class="font-semibold text-orange-600">
                5.5% commission
              </span>{" "}
              on every successful referral. Join our growing network of content creators, bloggers, and digital marketers who are{" "}
              <span class="font-semibold text-green-600">
                earning passive income
              </span>{" "}
              with WebHoga.
            </p>

            {/* Trust Indicators */}
            <div class="fade-in-up mt-8 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-600">
              <div class="flex items-center gap-2">
                <div class="h-3 w-3 rounded-full bg-green-500"></div>
                <span>5.5% Commission</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="h-3 w-3 rounded-full bg-purple-500"></div>
                <span>Recurring Earnings</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="h-3 w-3 rounded-full bg-orange-500"></div>
                <span>30-Day Cookie Duration</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="h-3 w-3 rounded-full bg-blue-500"></div>
                <span>Dedicated Support</span>
              </div>
            </div>

            {/* CTA Button */}
            <div class="fade-in-up mt-12">
              <button
                onClick$={() => {
                  selectedPartnerType.value = 'affiliate';
                  showForm.value = true;
                }}
                class="group relative transform overflow-hidden rounded-xl bg-gradient-to-r from-purple-500 to-violet-500 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <span class="relative z-10 flex items-center gap-2">
                  Join Affiliate Program
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
                <div class="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-500 opacity-0 transition-opacity group-hover:opacity-100"></div>
              </button>
            </div>

            {/* Quick Stats */}
            <div class="fade-in-up mt-16 grid grid-cols-3 gap-8 border-t border-slate-200 pt-8">
              <div class="text-center">
                <div class="text-3xl font-bold text-purple-600">5.5%</div>
                <div class="text-sm text-slate-600">Commission Rate</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-orange-600">₹50K+</div>
                <div class="text-sm text-slate-600">Avg. Project Value</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-green-600">30 Days</div>
                <div class="text-sm text-slate-600">Cookie Lifetime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section class="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-purple-50 py-20">
        <div class="absolute inset-0 overflow-hidden">
          <div class="absolute top-20 left-20 h-64 w-64 rounded-full bg-gradient-to-br from-purple-400/10 to-violet-400/10 blur-3xl"></div>
          <div class="absolute right-20 bottom-20 h-80 w-80 rounded-full bg-gradient-to-tr from-orange-400/10 to-amber-400/10 blur-3xl"></div>
        </div>

        <div class="relative z-10 container mx-auto px-4">
          <div class="fade-in-up mx-auto mb-16 max-w-3xl text-center">
            <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-2 text-sm font-medium text-white shadow-lg">
              <span class="h-2 w-2 animate-pulse rounded-full bg-white"></span>
              Simple Process
            </div>

            <h2 class="mb-6 text-4xl leading-tight font-bold lg:text-5xl">
              <span class="text-slate-800">How the</span>
              <br />
              <span class="bg-gradient-to-r from-purple-600 via-violet-600 to-purple-700 bg-clip-text text-transparent">
                Affiliate Program Works
              </span>
            </h2>

            <p class="text-xl leading-relaxed text-slate-600">
              Start earning commissions in just{" "}
              <span class="font-semibold text-purple-600">3 simple steps</span>
            </p>
          </div>

          {/* Steps */}
          <div class="fade-in-up mx-auto max-w-5xl">
            <div class="grid gap-8 md:grid-cols-3">
              {/* Step 1 */}
              <div class="relative">
                <div class="group transform overflow-hidden rounded-2xl border border-purple-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  <div class="absolute -top-4 -right-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-violet-500 text-2xl font-bold text-white shadow-lg">
                    1
                  </div>
                  <h3 class="mb-4 text-2xl font-bold text-slate-800">
                    Sign Up Free
                  </h3>
                  <p class="leading-relaxed text-slate-600">
                    Register as a WebHoga affiliate partner. Get instant access to your personalized dashboard and unique tracking links.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div class="relative">
                <div class="group transform overflow-hidden rounded-2xl border border-orange-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  <div class="absolute -top-4 -right-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-500 text-2xl font-bold text-white shadow-lg">
                    2
                  </div>
                  <h3 class="mb-4 text-2xl font-bold text-slate-800">
                    Promote WebHoga
                  </h3>
                  <p class="leading-relaxed text-slate-600">
                    Create content about WebHoga's services on your blog, social media, or website. Share your unique affiliate links with your audience.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div class="relative">
                <div class="group transform overflow-hidden rounded-2xl border border-green-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  <div class="absolute -top-4 -right-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-500 text-2xl font-bold text-white shadow-lg">
                    3
                  </div>
                  <h3 class="mb-4 text-2xl font-bold text-slate-800">
                    Earn Commission
                  </h3>
                  <p class="leading-relaxed text-slate-600">
                    Earn 5.5% commission when your referrals purchase our services. Get paid monthly via bank transfer or UPI with no minimum threshold.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section class="relative overflow-hidden bg-white py-20">
        <div class="container mx-auto px-4">
          <div class="fade-in-up mx-auto mb-16 max-w-3xl text-center">
            <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2 text-sm font-medium text-white shadow-lg">
              <span class="h-2 w-2 animate-pulse rounded-full bg-white"></span>
              Program Benefits
            </div>

            <h2 class="mb-6 text-4xl leading-tight font-bold lg:text-5xl">
              <span class="text-slate-800">Why Partner</span>
              <br />
              <span class="bg-gradient-to-r from-purple-600 via-violet-600 to-purple-700 bg-clip-text text-transparent">
                With WebHoga
              </span>
            </h2>
          </div>

          <div class="fade-in-up grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Generous Commissions */}
            <div class="group relative transform overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div class="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-violet-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div class="relative z-10">
                <h3 class="mb-4 text-2xl font-bold text-slate-800">
                  Generous 5.5% Commission
                </h3>
                <p class="leading-relaxed text-slate-600">
                  Earn ₹2,750 on a ₹50,000 project, ₹5,500 on a ₹1,00,000 project. High-value projects mean higher earnings for you.
                </p>
              </div>
            </div>

            {/* Recurring Revenue */}
            <div class="group relative transform overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div class="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div class="relative z-10">
                <h3 class="mb-4 text-2xl font-bold text-slate-800">
                  Recurring Commission
                </h3>
                <p class="leading-relaxed text-slate-600">
                  Earn commission on renewal projects and maintenance packages when your referrals come back for additional services.
                </p>
              </div>
            </div>

            {/* 30-Day Cookie */}
            <div class="group relative transform overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div class="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div class="relative z-10">
                <h3 class="mb-4 text-2xl font-bold text-slate-800">
                  30-Day Cookie Duration
                </h3>
                <p class="leading-relaxed text-slate-600">
                  Your referrals are tracked for 30 days. Even if they don't purchase immediately, you still earn the commission.
                </p>
              </div>
            </div>

            {/* Marketing Materials */}
            <div class="group relative transform overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div class="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div class="relative z-10">
                <h3 class="mb-4 text-2xl font-bold text-slate-800">
                  Professional Marketing Materials
                </h3>
                <p class="leading-relaxed text-slate-600">
                  Access banners, social media graphics, email templates, and pre-written content to make promotion easier.
                </p>
              </div>
            </div>

            {/* Real-Time Dashboard */}
            <div class="group relative transform overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div class="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-rose-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div class="relative z-10">
                <h3 class="mb-4 text-2xl font-bold text-slate-800">
                  Real-Time Analytics Dashboard
                </h3>
                <p class="leading-relaxed text-slate-600">
                  Track clicks, conversions, and earnings in real-time. Full transparency with detailed reporting and insights.
                </p>
              </div>
            </div>

            {/* Dedicated Support */}
            <div class="group relative transform overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div class="relative z-10">
                <h3 class="mb-4 text-2xl font-bold text-slate-800">
                  Dedicated Affiliate Manager
                </h3>
                <p class="leading-relaxed text-slate-600">
                  Get personalized support from your dedicated affiliate manager. We help you maximize your earnings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Join */}
      <section class="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20">
        <div class="container mx-auto px-4">
          <div class="fade-in-up mx-auto mb-16 max-w-3xl text-center">
            <h2 class="mb-6 text-4xl leading-tight font-bold lg:text-5xl">
              <span class="text-slate-800">Who Should Join</span>
              <br />
              <span class="bg-gradient-to-r from-purple-600 via-violet-600 to-purple-700 bg-clip-text text-transparent">
                Our Affiliate Program
              </span>
            </h2>
          </div>

          <div class="fade-in-up mx-auto max-w-4xl grid gap-6 md:grid-cols-2">
            <div class="flex gap-4 rounded-xl border border-purple-100 bg-white p-6 shadow-lg">
              <div>
                <h4 class="mb-2 text-xl font-bold text-slate-800">Bloggers & Content Creators</h4>
                <p class="text-slate-600">Write about web design, development, or business growth? Share WebHoga with your audience.</p>
              </div>
            </div>

            <div class="flex gap-4 rounded-xl border border-purple-100 bg-white p-6 shadow-lg">
              <div>
                <h4 class="mb-2 text-xl font-bold text-slate-800">Social Media Influencers</h4>
                <p class="text-slate-600">Have an engaged following? Recommend premium web design services and earn commissions.</p>
              </div>
            </div>

            <div class="flex gap-4 rounded-xl border border-purple-100 bg-white p-6 shadow-lg">
              <div>
                <h4 class="mb-2 text-xl font-bold text-slate-800">Digital Marketing Agencies</h4>
                <p class="text-slate-600">Partner with us to offer web design services to your clients without building an in-house team.</p>
              </div>
            </div>

            <div class="flex gap-4 rounded-xl border border-purple-100 bg-white p-6 shadow-lg">
              <div>
                <h4 class="mb-2 text-xl font-bold text-slate-800">Business Consultants</h4>
                <p class="text-slate-600">Help your clients get professional websites while earning passive income on referrals.</p>
              </div>
            </div>

            <div class="flex gap-4 rounded-xl border border-purple-100 bg-white p-6 shadow-lg">
              <div>
                <h4 class="mb-2 text-xl font-bold text-slate-800">YouTubers & Video Creators</h4>
                <p class="text-slate-600">Create content about business websites and include your affiliate links in descriptions.</p>
              </div>
            </div>

            <div class="flex gap-4 rounded-xl border border-purple-100 bg-white p-6 shadow-lg">
              <div>
                <h4 class="mb-2 text-xl font-bold text-slate-800">Website Owners</h4>
                <p class="text-slate-600">Monetize your website traffic by recommending WebHoga's premium services to visitors.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Earnings Calculator */}
      <section class="relative overflow-hidden bg-white py-20">
        <div class="container mx-auto px-4">
          <div class="fade-in-up mx-auto max-w-4xl">
            <div class="rounded-3xl border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-violet-50 p-8 md:p-12">
              <div class="mb-8 text-center">
                <h2 class="mb-4 text-4xl font-bold text-slate-800">
                  Earnings Calculator
                </h2>
                <p class="text-xl text-slate-600">
                  See how much you could earn with WebHoga's 5.5% commission
                </p>
              </div>

              <div class="grid gap-8 md:grid-cols-3">
                <div class="rounded-2xl bg-white p-6 text-center shadow-lg">
                  <div class="mb-2 text-lg font-semibold text-slate-700">5 Referrals/Month</div>
                  <div class="mb-2 text-sm text-slate-600">Avg. Project: ₹50,000</div>
                  <div class="text-3xl font-bold text-purple-600">₹13,750</div>
                  <div class="text-sm text-slate-500">per month</div>
                </div>

                <div class="rounded-2xl bg-white p-6 text-center shadow-lg border-2 border-purple-300">
                  <div class="mb-2 text-lg font-semibold text-slate-700">10 Referrals/Month</div>
                  <div class="mb-2 text-sm text-slate-600">Avg. Project: ₹75,000</div>
                  <div class="text-3xl font-bold text-purple-600">₹41,250</div>
                  <div class="text-sm text-slate-500">per month</div>
                </div>

                <div class="rounded-2xl bg-white p-6 text-center shadow-lg">
                  <div class="mb-2 text-lg font-semibold text-slate-700">20 Referrals/Month</div>
                  <div class="mb-2 text-sm text-slate-600">Avg. Project: ₹1,00,000</div>
                  <div class="text-3xl font-bold text-purple-600">₹1,10,000</div>
                  <div class="text-sm text-slate-500">per month</div>
                </div>
              </div>

              <div class="mt-8 rounded-xl bg-gradient-to-r from-purple-500 to-violet-500 p-6 text-center text-white">
                <p class="text-lg font-semibold">
                  Pro Tip: Our average project value is ₹75,000 - ₹2,00,000, which means higher earnings per referral!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="relative overflow-hidden bg-gradient-to-br from-purple-600 via-violet-600 to-purple-700 py-20">
        <div class="absolute inset-0 overflow-hidden opacity-20">
          <div class="absolute top-0 left-0 h-96 w-96 rounded-full bg-white blur-3xl"></div>
          <div class="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white blur-3xl"></div>
        </div>

        <div class="relative z-10 container mx-auto px-4 text-center">
          <div class="fade-in-up mx-auto max-w-3xl">
            <h2 class="mb-6 text-4xl leading-tight font-bold text-white lg:text-5xl">
              Ready to Start Earning?
            </h2>
            <p class="mb-8 text-xl text-purple-100">
              Join hundreds of affiliates already earning with WebHoga. No approval wait time - start promoting today!
            </p>
            <button
              onClick$={() => {
                selectedPartnerType.value = 'affiliate';
                showForm.value = true;
              }}
              class="group relative transform overflow-hidden rounded-xl bg-white px-10 py-5 text-lg font-semibold text-purple-600 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-3xl"
            >
              <span class="relative z-10 flex items-center gap-2">
                Join Affiliate Program Now
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
            </button>

            <p class="mt-6 text-purple-100">
              No signup fees • Instant approval • Start earning today
            </p>
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      {showForm.value && (
        <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div class="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-8">
            <div class="mb-8 flex items-center justify-between">
              <div>
                <h3 class="text-3xl font-bold text-slate-800">
                  {selectedPartnerType.value === 'affiliate' && 'Join Affiliate Program'}
                </h3>
                <p class="mt-2 text-slate-600">
                  Start earning 5.5% commission on every referral!
                </p>
              </div>
              <button
                onClick$={() => (showForm.value = false)}
                class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors hover:bg-slate-200"
              >
                ✕
              </button>
            </div>

            <form
              class="space-y-6"
              onSubmit$={async (e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const formData = new FormData(form);

                const data = Object.fromEntries(formData.entries());

                const payload = {
                  partnerType: selectedPartnerType.value,
                  fullName: data["full-name"],
                  email: data.email,
                  phone: data.phone,
                  country: data.country,
                  website: data.website,
                  socialMedia: data["social-media"],
                  audience: data.audience,
                  trafficSource: data["traffic-source"],
                  monthlyVisitors: data["monthly-visitors"],
                  promotionMethod: data["promotion-method"],
                  experience: data.experience,
                  whyJoin: data["why-join"],
                  additionalInfo: data["additional-info"],
                };

                try {
                  const res = await fetch("https://webhoga.com/api/partner-apply", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                  });

                  if (res.ok) {
                    alert("✅ Application submitted successfully! We'll review and get back to you within 24 hours.");
                    showForm.value = false;
                  } else {
                    const err = await res.json();
                    alert(`❌ Submission failed: ${err.error || 'Unknown error'}`);
                  }
                } catch (err) {
                  alert("❌ Network error, please try again later.");
                  console.error(err);
                }
              }}
            >
              {/* Personal Information */}
              <div class="grid gap-6 md:grid-cols-2">
                <div>
                  <label class="mb-2 block text-sm font-semibold text-slate-700">Full Name *</label>
                  <input name="full-name" type="text" required class="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200" />
                </div>
                <div>
                  <label class="mb-2 block text-sm font-semibold text-slate-700">Email Address *</label>
                  <input name="email" type="email" required class="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200" />
                </div>
              </div>

              <div class="grid gap-6 md:grid-cols-2">
                <div>
                  <label class="mb-2 block text-sm font-semibold text-slate-700">Phone Number *</label>
                  <input name="phone" type="tel" required class="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200" />
                </div>
                <div>
                  <label class="mb-2 block text-sm font-semibold text-slate-700">Country *</label>
                  <input name="country" type="text" required class="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200" />
                </div>
              </div>

              {/* Platform Information */}
              <div class="rounded-xl bg-purple-50 p-6">
                <h4 class="mb-4 text-xl font-bold text-slate-800">Your Platform Details</h4>
                
                <div class="space-y-6">
                  <div>
                    <label class="mb-2 block text-sm font-semibold text-slate-700">Website/Blog URL *</label>
                    <input name="website" type="url" required placeholder="https://yourblog.com" class="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200" />
                  </div>

                  <div>
                    <label class="mb-2 block text-sm font-semibold text-slate-700">Social Media Profiles</label>
                    <input name="social-media" type="text" placeholder="Instagram, YouTube, LinkedIn profiles (comma separated)" class="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200" />
                  </div>

                  <div>
                    <label class="mb-2 block text-sm font-semibold text-slate-700">Target Audience *</label>
                    <input name="audience" type="text" required placeholder="e.g., Small business owners, startups, entrepreneurs" class="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200" />
                  </div>

                  <div>
                    <label class="mb-2 block text-sm font-semibold text-slate-700">Primary Traffic Source *</label>
                    <select name="traffic-source" required class="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200">
                      <option value="">Select traffic source</option>
                      <option value="organic-search">Organic Search (SEO)</option>
                      <option value="social-media">Social Media</option>
                      <option value="paid-ads">Paid Advertising</option>
                      <option value="email">Email Marketing</option>
                      <option value="youtube">YouTube</option>
                      <option value="mixed">Mixed Sources</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label class="mb-2 block text-sm font-semibold text-slate-700">Monthly Visitors/Followers *</label>
                    <select name="monthly-visitors" required class="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200">
                      <option value="">Select range</option>
                      <option value="0-1k">0 - 1,000</option>
                      <option value="1k-5k">1,000 - 5,000</option>
                      <option value="5k-10k">5,000 - 10,000</option>
                      <option value="10k-50k">10,000 - 50,000</option>
                      <option value="50k-100k">50,000 - 100,000</option>
                      <option value="100k+">100,000+</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Promotion Strategy */}
              <div>
                <label class="mb-2 block text-sm font-semibold text-slate-700">How will you promote WebHoga? *</label>
                <textarea 
                  name="promotion-method" 
                  rows={4} 
                  required 
                  placeholder="Describe your promotion strategy (blog posts, reviews, social media campaigns, email newsletters, etc.)"
                  class="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                ></textarea>
              </div>

              <div>
                <label class="mb-2 block text-sm font-semibold text-slate-700">Affiliate/Partnership Experience *</label>
                <select name="experience" required class="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200">
                  <option value="">Select experience level</option>
                  <option value="none">No experience (First time)</option>
                  <option value="beginner">Beginner (1-5 programs)</option>
                  <option value="intermediate">Intermediate (5-10 programs)</option>
                  <option value="experienced">Experienced (10+ programs)</option>
                </select>
              </div>

              <div>
                <label class="mb-2 block text-sm font-semibold text-slate-700">Why do you want to join WebHoga's affiliate program? *</label>
                <textarea 
                  name="why-join" 
                  rows={4} 
                  required 
                  placeholder="Tell us what excites you about promoting WebHoga..."
                  class="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                ></textarea>
              </div>

              <div>
                <label class="mb-2 block text-sm font-semibold text-slate-700">Additional Information</label>
                <textarea 
                  name="additional-info" 
                  rows={3} 
                  placeholder="Any other details you'd like to share..."
                  class="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                ></textarea>
              </div>

              {/* Terms */}
              <div class="rounded-xl bg-slate-50 p-4">
                <label class="flex items-start gap-3">
                  <input type="checkbox" required class="mt-1 h-5 w-5 rounded border-slate-300 text-purple-600 focus:ring-2 focus:ring-purple-200" />
                  <span class="text-sm text-slate-600">
                    I agree to WebHoga's affiliate program terms and conditions. I understand that commissions are paid monthly and I will promote WebHoga ethically and honestly. *
                  </span>
                </label>
              </div>

              <div class="flex flex-col gap-4 pt-6 sm:flex-row">
                <button
                  type="submit"
                  class="group relative flex-1 transform overflow-hidden rounded-xl bg-gradient-to-r from-purple-500 to-violet-500 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <span class="relative z-10 flex items-center justify-center gap-2">
                    🎉 Submit Application
                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>

                <button
                  type="button"
                  onClick$={() => (showForm.value = false)}
                  class="group relative overflow-hidden rounded-xl border-2 border-slate-300 bg-white px-8 py-4 text-lg font-semibold text-slate-600 transition-all duration-300 hover:bg-slate-50"
                >
                  Cancel
                </button>
              </div>

              <p class="text-center text-sm text-slate-500">
                📧 You'll receive your affiliate dashboard login details within 24 hours
              </p>
            </form>
          </div>
        </div>
      )}

      {/* FAQ Section */}
      <section class="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-purple-50 py-20">
        <div class="container mx-auto px-4">
          <div class="fade-in-up mx-auto mb-16 max-w-3xl text-center">
            <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-violet-500 px-4 py-2 text-sm font-medium text-white shadow-lg">
              <span class="h-2 w-2 animate-pulse rounded-full bg-white"></span>
              Common Questions
            </div>

            <h2 class="mb-6 text-4xl leading-tight font-bold lg:text-5xl">
              <span class="text-slate-800">Frequently Asked</span>
              <br />
              <span class="bg-gradient-to-r from-purple-600 via-violet-600 to-purple-700 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
          </div>

          <div class="fade-in-up mx-auto max-w-4xl space-y-6">
            <details class="group rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
              <summary class="flex cursor-pointer items-center justify-between text-xl font-bold text-slate-800">
                <span>How much commission do I earn?</span>
                <svg class="h-6 w-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p class="mt-4 text-slate-600">
                You earn a generous 5.5% commission on every successful referral. For example, if your referral purchases a ₹50,000 website project, you earn ₹2,750. For a ₹1,00,000 project, you earn ₹5,500. There's no limit to how much you can earn!
              </p>
            </details>

            <details class="group rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
              <summary class="flex cursor-pointer items-center justify-between text-xl font-bold text-slate-800">
                <span>When and how do I get paid?</span>
                <svg class="h-6 w-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p class="mt-4 text-slate-600">
                Commissions are paid monthly via bank transfer or UPI. There's no minimum payout threshold, so even if you earn ₹100, you'll receive it. Payments are processed within 7 business days of the month end. You can track your earnings in real-time through your affiliate dashboard.
              </p>
            </details>

            <details class="group rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
              <summary class="flex cursor-pointer items-center justify-between text-xl font-bold text-slate-800">
                <span>How long does the cookie last?</span>
                <svg class="h-6 w-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p class="mt-4 text-slate-600">
                Our affiliate cookie lasts for 30 days. This means if someone clicks your affiliate link, they have 30 days to make a purchase and you'll still earn the commission. This is longer than most affiliate programs and gives your referrals plenty of time to make their decision.
              </p>
            </details>

            <details class="group rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
              <summary class="flex cursor-pointer items-center justify-between text-xl font-bold text-slate-800">
                <span>Do I earn recurring commissions?</span>
                <svg class="h-6 w-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p class="mt-4 text-slate-600">
                Yes! You earn 5.5% commission not just on the initial project, but also on renewal projects, maintenance packages, and additional services when your referrals come back. This creates a recurring revenue stream for you. Some of our top affiliates earn consistent monthly income from repeat clients.
              </p>
            </details>

            <details class="group rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
              <summary class="flex cursor-pointer items-center justify-between text-xl font-bold text-slate-800">
                <span>What marketing materials do you provide?</span>
                <svg class="h-6 w-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p class="mt-4 text-slate-600">
                We provide professional banners in multiple sizes, social media graphics for Instagram, Facebook, LinkedIn, pre-written email templates, blog post templates, case studies, portfolio screenshots, and promotional copy. Everything is designed to make your promotion efforts easier and more effective. You'll get access to all materials immediately after approval.
              </p>
            </details>

            <details class="group rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
              <summary class="flex cursor-pointer items-center justify-between text-xl font-bold text-slate-800">
                <span>Is there an approval process?</span>
                <svg class="h-6 w-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p class="mt-4 text-slate-600">
                Yes, we review all applications to ensure quality partnerships. However, our approval process is quick - usually within 24 hours. We're looking for affiliates who have an audience interested in web design, business growth, or digital services. Don't worry if you're just starting out; we welcome beginners too!
              </p>
            </details>

            <details class="group rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
              <summary class="flex cursor-pointer items-center justify-between text-xl font-bold text-slate-800">
                <span>Can I promote WebHoga on social media?</span>
                <svg class="h-6 w-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p class="mt-4 text-slate-600">
                Absolutely! You can promote WebHoga on Instagram, Facebook, LinkedIn, YouTube, Twitter, Pinterest, and any other social platform. We provide customized graphics and shortened tracking links for easy sharing. Just make sure to follow each platform's guidelines and always disclose your affiliate relationship.
              </p>
            </details>

            <details class="group rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
              <summary class="flex cursor-pointer items-center justify-between text-xl font-bold text-slate-800">
                <span>What if I don't have a website yet?</span>
                <svg class="h-6 w-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p class="mt-4 text-slate-600">
                That's okay! While having a website or blog helps, you can still join if you have an active social media presence with engaged followers. You can promote through Instagram, YouTube, LinkedIn, or even through direct referrals in your network. Many successful affiliates start with just social media.
              </p>
            </details>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
});
