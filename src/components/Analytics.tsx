"use client";

import Script from "next/script";

export default function Analytics() {
  // Replace with your actual GA4 ID or Vercel Analytics setup
  const GA_MEASUREMENT_ID = "G-XXXXXXXXXX"; 

  return (
    <>
      {/* Google Analytics Placeholder */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
      
      {/* Vercel Analytics would go here if installed via npm */}
      {/* import { Analytics as VercelAnalytics } from "@vercel/analytics/react"; */}
    </>
  );
}
