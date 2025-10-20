import { component$, useVisibleTask$ } from '@builder.io/qwik';
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  useVisibleTask$(() => {
    try {
      const f = document.createElement("iframe");
      let ifrmSrc = 'https://forms.zohopublic.in/contactweb1/form/ContactUs/formperma/8dihu-s37eCQ9h1oixC_ibCEdOwVzCDBOMwj1bvmaR8?zf_rszfm=1';
      
      try {
        if (typeof (window as any).ZFAdvLead != "undefined" && typeof (window as any).zfutm_zfAdvLead != "undefined") {
          for (let prmIdx = 0; prmIdx < (window as any).ZFAdvLead.utmPNameArr.length; prmIdx++) {
            let utmPm = (window as any).ZFAdvLead.utmPNameArr[prmIdx];
            utmPm = ((window as any).ZFAdvLead.isSameDomian && ((window as any).ZFAdvLead.utmcustPNameArr.indexOf(utmPm) == -1)) ? "zf_" + utmPm : utmPm;
            const utmVal = (window as any).zfutm_zfAdvLead.zfautm_gC_enc((window as any).ZFAdvLead.utmPNameArr[prmIdx]);
            if (typeof utmVal !== "undefined") {
              if (utmVal != "") {
                if (ifrmSrc.indexOf('?') > 0) {
                  ifrmSrc = ifrmSrc + '&' + utmPm + '=' + utmVal;
                } else {
                  ifrmSrc = ifrmSrc + '?' + utmPm + '=' + utmVal;
                }
              }
            }
          }
        }
        if (typeof (window as any).ZFLead !== "undefined" && typeof (window as any).zfutm_zfLead !== "undefined") {
          for (let prmIdx = 0; prmIdx < (window as any).ZFLead.utmPNameArr.length; prmIdx++) {
            const utmPm = (window as any).ZFLead.utmPNameArr[prmIdx];
            const utmVal = (window as any).zfutm_zfLead.zfutm_gC_enc((window as any).ZFLead.utmPNameArr[prmIdx]);
            if (typeof utmVal !== "undefined") {
              if (utmVal != "") {
                if (ifrmSrc.indexOf('?') > 0) {
                  ifrmSrc = ifrmSrc + '&' + utmPm + '=' + utmVal;
                } else {
                  ifrmSrc = ifrmSrc + '?' + utmPm + '=' + utmVal;
                }
              }
            }
          }
        }
      } catch {
      }
      
      f.src = ifrmSrc;
      f.style.border = "none";
      f.style.height = "993px";
      f.style.width = "90%";
      f.style.transition = "all 0.5s ease";
      f.setAttribute("aria-label", 'Contact Us');
      
      const d = document.getElementById("zf_div_8dihu-s37eCQ9h1oixC_ibCEdOwVzCDBOMwj1bvmaR8");
      if (d) {
        d.appendChild(f);
      }
      
      window.addEventListener('message', function (event) {
        const evntData = event.data;
        if (evntData && evntData.constructor == String) {
          const zf_ifrm_data = evntData.split("|");
          if (zf_ifrm_data.length == 2 || zf_ifrm_data.length == 3) {
            const zf_perma = zf_ifrm_data[0];
            const zf_ifrm_ht_nw = (parseInt(zf_ifrm_data[1], 10) + 15) + "px";
            const iframe = document.getElementById("zf_div_8dihu-s37eCQ9h1oixC_ibCEdOwVzCDBOMwj1bvmaR8")?.getElementsByTagName("iframe")[0];
            if (iframe && (iframe.src).indexOf('formperma') > 0 && (iframe.src).indexOf(zf_perma) > 0) {
              const prevIframeHeight = iframe.style.height;
              let zf_tout = false;
              if (zf_ifrm_data.length == 3) {
                iframe.scrollIntoView();
                zf_tout = true;
              }
              if (prevIframeHeight != zf_ifrm_ht_nw) {
                if (zf_tout) {
                  setTimeout(function () {
                    iframe.style.height = zf_ifrm_ht_nw;
                  }, 500);
                } else {
                  iframe.style.height = zf_ifrm_ht_nw;
                }
              }
            }
          }
        }
      }, false);
    } catch {
    }
  });

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
            <div id="zf_div_8dihu-s37eCQ9h1oixC_ibCEdOwVzCDBOMwj1bvmaR8"></div>
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
