

# Triveda Technologies — Corporate Website

## Overview
A modern, enterprise-grade corporate website for **Triveda Technologies** — a technology consulting and digital transformation company. Single-page app with React, featuring a premium dark/white theme with blue-purple gradient accents, inspired by top-tier consulting firms like Accenture and Deloitte.

---

## Pages

### 1. Homepage
- **Hero Section** — Full-width with "TRIVEDA" watermark in the background (low opacity). Company name, tagline *"Engineering Intelligent Digital Ecosystems"*, brief description, and two CTA buttons: "Our Services" and "Contact Us"
- **About Section** — Professional corporate overview paragraph establishing credibility and vision
- **Services Overview** — 6 high-level service cards with icons, short descriptions, and hover elevation effects. Each card links to the dedicated Services page. Categories shown:
  1. Technology & Digital Solutions
  2. End-to-End Project Implementation
  3. AI, Data & Advanced Analytics
  4. Digital Marketing & Growth Solutions
  5. Rewards, Loyalty & Engagement Platforms
  6. Customer Experience Transformation
- **Contact Section** — Contact form (details below) embedded at the bottom of the homepage

### 2. Services Page
A dedicated page with all **7 service categories** (including Consulting & Strategy) displayed in organized sections. Each category shows its full list of sub-services in a clean card/list layout with icons.

### 3. Contact Page (optional standalone access)
Same contact form accessible from the homepage, also reachable via navigation.

---

## Contact Form
**Fields:** Name (optional), Mobile Number (required), Email (required), Message (required)

**Behavior:**
- Client-side validation (email format, required fields, proper error messages)
- On submit: sends email to both `sales@trivedatechnologies.com` and `sales@trivedatechnologies.in`
- Uses **EmailJS** (client-side email service — no backend needed)
- Loading spinner during submission
- Success toast notification, form clears, no page reload

> **Note:** EmailJS requires a free account setup and a public key. We'll integrate the code and guide you through connecting your EmailJS account with your email addresses.

---

## Design & UX
- **Theme:** Premium dark sections alternating with white, blue-purple gradient accents
- **Typography:** Google Font — Inter or Poppins for a modern corporate feel
- **Icons:** Lucide icons (already available in the project)
- **Animations:** Smooth scroll, fade-in on scroll, hover elevation on cards
- **Responsive:** Fully optimized for mobile, tablet, and desktop
- **Navigation:** Clean top navbar with company name/logo placeholder, smooth scroll links on homepage, page links for Services

---

## Technical Notes
- Pure frontend — no backend or database needed
- Built with React + Tailwind CSS (project's existing stack)
- SEO meta tags included
- Ready to publish via Lovable's built-in hosting or export to GitHub Pages

