export const projectCategories = ["All", "Business", "E-commerce", "Shopify", "React", "Full Stack"];

export const projects = [
  {
    id: "power-house-gym",
    title: "Power House Gym",
    category: "Business",
    secondaryCategory: "React",
    tagline: "Modern interactive gym web app with batch programs & membership pricing",
    description: "A modern, fully responsive, animation-rich frontend web application for Power House Gym in Jetpur. Features specialized programs for Men, Women & Kids, interactive class booking modals, animated stat counters, monthly/yearly membership price toggle, category-filtered photo gallery with Lightbox, and live location details.",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "React Router"],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80",
    liveDemo: "https://powerhousegym-seven.vercel.app/",
    sourceCode: "https://github.com/AvsarSuvagiyaCelvion/Gym_portfolio",
    featured: true,
    isComingSoon: false,
    stats: {
      speed: "0.8s load",
      lighthouse: "99/100",
      features: "Batches & Pricing Toggle"
    }
  },
  {
    id: "taste-junction",
    title: "Taste Junction Restaurant",
    category: "Business",
    secondaryCategory: "Full Stack",
    tagline: "Restaurant website with interactive food menu & table reservation",
    description: "A premium and fully responsive restaurant website featuring an interactive food menu, online table reservation, and dynamic user experience. Built with modern full-stack technologies ensuring fast booking and customer engagement.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80",
    liveDemo: "https://taste-junction-iota.vercel.app/",
    sourceCode: "https://github.com/AvsarSuvagiyaCelvion",
    featured: true,
    isComingSoon: false,
    stats: {
      speed: "0.9s load",
      lighthouse: "98/100",
      leads: "Table Reservations"
    }
  },
  {
    id: "rudra-gold",
    title: "Rudra Gold Luxury Jewelry",
    category: "E-commerce",
    secondaryCategory: "Shopify",
    tagline: "Premium Shopify jewelry store with custom collections & secure checkout",
    description: "A premium Shopify-based e-commerce jewelry store showcasing exquisite jewelry designs with collections, detailed descriptions, custom product pages, and a secure shopping experience.",
    tech: ["Shopify", "Liquid", "HTML5", "CSS3", "JavaScript"],
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&q=80",
    liveDemo: "https://rudra-gold-3kqg5mzn.myshopify.com/",
    sourceCode: "https://github.com/AvsarSuvagiyaCelvion",
    featured: true,
    isComingSoon: false,
    stats: {
      platform: "Shopify Store",
      speed: "Fast Storefront",
      security: "100% Secure Checkout"
    }
  },
  {
    id: "luxury-perfume-store",
    title: "Luxury Perfume Store (The Rimzim Perfume)",
    category: "E-commerce",
    secondaryCategory: "Shopify",
    tagline: "High-end fragrance boutique eCommerce store with luxury aesthetics",
    description: "A modern Shopify-based eCommerce website for selling premium perfumes with an ultra-sleek responsive luxury design, secure checkout, curated fragrance notes & collections, customer reviews, and an optimized conversion funnel.",
    tech: ["Shopify", "Liquid", "E-commerce", "Tailwind UI", "Brand Identity"],
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1000&q=80",
    liveDemo: "https://therimzimperfume.com",
    sourceCode: "https://github.com/AvsarSuvagiyaCelvion",
    featured: true,
    isComingSoon: true, // Marked as Coming Soon per client request
    stats: {
      status: "Coming Soon",
      design: "Luxury Aesthetic",
      type: "Perfume Brand Store"
    }
  },
  {
    id: "financial-tracker",
    title: "Financial Tracker App",
    category: "React",
    secondaryCategory: "Full Stack",
    tagline: "Personal finance tracker with budget goals & visual analytics charts",
    description: "A personal finance management application with income/expense tracking, budget goals, visual analytics charts, export to CSV, and multi-currency support for effortless budget planning.",
    tech: ["React", "Bootstrap", "Chart.js", "Local Storage"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    liveDemo: "https://expense-tracker-khaki-psi-42.vercel.app/",
    sourceCode: "https://github.com/AvsarSuvagiyaCelvion",
    featured: false,
    isComingSoon: false,
    stats: {
      speed: "0.6s load",
      charts: "Visual Analytics",
      tools: "Export to CSV"
    }
  },
  {
    id: "avsar-developer-portfolio",
    title: "Developer Portfolio & Showcase",
    category: "React",
    secondaryCategory: "Business",
    tagline: "Interactive developer portfolio with animated UI & skill matrices",
    description: "High-performance personal brand and portfolio showcasing custom frontend design, animated project galleries, client services, and contact workflow.",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    liveDemo: "https://avsar-portfolio.vercel.app/",
    sourceCode: "https://github.com/AvsarSuvagiyaCelvion",
    featured: false,
    isComingSoon: false,
    stats: {
      speed: "0.7s load",
      lighthouse: "99/100",
      experience: "Creative UI/UX"
    }
  }
];
