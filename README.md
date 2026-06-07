# 🏥 Eldoo Care — First & Last Mile Elder Care Bridge

Eldoo Care is a premium web application designed to support NRI families by providing a trusted care bridge for their ageing parents in India. From medical hospital escorts to daily home care, Eldoo puts a dedicated care team on the ground, delivering clinical professionalism and genuine human warmth.

---

## 🌟 Key Features & Site Pages

### 1. Home Page
* **Hero Section:** Features a prominent booking call-to-action (CTA) with active quick statistics (100+ families served, 9 cities, 24/7 availability) and WhatsApp chat integration.
* **Eldoo Intro:** A high-level value proposition section anchoring brand trust for remote children looking after their parents.
* **Trust Markers:** Highlights key reassuring conversion elements: *Verified & Trained, Full Transparency, Flexible with No Lock-in, and Built for NRI Families*.
* **Onboarding Timeline:** An interactive 4-step day-based onboarding roadmap outlining how families get started.
* **Verified Trust & Testimonials:** Displays verified customer social proof from NRI children alongside custom testimonials and instant CTA buttons.
* **Coverage Matrix:** Showcases active service badges for the 9 cities served across South India (*Bengaluru, Chennai, Madurai, Coimbatore, Tiruppur, Hosur, Tirunelveli, Thoothukudi, Nagercoil*).

### 2. Plans & Pricing Page
* **Pricing Hero:** Clear framing around Indian family needs ("Plans Built for Indian Families").
* **Subscription Tiers:** Three structured monthly subscription packages designed to scale:
  * **Companion Plan** (₹3,999/month, saves ₹7,200/yr) - Wellness calls, medication reminders, escort trips.
  * **Caregiver Plan** (₹8,999/month, saves ₹16,200/yr, *Most Popular*) - Daily calls, vitals monitoring, 4 hrs/day caregiver, nurse visit.
  * **Guardian Plan** (₹17,999/month, saves ₹32,400/yr) - Daily vitals tracking, priority care manager, 8 hrs/day caregiver, nurse visits.
* **Individual Services:** Support for one-off needs through 6 dedicated, standalone cards:
  * *Medical Escort, Pharmacy & Errand Run, Caregiver Visit, Long-term Caregiver Support, Home Nurse Visit, Doctor Home Visit*.
* **Our Promises to You:** Numbered guarantee cards focusing on caregiver profile validation, immediate visit reporting, 24/7 coordinator availability, 48-hour caregiver replacement, and no surprise billing.
* **FAQ Accordion:** Interactive expand/collapse FAQ resolving customer objections (payment, contract details, medical emergencies, updates, fit issues).

### 3. Book Now Page
* **Query-Based Pre-selection:** Links throughout the application redirect to `/book?service=service_id` to dynamically pre-fill the requested service in the form dropdown.
* **Contact Options:** Dual booking channels via a secure form or direct WhatsApp instant messaging.
* **Instant Callback:** Formspree API integration that emails submissions directly to admins for quick response callbacks.
* **Success Modal:** Confirms booking details dynamically after submission.

### 4. About Us Page
* **Our Story:** Detail on the founding mission of CEO Omprakash to bridge the distance in elder care.
* **Company Milestones:** Displays growth trajectory (Phase 1, 2, and 3 targets for families, cities, and hours of care).

---

## 💻 Technical & Styling Stack
* **Framework:** React 19 (Functional Components)
* **Build Tooling:** Vite, TypeScript
* **Routing:** React Router v7 (`BrowserRouter`)
* **Styling System:** Vanilla CSS (using layout tokens, root variables, transitions, and customized keyframes in `App.css`)
* **API Integration:** Formspree (for form submission email capture)
* **Fonts & Icons:** Google Fonts (Inter & Poppins) and FontAwesome

---

## 📁 Directory Structure
```
├── dist/                     # Production compiled bundle
├── public/                   # Static images and icons
└── src/
    ├── components/           # Reusable site layouts
    │   ├── Navigation.tsx    # Header navbar with active state
    │   └── Footer.tsx        # Standard footer with standardized services
    ├── pages/                # Page views and stylesheets
    │   ├── HomePage.tsx      # Landing page content
    │   ├── HomePage.css      # Brand-compliant clean keyframes & transitions
    │   ├── PlansPage.tsx     # Pricing list, Promises, and FAQ
    │   ├── PlansPage.css     # Clean subscription plan layout
    │   ├── BookNowPage.tsx   # Integrated query-based booking form
    │   └── AboutUsPage.tsx   # Mission, leadership, and numbers page
    ├── App.tsx               # Root component and main router configuration
    ├── App.css               # Design system values, colors, button styles
    ├── main.tsx              # React mounting entry point
    └── index.css             # Base resets and font family imports
```

---

## 🚀 Getting Started

### Installation
Install project dependencies:
```bash
npm install
```

### Run Local Development Server
Start the Vite dev server with hot module replacement:
```bash
npm run dev
```

### Build for Production
Compile TypeScript and bundle the frontend into static assets inside `dist/`:
```bash
npm run build
```

### Preview Production Build
Run a local web server serving the compiled static assets in `dist/`:
```bash
npm run preview
```
