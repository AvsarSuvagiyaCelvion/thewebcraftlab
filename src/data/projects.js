export const projectCategories = ["All", "Business", "Portfolio", "E-commerce", "Landing Page"];

export const projects = [
  {
    id: "apex-architects",
    title: "Apex Architectural Studio",
    category: "Business",
    tagline: "Minimalist portfolio & inquiry system for a luxury architectural firm",
    description: "A fast, editorial-style website featuring blueprint project showcases, interactive project galleries, and automated consultation scheduling.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    liveDemo: "https://example.com/demo/apex",
    sourceCode: "https://github.com/thewebcraftlab/apex-architecture",
    featured: true,
    stats: {
      speed: "0.8s load",
      lighthouse: "99/100",
      leads: "+45% Inquiries"
    }
  },
  {
    id: "aura-skincare",
    title: "Aura Botanicals Store",
    category: "E-commerce",
    tagline: "Organic skincare brand storefront with instant cart and checkout",
    description: "High-performance direct-to-consumer store with responsive product galleries, real-time cart drawer, customer reviews, and payment checkout integration.",
    tech: ["React", "Tailwind CSS", "Stripe API", "Lucide React"],
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=80",
    liveDemo: "https://example.com/demo/aura",
    sourceCode: "https://github.com/thewebcraftlab/aura-botanicals",
    featured: true,
    stats: {
      speed: "1.1s load",
      lighthouse: "96/100",
      conversion: "3.8% CVR"
    }
  },
  {
    id: "saas-flow-landing",
    title: "MetricsFlow Analytics",
    category: "Landing Page",
    tagline: "Conversion-optimized SaaS launch page with dynamic pricing calculator",
    description: "Sleek dark-mode landing page built for a B2B SaaS startup with interactive feature tours, dynamic ROI calculator, and newsletter capture.",
    tech: ["React", "Tailwind CSS", "Chart.js", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    liveDemo: "https://example.com/demo/metricsflow",
    sourceCode: "https://github.com/thewebcraftlab/metricsflow-landing",
    featured: true,
    stats: {
      speed: "0.6s load",
      lighthouse: "100/100",
      signups: "2.4k Early Leads"
    }
  },
  {
    id: "artisanal-cafe",
    title: "Roast & Root Specialty Cafe",
    category: "Business",
    tagline: "Local artisanal cafe website with live menu and table booking",
    description: "Engaging local business website featuring interactive digital menu, Instagram feed sync, Google Maps integration, and direct WhatsApp / Form ordering.",
    tech: ["React", "Tailwind CSS", "Vite", "SEO Schema"],
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80",
    liveDemo: "https://example.com/demo/roast-root",
    sourceCode: "https://github.com/thewebcraftlab/roast-and-root",
    featured: false,
    stats: {
      speed: "0.9s load",
      lighthouse: "98/100",
      footfall: "+60% Local Reach"
    }
  },
  {
    id: "elena-creative-portfolio",
    title: "Elena Vance | Brand Designer",
    category: "Portfolio",
    tagline: "Immersive visual portfolio for an award-winning brand identity designer",
    description: "Smooth horizontal-scrolling case study galleries, cursor hover animations, custom case study sliders, and one-click contact modal.",
    tech: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80",
    liveDemo: "https://example.com/demo/elena-portfolio",
    sourceCode: "https://github.com/thewebcraftlab/elena-portfolio",
    featured: false,
    stats: {
      speed: "0.7s load",
      lighthouse: "99/100",
      awards: "Featured on Behance"
    }
  },
  {
    id: "fitpulse-gym",
    title: "FitPulse Fitness Studio",
    category: "Business",
    tagline: "Membership portal & schedule finder for a boutique fitness center",
    description: "High-energy, mobile-first website for a premium gym with class filter schedule, trainer profiles, virtual tour, and trial pass booking form.",
    tech: ["React", "Tailwind CSS", "Lucide Icons", "Vite"],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80",
    liveDemo: "https://example.com/demo/fitpulse",
    sourceCode: "https://github.com/thewebcraftlab/fitpulse-studio",
    featured: false,
    stats: {
      speed: "0.8s load",
      lighthouse: "97/100",
      trials: "+80 Trial Bookings"
    }
  }
];
