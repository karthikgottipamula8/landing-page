# Job Hike Guide — Bhargavi Papolu Landing Page

A premium, editorial digital-product landing page built for **Bhargavi Papolu** and her **Job Hike Guide**, tailored specifically for Telugu IT professionals.

## 🎯 Architecture

This is a lightweight, high-performance frontend application:
- **No server database, no Supabase/Firebase, no custom payment backend**
- External payment flow:
  1. Visitor lands on page & taps **"Get The Guide"** (`/`)
  2. Directed to external **Razorpay Payment Page**
  3. Customer completes payment on Razorpay
  4. Razorpay redirects customer to **`/download`**
  5. Download page automatically initiates the PDF download and provides manual fallback
  6. Customer is redirected back to the landing page after the configured delay
- Automated email delivery happens externally via:
  `Razorpay Webhook → n8n → Resend → Email with PDF`

---

## ⚙️ Configuration Files

All product and content details are centrally managed in two files:

### 1. `config/product.ts`
- `clientName`: Creator name
- `name`: Product name
- `price`: Display price (e.g., `₹499`)
- `razorpayPaymentPageUrl`: Replace with your live Razorpay Payment Page link (e.g., `https://rzp.io/l/your-link`)
- `pdfUrl`: Path to your PDF file (default: `/assets/job-hike-guide.pdf`)
- `downloadRedirectDelay`: Delay in milliseconds before redirecting from `/download` back to `/` (default: `5000`)
- `instagramUrl`: Creator Instagram profile link
- `analytics`: Optional GA4 & Meta Pixel IDs

### 2. `config/content.ts`
- Headings, problem statements, transformation text, modules 01–08, benefits, FAQs, and real testimonial placeholders.

---

## 🚀 Running the Project

### Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### Production Build
```bash
npm run build
npm start
```

### Static Export / Deployment
Deploy directly to Vercel, Netlify, or any static hosting platform.
