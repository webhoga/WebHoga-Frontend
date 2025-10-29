import { component$ } from '@builder.io/qwik';

export const PricingSection = component$(() => {
  const services = [
    {
      id: 'wordpress',
      title: 'WordPress Website Designing',
      description:
        'Custom WordPress websites with responsive design, CMS integration, and SEO optimization. Perfect for businesses looking for scalable web solutions.',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzAxIzs2yRTPxONA1yBwMZdhkNwlqmIpxFug&s',
      link: '/pricing/wordpress',
      bgClass: 'from-orange-50 to-yellow-100'
    },
    {
      id: 'shopify',
      title: 'Shopify eCommerce Development',
      description:
        'Complete Shopify store setup with custom themes, payment integration, and inventory management. Launch your online business with confidence.',
      logo: 'https://cdn.freebiesupply.com/logos/large/2x/shopify-logo-png-transparent.png',
      link: '/pricing/shopify',
      bgClass: 'from-blue-50 to-cyan-100'
    },
    {
      id: 'woocommerce',
      title: 'WooCommerce eCommerce Development',
      description:
        'Complete WooCommerce store setup with theme integration, secure payment gateways, inventory management, and mobile responsiveness. Ideal for WordPress users needing full control and flexibility.',
      logo: 'https://woocommerce.com/wp-content/uploads/2025/01/Logo-Primary.png',
      link: '/pricing/woocommerce',
      bgClass: 'from-green-50 to-teal-100'
    },
    {
      id: 'custom',
      title: 'Custom Web Application',
      description:
        'Tailored web applications built with modern frameworks like React, or Node.js. We build scalable solutions for your specific business needs.',
      logo: 'https://cdn-icons-png.flaticon.com/512/10939/10939273.png',
      link: '/pricing/custom-apps',
      bgClass: 'from-purple-50 to-indigo-100'
    },
    {
      id: 'landing-page',
      title: 'Landing Page Development',
      description:
        'High-converting landing pages designed for product launches, marketing campaigns, and lead generation. Optimized for mobile and performance.',
      logo: 'https://cdn-icons-png.flaticon.com/512/4053/4053020.png',
      link: '/pricing/landing-page',
      bgClass: 'from-pink-50 to-rose-100'
    },
    {
      id: 'hotel-booking-engine',
      title: 'Hotel-Booking Engine',
      description: 'A seamless, mobile-optimized reservation system designed to boost conversions and enhance the guest booking experience.',
      logo: 'https://www.posease.com/wp-content/uploads/2024/06/Frame-7-1-1024x721.png',
      link: '/pricing/hotel-booking-engine',
      bgClass: 'from-green-50 to-teal-100'
    },
    {
      id: 'hotel-reservation-api',
      title: 'Hotel Reservation API',
      description: 'Powerful API solution for integrating hotel booking functionality into your application. Includes real-time availability, booking management, and payment integration.',
      logo: 'https://travelcarma.com/static/media/hotel-booking-engine-clipart.e1471a8464b192c8d64c.png',
      link: '/pricing/hotel-reservation-api',
      bgClass: 'from-emerald-50 to-teal-100'
    },
    {
      id: 'white-label-travel-portal',
      title: 'White Label Travel Portal Development',
      description:
        'Complete white label travel booking platform with flight, hotel, and car rental integrations. Multi-currency support, GDS connectivity, payment gateway integration, and customizable branding. Launch your travel agency online with a fully-featured B2B/B2C portal.',
      logo: 'https://www.oneclickitsolution.com/_next/image/?url=https%3A%2F%2Fd1rdz15x9x7c4f.cloudfront.net%2Fassets%2Fpayload-images%2Ftravel-intro.png&w=1920&q=75',
      link: '/pricing/white-label-travel-booking-portal-development',
      bgClass: 'from-sky-50 to-blue-100'
    },
    {
      id: 'content-writing',
      title: 'Content & Blog Writing',
      description:
        'Professional content creation with SEO optimization, brand voice development, and strategic content planning. Transform your content strategy with compelling writing.',
      logo: 'https://cdn-icons-png.flaticon.com/512/4698/4698699.png',
      link: '/pricing/content-and-blog-writing',
      bgClass: 'from-emerald-50 to-green-100'
    },
    {
      id: 'logo-designing',
      title: 'Logo Designing',
      description:
        'Creative and professional logos tailored to your brand\'s identity. Includes multiple concepts, unlimited revisions, and all standard file formats.',
      logo: 'https://cdn-icons-png.flaticon.com/512/16865/16865489.png',
      link: '/pricing/logo-design',
      bgClass: 'from-yellow-50 to-orange-100'
    },
    {
      id: 'seo-and-web-optimization',
      title: 'SEO & Web Optimization',
      description:
        'SEO and web optimization with technical audits, keyword research, and performance enhancement. Boost your search rankings with data-driven strategies and conversion optimization.',
      logo: 'https://images.seeklogo.com/logo-png/62/2/google-new-logo-png_seeklogo-622426.png',
      link: '/pricing/seo-and-web-optimization',
      bgClass: 'from-emerald-50 to-green-100'
    },
    {
      id: 'brand-identity',
      title: 'Brand Identity Design',
      description:
        'Complete brand identity system including logos, color palettes, typography, and brand guidelines. Ensure consistent visual language across all platforms.',
      logo: 'https://cdn-icons-png.flaticon.com/512/4152/4152699.png',
      link: '/pricing/brand-identity',
      bgClass: 'from-blue-50 to-indigo-100'
    },
    {
      id: 'google-analytics-and-tracking',
      title: 'Google Analytics and Tracking',
      description:
        'Google Analytics and tracking with conversion monitoring, user behavior analysis, and performance metrics. Maximize your data insights with advanced tracking and reporting.',
      logo: 'https://brandeps.com/logo-download/G/Google-Analytics-logo-01.png',
      link: '/pricing/google-analytics-and-tracking',
      bgClass: 'from-blue-50 to-indigo-100'
    }
  ];

  return (
    <section class="py-20 px-4 bg-white">
      <div class="max-w-7xl mx-auto space-y-12">
        <div class="text-center">
          <h2 class="text-5xl font-bold text-gray-900 mb-4">
            Our Pricing
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore high-quality web design and development packages crafted to grow your business.
          </p>
        </div>

        <div class="space-y-10">
          {services.map((service) => (
            <div
              key={service.id}
              class={`bg-gradient-to-br ${service.bgClass} rounded-3xl shadow-xl p-10 flex flex-col lg:flex-row items-center gap-10`}
            >
              <div class="flex-1 space-y-4">
                <h3 class="text-3xl font-bold text-gray-800">
                  {service.title}
                </h3>
                <p class="text-lg text-gray-700">
                  {service.description}
                </p>
                <a
                  href={service.link}
                  class="mt-4 inline-block px-6 py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-all"
                >
                  View Pricing
                </a>
              </div>

              <div class="w-32 h-32">
                <img
                  src={service.logo}
                  alt={`${service.title} logo`}
                  width="128"
                  height="128"
                  class="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default PricingSection;
