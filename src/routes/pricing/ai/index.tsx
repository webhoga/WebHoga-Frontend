import { component$ } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';

export const AIConsultation = component$(() => {
  const nav = useNavigate();

  const consultationServices = [
    {
      id: 'ai-tools-audit',
      title: 'AI Tools & Platforms Audit',
      description:
        'We analyze your current workflow and organizational needs to identify the best AI tools and platforms. From ChatGPT and Claude to specialized AI solutions, we recommend the perfect fit for your business.',
      logo: 'https://cdn-icons-png.flaticon.com/512/3143/3143615.png',
      features: [
        'Current workflow assessment',
        'AI tool landscape analysis',
        'ROI & cost-benefit evaluation',
        'Integration feasibility review'
      ]
    },
    {
      id: 'ai-agent-design',
      title: 'Custom AI Agent Design',
      description:
        'Based on consultation findings, we design and build custom AI agents tailored to your organization. Automate tasks, improve customer service, or streamline internal processes with intelligent automation.',
      logo: 'https://cdn-icons-png.flaticon.com/512/4436/4436481.png',
      features: [
        'Custom agent architecture',
        'Workflow automation design',
        'Multi-tool integration setup',
        'Performance optimization'
      ]
    },
    {
      id: 'implementation-training',
      title: 'Implementation & Training',
      description:
        'We handle the deployment of your AI tools and agents, then train your team to maximize their potential. Ensure smooth adoption and continuous improvement of your AI solutions.',
      logo: 'https://cdn-icons-png.flaticon.com/512/4436/4436514.png',
      features: [
        'System deployment & setup',
        'Team training sessions',
        'Process documentation',
        'Ongoing support & optimization'
      ]
    }
  ];

  return (
    <>
      <section class="py-20 px-4 bg-white min-h-screen relative">
        {/* Close Button */}
        <button
          onClick$={() => nav('/')}
          class="absolute top-6 right-6 text-gray-500 hover:text-red-500 transition-colors text-3xl font-bold"
          aria-label="Close and return to homepage"
        >
          ×
        </button>

        <div class="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <div class="text-center">
            <h2 class="text-5xl font-bold text-gray-900 mb-4">
              AI Tool & Agent Consultation
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your organization with AI-powered solutions. Our expert consultation identifies the best tools and AI agents for your unique business needs, followed by custom implementation and team training.
            </p>
          </div>

          {/* Consultation Process */}
          <div class="bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl shadow-lg p-12">
            <h3 class="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Consultation Process
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div class="flex flex-col items-center text-center">
                <div class="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                  1
                </div>
                <h4 class="font-bold text-lg text-gray-900 mb-2">Discovery</h4>
                <p class="text-gray-700">Understand your business goals and current challenges</p>
              </div>
              <div class="flex flex-col items-center text-center">
                <div class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                  2
                </div>
                <h4 class="font-bold text-lg text-gray-900 mb-2">Analysis</h4>
                <p class="text-gray-700">Evaluate available AI tools and technologies</p>
              </div>
              <div class="flex flex-col items-center text-center">
                <div class="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                  3
                </div>
                <h4 class="font-bold text-lg text-gray-900 mb-2">Recommendation</h4>
                <p class="text-gray-700">Propose best-fit solutions tailored for you</p>
              </div>
              <div class="flex flex-col items-center text-center">
                <div class="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                  4
                </div>
                <h4 class="font-bold text-lg text-gray-900 mb-2">Implementation</h4>
                <p class="text-gray-700">Build and deploy your custom AI solution</p>
              </div>
            </div>
          </div>

          {/* Services Cards */}
          <div class="space-y-10">
            {consultationServices.map((service) => (
              <div
                key={service.id}
                class="bg-gradient-to-br from-slate-50 to-gray-100 rounded-3xl shadow-xl p-10 flex flex-col lg:flex-row items-center gap-10"
              >
                <div class="flex-1 space-y-6">
                  <h3 class="text-3xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                  <p class="text-lg text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div class="space-y-3">
                    <p class="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                      What's Included:
                    </p>
                    <ul class="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} class="flex items-start gap-3">
                          <span class="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span class="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div class="w-40 h-40 flex-shrink-0">
                  <img
                    src={service.logo}
                    alt={`${service.title} icon`}
                    width="200"
                    height="200"
                    class="w-full h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div class="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl shadow-xl p-12 text-center text-white space-y-6">
            <h3 class="text-3xl font-bold">
              Ready to Transform Your Organization with AI?
            </h3>
            <p class="text-lg max-w-2xl mx-auto opacity-90">
              Book a free consultation with our AI experts. We'll analyze your needs and propose the perfect AI tools and custom agents for your business.
            </p>
            <button
              onClick$={() => nav('/contact')}
              class="inline-block px-10 py-4 bg-white text-purple-600 font-bold rounded-xl hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl text-lg"
            >
              Book Consultation
            </button>
          </div>

          {/* FAQ Section */}
          <div class="space-y-6">
            <h3 class="text-3xl font-bold text-gray-900 text-center">
              Frequently Asked Questions
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-gray-50 rounded-2xl p-8">
                <h4 class="text-xl font-bold text-gray-900 mb-3">
                  How long is a typical consultation?
                </h4>
                <p class="text-gray-700">
                  Initial consultations typically take 1-2 hours. We discuss your business goals, current challenges, and desired outcomes to recommend the best solutions.
                </p>
              </div>
              <div class="bg-gray-50 rounded-2xl p-8">
                <h4 class="text-xl font-bold text-gray-900 mb-3">
                  Is the consultation really free?
                </h4>
                <p class="text-gray-700">
                  Yes! Our consultation is completely free. We invest time to understand your needs and propose the best AI solutions for your organization.
                </p>
              </div>
              <div class="bg-gray-50 rounded-2xl p-8">
                <h4 class="text-xl font-bold text-gray-900 mb-3">
                  What if I need a custom AI agent?
                </h4>
                <p class="text-gray-700">
                  If custom development is needed, we'll provide a separate proposal with timeline and investment details after understanding your specific requirements.
                </p>
              </div>
              <div class="bg-gray-50 rounded-2xl p-8">
                <h4 class="text-xl font-bold text-gray-900 mb-3">
                  Do you provide ongoing support?
                </h4>
                <p class="text-gray-700">
                  Absolutely! We offer implementation support, team training, and ongoing optimization to ensure your AI solutions deliver maximum value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default AIConsultation;