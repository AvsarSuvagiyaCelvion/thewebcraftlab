# 🚀 The WebCraft Lab - Freelance Portfolio Website

> **"We craft fast, modern websites that bring you clients."**  
> A modern, lightning-fast, and fully responsive freelance portfolio website engineered with **React 18**, **Vite**, and **Tailwind CSS**.

---

## 💎 Brand Identity & Contact

- **Brand Name:** The WebCraft Lab
- **Tagline:** We craft fast, modern websites that bring you clients.
- **Location:** Surat, Gujarat, India
- **Email:** [thewebcraftlab@gmail.com](mailto:thewebcraftlab@gmail.com)
- **Instagram:** [@thewebcraftlab](https://instagram.com/thewebcraftlab) (`https://instagram.com/thewebcraftlab`)
- 🔒 **Privacy & Contact Policy:** Strictly via Email, Interactive Contact Form, and Instagram DM. No phone number is displayed.

---

## ⚡ Tech Stack

- **Core:** React 18, Vite
- **Styling:** Tailwind CSS (with custom dark/light theme, modern gradients, glassmorphism)
- **Icons:** `lucide-react`
- **Typography:** Poppins (Headings) + Inter (Body) via Google Fonts
- **SEO & Schema:** Semantic HTML5, Open Graph tags, JSON-LD `ProfessionalService` structured schema tailored for Surat, Gujarat, India.

---

## 📁 Project Structure

```text
thewebcraftlab/
├── public/
│   ├── favicon.svg             # Custom SVG brand favicon
│   ├── robots.txt              # SEO crawler directives
│   └── sitemap.xml             # Search engine sitemap
├── src/
│   ├── main.jsx                # Application root mount
│   ├── App.jsx                 # Single-page layout assembly
│   ├── index.css               # Tailwind directives & design system utilities
│   ├── context/
│   │   └── ThemeContext.jsx    # Dark/Light theme state with localStorage persistence
│   ├── data/                   # 💡 Edit all website content easily here!
│   │   ├── siteConfig.js       # Brand, socials, stats, navigation links
│   │   ├── services.js         # 6 core services, features & tags
│   │   ├── projects.js         # Filterable portfolio projects & metrics
│   │   ├── process.js          # 4-step workflow (Discuss, Design, Develop, Deliver)
│   │   ├── whyChooseUs.js      # 6 key value propositions & perks
│   │   ├── skills.js           # Tech stack skills, developer story & core values
│   │   └── faqs.js             # Interactive FAQ accordion questions & answers
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.jsx          # Accessible button with multiple variants
│   │   │   ├── SectionHeading.jsx  # Consistent section header with badges
│   │   │   ├── Badge.jsx           # Tag and status pill
│   │   │   ├── GlowCard.jsx        # Glassmorphic card with gradient hover glow
│   │   │   └── Toast.jsx           # Animated floating notifications
│   │   ├── layout/
│   │   │   ├── Navbar.jsx          # Sticky navbar, scrollspy, theme toggle & mobile menu
│   │   │   ├── Footer.jsx          # Brand details, quick links & Surat location
│   │   │   ├── FloatingInstagram.jsx # Floating "Chat on Instagram" sticky button
│   │   │   └── ScrollToTop.jsx     # Floating scroll-to-top button
│   │   └── ui/
│   │       ├── CodeMockup.jsx      # Interactive code/mockup terminal for Hero
│   │       ├── ProjectModal.jsx    # Detailed project modal with live demo links
│   │       └── ThemeToggle.jsx     # Dark/Light switch button
│   └── sections/
│       ├── HeroSection.jsx         # Hero with strong headline & CTAs
│       ├── ServicesSection.jsx     # 6 services cards with checklists
│       ├── ProjectsSection.jsx     # Filterable project gallery
│       ├── ProcessSection.jsx      # 4-step roadmap
│       ├── WhyChooseSection.jsx    # 6 feature cards
│       ├── AboutSection.jsx        # Developer intro & tech stack grid
│       ├── FaqSection.jsx          # Interactive accordion FAQ
│       ├── ContactSection.jsx      # Validated quote inquiry form
│       └── NotFoundSection.jsx     # 404 page fallback
├── .env.example
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 🛠️ Quick Start & Local Development

### 1. Install Dependencies
Make sure you have Node.js (v18+) installed:
```bash
npm install
```

### 2. Run Local Dev Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000` (or the URL printed in the terminal).

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## ✏️ How to Easily Edit Website Content

All dynamic content is organized in clean JavaScript data files inside `src/data/`:

| File | What you can edit |
|------|-------------------|
| `src/data/siteConfig.js` | Brand name, email, location, Instagram link, nav links, hero stats. |
| `src/data/services.js` | Service names, descriptions, bullet checklists, and "Popular" tags. |
| `src/data/projects.js` | Project titles, images, categories, tags, live demo URLs, and GitHub links. |
| `src/data/process.js` | Steps (Discuss, Design, Develop, Deliver), timelines, deliverables. |
| `src/data/whyChooseUs.js` | 6 reasons to choose your services. |
| `src/data/skills.js` | About bio paragraphs, tech stack badges, proficiency levels. |
| `src/data/faqs.js` | FAQ questions and answers. |

---

## 📬 Setting up Form Submissions (Formspree or EmailJS)

### Option 1: Formspree (Recommended)
1. Go to [formspree.io](https://formspree.io) and create a free account.
2. Create a new form and copy your Form ID (e.g. `xpzgklow`).
3. Create a `.env` file in the project root:
   ```env
   VITE_FORMSPREE_ID=your_formspree_form_id
   ```
4. Restart your Vite dev server (`npm run dev`).

*Note:* If no `.env` is provided, the form automatically falls back to an elegant simulated submission with user feedback and prompt to email `thewebcraftlab@gmail.com`.

---

## 🚀 Deploying to Production

### Deploying to Vercel
1. Push this project to GitHub.
2. Log into [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset: **Vite**
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. (Optional) Add your `VITE_FORMSPREE_ID` environment variable in the Vercel dashboard.
8. Click **Deploy**!

### Deploying to Netlify
1. Log into [Netlify](https://www.netlify.com).
2. Choose **"Import from Git"**.
3. Set Build command to `npm run build` and Publish directory to `dist`.
4. Click **Deploy site**.

---

## 📱 Responsive & Accessibility Standards

- **Breakpoints Tested:** `320px` (iPhone SE), `375px`, `768px` (iPad), `1024px`, `1280px`, `1536px+` (4K Displays).
- **Touch Friendly:** All interactive buttons and navigation links have a minimum touch target of `44px`.
- **Keyboard Navigation:** Visible focus rings (`:focus-visible`) and proper ARIA labels.
- **Prefers Reduced Motion:** Built-in CSS media query support to automatically disable animations for users with motion sensitivity.
- **Theme Support:** Dark mode by default with light/dark toggle and persistent storage in `localStorage`.

---

© 2026 **The WebCraft Lab**. Crafted in Surat, Gujarat, India.
