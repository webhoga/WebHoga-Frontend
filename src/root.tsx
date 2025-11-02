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
            {/* ---------------- GOOGLE TAG MANAGER ---------------- */}
            <script
              dangerouslySetInnerHTML={`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-TJXPXH6F');`}
            />

            {/* ---------------- HOTJAR ---------------- */}
            <script
              dangerouslySetInnerHTML={`(function(h,o,t,j,a,r){
                    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                    h._hjSettings={hjid:6487684,hjsv:6};
                    a=o.getElementsByTagName('head')[0];
                    r=o.createElement('script');r.async=1;
                    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                    a.appendChild(r);
                })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
            />

            {/* ---------------- ZOHO SALESIQ ---------------- */}
            <script
              dangerouslySetInnerHTML={`
                window.$zoho = window.$zoho || {};
                $zoho.salesiq = $zoho.salesiq || { ready: function(){} };
              `}
            />

            {/* ---------------- THRIVE WIDGET ---------------- */}
            <script
              type="text/javascript"
              dangerouslySetInnerHTML={`
                var platformType = 'custom_user_site';
                var thriveWidgetCode = 'c0ca5b96004382a25ec52c72f8d3d1e515c06cf6c8e13c242f9af9700576078c';
                var ztUserData = {};
              `}
            />
            <script
              id="thrive_script"
              src="https://thrive.zohopublic.in/thrive/publicpages/thrivewidget"
            ></script>

            {/* ---------------- MANIFEST ---------------- */}
            <link
              rel="manifest"
              href={`${import.meta.env.BASE_URL}manifest.json`}
            />
          </>
        )}

        {/* ---------------- DEFAULT HEAD CONTENT ---------------- */}
        <RouterHead />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <title>WebHoga</title>
      </head>

      <body lang="en">
        {!isDev && (
          <>
            {/* ---------------- GTM NOSCRIPT FALLBACK ---------------- */}
            <noscript>
              <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-TJXPXH6F"
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
              />
            </noscript>

            {/* ---------------- ZOHO SALESIQ SCRIPT ---------------- */}
            <script
              id="zsiqscript"
              src="https://salesiq.zohopublic.in/widget?wc=siq3804605b74b45dceb25aea7e9526f32463acb44b53eb1573c61a9af787829691218b23454b7839585b93ce03acf271cb"
              defer
            ></script>
          </>
        )}

        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
