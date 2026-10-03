import { PRODUCT } from "./product";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

export type AnalyticsEvent =
  | "page_view"
  | "hero_cta_click"
  | "pricing_cta_click"
  | "checkout_start"
  | "purchase"
  | "faq_interaction"
  | "scroll_depth"
  | "script_copy"
  | "simulator_interaction"
  | "download_page_view"
  | "click_download";

/**
 * Safely track analytics events (GA4, Meta Pixel, Console)
 */
export function trackEvent(
  eventName: AnalyticsEvent,
  params?: Record<string, any>
) {
  try {
    if (typeof window !== "undefined") {
      // Google Analytics 4
      if (typeof window.gtag === "function" && PRODUCT.analytics.ga4Id) {
        window.gtag("event", eventName, params);
      }

      // Meta Pixel
      if (typeof window.fbq === "function" && PRODUCT.analytics.metaPixelId) {
        window.fbq("trackCustom", eventName, params);
      }

      // Development logging
      if (process.env.NODE_ENV !== "production") {
        console.log(`[Analytics Event: ${eventName}]`, params || {});
      }
    }
  } catch (err) {
    // Fail silently so user experience is never disrupted
  }
}
