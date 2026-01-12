import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TimelineItem {
  id: string;
  year: string;
  label: string;
}

const timelineItems: TimelineItem[] = [
  { id: "present", year: "2025", label: "Product Management" },
  { id: "mba", year: "2024-26", label: "MBA Journey" },
  { id: "blockchain-lead", year: "2024", label: "Blockchain Leadership" },
  { id: "blockchain-dev", year: "2022-23", label: "Developer Foundations" },
  { id: "education", year: "2019-23", label: "Education" },
  { id: "personal", year: "Beyond", label: "Personal" },
];

const TimelineNav = () => {
  const [activeSection, setActiveSection] = useState("present");
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setIsVisible(window.scrollY > heroBottom - 100);
      }

      // Calculate scroll progress
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / scrollHeight) * 100;
      setScrollProgress(progress);

      // Determine active section
      timelineItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(item.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 glass-strong"
    >
      {/* Progress bar */}
      <div className="absolute top-0 left-0 h-0.5 bg-primary/20 w-full">
        <motion.div 
          className="h-full bg-gradient-to-r from-primary to-secondary"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.span 
            className="font-display font-bold text-xl text-gradient hidden md:block"
            whileHover={{ scale: 1.05 }}
          >
            SV
          </motion.span>

          <div className="flex items-center gap-1 md:gap-2 overflow-x-auto scrollbar-hide mx-auto md:mx-0">
            {timelineItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative flex flex-col items-center px-3 py-2 rounded-lg transition-all duration-300 group whitespace-nowrap ${
                  activeSection === item.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {/* Connection line */}
                {index < timelineItems.length - 1 && (
                  <div className="absolute top-1/2 -right-1 md:-right-1 w-2 md:w-2 h-px bg-border" />
                )}
                
                {/* Node */}
                <div
                  className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-primary border-primary scale-125"
                      : "bg-transparent border-muted-foreground group-hover:border-primary"
                  }`}
                />
                
                {/* Label */}
                <span className="text-xs font-medium mt-1 hidden md:block">{item.year}</span>
                <span className="text-[10px] text-muted-foreground hidden lg:block">{item.label}</span>
              </button>
            ))}
          </div>

          <button className="hidden md:block text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Contact
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default TimelineNav;
