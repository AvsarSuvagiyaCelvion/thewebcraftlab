export const projectCategories = ["All", "Business", "E-commerce", "Shopify", "React", "Full Stack"];

// Client projects crafted by The WebCraft Lab
export const projects = [
  {
    id: "power-house-gym",
    title: "Power House Gym",
    category: "Business",
    secondaryCategory: "React",
    tagline: "Modern interactive gym web app with batch programs & membership pricing",
    description: "A modern, fully responsive, animation-rich frontend web application for a premier fitness gym. Features specialized programs for Men, Women & Kids, interactive class booking modals, animated stat counters, monthly/yearly membership price toggle, category-filtered photo gallery with Lightbox, and interactive schedules.",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "React Router"],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80",
    liveDemo: "https://powerhousegym-seven.vercel.app/",
    featured: true,
    isComingSoon: false,
    stats: {
      location: "Client Project",
      tech: "React 18 + Vite",
      type: "Fitness Business"
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
    featured: true,
    isComingSoon: false,
    stats: {
      type: "Restaurant & Dining",
      features: "Online Table Booking",
      stack: "MERN Stack"
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
    featured: true,
    isComingSoon: true,
    stats: {
      status: "Coming Soon 🚀",
      platform: "Shopify E-Commerce",
      category: "Luxury Perfumes"
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
    featured: false,
    isComingSoon: false,
    stats: {
      type: "Web Application",
      analytics: "Visual Charts",
      tools: "CSV Export"
    }
  }
];
