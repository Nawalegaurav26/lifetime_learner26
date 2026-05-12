"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Clarity from "@microsoft/clarity";

/**
 * Enhanced tracking skills for Microsoft Clarity
 * Tracks: Page stay time, Scroll depth, and Outbound clicks
 */
export const useClaritySkills = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const safeSetTag = (key: string, value: string) => {
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (typeof (window as any).clarity === "function") {
          Clarity.setTag(key, value);
        }
      } catch {
        // ignore
      }
    };

    // 1. Track Page Entry
    safeSetTag("page_path", pathname);
    
    // 2. Track Scroll Depth
    let maxScroll = 0;
    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        if (maxScroll % 25 === 0) { // Track every 25%
           safeSetTag("max_scroll_depth", `${maxScroll}%`);
        }
      }
    };

    // 3. Track Outbound Links
    const handleOutboundClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (anchor && anchor.href && !anchor.href.includes(window.location.host)) {
        safeSetTag("outbound_click", anchor.href);
      }
    };

    // 4. Track JS Errors
    const handleError = (error: ErrorEvent) => {
      safeSetTag("js_error", error.message);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleOutboundClick);
    window.addEventListener("error", handleError);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleOutboundClick);
      window.removeEventListener("error", handleError);
      // Track total stay time on unmount (approximate)
      safeSetTag("last_page_viewed", pathname);
    };
  }, [pathname]);
};
