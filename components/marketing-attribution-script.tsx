import Script from "next/script"

export function MarketingAttributionScript() {
  return (
    <Script id="marketing-attribution" strategy="afterInteractive">
      {`
        (function () {
          var params = new URLSearchParams(window.location.search);
          var keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'gbraid', 'wbraid'];
          var payload = {};
          var hasMarketingData = false;

          for (var i = 0; i < keys.length; i += 1) {
            var key = keys[i];
            var value = params.get(key);

            if (value) {
              payload[key] = value;
              hasMarketingData = true;
            }
          }

          if (!hasMarketingData) {
            return;
          }

          payload.landingPage = window.location.href;
          payload.capturedAt = new Date().toISOString();

          try {
            window.localStorage.setItem('hexglyph_attribution', JSON.stringify(payload));
          } catch (error) {
            console.warn('Unable to persist attribution data.', error);
          }
        })();
      `}
    </Script>
  )
}
