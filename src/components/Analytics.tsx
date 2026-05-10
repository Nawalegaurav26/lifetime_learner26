"use client";

import { useEffect } from "react";
import Script from "next/script";
import Clarity from "@microsoft/clarity";
import { useClaritySkills } from "@/hooks/useClaritySkills";

const CLARITY_ID = "wn156ye9ws";
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX"; 

export default function Analytics() {
  useClaritySkills(); // Initialize powerful tracking skills

  useEffect(() => {
    if (typeof window !== "undefined") {
      Clarity.init(CLARITY_ID);
      
      // Set some initial tags for better segmentation
      Clarity.setTag("platform", "portfolio_v3");
      Clarity.setTag("environment", process.env.NODE_ENV);
    }
  }, []);

  return (
    <>
      {/* Google Analytics */}
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
    </>
  );
}

// Helper to track powerful events
export const trackEvent = (name: string, value: string) => {
  if (typeof window !== "undefined") {
    Clarity.setTag(name, value);
    // You can also use Clarity.event(name) if supported/needed
  }
};
