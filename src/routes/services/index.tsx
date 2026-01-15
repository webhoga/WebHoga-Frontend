import Header from "~/components/Header";
import Footer from "~/components/Footer";
import ServicesSection from "~/components/ServicesSection";
import type { DocumentHead } from '@builder.io/qwik-city';

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(2rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.7s ease-out forwards;
        }
        
        .fade-in-observer.animate-fade-in-up {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .services-container {
          min-height: 100vh;
          background-color: white;
        }

        .services-section {
          position: relative;
          padding: 5rem 0;
          background: linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #eff6ff 100%);
          overflow: hidden;
        }

        .background-elements {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .bg-blur-1 {
          position: absolute;
          top: 5rem;
          left: 5rem;
          width: 16rem;
          height: 16rem;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1));
          border-radius: 50%;
          filter: blur(3rem);
          animation: pulse 2s infinite;
        }

        .bg-blur-2 {
          position: absolute;
          bottom: 5rem;
          right: 5rem;
          width: 20rem;
          height: 20rem;
          background: linear-gradient(45deg, rgba(251, 146, 60, 0.1), rgba(245, 158, 11, 0.1));
          border-radius: 50%;
          filter: blur(3rem);
          animation: pulse 2s infinite;
          animation-delay: 1s;
        }

        .services-grid {
          display: grid;
          gap: 2rem;
          grid-template-columns: 1fr;
        }

        @media (min-width: 768px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .service-card {
          position: relative;
          background: white;
          border-radius: 1rem;
          padding: 2rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          border: 1px solid #f1f5f9;
          overflow: hidden;
          height: 100%;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .service-card:hover {
          transform: translateY(-0.5rem);
          box-shadow: 0 25px 25px -5px rgba(0, 0, 0, 0.1);
        }

        .service-icon {
          width: 4rem;
          height: 4rem;
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem;
          margin-bottom: 1.5rem;
          transition: transform 0.3s ease;
        }

        .service-icon img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: brightness(0) invert(1);
        }

        .service-card:hover .service-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .learn-more-link {
          display: flex;
          align-items: center;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .learn-more-link:hover {
          gap: 0.75rem;
        }

        .arrow-icon {
          width: 1.25rem;
          height: 1.25rem;
          margin-left: 0.5rem;
          transition: transform 0.3s ease;
        }

        .learn-more-link:hover .arrow-icon {
          transform: translateX(0.25rem);
        }
      `}</style>

      <Header />

      <div class="services-container">
        <section class="services-section">
          {/* Background Elements */}
          <div class="background-elements">
            <div class="bg-blur-1"></div>
            <div class="bg-blur-2"></div>
          </div>

          <div style={{ position: 'relative', zIndex: 10, maxWidth: '80rem', margin: '0 auto', padding: '0 1rem' }}>
            {/* Section Header */}
            <div style={{ textAlign: 'center', maxWidth: '48rem', margin: '3rem auto 4rem auto', paddingTop: '2rem' }}>
              <h2 style={{ fontSize: '3rem', fontWeight: 'bold', lineHeight: '1.2', marginBottom: '1.5rem' }}>
                <span style={{ color: '#1e293b' }}>Everything You Need to</span>
                <br />
                <span style={{
                  background: 'linear-gradient(to right, #ea580c, #d97706, #ea580c)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Dominate Online
                </span>
              </h2>

              <p style={{ fontSize: '1.25rem', color: '#64748b', lineHeight: '1.6' }}>
                From stunning web designs to powerful SEO strategies, we provide
                <span style={{ color: '#2563eb', fontWeight: '600' }}> end-to-end digital solutions </span>
                that drive real business growth.
              </p>
            </div>

            <ServicesSection />
      <Footer />
    </>
  );
};

export default ServicesPage;

export const head: DocumentHead = {
  title: 'Our Digital Services | Web Design, SEO, Branding & More',
  meta: [
    {
      name: 'description',
      content:
        'Discover our full suite of digital services including web design, SEO, branding, content writing, and more. Everything you need to grow your business online.',
    },
    {
      name: 'keywords',
      content:
        'web design, SEO services, branding, digital marketing, content writing, ecommerce, landing pages, analytics, payment integration',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      property: 'og:title',
      content: 'Our Digital Services | Web Design, SEO, Branding & More',
    },
    {
      property: 'og:description',
      content:
        'Explore our professional services crafted to boost your online presence. From SEO to ecommerce, we help your business succeed online.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: 'https://webhoga.com/services',
    },
    {
      property: 'og:image',
      content: 'https://webhoga.com/og-image.jpg',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
  ],
  links: [
    {
      rel: 'canonical',
      href: 'https://webhoga.com/services',
    },
  ],
};
