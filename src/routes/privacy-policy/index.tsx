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
          <h1 style={headingStyle}>Privacy Policy</h1>

          <p style={paragraphStyle}>
            Welcome to <a href="https://webhoga.com" target="_blank">https://webhoga.com</a>, including its subdomains such as
            <a href="https://bizassist.webhoga.com" target="_blank"> bizassist.webhoga.com</a> and
            <a href="https://support.webhoga.com" target="_blank"> support.webhoga.com</a> (collectively referred to as the “Site”).
            Operated by WebHoga Digital Services (“WebHoga”, “we”, “our”). We understand that privacy online is important to users of our Site.
          </p>

          <h2 style={subHeadingStyle}>Personally Identifiable Information</h2>
          <p style={paragraphStyle}>
            Refers to any information that identifies or can be used to identify, contact, or locate the person to whom such information pertains.
            This includes, but is not limited to, name, address, phone number, fax number, email address, financial profiles, and credit card information.
          </p>

          <h2 style={subHeadingStyle}>What Information Is Collected?</h2>
          <p style={paragraphStyle}>
            We may collect basic user profile information from all Visitors. For Authorized Customers, we may collect contact details, business size and nature, and advertising inventory details.
          </p>

          <h2 style={subHeadingStyle}>Third-Party Collection</h2>
          <p style={paragraphStyle}>
            Our third-party service vendors (such as banks or credit companies) may collect information necessary for services such as escrow or credit checks.
            While we request disclosure of their data use practices, we do not control their use of this data.
          </p>

          <h2 style={subHeadingStyle}>Use of Information</h2>
          <p style={paragraphStyle}>
            Information is used to customize services, communicate offers, and fulfill purchase requests.
            We may also contact Visitors and Customers in response to inquiries or offer relevant content.
          </p>

          <h2 style={subHeadingStyle}>Information Sharing</h2>
          <p style={paragraphStyle}>
            We may share information between Authorized Customers to support transactions. Aggregated data may also be shared with affiliates and vendors.
            We provide an option to “opt out” of such communications.
          </p>

          <h2 style={subHeadingStyle}>Data Storage</h2>
          <p style={paragraphStyle}>
            Data is securely stored and only accessible to employees as needed. We employ industry-standard security protocols to protect all stored data.
          </p>

          <h2 style={subHeadingStyle}>User Control and Opt-Out</h2>
          <p style={paragraphStyle}>
            Users may opt out of unsolicited messages or request to update or delete their personal data by contacting us. Full deletion may be limited by backups.
          </p>

          <h2 style={subHeadingStyle}>Cookies</h2>
          <p style={paragraphStyle}>
            We use cookies to understand user preferences and ensure session security. For example, inactive sessions are logged out after 10 minutes.
          </p>

          <h2 style={subHeadingStyle}>Login Information</h2>
          <p style={paragraphStyle}>
            We collect login metadata such as IP addresses and browser types to analyze usage trends and administer the Site effectively.
          </p>

          <h2 style={subHeadingStyle}>Partners and Vendors</h2>
          <p style={paragraphStyle}>
            Vendors may access personal data to evaluate customer eligibility. Our policy does not cover their internal practices.
            We may also disclose information in compliance with legal processes.
          </p>

          <h2 style={subHeadingStyle}>Security Measures</h2>
          <p style={paragraphStyle}>
            Our systems are audited regularly. Sensitive information is encrypted. While we take all reasonable measures, we cannot guarantee complete security.
          </p>

          <h2 style={subHeadingStyle}>Corrections</h2>
          <p style={paragraphStyle}>
            Users may contact us to correct any inaccurate information. Email us to update or verify your stored data.
          </p>

          <h2 style={subHeadingStyle}>Deletion Requests</h2>
          <p style={paragraphStyle}>
            We offer functional deletion of user data, though some residual data may persist in backups. Deleted data will not be sold or reused.
          </p>

          <h2 style={subHeadingStyle}>Policy Changes</h2>
          <p style={paragraphStyle}>
            We will inform users of material changes via website notices or email. Continued use implies agreement to the new policy.
          </p>

          <h2 style={subHeadingStyle}>Security Notice</h2>
          <p style={paragraphStyle}>
            WebHoga will never request sensitive banking details. Report suspicious messages to the appropriate authorities immediately.
          </p>

          <h2 style={subHeadingStyle}>External Links</h2>
          <p style={paragraphStyle}>
            This policy covers all WebHoga subdomains. We encourage reviewing the privacy policies of any third-party sites you may visit from our platforms.
          </p>

          {/* Scroll to Top Button */}
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
  title: 'Privacy Policy | WebHoga',
  meta: [
    {
      name: 'description',
      content: 'Review WebHoga’s privacy policy to understand how we collect, use, and protect your data across all WebHoga platforms and subdomains.'
    },
    {
      name: 'robots',
      content: 'index, follow'
    },
    {
      property: 'og:title',
      content: 'Privacy Policy | WebHoga'
    },
    {
      property: 'og:description',
      content: 'Learn how WebHoga handles user data, privacy, cookies, and third-party services across its digital platforms.'
    },
    {
      property: 'og:url',
      content: 'https://webhoga.com/privacy' // adjust if under a different route
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
      content: 'Privacy Policy | WebHoga'
    },
    {
      name: 'twitter:description',
      content: 'Read WebHoga’s privacy policy to understand your rights and how we handle your personal data securely.'
    }
  ],
  links: [
    {
      rel: 'canonical',
      href: 'https://webhoga.com/privacy-policy'
    }
  ]
};