/**
 * Central Product Configuration
 * Edit these values to update product details, pricing, payment links, and redirects.
 */
export const PRODUCT = {
  clientName: "Bhargavi Papolu",
  name: "Job Hike Guide",
  tagline: "Career growth, salary hikes & job switching for Telugu IT professionals",
  price: "₹499",
  priceRaw: 499,
  currency: "INR",
  currencySymbol: "₹",
  paymentBadge: "ONE-TIME PAYMENT • DIGITAL GUIDE",
  format: "Digital PDF Guide + Actionable Worksheets",
  
  // Replace this with your actual Razorpay Payment Page URL (e.g., https://rzp.io/l/your-page)
  // When set to an external URL, the user is redirected to Razorpay checkout.
  // For local testing, clicking will open this link or prompt to configure.
  razorpayPaymentPageUrl: "https://rzp.io/l/bhargavi-job-hike-guide",
  
  // Download configuration
  pdfUrl: "/assets/job-hike-guide.pdf",
  pdfFilename: "Job-Hike-Guide-Bhargavi-Papolu.pdf",
  downloadRedirectDelay: 5000, // Milliseconds to wait before redirecting back to home page
  
  // Social links
  instagramUrl: "https://www.instagram.com/bhargavi_papolu_/",
  instagramHandle: "@bhargavi_papolu_",
  
  // Support & Legal
  supportEmail: "support@jobhikeguide.com",
  refundPolicyText: "Refund policy will be updated by the creator. Contact support for inquiries.",
  
  // Analytics IDs (leave blank if not yet configured; site will not break)
  analytics: {
    ga4Id: "",
    metaPixelId: "",
  },
};
