import { component$ } from '@builder.io/qwik';
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <Header />
      <section class="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 pt-32 pb-20 px-6">
        <div class="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-10 border border-slate-100">
          <h1 class="text-4xl font-bold text-center mb-6 text-slate-800">Contact Us</h1>

          {/* Contact Info */}
          <div class="grid md:grid-cols-2 gap-8 mb-10">
            <div class="space-y-4">
              <div>
                <h3 class="text-lg font-semibold text-orange-600">Phone</h3>
                <p class="text-slate-700">+91 9061-156-535</p>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-blue-600">General Enquiries Email</h3>
                <p class="text-slate-700">contact@webhoga.com</p>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-green-600">Support Email</h3>
                <p class="text-slate-800">help@support.webhoga.com</p>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-amber-600">Support Hours</h3>
                <p class="text-slate-700">Monday – Friday: 9:00 AM – 5:00 PM IST</p>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-cyan-600">Social Media</h3>
                <div class="flex gap-4 mt-2">
                  <a href="https://www.facebook.com/people/WebHoga/61576908121524/" class="text-blue-600 hover:text-blue-800">Facebook</a>
                  <a href="https://in.pinterest.com/webhogaindia/" class="text-pink-600 hover:text-pink-800">Pinterest</a>
                  <a href="https://www.youtube.com/@WebHoga" class="text-red-600 hover:text-red-800">YouTube</a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form
              class="space-y-4"
              preventdefault:submit
              onSubmit$={async (event) => {
                const form = event.target as HTMLFormElement;
                const formData = new FormData(form);

                const data = {
                  name: formData.get('name'),
                  email: formData.get('email'),
                  message: formData.get('message'),
                };

                try {
                  const res = await fetch('https://backend.webhoga.com/contact', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                  });

                  if (res.ok) {
                    alert('Message sent successfully!');
                    form.reset();
                  } else {
                    const result = await res.json();
                    alert('Failed: ' + (result?.error || 'Unknown error'));
                  }
                } catch (error) {
                  alert('Failed to send message. Please try again later.');
                  console.error(error);
                }
              }}
            >
              <div>
                <label class="block text-sm font-medium text-slate-600 mb-1">Name</label>
                <input
                  name="name"
                  type="text"
                  class="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-slate-600 mb-1">Email</label>
                <input
                  name="email"
                  type="email"
                  class="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-slate-600 mb-1">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  class="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="How can we help you?"
                  required
                />
              </div>
              <button
                type="submit"
                class="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Contact Us – WebHoga',
  meta: [
    {
      name: 'description',
      content:
        'Get in touch with WebHoga. Get in touch with us for world-class web design, and hosting services.',
    },
    {
      name: 'keywords',
      content:
        'WebHoga contact',
    },
    {
      property: 'og:title',
      content: 'Contact WebHoga',
    },
    {
      property: 'og:description',
      content:
        'Reach out to BizAssist for hassle-free business setup and SME solutions. We are here to help you grow!',
    },
    {
      property: 'og:url',
      content: 'https://webhoga.com/contact',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
  ],
  scripts: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Contact | WebHoga",
        "url": "https://webhoga.com",
        "logo": "https://webhoga.com/logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-9061-156-535",
          "contactType": "General Inquiries & Customer Service",
          "email": "contact@webhoga.com",
          "areaServed": "IN",
          "availableLanguage": ["English"],
          "hoursAvailable": "Mo-Fr 09:00-17:00"
        },
        "sameAs": [
          "https://www.facebook.com/people/WebHoga/61576908121524/",
          "https://in.pinterest.com/webhogaindia/",
          "https://www.youtube.com/@WebHoga"
        ]
      }),
    } as any,
  ],
};
