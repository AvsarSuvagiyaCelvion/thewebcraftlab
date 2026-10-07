export const siteConfig = {
  brandName: "The WebCraft Lab",
  shortName: "WebCraft",
  tagline: "We craft fast, modern websites that bring you clients.",
  subTagline: "Helping small businesses, startups, and local brands build high-impact digital experiences that drive real revenue.",
  
  // Strictly NO phone number as required
  email: "thewebcraftlab@gmail.com",
  location: {
    city: "Remote",
    state: "Global",
    country: "Worldwide",
    display: "Remote / Worldwide Studio"
  },
  
  socials: {
    instagram: {
      url: "https://instagram.com/thewebcraftlab",
      handle: "@thewebcraftlab",
      label: "Instagram"
    }
  },

  navLinks: [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#projects" },
    { name: "Process", href: "#process" },
    { name: "Why Us", href: "#why-us" },
    { name: "About", href: "#about" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" }
  ],

  stats: [
    { label: "Client Satisfaction", value: "100%", sub: "Tailored to your goals" },
    { label: "Performance Score", value: "95+", sub: "Google Lighthouse standard" },
    { label: "Fast Delivery", value: "7-14 Days", sub: "Standard project turn-around" },
    { label: "Support Included", value: "30 Days", sub: "Free post-launch warranty" }
  ]
};

// 🚀 Automatic Launch Date: Sunday, 10:00 PM IST (Auto-launches without manual effort)
export const getTargetLaunchDate = () => {
  const target = new Date("2026-10-11T22:00:00+05:30");
  if (isNaN(target.getTime())) {
    const now = new Date();
    const fallback = new Date();
    const daysUntilSunday = (7 - now.getDay()) % 7;
    fallback.setDate(now.getDate() + daysUntilSunday);
    fallback.setHours(22, 0, 0, 0);
    return fallback;
  }
  return target;
};

export const isWebsiteOfficiallyLaunched = () => {
  const target = getTargetLaunchDate();
  return new Date().getTime() >= target.getTime();
};
