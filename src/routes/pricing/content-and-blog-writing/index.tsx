import { component$ } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';

export default component$(() => {
  const nav = useNavigate();

  return (
    <section class="py-20 px-6 bg-white min-h-screen relative">
      {/* Close Button */}
      <button
        onClick$={() => nav('/')}
        class="absolute top-6 right-6 text-gray-500 hover:text-red-500 transition-colors text-3xl font-bold"
        aria-label="Close and return to homepage"
      >
        ×
      </button>

      <div class="max-w-6xl mx-auto text-center space-y-10">
        <h1 class="text-5xl font-bold text-gray-900">Content & Blog Writing Pricing</h1>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Transform your content strategy with compelling writing that engages your audience and drives results—professional content solutions tailored to your brand voice.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Starter Content Package */}
          <div class="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-3xl shadow-xl text-left">
            <h3 class="text-2xl font-bold mb-4 text-gray-800">Starter Content</h3>
            <p class="text-gray-600 mb-4">Essential content foundation for small businesses and startups.</p>
            <ul class="space-y-2 text-sm text-gray-700 mb-6">
              <li>✔ 8 Blog Posts (800-1000 words)</li>
              <li>✔ Content Strategy Session</li>
              <li>✔ SEO Keyword Research</li>
              <li>✔ Content Calendar Planning</li>
              <li>✔ Brand Voice Development</li>
              <li>✔ Meta Descriptions & Titles</li>
              <li>✔ Social Media Captions (16)</li>
              <li>✔ Email Newsletter Template</li>
              <li>✔ Content Performance Guide</li>
              <li>✔ Topic Idea Bank (50 ideas)</li>
              <li>✔ Basic SEO Optimization</li>
              <li>✔ Content Style Guide</li>
              <li>✔ 2 Rounds of Revisions</li>
              <li>✔ Delivery in 2-3 Weeks</li>
            </ul>
            <div class="text-3xl font-bold text-emerald-600 mb-4">₹15,100</div>
            <button
              onClick$={() => nav('/contact')}
              class="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-xl font-semibold transition-all"
            >
              Get Started
            </button>
          </div>

          {/* Content Clarity Content Package */}
          <div class="bg-gradient-to-br from-blue-50 to-cyan-100 p-8 rounded-3xl shadow-xl text-left">
            <h3 class="text-2xl font-bold mb-4 text-gray-800">Content Clarity</h3>
            <p class="text-gray-600 mb-4">Comprehensive content system for growing businesses.</p>
            <ul class="space-y-2 text-sm text-gray-700 mb-6">
              <li>✔ 16 Blog Posts (1200-1500 words)</li>
              <li>✔ Advanced Content Strategy</li>
              <li>✔ Comprehensive SEO Research</li>
              <li>✔ 3-Month Content Calendar</li>
              <li>✔ Brand Voice & Tone Guide</li>
              <li>✔ Landing Page Copy (3 pages)</li>
              <li>✔ Social Media Content (32 posts)</li>
              <li>✔ Email Marketing Sequence (5 emails)</li>
              <li>✔ Content Analytics Setup</li>
              <li>✔ Topic Research & Planning</li>
              <li>✔ Advanced SEO Optimization</li>
              <li>✔ Content Distribution Strategy</li>
              <li>✔ 3 Rounds of Revisions</li>
              <li>✔ Delivery in 3-4 Weeks</li>
            </ul>
            <div class="text-3xl font-bold text-cyan-700 mb-4">₹39,999</div>
            <button
              onClick$={() => nav('/contact')}
              class="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-xl font-semibold transition-all"
            >
              Get Started
            </button>
          </div>

          {/* Enterprise Content Package */}
          <div class="bg-gradient-to-br from-purple-50 to-indigo-100 p-8 rounded-3xl shadow-xl text-left">
            <h3 class="text-2xl font-bold mb-4 text-gray-800">Enterprise</h3>
            <p class="text-gray-600 mb-4">Complete content ecosystem for large organizations and premium brands.</p>
            <ul class="space-y-2 text-sm text-gray-700 mb-6">
              <li>✔ 24 Blog Posts (1500-2000 words)</li>
              <li>✔ Strategic Content Framework</li>
              <li>✔ Enterprise SEO Strategy</li>
              <li>✔ 6-Month Content Roadmap</li>
              <li>✔ Multi-Brand Voice Guidelines</li>
              <li>✔ Website Copy Overhaul (10 pages)</li>
              <li>✔ Omnichannel Content Suite</li>
              <li>✔ Email Marketing Automation</li>
              <li>✔ Content Performance Dashboard</li>
              <li>✔ Competitive Content Analysis</li>
              <li>✔ Technical SEO Implementation</li>
              <li>✔ Content Team Training</li>
              <li>✔ Unlimited Revisions</li>
              <li>✔ Delivery in 4-6 Weeks</li>
            </ul>
            <div class="text-3xl font-bold text-indigo-600 mb-4">₹87,800</div>
            <button
              onClick$={() => nav('/contact')}
              class="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-xl font-semibold transition-all"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});
