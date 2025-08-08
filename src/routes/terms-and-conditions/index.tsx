import { component$, useSignal, useVisibleTask$, $ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik';

export default component$(() => {
  const showScrollTop = useSignal(false);


  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    const handleScroll = () => {
      showScrollTop.value = window.pageYOffset > 300;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const scrollToTop = $(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
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
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '20px'
      }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
          padding: '40px',
          margin: '20px 0',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>

          <h1 style={headingStyle}>Terms and Conditions</h1>

          <p style={paragraphStyle}>
            These Terms govern your access to and use of all content, products, and services available at
            <a href="https://webhoga.com" target="_blank"> https://webhoga.com</a> and its subdomains,
            including <a href="https://bizassist.webhoga.com" target="_blank">https://bizassist.webhoga.com</a> and
            <a href="https://support.webhoga.com" target="_blank"> https://support.webhoga.com</a> (collectively, the “Service”),
            operated by WebHoga Digital Services (operating as “WebHoga”, “us”, “we”, or “our”).
          </p>

          <p style={paragraphStyle}>
            Your access to our Services is subject to your acceptance, without modification, of all of the terms and
            conditions contained herein and all other operating rules and policies published, or that may be published
            from time to time by us.
          </p>

          <p style={paragraphStyle}>
            Please read the Agreement carefully before accessing or using our Services. By accessing or using any part of
            our Services, you agree to be bound by these Terms. If you do not agree to any part of the Agreement, then
            you may not access or use our Services.
          </p>

          <h2 style={subHeadingStyle}>Intellectual Property</h2>
          <p style={paragraphStyle}>
            The Agreement does not transfer from Us to you any of Ours or third-party intellectual property, and all right,
            title, and interest in and to such property will remain (as between the parties) solely with WebHoga and its licensors.
          </p>

          <h2 style={subHeadingStyle}>Third Party Services</h2>
          <p style={paragraphStyle}>
            In using the Services, you may use third-party services, products, software, embeds, or applications developed by a third party (“Third Party Services”).
          </p>
          <ul style={{ paddingLeft: '20px', marginBottom: '15px' }}>
            <li>Any use of a Third Party Service is at your own risk, and we shall not be responsible or liable to anyone for Third Party websites or Services.</li>
            <li>You acknowledge and agree that We shall not be responsible or liable for any damage or loss caused or alleged to be caused by or in connection with the use of any such content, goods or services available on or through any such web sites or services.</li>
          </ul>

          <h2 style={subHeadingStyle}>Accounts</h2>
          <p style={paragraphStyle}>
            Where use of any part of our Services requires an account, you agree to provide us with complete and accurate information when you register for an account.
          </p>
          <p style={paragraphStyle}>
            You will be solely responsible and liable for any activity that occurs under your account. You are responsible for keeping your account information up-to-date and for keeping your password secure.
          </p>
          <p style={paragraphStyle}>
            You are responsible for maintaining the security of your account that you use to access the Service. You shall not share or misuse your access credentials.
            You must notify us immediately of any unauthorized uses of your account or upon becoming aware of any other breach of security.
          </p>

          <h2 style={subHeadingStyle}>Termination</h2>
          <p style={paragraphStyle}>
            We may terminate or suspend your access to all or any part of our Services at any time, with or without cause, with or without notice, effective immediately.
          </p>
          <p style={paragraphStyle}>
            If you wish to terminate the Agreement or your WebHoga account, you may simply discontinue using our Services.
          </p>
          <p style={paragraphStyle}>
            All provisions of the Agreement which by their nature should survive termination shall survive termination, including, without limitation,
            ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
          </p>

          <h2 style={subHeadingStyle}>Disclaimer</h2>
          <p style={paragraphStyle}>
            Our Services are provided on an “AS IS” and “AS AVAILABLE” basis. WebHoga, including its subdomains such as bizassist.webhoga.com and support.webhoga.com,
            and its suppliers and licensors hereby disclaim all warranties of any kind, express or implied, including, without limitation, the warranties of merchantability,
            fitness for a particular purpose and non-infringement.
          </p>
          <p style={paragraphStyle}>
            Neither WebHoga, nor its suppliers and licensors, makes any warranty that our Services will be error free or that access thereto will be continuous or uninterrupted.
            You understand that you download from, or otherwise obtain content or services through, our Services at your own discretion and risk.
          </p>

          <h2 style={subHeadingStyle}>Jurisdiction and Applicable Law</h2>
          <p style={paragraphStyle}>
            Except to the extent any applicable law provides otherwise, the Agreement and any access to or use of our Services will be governed by the laws of India.
          </p>
          <p style={paragraphStyle}>
            The proper venue for any disputes arising out of or relating to the Agreement and any access to or use of our Services will be the state and federal courts located in India.
          </p>

          <h2 style={subHeadingStyle}>Changes</h2>
          <p style={paragraphStyle}>
            WebHoga reserves the right, at our sole discretion, to modify or replace these Terms at any time.
          </p>
          <p style={paragraphStyle}>
            If we make changes that are material, we will let you know by posting on our website, or by sending you an email or other communication before the changes take effect.
            The notice will designate a reasonable period of time after which the new terms will take effect.
          </p>
          <p style={paragraphStyle}>
            If you disagree with our changes, then you should stop using our Services within the designated notice period, or once the changes become effective.
          </p>
          <p style={paragraphStyle}>
            Your continued use of our Services will be subject to the new terms.
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
  title: 'Terms and Conditions | WebHoga',
  meta: [
    {
      name: 'description',
      content: 'Read the terms and conditions for using WebHoga’s services, including bizassist.webhoga.com and support.webhoga.com. Stay informed about our policies, legal disclaimers, and user responsibilities.'
    },
    {
      name: 'robots',
      content: 'index, follow'
    },
    {
      property: 'og:title',
      content: 'Terms and Conditions | WebHoga'
    },
    {
      property: 'og:description',
      content: 'Understand the terms of service and legal policies governing your use of WebHoga’s digital services.'
    },
    {
      property: 'og:url',
      content: 'https://webhoga.com/terms' // Adjust if hosted under a different route
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
      content: 'Terms and Conditions | WebHoga'
    },
    {
      name: 'twitter:description',
      content: 'Review WebHoga’s terms of service and user responsibilities before using our digital products.'
    }
  ],
  links: [
    {
      rel: 'canonical',
      href: 'https://webhoga.com/terms-and-conditions'
    }
  ]
};