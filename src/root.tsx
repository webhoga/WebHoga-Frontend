import { component$, isDev } from "@builder.io/qwik";
import { QwikCityProvider, RouterOutlet } from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";

export default component$(() => {
  return (
    <QwikCityProvider>
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

        {!isDev && (
          <>
            {/* Google Tag Manager Head Script */}
            <script
              dangerouslySetInnerHTML={`
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-TJXPXH6F');
              `}
            />

            {/* Google Analytics 4 */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-7CFTNQT4SZ"></script>
            <script
              dangerouslySetInnerHTML={`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-7CFTNQT4SZ');
              `}
            />

            {/* Hotjar */}
            <script
              dangerouslySetInnerHTML={`
                (function(h,o,t,j,a,r){
                    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                    h._hjSettings={hjid:6487684,hjsv:6};
                    a=o.getElementsByTagName('head')[0];
                    r=o.createElement('script');r.async=1;
                    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                    a.appendChild(r);
                })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
              `}
            />

            <link
              rel="manifest"
              href={`${import.meta.env.BASE_URL}manifest.json`}
            />
          </>
        )}

        <RouterHead />

        <link rel="icon" type="image/x-icon" href="/favicon.ico" />

        <title>WebHoga</title>
      </head>
      <body lang="en">
      {!isDev && (
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TJXPXH6F"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
      )}

      <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});