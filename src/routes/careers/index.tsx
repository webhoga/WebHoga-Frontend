import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useScrollAnimate } from "~/hooks/useScrollAnimate";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export const head: DocumentHead = {
  title: "Careers – Join WebHoga Team | Premium Web Design Agency",
  meta: [
    {
      name: "description",
      content: "Join WebHoga's dynamic team of web designers, developers, and digital marketing experts. Build your career with India's premium web design agency.",
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

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section class="relative min-h-screen overflow-hidden bg-gradient-to-br from-orange-50 via-white to-blue-50">
        <div class="absolute inset-0 overflow-hidden">
          <div class="absolute top-20 right-20 h-72 w-72 animate-pulse rounded-full bg-gradient-to-br from-orange-400/20 to-amber-400/20 blur-3xl"></div>
          <div class="absolute bottom-20 left-20 h-96 w-96 animate-pulse rounded-full bg-gradient-to-tr from-blue-400/15 to-cyan-400/15 blur-3xl delay-1000"></div>
          <div class="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 transform animate-bounce rounded-full bg-gradient-to-r from-amber-300/10 to-orange-300/10 blur-2xl"></div>
        </div>

        <div class="relative z-10 container mx-auto px-4 py-20">
          <div class="mx-auto flex min-h-[80vh] max-w-4xl flex-col justify-center text-center">
            {/* Premium Badge */}
            <div class="fade-in-up mx-auto mt-8 mb-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-2 text-sm font-medium text-white shadow-lg">
              <span class="h-2 w-2 animate-pulse rounded-full bg-white"></span>
              Join India's Premium Web Design Agency
            </div>

            {/* Main Headline */}
            <div class="fade-in-up space-y-6">
              <h1 class="text-5xl leading-tight font-bold lg:text-7xl">
                <span class="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 bg-clip-text text-transparent">
                  Build Your
                </span>
                <br />
                <span class="text-slate-800">Dream Career</span>
                <br />
                <span class="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  With WebHoga
                </span>
              </h1>
            </div>

            {/* Subheading */}
            <p class="fade-in-up mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-slate-600 lg:text-2xl">
              Join our team of{" "}
              <span class="font-semibold text-orange-600">
                creative innovators
              </span>
              ,
              <span class="font-semibold text-blue-600"> tech enthusiasts</span>
              , and
              <span class="font-semibold text-amber-600">
                {" "}
                digital strategists
              </span>{" "}
              who are
              <span class="font-semibold text-green-600">
                {" "}
                transforming businesses
              </span>{" "}
              across India.
            </p>

            {/* Trust Indicators */}
            <div class="fade-in-up mt-8 flex items-center justify-center gap-8 text-sm text-slate-600">
              <div class="flex items-center gap-2">
                <div class="h-3 w-3 rounded-full bg-green-500"></div>
                <span>Remote-First Culture</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="h-3 w-3 rounded-full bg-blue-500"></div>
                <span>Growth Opportunities</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="h-3 w-3 rounded-full bg-orange-500"></div>
                <span>Competitive Benefits</span>
              </div>
            </div>

            {/* CTA Button */}
            <div class="fade-in-up mt-12">
              <button
                onClick$={() => (showForm.value = true)}
                class="group relative transform overflow-hidden rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <span class="relative z-10 flex items-center gap-2">
                  Apply for Job
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
                <div class="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 transition-opacity group-hover:opacity-100"></div>
              </button>
            </div>

            {/* Quick Stats */}
            <div class="fade-in-up mt-16 grid grid-cols-3 gap-8 border-t border-slate-200 pt-8">
              <div class="text-center">
                <div class="text-3xl font-bold text-orange-600">100+</div>
                <div class="text-sm text-slate-600">Projects Delivered</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-blue-600">5+</div>
                <div class="text-sm text-slate-600">Years Experience</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-amber-600">24/7</div>
                <div class="text-sm text-slate-600">Learning Culture</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section class="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20">
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
              Why Choose WebHoga
            </div>

            <h2 class="mb-6 text-4xl leading-tight font-bold lg:text-5xl">
              <span class="text-slate-800">Experience the</span>
              <br />
              <span class="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 bg-clip-text text-transparent">
                WebHoga Difference
              </span>
            </h2>

            <p class="text-xl leading-relaxed text-slate-600">
              Join a company that values{" "}
              <span class="font-semibold text-blue-600">innovation</span>,
              <span class="font-semibold text-orange-600"> creativity</span>,
              and
              <span class="font-semibold text-green-600">
                {" "}
                professional growth
              </span>
              .
            </p>
          </div>

          {/* Benefits Grid */}
          <div class="fade-in-up grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Remote-First Culture */}
            <div class="group relative transform overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div class="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div class="relative z-10">
                <div class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-2xl text-white transition-transform group-hover:scale-110">
                  🏠
                </div>
                <h3 class="mb-4 text-2xl font-bold text-slate-800">
                  Remote-First Culture
                </h3>
                <p class="leading-relaxed text-slate-600">
                  Work from anywhere with flexible hours. We believe in
                  work-life balance and trust our team to deliver exceptional
                  results.
                </p>
              </div>
            </div>

            {/* Learning & Development */}
            <div class="group relative transform overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div class="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div class="relative z-10">
                <div class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 text-2xl text-white transition-transform group-hover:scale-110">
                  📚
                </div>
                <h3 class="mb-4 text-2xl font-bold text-slate-800">
                  Learning & Development
                </h3>
                <p class="leading-relaxed text-slate-600">
                  Continuous learning opportunities with courses,
                  certifications, and skill development programs to advance your
                  career.
                </p>
              </div>
            </div>

            {/* Creative Freedom */}
            <div class="group relative transform overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div class="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-violet-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div class="relative z-10">
                <div class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-violet-500 text-2xl text-white transition-transform group-hover:scale-110">
                  🎨
                </div>
                <h3 class="mb-4 text-2xl font-bold text-slate-800">
                  Creative Freedom
                </h3>
                <p class="leading-relaxed text-slate-600">
                  Express your creativity without limits. We encourage
                  innovative thinking and give you the freedom to bring your
                  ideas to life.
                </p>
              </div>
            </div>

            {/* Competitive Compensation */}
            <div class="group relative transform overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div class="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div class="relative z-10">
                <div class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 text-2xl text-white transition-transform group-hover:scale-110">
                  💰
                </div>
                <h3 class="mb-4 text-2xl font-bold text-slate-800">
                  Competitive Compensation
                </h3>
                <p class="leading-relaxed text-slate-600">
                  Industry-leading salaries, performance bonuses, and
                  comprehensive benefits package including health insurance and
                  perks.
                </p>
              </div>
            </div>

            {/* Innovation Projects */}
            <div class="group relative transform overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div class="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-rose-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div class="relative z-10">
                <div class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 text-2xl text-white transition-transform group-hover:scale-110">
                  🚀
                </div>
                <h3 class="mb-4 text-2xl font-bold text-slate-800">
                  Innovation Projects
                </h3>
                <p class="leading-relaxed text-slate-600">
                  Work on cutting-edge projects using the latest technologies.
                  Be part of solutions that impact thousands of businesses.
                </p>
              </div>
            </div>

            {/* Team Collaboration */}
            <div class="group relative transform overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-blue-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div class="relative z-10">
                <div class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 text-2xl text-white transition-transform group-hover:scale-110">
                  🤝
                </div>
                <h3 class="mb-4 text-2xl font-bold text-slate-800">
                  Team Collaboration
                </h3>
                <p class="leading-relaxed text-slate-600">
                  Work with passionate professionals who support each other. Our
                  collaborative environment fosters growth and success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      {showForm.value && (
        <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div class="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-8">
            <div class="mb-8 flex items-center justify-between">
              <div>
                <h3 class="text-3xl font-bold text-slate-800">Join Our Team</h3>
                <p class="mt-2 text-slate-600">
                  Fill out the form below and we'll get back to you soon!
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
                  fullName: data["full-name"],
                  email: data.email,
                  phone: data.phone,
                  location: data.location,
                  position: data.position,
                  experience: data.experience,
                  salary: data.salary,
                  skills: data.skills,
                  portfolio: data.portfolio,
                  coverLetter: data["cover-letter"],
                  additionalInfo: data["additional-info"],
                  availability: data.availability,
                  workMode: data["work-mode"],
                };

                try {
                  const res = await fetch("https://webhoga.com/api/apply", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                  });

                  if (res.ok) {
                    alert("✅ Application submitted successfully!");
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
                  <input name="full-name" type="text" required class="w-full rounded-xl border border-slate-300 px-4 py-3" />
                </div>
                <div>
                  <label class="mb-2 block text-sm font-semibold text-slate-700">Email Address *</label>
                  <input name="email" type="email" required class="w-full rounded-xl border border-slate-300 px-4 py-3" />
                </div>
              </div>

              <div class="grid gap-6 md:grid-cols-2">
                <div>
                  <label class="mb-2 block text-sm font-semibold text-slate-700">Phone Number *</label>
                  <input name="phone" type="tel" required class="w-full rounded-xl border border-slate-300 px-4 py-3" />
                </div>
                <div>
                  <label class="mb-2 block text-sm font-semibold text-slate-700">Location</label>
                  <input name="location" type="text" class="w-full rounded-xl border border-slate-300 px-4 py-3" />
                </div>
              </div>

              <div>
                <label class="mb-2 block text-sm font-semibold text-slate-700">Position of Interest *</label>
                <select name="position" required class="w-full rounded-xl border border-slate-300 px-4 py-3">
                  <option value="">Select a position</option>
                  <option value="web-designer">Web Designer</option>
                  <option value="frontend-developer">Frontend Developer</option>
                  <option value="backend-developer">Backend Developer</option>
                  <option value="fullstack-developer">Full Stack Developer</option>
                  <option value="ui-ux-designer">UI/UX Designer</option>
                  <option value="digital-marketer">Digital Marketing Specialist</option>
                  <option value="seo-specialist">SEO Specialist</option>
                  <option value="content-writer">Content Writer</option>
                  <option value="project-manager">Project Manager</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div class="grid gap-6 md:grid-cols-2">
                <div>
                  <label class="mb-2 block text-sm font-semibold text-slate-700">Experience Level *</label>
                  <select name="experience" required class="w-full rounded-xl border border-slate-300 px-4 py-3">
                    <option value="">Select experience</option>
                    <option value="fresher">Fresher (0-1 years)</option>
                    <option value="junior">Junior (1-3 years)</option>
                    <option value="mid">Mid-level (3-5 years)</option>
                    <option value="senior">Senior (5+ years)</option>
                  </select>
                </div>
                <div>
                  <label class="mb-2 block text-sm font-semibold text-slate-700">Expected Salary (₹/month)</label>
                  <input name="salary" type="text" class="w-full rounded-xl border border-slate-300 px-4 py-3" />
                </div>
              </div>

              <div>
                <label class="mb-2 block text-sm font-semibold text-slate-700">Key Skills *</label>
                <textarea name="skills" rows={3} required class="w-full rounded-xl border border-slate-300 px-4 py-3"></textarea>
              </div>

              <div>
                <label class="mb-2 block text-sm font-semibold text-slate-700">Portfolio/Website URL</label>
                <input name="portfolio" type="url" class="w-full rounded-xl border border-slate-300 px-4 py-3" />
              </div>

              <div>
                <label class="mb-2 block text-sm font-semibold text-slate-700">Why do you want to join WebHoga? *</label>
                <textarea name="cover-letter" rows={4} required class="w-full rounded-xl border border-slate-300 px-4 py-3"></textarea>
              </div>

              <div>
                <label class="mb-2 block text-sm font-semibold text-slate-700">Additional Information</label>
                <textarea name="additional-info" rows={3} class="w-full rounded-xl border border-slate-300 px-4 py-3"></textarea>
              </div>

              <div class="grid gap-6 md:grid-cols-2">
                <div>
                  <label class="mb-2 block text-sm font-semibold text-slate-700">Availability *</label>
                  <select name="availability" required class="w-full rounded-xl border border-slate-300 px-4 py-3">
                    <option value="">Select availability</option>
                    <option value="immediate">Immediate</option>
                    <option value="2-weeks">2 weeks notice</option>
                    <option value="1-month">1 month notice</option>
                    <option value="2-months">2+ months</option>
                  </select>
                </div>
                <div>
                  <label class="mb-2 block text-sm font-semibold text-slate-700">Preferred Work Mode</label>
                  <select name="work-mode" class="w-full rounded-xl border border-slate-300 px-4 py-3">
                    <option value="remote">Remote</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div class="flex flex-col gap-4 pt-6 sm:flex-row">
                <button
                  type="submit"
                  class="group relative flex-1 transform overflow-hidden rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
            <span class="relative z-10 flex items-center justify-center gap-2">
              🚀 Submit Application
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
                We'll review your application and get back to you within 2-3 business days
              </p>
            </form>
          </div>
        </div>
      )}

      {/* Company Values Section */}
      <section class="relative overflow-hidden bg-white py-20">
        <div class="container mx-auto px-4">
          <div class="fade-in-up mx-auto mb-16 max-w-3xl text-center">
            <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-violet-500 px-4 py-2 text-sm font-medium text-white shadow-lg">
              <span class="h-2 w-2 animate-pulse rounded-full bg-white"></span>
              Our Core Values
            </div>

            <h2 class="mb-6 text-4xl leading-tight font-bold lg:text-5xl">
              <span class="text-slate-800">What We</span>
              <br />
              <span class="bg-gradient-to-r from-purple-600 via-violet-600 to-purple-700 bg-clip-text text-transparent">
                Stand For
              </span>
            </h2>

            <p class="text-xl leading-relaxed text-slate-600">
              Our values guide everything we do and shape the culture that makes
              WebHoga special.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
});
