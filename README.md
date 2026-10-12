# Badigineni Yogesh — Editorial Copywriting Portfolio

A high-performance, mobile-responsive, editorial-style copywriting portfolio website built with semantic HTML5, modern Vanilla CSS, and lightweight JavaScript. Designed specifically to present the copywriting craft of **Badigineni Yogesh** to prospective clients, marketing directors, recruiters, and e-commerce founders.

**Live Website URL:** [https://yogesh-badigineni.github.io/copywriting-portfolio/](https://yogesh-badigineni.github.io/copywriting-portfolio/)  
**Author:** Badigineni Yogesh  
**Email:** [badigineniyogesh@gmail.com](mailto:badigineniyogesh@gmail.com)  
**LinkedIn:** [https://www.linkedin.com/in/badigineni-yogesh](https://www.linkedin.com/in/badigineni-yogesh)  
**Repository:** [https://github.com/Yogesh-Badigineni/copywriting-portfolio](https://github.com/Yogesh-Badigineni/copywriting-portfolio)

---

## 1. What’s Included in This Portfolio

This website features **17 original, production-ready copywriting samples** across 10 industry verticals and 3 core formats:

### A. 10 Social Media Captions (10 Industries)
1. **Fashion & Lifestyle:** Minimalist Capsule Wardrobe (Instagram Carousel)
2. **Personal Care:** Skin Barrier Recovery (Instagram / TikTok)
3. **Food & Beverages:** Single-Origin Yirgacheffe Coffee (Instagram Feed)
4. **Technology (B2B SaaS):** Asynchronous Team Workflows (LinkedIn)
5. **Fitness & Wellness:** Sustainable Daily Habits vs. Burnout (Instagram Post)
6. **Travel & Hospitality:** Off-Grid Highland Forest Cabins (Instagram & Pinterest)
7. **Sustainable Products:** Zero-Waste Forever Refill System (Instagram & Facebook)
8. **Education / EdTech:** Data for Decision-Makers Live Cohort (LinkedIn & Twitter/X)
9. **Home & Lifestyle:** The Art of Warm Minimalist Interiors (Pinterest & Instagram)
10. **Small Businesses:** Local Artisan Sourdough Bakery (Instagram & Facebook)

*Every social sample includes: Industry, Platform, Target Audience, Marketing Objective, Full Caption, Call to Action, and Relevant Hashtags.*

### B. 5 E-Commerce Product Descriptions (50–80 Words Each)
1. **The Terran 24oz Insulated Flask** (Drinkware) — 66 words
2. **The Atelier Heavyweight 16oz Organic Canvas Tote** (Accessories) — 62 words
3. **Nocturne No. 4: Smoked Birch & Amber Soy Wax Candle** (Home Fragrance) — 60 words
4. **Aura Pebble: Compact 360° Waterproof Bluetooth Speaker** (Audio Gear) — 66 words
5. **Dew Barrier: Ceramides & Marshmallow Root Daily Cloud Cream** (Skincare) — 63 words

*Every product sample includes: Title, Target Audience, Exact word-count badge, 50–80 word sensory description, 4 feature/benefit bullets, Call to action, and an expandable Writing Strategy rationale.*

### C. 2 Promotional Marketing Email Campaigns
1. **New Product Launch:** The AeroForm Ergonomic Task Chair (VIP Early Access + 15% discount)
2. **Special Promotional Offer:** Annual Glow Essentials 25% Flash Re-engagement Bundle

*Every email sample includes: Campaign Objective, Target Audience, 3 tested Subject Line options, Preview Text, Greeting, Full Email Body, Call to Action button, and Sign-off.*

---

## 2. Design & User Experience Features

- **Editorial Aesthetic:** Warm cream backgrounds (`#FAF7F2`), crisp white cards, rich charcoal ink text (`#1C1C1E`), and warm burnt terracotta accents (`#B84A29`).
- **Typography:** Google Fonts `Newsreader` (high-contrast editorial serif) paired with `Plus Jakarta Sans` (ultra-legible modern sans) and `JetBrains Mono` for metadata tags.
- **Interactive Controls:**
  - Category filter tabs (All, Social, Products, Emails).
  - Real-time search/keyword filter across all 17 samples.
  - One-click "Copy to Clipboard" button on every card with floating toast notifications.
  - Interactive email subject line switcher.
  - Expandable "Writing Strategy" accordions on product cards.
  - Dark Mode / Light Mode toggle with automatic `localStorage` persistence and system preference detection.
  - Mobile navigation drawer and back-to-top button.
  - Custom branded 404 page (`404.html`).

---

## 3. SEO Implementation Overview

| Technical Element | Implementation Details |
| :--- | :--- |
| **Title Tag** | `Badigineni Yogesh \| Copywriter Creating Clear, Engaging, Customer-Focused Content` |
| **Meta Description** | Compelling, non-keyword-stuffed description optimized for SERP click-through rates. |
| **Heading Structure** | Strict semantic hierarchy: exactly one `<h1>`, followed by logical `<h2>` and `<h3>` tags. |
| **Structured Data** | Valid Schema.org `application/ld+json` with `WebSite`, `Person` (Badigineni Yogesh), and `ItemList` (17 items). |
| **Canonical Tag** | Points to verified production URL: `https://yogesh-badigineni.github.io/copywriting-portfolio/`. |
| **Robots.txt** | Clean crawling permissions with direct sitemap index directive. |
| **XML Sitemap** | `/sitemap.xml` listing core sections with priority scores and change frequencies. |
| **Social Graph** | Complete Open Graph (`og:*`) and Twitter Card (`twitter:*`) tags with branded preview banner. |
| **Indexability** | No accidental `noindex` on public pages; fast static HTML delivery without client-side hydration delays. |

---

## 4. Google Search Console: Step-by-Step Guide

Follow these steps to submit your deployed website to Google:

### Step 1: Open Google Search Console
1. Visit [https://search.google.com/search-console](https://search.google.com/search-console).
2. Sign in with your Google account (`badigineniyogesh@gmail.com`).

### Step 2: Add Your Property
1. Click **Add Property** in the left sidebar dropdown.
2. Under **URL prefix**, enter your live URL:
   ```
   https://yogesh-badigineni.github.io/copywriting-portfolio/
   ```
3. Click **Continue**.

### Step 3: Verify Ownership
Choose one of the following methods:
- **HTML Tag Method (Easiest):**
  1. Google will give you a meta tag like `<meta name="google-site-verification" content="XYZ..." />`.
  2. Paste this tag into the `<head>` of your `index.html`.
  3. Commit and push the change to GitHub.
  4. Return to Google Search Console and click **Verify**.
- **HTML File Upload Method:**
  1. Download the `google[id].html` verification file from Google.
  2. Place it in the root folder of this repository, commit, and push.
  3. Click **Verify**.

### Step 4: Submit Your XML Sitemap
1. In Search Console, click **Sitemaps** in the left menu.
2. In the "Add a new sitemap" input, enter:
   ```
   sitemap.xml
   ```
3. Click **Submit**. You will see a "Success" status once Google processes the file.

### Step 5: Request Indexing for the Homepage
1. Use the **URL Inspection** bar at the very top of Search Console.
2. Paste: `https://yogesh-badigineni.github.io/copywriting-portfolio/`
3. Click **Test Live URL** to confirm Googlebot can fetch the page without errors.
4. Click **Request Indexing**.

---

## 5. Contact Information

- **Name:** Badigineni Yogesh
- **Email:** [badigineniyogesh@gmail.com](mailto:badigineniyogesh@gmail.com)
- **LinkedIn:** [https://www.linkedin.com/in/badigineni-yogesh](https://www.linkedin.com/in/badigineni-yogesh)
- **Live Portfolio:** [https://yogesh-badigineni.github.io/copywriting-portfolio/](https://yogesh-badigineni.github.io/copywriting-portfolio/)
