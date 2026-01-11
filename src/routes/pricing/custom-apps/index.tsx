import { component$ } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';

export const CustomApps = component$(() => {
  const nav = useNavigate();

  const customApps = [
    {
      id: 'html-css-js',
      title: 'HTML/CSS/JS Development',
      description:
        'Custom static websites with modern HTML5, CSS3, and JavaScript. Perfect for landing pages, portfolios, and simple interactive applications with clean, responsive design.',
      logo: 'https://cdn-icons-png.flaticon.com/512/921/921595.png',
      link: '/contact',
      bgClass: 'from-orange-50 to-yellow-100',
      startingPrice: '₹34,300'
    },
    {
      id: 'reactjs',
      title: 'React.js Development',
      description:
        'Dynamic single-page applications built with React.js framework. Includes component-based architecture, state management, and modern UI/UX for interactive web experiences.',
      logo: 'https://michaelwashburnjr.com/hubfs/Imported_Blog_Media/react-icon_svg_.png',
      link: '/contact',
      bgClass: 'from-blue-50 to-cyan-100',
      startingPrice: '₹75,000'
    },
    {
      id: 'nodejs',
      title: 'Node.js Development',
      description:
        'Full-stack web applications with Node.js backend, API development, database integration, and server-side rendering. Complete solution for scalable enterprise applications.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png',
      link: '/contact',
      bgClass: 'from-green-50 to-teal-100',
      startingPrice: '₹1,00,000'
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
          <div class="text-center">
            <h2 class="text-5xl font-bold text-gray-900 mb-4">
              Custom Web Application Pricing
            </h2>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">
              Build powerful custom web applications tailored to your business needs—from simple static sites to complex full-stack solutions.
            </p>
          </div>

          <div class="space-y-10">
            {customApps.map((customApp) => (
              <div
                key={customApp.id}
                class={`bg-gradient-to-br ${customApp.bgClass} rounded-3xl shadow-xl p-10 flex flex-col lg:flex-row items-center gap-10`}
              >
                <div class="flex-1 space-y-4">
                  <h3 class="text-3xl font-bold text-gray-800">
                    {customApp.title}
                  </h3>
                  <p class="text-lg text-gray-700">
                    {customApp.description}
                  </p>
                  <div class="text-2xl font-bold text-gray-900">
                    Starts at {customApp.startingPrice}
                  </div>
                  <button
                    onClick$={() => nav(customApp.link)}
                    class="mt-4 inline-block px-6 py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-all"
                  >
                    Get Started
                  </button>
                </div>

                <div class="w-32 h-32">
                  <img
                    src={customApp.logo}
                    alt={`${customApp.title} logo`}
                    width="200"
                    height="100"
                    class="w-full h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
});

export default CustomApps;
