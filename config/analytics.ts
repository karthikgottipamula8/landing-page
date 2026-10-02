import { PRODUCT } from "./product";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

/**
 * Safely track analytics events (GA4, Meta Pixel, Console)
 */
export function trackEvent(
  eventName:
    | "page_view"
    | "click_pay_now"
    | "download_page_view"
    | "click_download"
    | "instagram_click",
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

/**
 * Helper to handle Pay Now clicks
 */
export function handlePayNow(locationSource = "hero") {
  trackEvent("click_pay_now", {
    product: PRODUCT.name,
    price: PRODUCT.price,
    source: locationSource,
  });

  if (PRODUCT.razorpayPaymentPageUrl) {
    window.location.href = PRODUCT.razorpayPaymentPageUrl;
  }
}
