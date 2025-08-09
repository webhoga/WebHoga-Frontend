import { component$, useSignal, useVisibleTask$, $ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  const showScrollTop = useSignal(false);

  useVisibleTask$(() => {
    const handleScroll = () => {
      showScrollTop.value = window.pageYOffset > 300;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const scrollToTop = $(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  const headingStyle = {
    fontWeight: '700',
    fontSize: '2rem',
    marginBottom: '20px'
  };

  const subHeadingStyle = {
    fontWeight: '600',
    fontSize: '1.5rem',
    marginTop: '30px',
    marginBottom: '15px'
  };

  const paragraphStyle = {
    marginBottom: '15px'
  };

  const listStyle = {
    paddingLeft: '20px',
    marginBottom: '15px'
  };

  return (
    <div style={{
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      lineHeight: '1.6',
      color: '#333',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
      margin: '0',
      padding: '0'
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
          padding: '40px',
          margin: '20px 0',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <h1 style={headingStyle}>Refund Policy</h1>

          <p style={paragraphStyle}>
            At WebHoga Digital Services, we are committed to delivering high-quality digital and business services tailored to your unique needs.
            Our refund policy is designed to ensure transparency and fairness, while respecting the time and effort our team invests in every project.
          </p>

          <h2 style={subHeadingStyle}>Services Covered</h2>
          <p style={paragraphStyle}>
            This policy applies to all services offered on <a href="https://webhoga.com" target="_blank">webhoga.com</a>,
            including its subdomains <a href="https://bizassist.webhoga.com" target="_blank">bizassist.webhoga.com</a>, <a href="https://ads.webhoga.com" target="_blank">ads.webhoga.com</a> and
            <a href="https://support.webhoga.com" target="_blank"> support.webhoga.com</a>. Covered services include:
          </p>
          <ul style={listStyle}>
            <li>Web Design & Development</li>
            <li>SEO Services</li>
            <li>Domain & Hosting Setup</li>
            <li>Logo & Branding</li>
            <li>Content Writing & Blog Services</li>
            <li>Payment Gateway Integration</li>
            <li>Website Maintenance</li>
            <li>Business Registration Services</li>
            <li>Other Related Consultation Or Solutions</li>
          </ul>

          <h2 style={subHeadingStyle}>No Refund After Project Commencement</h2>
          <p style={paragraphStyle}>
            Once a payment has been made and the initial consultation or project work has begun, no refund will be issued. This includes:
          </p>
          <ul style={listStyle}>
            <li>Time spent in project discussions or communication</li>
            <li>Initial research, planning, or design work</li>
            <li>Purchase of third-party tools, themes, plugins, or software</li>
            <li>Allocation of dedicated resources or team members</li>
          </ul>
          <p style={paragraphStyle}>
            As a service-based business, much of our work begins immediately after payment - which is why we cannot offer refunds once the project is in progress.
          </p>

          <h2 style={subHeadingStyle}>Eligible Refund Scenarios (Before Work Begins)</h2>
          <p style={paragraphStyle}>
            A refund may be issued only if:
          </p>
          <ul style={listStyle}>
            <li>The client requests cancellation before the initial consultation or work has started.</li>
            <li>WebHoga is unable to deliver the agreed service due to internal issues (rare, but in good faith).</li>
          </ul>
          <p style={paragraphStyle}>
            To request a refund under these conditions, please email <a href="mailto:contact@webhoga.com">contact@webhoga.com</a> within 24 hours of payment,
            with your order ID and reason for cancellation.
          </p>

          <h2 style={subHeadingStyle}>Refund Processing</h2>
          <p style={paragraphStyle}>
            If a refund is approved:
          </p>
          <ul style={listStyle}>
            <li>It will be processed within 14 business days from the date of approval.</li>
            <li>The amount will be credited to the original payment method used during the transaction.</li>
            <li>Depending on your bank or payment gateway, the amount may take an additional 7-10 business days to reflect.</li>
          </ul>
          <p style={paragraphStyle}>
            We appreciate your patience and understanding as financial institutions may take varying times to complete the refund process.
          </p>

          <h2 style={subHeadingStyle}>GDPR & Data Privacy</h2>
          <p style={paragraphStyle}>
            In compliance with GDPR and Indian data protection laws, any personal data shared with us during the transaction will be handled securely
            and in accordance with our <a href="/privacy-policy">Privacy Policy</a>.
          </p>

          <h2 style={subHeadingStyle}>Questions?</h2>
          <p style={paragraphStyle}>
            If you have any questions about this policy or need help with your service, feel free to contact:
          </p>
          <ul style={listStyle}>
            <li><strong>Team WebHoga</strong></li>
            <li>Email: <a href="mailto:contact@webhoga.com">contact@webhoga.com</a></li>
            <li>Website: <a href="https://www.webhoga.com" target="_blank">www.webhoga.com</a></li>
          </ul>

          <button
            style={{
              position: 'fixed',
              bottom: '30px',
              right: '30px',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              cursor: 'pointer',
              opacity: showScrollTop.value ? 1 : 0,
              transition: 'all 0.3s ease',
              fontSize: '1.2rem',
              boxShadow: '0 5px 20px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: '1000'
            }}
            onClick$={scrollToTop}
            aria-label="Scroll to top"
          >
            ↑
          </button>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Refund Policy | WebHoga',
  meta: [
    {
      name: 'description',
      content: 'Read WebHoga\'s Refund Policy to understand eligibility, timelines, and procedures for requesting refunds on our digital services and products.'
    },
    {
      name: 'robots',
      content: 'index, follow'
    },
    {
      property: 'og:title',
      content: 'Refund Policy | WebHoga'
    },
    {
      property: 'og:description',
      content: 'Learn about WebHoga\'s refund terms, conditions, and how to initiate a refund request for your purchases.'
    },
    {
      property: 'og:url',
      content: 'https://webhoga.com/refund-policy'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:site_name',
      content: 'WebHoga'
    },
    {
      name: 'twitter:card',
      content: 'summary'
    },
    {
      name: 'twitter:title',
      content: 'Refund Policy | WebHoga'
    },
    {
      name: 'twitter:description',
      content: 'Find out how refunds are handled at WebHoga, including eligibility and timelines.'
    }
  ],
  links: [
    {
      rel: 'canonical',
      href: 'https://webhoga.com/refund-policy'
    }
  ]
};
